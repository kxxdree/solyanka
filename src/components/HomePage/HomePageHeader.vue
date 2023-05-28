<template lang="">
    <div>
        <header class="hp-header">
                <router-link to="/">
                    <img src="../../assets/images/headerLogo.svg" alt="header_img">
                </router-link>
            <div class="hp-header_btns">
                <router-link to="/signup">
                    <button class="hp-header_btn">Регистрация</button>
                </router-link>
                <router-link to="/login">
                    <button class="hp-header_btn">Авторизация</button>
                </router-link>
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: 0px 10px 15px 0 rgba(0,0,0,0.10);

    &_btn {
        font-size: 2rem;
        text-decoration: underline;
        background: none;
        border: none;
        cursor: pointer;
        margin-left: 6rem;
        margin-right: 1.5rem;
        color: #3C1900;

        &:hover {
            opacity: 0.7;
        }
    }
}
</style>