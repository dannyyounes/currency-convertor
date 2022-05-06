<template>
    <div class="input_container">
        <ul>
            <li>
                <div class="flex">
                    <div>
                        <component v-bind:is="CrossIcon" v-show="!contains_eight_characters "/>
                        <component v-bind:is="TickIcon" v-show="contains_eight_characters" />
                    </div>
                    <div>
                        8 Characters
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <div>
                        <component v-bind:is="CrossIcon" v-show="!contains_number"/>
                        <component v-bind:is="TickIcon" v-show="contains_number" />
                    </div>
                    <div>
                        Contains Number
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <div>
                        <component v-bind:is="CrossIcon" v-show="!contains_uppercase"/>
                        <component v-bind:is="TickIcon" v-show="contains_uppercase" />
                    </div>
                    <div>
                        Contains Uppercase
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <div>
                        <component v-bind:is="CrossIcon" v-show="!contains_special_character"/>
                        <component v-bind:is="TickIcon" v-show="contains_special_character" />
                    </div>
                    <div>
                        Contains Special Character
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import CrossIcon from "../../Shared/Icons/CrossIcon";
import TickIcon from "../../Shared/Icons/TickIcon";

export default {
    name: " BasePasswordStrengthInput",
    components: { CrossIcon, TickIcon },

};
</script>


<script setup>
import { computed, ref, onMounted } from 'vue'

const props = defineProps(['modelValue'])
const password = computed(() => props.modelValue)

const contains_eight_characters = ref(false)
const contains_number = ref(false)
const contains_uppercase = ref(false)
const contains_special_character = ref(false)

onMounted(() => {
    window.addEventListener('keyup', checkPassword)
})

function checkPassword()
{
    const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

    contains_eight_characters.value = password.value.length > 7
    contains_number.value = /\d/.test(password.value)
    contains_uppercase.value = /[A-Z]/.test(password.value)
    contains_special_character.value = format.test(password.value)
}

</script>

<style scoped>

ul {
    padding-left: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

li {
    margin-bottom: 8px;
    color: #525f7f;
    position: relative;
}

li:before {
    content: "";
    width: 0%; height: 2px;
    background: #2ecc71;
    position: absolute;
    left: 0; top: 50%;
    display: block;
    transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

</style>
