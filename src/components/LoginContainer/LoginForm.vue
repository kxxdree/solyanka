<template>
    <div>
        <form class="login_container_form_login" action="#" @submit.prevent="submit">
            <p class="login_container_title_text"
                style="font-weight: 500; text-align: center; margin: 2.5rem 1rem 0; font-size: 2rem"
                v-if="this.$route.name == 'login'">Вход в Солянка Chat</p>
            <p v-else class="login_container_title_text"
                style="font-weight: 500; text-align: center; margin: 2.5rem 1rem 0; font-size: 2rem">Регистрация</p>
            <label for="email" class="login_container_form_login_label">Адрес эл. почты</label>
            <input type="text" id="email" class="login_container_form_login_input" required>
            <label for="password" class="login_container_form_login_label">Пароль</label>
            <input type="text" id="password" class="login_container_form_login_input" required>
            <slot></slot>
            <LoginButton v-if="this.$route.name == 'login'" type="submit" />
            <SignupButton v-else type="submit" />
        </form>
        <div class="login_container_form_signup">
            <p v-if="this.$route.name == 'login'" class="login_container_title_text"
                style="font-weight: 500; text-align: center; margin: 2.5rem 1rem 0; font-size: 2rem">Нет профиля в Солянка
                Chat?</p>
            <p v-else class="login_container_title_text"
                style="font-weight: 500; text-align: center; margin: 2.5rem 1rem 0; font-size: 2rem">Есть профиль в Солянка
                Chat?</p>
            <router-link to="/signup" v-if="this.$route.name == 'login'">
                <SignupButton />
            </router-link>
            <router-link to="/login" v-else>
                <LoginButton />
            </router-link>
        </div>
    </div>
</template>
<script>
import LoginButton from '../Buttons/LoginButton.vue';
import SignupButton from '../Buttons/SignupButton.vue';

export default {
    data() {
        return {
        }
    },
    components: {
        LoginButton,
        SignupButton
    },
    methods: {
        submit() {

        }
    }
}
</script>
<style lang="scss">
.login_container_form_login {
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
    border-radius: 3rem;
    width: 36rem;
    min-height: 31rem;

    &_label {
        font-weight: 500;
        font-size: 1.25rem;
        margin-left: 3.5rem;
        margin-top: 2rem;
    }

    &_input {
        margin: auto 3.5rem;
        height: 2rem;
        border: none;
        border-radius: 20px;
        outline: none;
        font-size: 1.5rem;
        padding: 1rem;
        color: #3C1900
    }
}

.login_container_form_signup {
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
    border-radius: 3rem;
    width: 36rem;
    height: 16.5rem;
    margin-top: 1.75rem;
}
</style>