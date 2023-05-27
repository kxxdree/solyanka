<template lang="">
        <footer class="footer">
                <input type="text" class="footer_input" v-on:keypress.enter="addQuestion" v-model="askQuestion">
        </footer>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        addQuestion() {
            
        }
    }
}
</script>
<style lang="scss">
.footer {
    position: absolute;
    bottom: 1rem;
    display: flex;
    flex-direction: column;

    &_input {
        margin: auto 6rem;
        height: 6rem;
        border-radius: 30px;
        width: 55vw;
        font-size: 1.5rem;
    }
}
</style>