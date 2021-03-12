<script lang="ts">
    import { PieChart } from "@carbon/charts-svelte";
    import type WordFrequency from "../types/WordFrequency";
    import type ChartData from "../types/ChartData";
    import type {PieChartOptions} from "@carbon/charts/interfaces";

    export let chartData: WordFrequency[] = [];
    let formattedChartData: ChartData[];

    $: formattedChartData = chartData.map((ct) => ({value: ct.getFrequency(), group: ct.getWord()}))

    const options: PieChartOptions = {
        "title": "Percentage per word",
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
        "pie": {
            "alignment": "center"
        },
        "height": "100%"
    };
</script>


<PieChart
        data={formattedChartData}
        options={options}
/>
