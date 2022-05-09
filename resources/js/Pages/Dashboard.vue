<template>
    <Head>
        <title>Currency Convertor</title>
    </Head>

    <div class="flex">
        <div class="w-2/5 px-4"><Convertor /></div>
        <div class="w-3/5 px-4 bg-gray-200 px-4 rounded-lg"><Report :reports="reports"/></div>
    </div>

</template>

<script>
import Convertor from "./CurrencyConvertor/Convertor";
import Report from "./CurrencyConvertor/Report";

export default {
    name: "Dashboard",
    components: { Convertor, Report },
    props: {
        reports: {
            type: Object,
            required: false,
            default: '',
        },
    },
};

</script>




