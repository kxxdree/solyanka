<template>
    <div class="mainpage">
        <header>
            <div class="mainpage_header">
                <router-link to="/homepage">
                    <img src="../../assets/images/headerLogo.svg" alt="Solyanka Chat" class="mainpage_header_img">
                </router-link>
                <div class="mainpage_header_nav">
                    <router-link to="/homepage">
                        <button class="mainpage_header_nav_btn">Главная</button>
                    </router-link>
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
    justify-content: space-between;

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

    &_username {
        font-size: 2rem;
        margin-right: 16rem;
        background: none;
        border: none;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
}
</style>