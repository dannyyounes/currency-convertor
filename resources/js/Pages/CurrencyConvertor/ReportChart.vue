<template>
    <h1 class="text-3xl">Report Chart</h1>

    <div class="mt-2 mb-2"><span v-text="showPeriodText(report.period)"></span> chart of {{ report.base }} against {{ report.symbol }}</div>
    <Chart
        :size="{ width: 500, height: 420 }"
        :data="data"
        :margin="margin"
        :direction="direction"
        :axis="axis">
        <template #layers>
            <Grid strokeDasharray="2,2" />
            <Line :dataKeys="['date', 'price']" />
        </template>

        <template #widgets>
            <Tooltip
                borderColor="#000"
                :config="{
          date: { hide: false },
          price: { label: 'Price', color: 'red' },
        }"
            />
        </template>
    </Chart>
</template>


<script>
import { defineComponent, ref } from 'vue'
import { Chart, Grid, Line } from 'vue3-charts'
import { usePage } from '@inertiajs/inertia-vue3'
import CurrencyMixin from "../../Mixins/currency";

export default defineComponent({
    name: 'LineChart',
    mixins: [CurrencyMixin],
    components: { Chart, Grid, Line },
    props: {
        report: {
            type: Object,
            required: true,
        },
        chart_data: {
            type: Object,
            required: true,
        },
        min_price: {
            type: Number,
            required: true,
        },
        max_price: {
            type: Number,
            required: true,
        },
    },
    setup() {
        const data = ref(usePage().props.value.chart_data)
        const direction = ref('horizontal')
        const margin = ref({
            left: 0,
            top: 20,
            right: 20,
            bottom: 0
        })
        const size = ref({
            width: 900,
            height: 900
        })
        const axis = ref({
            primary: {
                type: 'band',
                format: (val) => {

                    return val
                }
            },
            secondary: {
                domain: [usePage().props.value.min_price, usePage().props.value.max_price],
                type: 'linear',
                ticks: 8
            }
        })
        return { data, direction, margin, axis, size }
    }
})

</script>

<style>

</style>
