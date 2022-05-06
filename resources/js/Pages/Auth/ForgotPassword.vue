<template>
    <section class="px-6 py-8">
        <main class="max-w-lg mx-auto mt-10 bg-gray-100 border border-gray-300 p-6 rounded-xl">
            <FlashMessage
                :status="$page.props.flash.status"
                :message="$page.props.flash.message"
            />
            <h1 class="text-center font-bold text-xl">Reset Password</h1>
            <form @submit.prevent="submit" id="register" class="max-w-md mx-auto mt-8">
                <div class="mb-6">
                    <BaseInput
                        name="email"
                        v-model="form.email"
                        type="text"
                        id="email"
                        label="Email Address"
                        :error="form.errors.email" />
                </div>
                <div class="mb-6">
                    <Button type="submit" class="submit w-full" :disabled="form.processing">Send Password Reset Link</Button>
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
    name: "ForgotPassword",
    layout: null,
    components: { BaseInput, Button, FlashMessage },
}
</script>

<script setup>
    import {useForm} from '@inertiajs/inertia-vue3';

    let form = useForm({
        email: '',
    });

    let submit = () => {
        form.post(route('forgot.password'));
    };
</script>
