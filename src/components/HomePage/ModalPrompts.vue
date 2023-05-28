<template>
    <div class="prompts-wrapper" :class="{ isclosed: showModal }">
        <form class="prompts-wrapper_form">
            <label for="role-name" class="prompts-wrapper_form_label">Название роли:</label>
            <input type="text" id="role-name" class="prompts-wrapper_form_input" v-model="inputValue">
            <label for="prompts" class="prompts-wrapper_form_label">Промты:</label>
            <textarea id="prompts" cols="30" rows="5" class="prompts-wrapper_form_textarea"
                v-model="areaContent"></textarea>
            <label for="pics" class="prompts-wrapper_form_label">Обозначения:</label>
            <textarea id="pics" cols="30" rows="5" class="prompts-wrapper_form_textarea" v-model="areaPics"></textarea>
            <button class="prompts-wrapper_form_save-btn"
                :class="inputValue == '' && areaContent == '' ? 'inactive' : 'isshown'" @click="submit">Сохранить</button>
            <button class="prompts-wrapper_form_close-btn" @click="showModal = !showModal">
                <img src="../../assets/images/close form.svg" alt="Закрыть">
            </button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            inputValue: '',
            areaContent: '',
            areaPics: '',
            showModal: false
        }
    },
    methods: {
        toSaveForm() {
            this.style.display = 'none'
        }
    },
    methods: {
        async submit() {
            let postData = {};
            let url = '';

            url = 'http://92.63.105.255/api/role/create?user_id=' + this.$store.state.user;
            postData = { name: this.inputValue, text: this.areaContent, icon: this.areaPics };

            await axios.post(url, postData)
                .then(response => {
                })
                .catch(error => {
                    this.errorMessage = error.response.data.message
                })

            this.showModal = !this.showModal
        }
    }
}
</script>
<style lang="scss">
.prompts-wrapper {
    background-color: white;
    width: 36rem;
    height: 35rem;
    border-radius: 30px;
    box-shadow: 0px 0px 15px 0 rgba(0, 0, 0, 0.10);
    position: absolute;
    bottom: 0;
    right: 31.5rem;

    &_form {
        display: flex;
        flex-direction: column;
        width: 100%;

        &_input {
            height: 3rem;
            border: 1px solid #3C19008C;
            margin: 0.5rem 1.5rem;
            border-radius: 20px;
            outline: none;
            padding-left: 1rem;
            font-size: 1rem;
        }

        &_label {
            margin-left: 1.5rem;
            text-align: start;
            font-size: 1.5rem;
            color: #3C1900;
            opacity: 0.5;
            margin-top: 0.5rem;
            font-size: 1rem;
        }

        &_textarea {
            margin: 0.5rem 1.5rem;
            border-radius: 20px;
            border: 1px solid #3C19008C;
            outline: none;
            padding-left: 1rem;
            padding-top: 1rem;
            font-size: 1rem;
        }

        &_save-btn {
            margin: 1.5rem 9.375rem;
            font-size: 1.5rem;
            border: none;
            color: white;
            font-weight: 500;
            height: 3rem;
            border-radius: 30px;
            background-color: #FAB225;
        }

        &_close-btn {
            position: absolute;
            right: 0;
            margin-right: 1rem;
            top: 0;
            background: none;
            border: none;
            cursor: pointer;

            &:hover {
                opacity: 0.7;
            }
        }
    }
}

.isshown {
    background-color: #FAB225;
    cursor: pointer;
    opacity: 0.7;
}

.inactive {
    background-color: #D9D9D9;
}

.isclosed {
    display: none;
}
</style>