<template>
    <Head>
        <title>Currency Convertor</title>
    </Head>

    <div class="grid grid-cols-2 inline-gri gap-4">
        <div class="px-4">
            <Convertor />
        </div>
        <div class="bg-gray-200 px-4 rounded-lg">
            <Report :reports="reports"/>
        </div>

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




