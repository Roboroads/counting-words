import CountedToken from "./CountedToken";

export default class TextAnalyzer implements WordFrequencyAnalyzer {
    calculateFrequencyForWord(text: string, word: string): number {
        return this.tokenizeText(text)
            .filter((token) => token == word.toLowerCase())
            .length;
    }

    calculateHighestFrequency(text: string): number {
        return this.calculateMostFrequentNWords(text, 1)[0].getFrequency();
    }

    calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
        return this.calculateMostFrequentWords(text).slice(0, n);
    }

    calculateMostFrequentWords(text: string): WordFrequency[] {
        if(text.length < 1) {
            return [];
        }

        const tokenTally: TokenTally = {};

        this.tokenizeText(text)
            .forEach((token) => {
                if(tokenTally[token] == undefined) {
                    tokenTally[token] = 0;
                }

                tokenTally[token]++;
            });

        return Object.entries(tokenTally)
            .map((wordCount) => new CountedToken(...wordCount))
            .sort((a,b) => {
                const sortVertict = b.getFrequency() - a.getFrequency();
                if(sortVertict == 0) {
                    return a.getWord().localeCompare(b.getWord());
                }

                return sortVertict;
            });
    }

    tokenizeText(text: string): string[] {
        return text.toLowerCase().match(/[a-z]+/g);
    }
}