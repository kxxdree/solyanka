<template>
    <div class="mainpage">
        <header>
            <div class="mainpage_header">
                <img src="../../assets/images/headerLogo.svg" alt="Solyanka Chat" class="mainpage_header_img">
                <nav class="mainpage_header_nav">
                    <li class="mainpage_header_nav_item">
                        <router-link to="/">Главная</router-link>
                    </li>
                    <li>
                        <router-link to="">О сервисе</router-link>
                    </li>
                </nav>
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
    }
}
</style>