<template lang="">
    <div class="homepage">
        <HomePageHeader />
            <div class="wrapper">
                <div class="leftside-bar">
                    <button class="leftside-bar_btn">+ Создать чат</button>
                    <div class="chat-list">
                        <p class="chat-list_item">Чат бредятины</p>
                    </div>
                </div>
                <div class="rightside-bar">
                    <div class="rightside-bar_chat-item">
                        В чем заключается задача организации?
                    </div>
                    <FooterInput />
                </div>
            </div>
    </div>
</template>
<script>
import HomePageHeader from './HomePageHeader.vue';
import FooterInput from './FooterInput.vue';
export default {
    components: {
        HomePageHeader,
        FooterInput
    }
}
</script>
<style lang="scss">
.homepage {
    height: 100vh;
}

.wrapper {
    background-image: url('../../assets/images/homepage-background.svg');
    display: flex;
    height: 100%;
    position: relative;
}

.leftside-bar {
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    background-color: white;
    border-right-style: solid;

    &_btn {
        background-color: #FAB225;
        border: none;
        border-radius: 30px;
        margin: 1rem;
        color: white;
        font-size: 2rem;
        padding: 10px;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
}

.rightside-bar {
    flex-basis: 70%;

    &_chat-item {
        width: 6rem;
        background-color: #FEF0D3;
        padding: 0.5rem;
        display: flex;
        width: 50vw;
        margin: 2.5rem 10rem;
        font-size: 1.5rem;
        color: #3C1900;
    }
}

.chat-list {
    display: flex;
    flex-direction: column;

    &_item {
        margin: 2rem auto;
        font-size: 1.5rem;
    }
}
</style>