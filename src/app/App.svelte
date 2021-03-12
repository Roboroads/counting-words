<script lang="ts">
	import CountPerWordBarChart from "./CountPerWordBarChart.svelte";
	import TextAnalyzer from "../words/TextAnalyzer";
	import type WordFrequency from "../types/WordFrequency";
	import PercentagePerWordPieChart from "./PercentagePerWordPieChart.svelte";

	let analyzableText = '';
	let wordFrequency: WordFrequency[];
	const analyzer = new TextAnalyzer();

	$: wordFrequency = analyzer.calculateMostFrequentWords(analyzableText);
</script>

<main class="flex flex-col w-screen h-screen relative bg-gray-800 text-white">
	<div class="w-full h-1/4">
		<textarea class="block h-full w-full bg-gray-800 text-white" placeholder="Start typing or paste in your text." bind:value={analyzableText}></textarea>
	</div>
	<div class="flex flex-row flex-wrap w-full h-3/4">
		{#if analyzableText.length > 1}
			<div class="w-full h-1/2">
				<CountPerWordBarChart chartData={wordFrequency} />
			</div>
			<div class="w-1/2 h-1/2 bg-gray-900 flex justify-around items-center text-center flex-wrap">
				{#if wordFrequency.length > 0}
					<div class="flex flex-col">
						<div class="text-4xl">{wordFrequency[0].getWord()}</div>
						<div>is your most used word</div>
						<div>{wordFrequency[0].getFrequency()} time(s), to be exact.</div>
					</div>
				{/if}
				{#if wordFrequency.length > 1}
					<div class="flex flex-col">
						<div class="text-4xl">{wordFrequency[1].getWord()}</div>
						<div>takes the cake after</div>
						<div>with {wordFrequency[1].getFrequency()} hit(s).</div>
					</div>
				{/if}
				{#if wordFrequency.length > 2}
					<div class="flex flex-col">
						<div class="text-4xl">{wordFrequency.slice(-1)[0].getWord()}</div>
						<div>poor word, is last</div>
						<div>with only {wordFrequency.slice(-1)[0].getFrequency()} display(s).</div>
					</div>
				{/if}
			</div>
			<div class="w-1/2 h-1/2 bg-gray-700">
				<PercentagePerWordPieChart chartData={wordFrequency} />
			</div>
		{:else}
			<div class="w-full h-full bg-gray-900 flex justify-around items-center text-center flex-wrap">
				<div class="text-4xl">Start typing/pasting in the textarea above to start</div>
			</div>
		{/if}
	</div>
</main>

<style>

</style>