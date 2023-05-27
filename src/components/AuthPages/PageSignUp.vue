<template>
    <div>
        <Header />
        <div class="login_container">
            <LoginTitle>
                <h2 class="login_container_title_text">Солянка Chat рада каждому пользователю </h2>
                <p style="margin-top: 5px; font-weight: 400; font-size: 2rem; margin-bottom: 0;">Зарегистрируйтесь и
                    получите безграничный доступ к чату :) </p>
            </LoginTitle>
            <div class="login_container_form">
                <LoginForm/>
            </div>
        </div>
    </div>
</template>
<script>
import LoginTitle from '../LoginContainer/LoginTitle.vue';
import Header from '../Header.vue';
import LoginForm from '../LoginContainer/LoginForm.vue';

export default {
    data() {
        return {
            password_confirmation:""
        }
    },
    components: {
        Header,
        LoginTitle,
        LoginForm
    }
}
</script>
<style></style>