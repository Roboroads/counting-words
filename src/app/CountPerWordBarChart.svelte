<script lang="ts">
    import { BarChartSimple } from "@carbon/charts-svelte";
    import type WordFrequency from "../types/WordFrequency";
    import type ChartData from "../types/ChartData";
    import type {BarChartOptions} from "@carbon/charts/interfaces";

    export let chartData: WordFrequency[] = [];
    let formattedChartData: ChartData[];

    $: formattedChartData = chartData.map((ct) => ({value: ct.getFrequency(), group: ct.getWord()}))

    const options: BarChartOptions = {
        "title": "Frequency per word",
        "axes": {
            "left": {
                "mapsTo": "value"
            },
            "bottom": {
                "mapsTo": "group",
                "scaleType": "labels"
            }
        },
        "legend": {
            "alignment": "center"
        },
        "height": "100%"
    };
</script>


<BarChartSimple
        data={formattedChartData}
        options={options}
/>
