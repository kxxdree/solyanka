<template>
    <div>
        <form class="login_container_form_login" action="#" @submit.prevent="submit">
            <p class="login_container_title_text" v-if="this.$route.name == 'login'">Вход в Солянка Chat</p>
            <p v-else class="login_container_title_text">Регистрация</p>
            <label for="email" class="login_container_form_login_label">Адрес эл. почты</label>
            <input type="email" id="email" class="login_container_form_login_input" required v-model="email">
            <label for="password" class="login_container_form_login_label">Пароль</label>
            <input type="password" id="password" class="login_container_form_login_input" required v-model="password">
            <!-- <slot></slot> -->
            <div v-if="this.$route.name == 'signup'" style="    display: flex;
    flex-direction: column;">
                <label for="repeated_password" class="login_container_form_login_label">Повторите пароль</label>
                <input type="password" id="repeated_password" class="login_container_form_login_input" required
                    v-model="password_confirmation">
            </div>
            <span v-if="errorMessage" style="color:red; text-align: center;margin-top:1rem ;">
                {{ errorMessage }}
            </span>
            <LoginButton v-if="this.$route.name == 'login'" type="submit" />
            <SignupButton v-else type="submit" />

        </form>

        <form>
            <div class="login_container_form_signup">
                <p v-if="this.$route.name == 'login'" class="login_container_title_text">Нет профиля в Солянка Chat?</p>
                <p v-else class="login_container_title_text">Есть профиль в Солянка
                    Chat?</p>
                <router-link to="/signup" v-if="this.$route.name == 'login'">
                    <SignupButton />
                </router-link>
                <router-link to="/login" v-else>
                    <LoginButton />
                </router-link>
            </div>
        </form>
    </div>
</template>
<script>


import LoginButton from '../Buttons/LoginButton.vue';
import SignupButton from '../Buttons/SignupButton.vue';
import axios from 'axios'

export default {

    data() {
        return {
            email: '',
            password: '',
            password_confirmation: '',
            errorMessage: "",
        }
    },
    components: {
        LoginButton,
        SignupButton
    },
    methods: {
        async submit() {
            let url = '';
            let postData = {};

            if (this.$route.name == 'login') {
                url = 'http://92.63.105.255/login'
                postData = { email: this.email, password: this.password }
            } else {
                url = 'http://92.63.105.255/register'
                postData = {
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }
            }

            await axios.post(url, postData)
            .then(response => {
                this.$router.push("/");
                this.$store.state.user = response.data.user.id;
                console.log(response);
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
            })
        },
        
    },

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

.login_container_title_text {
    font-weight: 500;
    text-align: center;
    margin: 2.5rem 1rem 0;
    font-size: 2rem
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