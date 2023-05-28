<template lang="">
        <div class="modal_new-roles" :class="{active: isActive}">
            <header class="modal_new-roles_add">
                <p class="modal_new-roles_add_title">Добавить роли</p>
                <button class="modal_new-roles_add_btn" @click="toShowPrompts" :class="{onhover : onHover}">
                    <img src="../../assets/images/new role btn.svg" alt="Добавить роли" style="width: 2rem; height: 2rem; margin-left: 0.5rem">
                </button>
            </header>
                <p v-for="newRole in newRoles" :key="newRole.id" class="modal_new-roles_names">{{newRole.newRoleName}}</p>
                <button class="modal_new-roles_close-btn" @click="isActive = !isActive" :class="{onhover : onHover}">
                    <img src="../../assets/images/close form.svg" alt="Закрыть">
                </button>
                <ModalPrompts v-if="isShown"/>
        </div>
</template>
<script>
import ModalPrompts from './ModalPrompts.vue'
export default {
    data() {
        return {
            newRoles: [
                {
                    newRoleName: 'Медицина',
                    id: 1
                },
                {
                    newRoleName: 'Ангел',
                    id: 2
                },
                {
                    newRoleName: '18+',
                    id: 3
                },
                {
                    newRoleName: 'Ребенок',
                    id: 4
                },
                {
                    newRoleName: 'Религия',
                    id: 5
                },
                {
                    newRoleName: 'Насилие',
                    id: 6
                },
                {
                    newRoleName: 'Полиция',
                    id: 7
                },
                {
                    newRoleName: 'Политика',
                    id: 8
                },
                {
                    newRoleName: 'Школа',
                    id: 9
                },
                {
                    newRoleName: 'Бизнесмен',
                    id: 10
                },
                {
                    newRoleName: 'Дьявол',
                    id: 11
                },
                {
                    newRoleName: 'Ковбой',
                    id: 12
                },
                {
                    newRoleName: 'Экоактивист',
                    id: 13
                },
                {
                    newRoleName: 'Терроризм',
                    id: 14
                },

            ],
            isShown: false,
            isActive: false,
            onHover: true
        }
    },
    methods: {
        toShowPrompts() {
            this.isShown = !this.isShown
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