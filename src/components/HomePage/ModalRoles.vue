<template lang="">
    <div class="modal_wrapper">
        <div v-for="(role, index) in roles" :key="index">
            <!-- <img :src="require(`../../assets/images/roles/${role.icon}`)" alt="emodji"> -->
            <p class="modal_wrapper_roles">{{role.name}}</p>

        </div>
        <button class="modal_wrapper_role-btn" @click="toShowNewRoles" :class="{onhover : onHover}">
            <img src="../../assets/images/new role btn.svg" alt="Добавить роль">
        </button>
        <ModalNewRoles v-if="isNewRolesShown"/>
    </div>
</template>
<script>


import axios from 'axios'

import ModalNewRoles from './ModalNewRoles.vue';


export default {
    async mounted(){
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

            url: "../../assets/images/roles/",
            roles: [],

            isNewRolesShown: false,
            onHover: true

        }
    },
    components: {
        ModalNewRoles
    },
    methods: {
        toShowNewRoles() {
            this.isNewRolesShown = !this.isNewRolesShown
        }
    }
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
    box-shadow: 0px 0px 15px 0 rgba(0, 0, 0, 0.10);
    padding: 2.5rem 2rem;
    font-size: 1rem;
    width: 53vw;
    text-align: center;
    align-items: center;
    background-color: white;

    &_roles {
        margin: 0.5rem 1.5rem;

        &:hover {
            opacity: 0.7;
            text-decoration: underline;
            cursor: pointer;
        }

    }

    &_role-btn {
        background: none;
        cursor: pointer;
        border: none;
    }
}
</style>