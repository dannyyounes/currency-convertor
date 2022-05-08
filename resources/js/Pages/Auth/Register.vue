<template>
    <section class="px-6 py-8">
        <main class="max-w-lg mx-auto mt-10 bg-gray-100 border border-gray-300 p-6 rounded-xl">

            <h1 class="text-center font-bold text-xl">Register for an account!</h1>
            <form @submit.prevent="submit" id="register" class="max-w-md mx-auto mt-8">
                <div class="mb-6">
                    <BaseInput
                        name="first_name"
                        v-model="form.first_name"
                        type="text"
                        id="first_name"
                        label="First Name"
                        :error="form.errors.first_name" />
                </div>
                <div class="mb-6">
                    <BaseInput
                        name="last_name"
                        v-model="form.last_name"
                        type="text"
                        id="last_name"
                        label="Last Name"
                        :error="form.errors.last_name" />
                </div>
                <div class="mb-6">
                    <BaseInput
                        name="email"
                        v-model="form.email"
                        type="email"
                        id="email"
                        label="Email"
                        :error="form.errors.email" />
                </div>
                <div class="mb-6">
                    <BaseInput
                        name="password"
                        v-model="form.password"
                        type="password"
                        id="password"
                        label="Password"
                        :error="form.errors.password" />
                </div>
                <div class="mb-6">
                    <BaseInput
                        name="password_confirmation"
                        v-model="form.password_confirmation"
                        type="password"
                        id="password_confirmation"
                        label="Confirm Password"
                        :error="form.errors.password_confirmation" />
                </div>

                <div class="mb-6">
                    <Button type="submit" class="submit" :disabled="form.processing">Register</Button>
                </div>
            </form>
        </main>
    </section>
</template>

<script>

import BaseInput from "../../Shared/Components/BaseInput";
import BasePasswordStrengthIndicator from "../../Shared/Components/BasePasswordStrengthIndicator";
import Button from "../../Shared/Button";

export default {
    layout: null,
    components: { BaseInput, Button },
    props: {
        enteredPassword: {
            type: String,
            required: false,
            default: '',
        },
    },
    setup () {
        const form = useForm({
            first_name: null,
            last_name: null,
            email: null,
            password: null,
            password_confirmation: null,
        })

        return { form }
    },

};
</script>

<script setup>
import {useForm} from '@inertiajs/inertia-vue3';

let form = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

let submit = () => {
    form.post('/register');
};
</script>
