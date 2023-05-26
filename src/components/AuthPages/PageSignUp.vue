<template>
    <div>
        <Header />
        <div class="login_container">
            <LoginTitle>
                <h2 class="login_container_title_text">Солянка Chat рада каждому пользователю </h2>
                <p class="login_container_title_text">Зарегистрируйтесь и получите безграничный доступ к чату :) </p>
            </LoginTitle>
            <div class="login_container_form">
                <LoginForm>
                    <label for="repeated_password" class="login_container_form_login_label">Повторите пароль</label>
                    <input type="text" id="repeated_password" class="login_container_form_login_input">
                </LoginForm>
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

        }
    },
    components: {
        Header,
        LoginTitle,
        LoginForm
    }
}
</script>
<style>
</style>