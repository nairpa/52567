import LanguageListener from "./generated/CalculatorListener.js";

export class CustomLanguageListener extends LanguageListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}