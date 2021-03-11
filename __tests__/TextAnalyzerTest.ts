import {TextAnalyzer} from "../src/words/TextAnalyzer";

test('tokenizeText returns array of words', () => {
    const analyzer = new TextAnalyzer();

    const tokens = analyzer.tokenizeText("Hi! This-is sOmE T3xt!!!?!? etc.etc.");

    expect(tokens).toStrictEqual(["hi", "this", "is", "some", "t", "xt", "etc", "etc"]);
});

test('CalculateHighestFrequency returns highest word frequency in text', () => {
    const analyzer = new TextAnalyzer();

    const highestFrequency = analyzer.calculateHighestFrequency("The the the it it the, IT it, the!");

    expect(highestFrequency).toBe(5);
});

test('CalculateFrequencyForWord returns frequency for word', () => {
    const analyzer = new TextAnalyzer();
    const text = "The the the it it the, IT it, the!";

    expect(analyzer.calculateFrequencyForWord(text, "the")).toBe(5);
    expect(analyzer.calculateFrequencyForWord(text, "ThE")).toBe(5);
    expect(analyzer.calculateFrequencyForWord(text, "it")).toBe(4);
});

test('CalculateMostFrequentNWords returns an array of the n most frequent words', () => {
    const analyzer = new TextAnalyzer();
    const text = "The the world hello, the it it the, hello the IT the it, the world sais hello!";

    const threeMostFrequentWords = analyzer.calculateMostFrequentNWords(text, 3);

    expect(threeMostFrequentWords[0].getWord()).toBe("the");
    expect(threeMostFrequentWords[0].getFrequency()).toBe(7);
    expect(threeMostFrequentWords[1].getWord()).toBe("it");
    expect(threeMostFrequentWords[1].getFrequency()).toBe(4);
    expect(threeMostFrequentWords[2].getWord()).toBe("hElLo");
    expect(threeMostFrequentWords[2].getFrequency()).toBe(3);
});