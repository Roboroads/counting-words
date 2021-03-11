import type {WordFrequencyAnalyzer} from "../types/WordFrequencyAnalyzer";
import type {WordFrequency} from "../types/WordFrequency";

export class TextAnalyzer implements WordFrequencyAnalyzer {
    calculateFrequencyForWord(text: string, word: string): number {
        return 0;
    }

    calculateHighestFrequency(text: string): number {
        return 0;
    }

    calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
        return [];
    }

    tokenizeText(text: string): string[] {
        return [];
    }
}