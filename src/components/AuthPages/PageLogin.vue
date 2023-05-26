<template lang="">
    <div>
       <Header></Header>
        <div class="login_container">
          <LoginTitle>
            <h1 class="login_container_title_text">Солянка Chat рада твоему возращению</h1>
            <p class="login_container_title_text" style="margin-top: 5px; font-weight: 500">Давно не виделись с тобой, дорогой друг :)</p>
          </LoginTitle>
            <div class="login_container_form">
               <LoginForm />
            </div>
        </div>
    </div>
</template>
<script>
import PageSignUp from '../AuthPages/PageSignUp.vue';
import Header from '../Header.vue';
import LoginTitle from '../LoginContainer/LoginTitle.vue';
import LoginForm from '../LoginContainer/LoginForm.vue';

export default {
    components: {
        PageSignUp,
        Header,
        LoginTitle,
        LoginForm
    }
}
</script>
<style lang="scss">
.login_container {
    margin: 3rem 15rem;
    display: flex;
    justify-content: space-between;
}

.login_container_form {
    display: flex;
    flex-direction: column;

}

.login_container_title_text {
    
}
</style>