<template lang="">
    <div>
        <header class="hp-header">
                <img src="../../assets/images/headerLogo.svg" alt="header_img">
            <div class="hp-header_btns">
                <button class="hp-header_btn">Регистрация</button>
                <button class="hp-header_btn">Авторизация</button>
            </div>
        </header>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.hp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom-style: groove;

    &_btn {
        font-size: 2rem;
        text-decoration: underline;
        background: none;
        border: none;
        cursor: pointer;
        margin-left: 6rem;
        color: #3C1900;

        &:hover {
            opacity: 0.7;
        }
    }
}
</style>