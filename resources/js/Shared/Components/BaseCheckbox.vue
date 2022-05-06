<template>
    <div class="flex justify-center">
        <div class="pr-2"><input
            class="border h-5 w-5"
            type="checkbox"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
        /></div>
        <div>
            <label
                class="block mb-2 uppercase font-bold text-xs text-gray-700"
                :for="this.$attrs.name">
                {{ label }}
            </label>
        </div>


    </div>

    <div v-if="error" v-text="error" class="text-red-500 text-xs mt-1"></div>
</template>


<script>
export default {
    name: "BaseCheckbox",
    props: {
        modelValue: {
            type: [String, Number],
            required: false,
            default: '',
        },
        label: {
            type: String,
            required: true,
        },
        error: {
            type: String,
            required: false,
        }
    },
}
</script>

<style scoped>

</style>
