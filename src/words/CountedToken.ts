import type {WordFrequency} from "../types/WordFrequency";

export class CountedToken implements WordFrequency {
    word: string;
    frequency: number;

    constructor(word: string, frequency: number) {
        this.word = word;
        this.frequency = frequency;
    }

    getFrequency(): number {
        return this.frequency;
    }

    getWord(): string {
        return this.word;
    }

}