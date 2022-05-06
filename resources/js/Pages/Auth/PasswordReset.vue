<template>
    <section class="px-6 py-8">
        <main class="max-w-lg mx-auto mt-10 bg-gray-100 border border-gray-300 p-6 rounded-xl">
            <FlashMessage
                :status="$page.props.flash.status"
                :message="$page.props.flash.message"
            />
            <h1 class="text-center font-bold text-xl">Reset Password</h1>
            <form @submit.prevent="submit" id="password-reset" class="max-w-md mx-auto mt-8">
                <div class="mb-6">
                    <BaseInput
                        name="email"
                        v-model="form.email"
                        type="email"
                        id="email"
                        label="Email Address"
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
                    <Button type="submit" class="submit w-full" :disabled="form.processing">Reset My Password</Button>
                </div>
            </form>
        </main>
    </section>
</template>

<script>
import BaseInput from "../../Shared/Components/BaseInput";
import Button from "../../Shared/Button";
import FlashMessage from "../../Shared/FlashMessage";

export default {
    name: "PasswordReset",
    components: {BaseInput, Button, FlashMessage},
    layout: null,

}
</script>

<script setup>
    import {useForm} from '@inertiajs/inertia-vue3';

    const props = defineProps({
        token: String
    })

    let form = useForm({
        email: '',
        token: props.token,
        password: '',
        password_confirmation: '',
    });

    let submit = () => {
        form.post(route('password.reset'));
    };
</script>
