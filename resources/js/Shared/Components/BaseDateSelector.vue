<template>


</template>

<script>
import BaseSelect from "../../Shared/Components/BaseSelect";

export default {
    name: "BaseDateSelector",
    components: { BaseSelect },
    data() {
        return {
            options: ['Weekly', 'Fortnightly', 'Monthly', 'One-Off']
        }
    },
    methods: {
        showOptions(value) {
            alert(value);
        }
    }

}
</script>

<style scoped>

</style>
