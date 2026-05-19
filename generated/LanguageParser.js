// Generated from d:/UTN/2do/SSLP/52567/Language.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LanguageListener from './LanguageListener.js';
import LanguageVisitor from './LanguageVisitor.js';

const serializedATN = [4,1,12,61,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
1,1,1,1,5,1,29,8,1,10,1,12,1,32,9,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,3,4,41,8,
4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,3,6,50,8,6,1,6,1,6,1,6,3,6,55,8,6,1,7,1,7,
1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,2,2,0,1,3,8,8,1,0,4,6,56,0,19,
1,0,0,0,2,25,1,0,0,0,4,33,1,0,0,0,6,35,1,0,0,0,8,40,1,0,0,0,10,42,1,0,0,
0,12,54,1,0,0,0,14,56,1,0,0,0,16,58,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,
20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,0,0,1,24,
1,1,0,0,0,25,26,3,4,2,0,26,30,3,6,3,0,27,29,3,8,4,0,28,27,1,0,0,0,29,32,
1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,3,1,0,0,0,32,30,1,0,0,0,33,34,7,0,
0,0,34,5,1,0,0,0,35,36,5,5,0,0,36,7,1,0,0,0,37,38,5,9,0,0,38,41,3,10,5,0,
39,41,3,12,6,0,40,37,1,0,0,0,40,39,1,0,0,0,41,9,1,0,0,0,42,43,7,1,0,0,43,
11,1,0,0,0,44,45,5,10,0,0,45,46,5,10,0,0,46,49,3,14,7,0,47,48,5,11,0,0,48,
50,3,16,8,0,49,47,1,0,0,0,49,50,1,0,0,0,50,55,1,0,0,0,51,52,5,10,0,0,52,
53,5,7,0,0,53,55,3,16,8,0,54,44,1,0,0,0,54,51,1,0,0,0,55,13,1,0,0,0,56,57,
5,5,0,0,57,15,1,0,0,0,58,59,7,1,0,0,59,17,1,0,0,0,5,21,30,40,49,54];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LanguageParser extends antlr4.Parser {

    static grammarFileName = "Language.g4";
    static literalNames = [ null, "'/'", "'#'", "'&'", null, null, null, 
                            null, "'!'", "'@'", "'-'", "'='" ];
    static symbolicNames = [ null, null, null, null, "TEXTO", "PALABRA", 
                             "NUMERO", "LETRA", "OPFUNC", "OPVAL", "OPARG", 
                             "OPASSIGN", "WS" ];
    static ruleNames = [ "prog", "command", "prefixcommand", "commandname", 
                         "argument", "argumentpos", "argumentop", "argumentname", 
                         "argumentvalue" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LanguageParser.ruleNames;
        this.literalNames = LanguageParser.literalNames;
        this.symbolicNames = LanguageParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LanguageParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.command();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 270) !== 0));
	        this.state = 23;
	        this.match(LanguageParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LanguageParser.RULE_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.prefixcommand();
	        this.state = 26;
	        this.commandname();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9 || _la===10) {
	            this.state = 27;
	            this.argument();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefixcommand() {
	    let localctx = new PrefixcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LanguageParser.RULE_prefixcommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 270) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commandname() {
	    let localctx = new CommandnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LanguageParser.RULE_commandname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(LanguageParser.PALABRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LanguageParser.RULE_argument);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.match(LanguageParser.OPVAL);
	            this.state = 38;
	            this.argumentpos();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.argumentop();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentpos() {
	    let localctx = new ArgumentposContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LanguageParser.RULE_argumentpos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentop() {
	    let localctx = new ArgumentopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LanguageParser.RULE_argumentop);
	    var _la = 0;
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.match(LanguageParser.OPARG);
	            this.state = 45;
	            this.match(LanguageParser.OPARG);
	            this.state = 46;
	            this.argumentname();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11) {
	                this.state = 47;
	                this.match(LanguageParser.OPASSIGN);
	                this.state = 48;
	                this.argumentvalue();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.match(LanguageParser.OPARG);
	            this.state = 52;
	            this.match(LanguageParser.LETRA);
	            this.state = 53;
	            this.argumentvalue();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentname() {
	    let localctx = new ArgumentnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LanguageParser.RULE_argumentname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(LanguageParser.PALABRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentvalue() {
	    let localctx = new ArgumentvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LanguageParser.RULE_argumentvalue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LanguageParser.EOF = antlr4.Token.EOF;
LanguageParser.T__0 = 1;
LanguageParser.T__1 = 2;
LanguageParser.T__2 = 3;
LanguageParser.TEXTO = 4;
LanguageParser.PALABRA = 5;
LanguageParser.NUMERO = 6;
LanguageParser.LETRA = 7;
LanguageParser.OPFUNC = 8;
LanguageParser.OPVAL = 9;
LanguageParser.OPARG = 10;
LanguageParser.OPASSIGN = 11;
LanguageParser.WS = 12;

LanguageParser.RULE_prog = 0;
LanguageParser.RULE_command = 1;
LanguageParser.RULE_prefixcommand = 2;
LanguageParser.RULE_commandname = 3;
LanguageParser.RULE_argument = 4;
LanguageParser.RULE_argumentpos = 5;
LanguageParser.RULE_argumentop = 6;
LanguageParser.RULE_argumentname = 7;
LanguageParser.RULE_argumentvalue = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(LanguageParser.EOF, 0);
	};

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_command;
    }

	prefixcommand() {
	    return this.getTypedRuleContext(PrefixcommandContext,0);
	};

	commandname() {
	    return this.getTypedRuleContext(CommandnameContext,0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.exitCommand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrefixcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_prefixcommand;
    }

	OPFUNC() {
	    return this.getToken(LanguageParser.OPFUNC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.enterPrefixcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.exitPrefixcommand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitPrefixcommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_commandname;
    }

	PALABRA() {
	    return this.getToken(LanguageParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.enterCommandname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.exitCommandname(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitCommandname(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_argument;
    }

	OPVAL() {
	    return this.getToken(LanguageParser.OPVAL, 0);
	};

	argumentpos() {
	    return this.getTypedRuleContext(ArgumentposContext,0);
	};

	argumentop() {
	    return this.getTypedRuleContext(ArgumentopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.exitArgument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitArgument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentposContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_argumentpos;
    }

	TEXTO() {
	    return this.getToken(LanguageParser.TEXTO, 0);
	};

	PALABRA() {
	    return this.getToken(LanguageParser.PALABRA, 0);
	};

	NUMERO() {
	    return this.getToken(LanguageParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.enterArgumentpos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.exitArgumentpos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitArgumentpos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_argumentop;
    }

	OPARG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LanguageParser.OPARG);
	    } else {
	        return this.getToken(LanguageParser.OPARG, i);
	    }
	};


	argumentname() {
	    return this.getTypedRuleContext(ArgumentnameContext,0);
	};

	OPASSIGN() {
	    return this.getToken(LanguageParser.OPASSIGN, 0);
	};

	argumentvalue() {
	    return this.getTypedRuleContext(ArgumentvalueContext,0);
	};

	LETRA() {
	    return this.getToken(LanguageParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.enterArgumentop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.exitArgumentop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitArgumentop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_argumentname;
    }

	PALABRA() {
	    return this.getToken(LanguageParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.enterArgumentname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.exitArgumentname(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitArgumentname(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_argumentvalue;
    }

	TEXTO() {
	    return this.getToken(LanguageParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(LanguageParser.NUMERO, 0);
	};

	PALABRA() {
	    return this.getToken(LanguageParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.enterArgumentvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LanguageListener ) {
	        listener.exitArgumentvalue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitArgumentvalue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LanguageParser.ProgContext = ProgContext; 
LanguageParser.CommandContext = CommandContext; 
LanguageParser.PrefixcommandContext = PrefixcommandContext; 
LanguageParser.CommandnameContext = CommandnameContext; 
LanguageParser.ArgumentContext = ArgumentContext; 
LanguageParser.ArgumentposContext = ArgumentposContext; 
LanguageParser.ArgumentopContext = ArgumentopContext; 
LanguageParser.ArgumentnameContext = ArgumentnameContext; 
LanguageParser.ArgumentvalueContext = ArgumentvalueContext; 
