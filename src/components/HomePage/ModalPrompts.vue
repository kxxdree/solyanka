<template lang="">
    <div class="prompts-wrapper">
      <form class="prompts-wrapper_form">
        <label for="role-name" class="prompts-wrapper_form_label">Название роли:</label>
        <input type="text" id="role-name" class="prompts-wrapper_form_input" v-model="inputValue">
        <label for="prompts" class="prompts-wrapper_form_label">Промты:</label>
        <textarea id="prompts" cols="30" rows="5" class="prompts-wrapper_form_textarea" v-model="areaContent"></textarea>
        <label for="pics" class="prompts-wrapper_form_label">Обозначения:</label>
        <textarea id="pics" cols="30" rows="5" class="prompts-wrapper_form_textarea"></textarea>
        <button class="prompts-wrapper_form_save-btn" :class="inputValue != '' && areaContent != '' && areaPics != '' ? 'isshown' : 'inactive'">Сохранить</button>
      </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputValue: '',
            areaContent: '',
            areaPics: ''
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
</style>