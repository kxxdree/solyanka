<template lang="">
    <div class="modal_wrapper">
        <div v-for="(role, index) in roles" :key="index">
            <!-- <img :src="role.path" alt="emodji"> -->
            <p class="modal_wrapper_roles">{{role.roleName}}</p>
        </div>
        <button class="modal_wrapper_role-btn" @click="toShowNewRoles" :class="{onhover : onHover}">
            <img src="../../assets/images/new role btn.svg" alt="Добавить роль">
        </button>
        <ModalNewRoles v-if="isNewRolesShown"/>
    </div>
</template>
<script>

import ModalNewRoles from './ModalNewRoles.vue';

export default {
    data() {
        return {
            roles: [
                {
                    roleName: 'linux terminal',
                    id: 1,
                    // path: require("../../assets/images/emodji/laptop.svg")
                },
                {
                    roleName: 'Путин',
                    id: 2,
                    path: ""
                },
                {
                    roleName: 'Солянка',
                    id: 3,
                    path: ""
                },
                {
                    roleName: 'Программист',
                    id: 4,
                    path: ""
                },
                {
                    roleName: 'Магия',
                    id: 5,
                    path: ""
                },
                {
                    roleName: 'Шериф',
                    id: 6,
                    path: ""
                },
                {
                    roleName: 'Ангел',
                    id: 7,
                    path: ""
                },
            ],
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