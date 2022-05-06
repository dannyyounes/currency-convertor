<template>
    <label
        class="block mb-2 uppercase font-bold text-xs text-gray-700"
        :for="this.$attrs.name">
        {{ label }}
    </label>
    <textarea
        class="border p-2 w-full rounded"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
    >{{ modelValue }}</textarea>
    <div v-if="error" v-text="error" class="text-red-500 text-xs mt-1"></div>
</template>

<script>
export default {
    name: "BaseTextArea",
    props: {
        modelValue: {
            type: String,
            required: false,
            default: '',
        },
        placeholder: {
            type: String,
            required: false
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
