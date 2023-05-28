<template>
    <div class="mainpage">
        <header>
            <div class="mainpage_header">
                <router-link to="/">
                    <img src="../../assets/images/headerLogo.svg" alt="Solyanka Chat" class="mainpage_header_img">
                </router-link>
                <div class="mainpage_header_nav">
                    <router-link to="/homepage">
                        <button class="mainpage_header_nav_btn">Главная</button>
                    </router-link>
                    <button class="mainpage_header_nav_btn">О сервисе</button>
                </div>
                <div style="align-items: center; display: flex;">
                    <img src="../../assets/images/username.svg" alt="Логотип" style="margin-right: 0.5rem ;">
                    <button class="mainpage_header_username">Имя пользователя</button>
                </div>
            </div>
        </header>
        <div class="mainpage_wrapper">
            <div class="mainpage_wrapper_heading">
                <h1 class="mainpage_wrapper_heading_title">Солянка Chat самая дружелюбная АИ</h1>
                <p class="mainpage_wrapper_heading_subtitle">Она всегда рада новым знакомствам Зарегистрируйтесь сейчас и
                    получите
                    безграничную влась над Солянкой</p>
                <div class="mainpage_wrapper_heading_btns">
                    <router-link to="/login">
                        <button class="mainpage_wrapper_heading_btns_btn" style="margin-right: 7rem;">Войти</button>
                    </router-link>
                    <router-link to="/signup">
                        <button class="mainpage_wrapper_heading_btns_btn">Зарегистрироваться</button>
                    </router-link>
                </div>
            </div>
            <img src="../../assets/images/mainpage-pic.svg" alt="Лого" class="mainpage_wrapper_logo">
        </div>
        <div class="about">
            <h2 class="about_title">О сервисе</h2>
            <p class="about_subtitle"><strong>Солянка Chat</strong> - творческая версия АИ, с помощью которой каждый человек
                может
                персонализировать Chat GPT. Помимо <strong>выбора существующей роли</strong> со специальном промтом из
                списка вы можете
                создать <strong>собственные правила</strong> адаптировав чат под себя. Все ограничивается только вашими
                <strong>желаниями</strong>
            </p>
        </div>
        <footer class="footer">
            <p class="footer_text">©️ Team Солянка 2023</p>
        </footer>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.mainpage {
    display: flex;
    flex-direction: column;
}

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

.mainpage_wrapper_heading {
    margin-left: 16rem;
    margin-top: 8rem;
    width: 66rem;
    display: flex;
    flex-direction: column;
    height: 100vh;


    &_title {
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: 0;
    }

    &_subtitle {
        font-size: 2.5rem;
        margin-top: 0.5rem;
    }

    &_btns {
        display: flex;
        align-items: center;

        &_btn {
            font-size: 2.5rem;
            border-radius: 30px;
            background: none;
            border: none;
            cursor: pointer;
            background-color: #D9D9D9;
            padding: 0.5rem 2rem;
            color: white;

            &:hover {
                background-color: #FAB225;
            }
        }
    }
}

.mainpage_wrapper_logo {
    position: absolute;
    right: 0;
    bottom: 0;
}

.about {
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
    width: 66.25rem;
    margin-top: -15rem;

    &_title {
        font-size: 3rem;
        color: #3C1900;
    }

    &_subtitle {
        font-size: 3rem;
        color: #3C1900;
    }
}

.footer {
    position: relative;
    bottom: 0;
    text-align: center;
    border-top: 1px solid #3C1900;

    &_text {
        font-size: 2rem;
    }
}
</style>