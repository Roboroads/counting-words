import type {WordFrequencyAnalyzer} from "../types/WordFrequencyAnalyzer";
import type {WordFrequency} from "../types/WordFrequency";
import {CountedToken} from "./CountedToken";

interface TokenTally {
    [key: string]: number
}

export class TextAnalyzer implements WordFrequencyAnalyzer {
    calculateFrequencyForWord(text: string, word: string): number {
        return this.tokenizeText(text)
            .filter((token) => token == word.toLowerCase())
            .length;
    }

    calculateHighestFrequency(text: string): number {
        return this.calculateMostFrequentNWords(text, 1)[0].getFrequency();
    }

    calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
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
            .sort((a,b) => b.getFrequency() - a.getFrequency())
            .slice(0, n);
    }

    tokenizeText(text: string): string[] {
        return text.toLowerCase().match(/[a-z]+/g);
    }
}