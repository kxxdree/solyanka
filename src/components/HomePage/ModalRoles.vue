<template lang="">
    <div class="modal_wrapper">
        <div v-for="(role, index) in roles" :key="index">
            <img :src="url + role.icon" alt="emodji">
            <p class="modal_wrapper_roles">{{role.name}}</p>
        </div>
        <button class="modal_wrapper_role-btn">
            <img src="../../assets/images/new role btn.svg" alt="Добавить роль">
        </button>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    async mounted(){
        console.log(this.$store.state.user);
        await axios.get("http://92.63.105.255/api/user-role?user_id="+this.$store.state.user)
        .then(response => {
            this.roles = response.data;
        })
        .catch(error => {
            this.errorMessage = error.response.data.message
        })
    },
    data() {
        return {
            url: "http://92.63.105.255",
            roles: []
        }
    },
}
</script>
<style lang="scss">
.modal_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto 6rem;
    border-radius: 30px;
    font-size: 1rem;
    position: absolute;
    bottom: 8.25rem;
    border: 1px solid black;
    padding: 2.5rem 2rem;
    font-size: 1rem;
    width: 53vw;
    text-align: center;
    align-items: center;

    &_roles {
        margin: 0.5rem 2.25rem;
    }

    &_role-btn {
        background: none;
    }
}
</style>