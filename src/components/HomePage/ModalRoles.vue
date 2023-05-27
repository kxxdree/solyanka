<template lang="">
    <div class="modal_wrapper">
        <div v-for="(role, index) in roles" :key="index">
            <img :src="role.path" alt="emodji">
            <p class="modal_wrapper_roles">{{role.roleName}}</p>
        </div>
        <button class="modal_wrapper_role-btn">
            <img src="../../assets/images/new role btn.svg" alt="Добавить роль">
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            roles: [
                {
                    roleName: 'linux terminal',
                    id: 1,
                    path: require("../../assets/images/emodji/laptop.svg")
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
            ]
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