<template lang="">
    <div>
        <header class="header">
            <router-link to="/">
                <img src="../assets/images/headerLogo.svg" alt="Solyanka Chat" class="header_img">
            </router-link>
            <div class="header_btns" v-show="this.$route.name !== 'homepage'">
                <button class="header_btns_button"></button>
                <button class="header_btns_button" style="background-color: black"></button>
            </div>
        </header>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &_img {
        width: 8rem;
        height: 7rem;
        margin-left: 15rem;
    }

    &_btns {
        display: flex;
        gap: 2rem;
        margin-right: 15rem;

        &_button {
            border-radius: 50%;
            border: 1px solid black;
            width: 1.8rem;
            height: 1.8rem;
            background-color: white;
            cursor: pointer;
        }
    }
}
</style>