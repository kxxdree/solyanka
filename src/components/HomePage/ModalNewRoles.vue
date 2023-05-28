<template lang="">
        <div class="modal_new-roles" :class="{active: isActive}">
            <header class="modal_new-roles_add">
                <p class="modal_new-roles_add_title">Добавить роли</p>
                <button class="modal_new-roles_add_btn" @click="toShowPrompts" :class="{onhover : onHover}">
                    <img src="../../assets/images/new role btn.svg" alt="Добавить роли" style="width: 2rem; height: 2rem; margin-left: 0.5rem">
                </button>
            </header>
                <p v-for="newRole in newRoles" :key="newRole.id" class="modal_new-roles_names" @click="takeRole(newRole)">{{newRole.name}}</p>
                <button class="modal_new-roles_close-btn" @click="isActive = !isActive" :class="{onhover : onHover}">
                    <img src="../../assets/images/close form.svg" alt="Закрыть">
                </button>
                <ModalPrompts v-if="isShown"/>
        </div>
</template>
<script>
import axios from 'axios'
import ModalPrompts from './ModalPrompts.vue'
export default {
    async mounted(){
        await axios.get("http://92.63.105.255/api/role")
        .then(response => {
            console.log(response.data);
            this.newRoles = response.data;
        })
        .catch(error => {
            this.errorMessage = error.response.data.message
        })
    },
    data() {
        return {
            newRoles: [],
            currentRole: {},
            isShown: false,
            isActive: false,
            onHover: true
        }
    },
    methods: {
        toShowPrompts() {
            this.isShown = !this.isShown
        },
        async takeRole(newRole) {
            this.isActive = !this.isActive;
            this.currentRole = newRole;
            console.log(this.currentRole);

            await axios.post("http://92.63.105.255/api/user-role/" + this.currentRole.id + "?user_id=" + this.$store.state.user)
            .then(response => {
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
            })

        }
    },
    components: {
        ModalPrompts
    }
}
</script>
<style lang="scss">
.modal_new-roles {
    position: absolute;
    bottom: 11rem;
    right: 0;
    max-width: 30rem;
    max-height: 22.5rem;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 0px 15px 0 rgba(0, 0, 0, 0.10);

    &_add {
        display: flex;
        text-align: center;
        align-items: center;
        margin-left: 1.875rem;
        width: 100%;

        &_title {
            font-size: 1.5rem;
            opacity: 0.5;
        }

        &_btn {
            cursor: pointer;
            background: none;
            border: none;

        }
    }

    &_names {
        margin: 1rem 1.875rem;
        font-size: 1.1rem;
        color: #3C1900;

        &:hover {
            opacity: 0.7;
            text-decoration: underline;
            cursor: pointer;
        }
    }

    &_close-btn {
        position: absolute;
        right: 1rem;
        background: none;
        border: none;
        top: 0.5rem;
        cursor: pointer;

    }
}

.active {
    display: none;
}

.onhover {
    :hover {
        opacity: 0.7;
    }
}
</style>