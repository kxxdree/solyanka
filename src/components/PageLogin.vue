<template lang="">
    <div>
        <header class="header">
            <img src="../assets/images/headerLogo.svg" alt="Solyanka Chat" class="header_img">
            <div class="header_btns">
                <button class="header_btns_button"></button>
                <button class="header_btns_button" style="background-color: black"></button>
            </div>
        </header>
        <div class="login_container">
            <div class="login_container_title">
                <h1 class="login_container_title_text">Солянка Chat рада твоему возращению</h1>
                <p class="login_container_title_text" style="margin-top: 5px; font-weight: 500">Давно не виделись с тобой, дорогой друг :)</p>
                <img src="../assets/images/loginImage.svg" alt="Welcome back!" class="login_container_img">
            </div>
            <div class="login_container_form">
                <form class="login_container_form_login">
                    <p class="login_container_title_text" style="font-weight: 500; text-align: center; margin: 2.5rem 1rem 0; font-size: 2rem">Вход в Солянка Chat</p>
                    <label for="email" class="login_container_form_login_label">Адрес эл. почты</label>
                    <input type="text" id="email" class="login_container_form_login_input">
                    <label for="password" class="login_container_form_login_label">Пароль</label>
                    <input type="text" id="password" class="login_container_form_login_input">
                    <LoginButton />
                </form>
                <form class="login_container_form_signup">
                    <p class="login_container_title_text" style="font-weight: 500; text-align: center; margin: 2.5rem 1rem 0; font-size: 2rem">Нет профиля в Солянка Chat?</p>
                    <router-link to="/signup">
                        <SignupButton />
                    </router-link>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import PageSignUp from './PageSignUp.vue';
import LoginButton from './Buttons/LoginButton.vue';
import SignupButton from './Buttons/SignupButton.vue';

export default {
    components: {
        PageSignUp,
        LoginButton,
        SignupButton
    }
}
</script>
<style lang="scss">
.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &_img {
        width: 8rem;
        height: 7rem;
        margin-left: 15rem;
    }

    &_btns {
        display: flex;
        gap: 2rem;
        margin-right: 15rem;

        &_button {
            border-radius: 50%;
            border: 1px solid black;
            width: 1.8rem;
            height: 1.8rem;
            background-color: white;
            cursor: pointer;
        }
    }
}

.login_container {
    margin: 3rem 15rem;
    display: flex;
    justify-content: space-between;
    gap: 5rem;

    &_title {
        width: 43rem;
        text-align: center;

        &_text {
            font-size: 2.5rem;
            color: #3C1900;
            margin-bottom: 0;
        }
    }

    &_img {
        width: 35rem;
        height: 29rem;
        margin-top: 3rem;
    }
}

.login_container_form {
    display: flex;
    flex-direction: column;

    &_login {
        display: flex;
        flex-direction: column;
        background-color: #F5F5F5;
        border-radius: 3rem;
        width: 36rem;
        height: 31rem;

        &_label {
            font-weight: 500;
            font-size: 1.25rem;
            margin-left: 3.5rem;
            margin-top: 2rem;
        }

        &_input {
            margin: auto 3.5rem;
            height: 4rem;
            border: none;
            border-radius: 20px;
            outline:none;
            font-size: 1.5rem;
            padding: 1rem;
        }
    }

    &_signup {
        display: flex;
        flex-direction: column;
        background-color: #F5F5F5;
        border-radius: 3rem;
        width: 36rem;
        height: 16.5rem;
        margin-top: 1.75rem;
    }
}
</style>