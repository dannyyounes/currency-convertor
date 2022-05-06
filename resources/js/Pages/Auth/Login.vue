<template>
    <Head title="Log In"/>

    <main class="grid place-items-center min-h-screen">

        <section class="bg-white p-8 rounded-xl max-w-md mx-auto border w-full">
            <FlashMessage
                :status="$page.props.flash.status"
                :message="$page.props.flash.message"
            />
            <h1 class="text-3xl mb-6">Log In</h1>

            <form @submit.prevent="submit">

                <div class="mb-6">
                    <BaseInput
                        name="date_paid"
                        v-model="form.email"
                        type="email"
                        id="email"
                        label="Email"
                        :error="form.errors.email"/>
                </div>
                <div class="mb-6">
                    <BaseInput
                        name="password"
                        v-model="form.password"
                        type="password"
                        id="password"
                        label="Password"
                        :error="form.errors.password"/>
                </div>
                <div class="mb-6">
                    <BaseCheckbox
                        name="remember_me"
                        v-model="form.remember_me"
                        value="1"
                        id="remember_me"
                        label="Remember Me"
                        :error="form.errors.remember_me"
                    />
                </div>
                <div>
                    <Button type="submit" class="button w-full">Log In</Button>
                </div>
                <div class="text-right mb-6">
                    <NavLink :href="route('forgot.password')">Forgot Password?</NavLink>
                </div>
            </form>

            <div class="text-center">
                Don't have an account, <NavLink href="/register">click here</NavLink>!
            </div>

        </section>
    </main>
</template>

<script>
    import BaseInput from "../../Shared/Components/BaseInput";
    import BaseCheckbox from "../../Shared/Components/BaseCheckbox";
    import Button from "../../Shared/Button";
    import NavLink from "../../Shared/NavLink";
    import FlashMessage from "../../Shared/FlashMessage";

    export default {
        components: {BaseInput, BaseCheckbox, Button, NavLink, FlashMessage},
        layout: null,
    };
</script>

<script setup>
    import {useForm} from '@inertiajs/inertia-vue3';

    let form = useForm({
        email: '',
        password: '',
        remember_me: '',
    });

    let submit = () => {
        form.post('/login');
    };
</script>
