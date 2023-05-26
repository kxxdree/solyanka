<template lang="">
    <div>
        <HomePageHeader />
        <div class="wrapper">
            <div class="leftside-bar">
                <button class="leftside-bar_btn">+ Создать чат</button>
            </div>
        </div>
    </div>
</template>
<script>
import HomePageHeader from './HomePageHeader.vue';
export default {
    components: {
        HomePageHeader
    }
}
</script>
<style lang="scss">
.wrapper {
    background-image: url('../../assets/images/homepage-background.svg');
    height: 100vh;
    display: flex;
}

.leftside-bar {
    display: flex;
    flex-direction: column;
    width: 23rem;
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
            opacity: 0.7;
        }
    }
}
</style>