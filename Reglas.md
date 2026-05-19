# Reglas de la Gramática

grammar Language;

//Parser Rules
prog: command+ EOF;
command: prefixcommand commandname argument*;
prefixcommand:
    OPFUNC
    | '/'
    | '#'
    | '&'
    ;
commandname: PALABRA;
argument:
    OPVAL argumentpos
    | argumentop
    ;
argumentpos: 
    TEXTO
    | PALABRA
    | NUMERO
    ;
argumentop: OPARG OPARG argumentname (OPASSIGN argumentvalue)?
    | OPARG LETRA argumentvalue;
argumentname: PALABRA;
argumentvalue:
    TEXTO
    | NUMERO
    | PALABRA
    ;

TEXTO
    : '"'  ~["]* '"'
    | '\'' ~[']* '\''
    ;
PALABRA: [a-zA-ZáéíóúñÑ][a-zA-Z0-9áéíóúñÑ]*;
NUMERO: [0-9]+ ('.' [0-9]+)?;
LETRA: [a-zA-Z];
OPFUNC: '!';
OPVAL: '@';
OPARG: '-';
OPASSIGN: '=';
WS: [ \t\r\n]+ -> skip;