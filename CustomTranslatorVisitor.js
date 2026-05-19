import LanguageVisitor from "./generated/LanguageVisitor.js";

class TraductorVisitor extends LanguageVisitor {
    visitProg(ctx) {
        let resultado = '';

        for (let cmd of ctx.command()) {
            resultado += this.visit(cmd) + '\n';
        }

        return resultado;
    }

    visitCommand(ctx) {
        const nombreComando =
            ctx.commandname().getText();

        const argumentos = [];

        const opciones = {};

        for (let arg of ctx.argument()) {

            if (arg.argumentpos()) {
                argumentos.push(
                    arg.argumentpos().getText()
                        .replace(/['"]/g, '')
                );
            }

            if (arg.argumentop()) {

                const nombre =
                    arg.argumentop()
                        .argumentname()
                        .getText();

                const valorCtx =
                    arg.argumentop()
                        .argumentvalue();

                const valor =
                    valorCtx
                        ? valorCtx.getText()
                        : true;

                opciones[nombre] = valor;
            }
        }

         
        return `function ${nombreComando}(${argumentos.map((arg, i) => `nombre${i ? i : ''}` ).join(', ')}) {
            console.log("Hola", ${argumentos.map((arg, i) => `nombre${i ? i : ''}` ).join(' + ')});
        }
        
        ${nombreComando}(${argumentos.map((arg) => `"${arg}"`).join(", ")});
        `
    }
}

export default TraductorVisitor