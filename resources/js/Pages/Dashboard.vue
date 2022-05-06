<template>
    <Head>
        <title>Currency Convertor</title>
    </Head>

    <div class="grid grid-cols-3 inline-gri gap-4">
        <div class="col-span-2 px-4">
            <Convertor />
        </div>
        <div class="bg-gray-200 px-4 rounded-lg">
            <Report />
        </div>

    </div>


</template>

<script>
import Convertor from "./CurrencyConvertor/Convertor";
import Report from "./CurrencyConvertor/Report";

export default {
    name: "Dashboard",
    components: { Convertor, Report },
};

</script>




