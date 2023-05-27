<template lang="">
        <footer class="footer">
                <input type="text" class="footer_input">
        </footer>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.footer {
    position: absolute;
    bottom: 0;
    display: flex;

    &_input {
        margin: auto 6rem;
        height: 6rem;
        border-radius: 30px;
        width: 55vw;
        font-size: 1.5rem;
    }
}
</style>