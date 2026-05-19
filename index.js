import LanguageLexer from "./generated/LanguageLexer.js";
import LanguageParser from "./generated/LanguageParser.js";
import CustomLanguageVisitor from "./CustomLanguageVisitor.js";
import CustomTranslatorVisitor from "./CustomTranslatorVisitor.js"
import antlr4, { CharStreams, CommonTokenStream, InputStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrónica.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("Missing input.txt file");
    }

    // Proceso la entrada con el analizador para obtener el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new LanguageLexer(inputStream);
    
    //Verificar si el lexer está generando tokens 
    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    //Mostrar la tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    // Recorrer todos los tokens generados por el lexer
    for (let token of tokens) {
        // Obtener el nombre simbólico del token
        const tokenType = LanguageLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text; // Obtener el lexema (texto del token)
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------"); 

    /* Vuelve a procesar la entrada, obtener el lexer, el código tokenizado y el parser 
     * Es necesario volver a procesar la entrada porque la función getAllTokens() consume
     * todos los tokens reconocidos y vacía el lexer. */
    inputStream = CharStreams.fromString(input);
    lexer = new LanguageLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new LanguageParser(tokenStream);
    let tree = parser.prog();

    // Verificar si se produjeron errores sintácticos
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        /* Utilizar un visitor para visitar los nodos que me interesan del árbol 
         * e implementar la semántica que nos interesa.*/
        const visitor = new CustomLanguageVisitor();
        visitor.visit(tree);
    }

    // Traducir de CustomLanguage a JavaScript
    console.log(translate(input));
}

function translate(input) {
    let inputStream = CharStreams.fromString(input);
    let lexer = new LanguageLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new LanguageParser(tokenStream);
    let tree = parser.prog();

    if (parser.syntaxErrorsCount > 0) { 
        return "\nSe encontraron errores de sintaxis en la entrada.";
    }

    const visitor = new CustomTranslatorVisitor();
    
    // Execute tree traversal for all statements
    return visitor.visit(tree);
}

// Ejecuta la función principal
main();
