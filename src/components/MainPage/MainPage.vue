<template>
    <div class="mainpage">
        <header>
            <div class="mainpage_header">
                <img src="../../assets/images/headerLogo.svg" alt="Solyanka Chat" class="mainpage_header_img">
                <div class="mainpage_header_nav">
                    <button class="mainpage_header_nav_btn">Главная</button>
                    <button class="mainpage_header_nav_btn">О сервисе</button>
                </div>
                <button class="mainpage_header_username">Имя пользователя</button>
            </div>
        </header>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.mainpage_header {
    display: flex;
    align-items: center;
    width: 30rem;

    &_img {
        margin-left: 17rem;
    }

    .mainpage_header_nav {
        margin-left: 12rem;
        display: flex;
        align-items: center;
        width: 500px;

        &_btn {
            font-size: 2rem;
            font-weight: 500;
            background: none;
            border: none;
            cursor: pointer;
            margin-right: 2rem;
            color: #3C1900;

            &:hover {
                color: #FAB225;
            }
        }
    }

    &_username {}
}
</style>