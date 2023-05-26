<template lang="">
    <div class="login_container_title">
        <slot></slot>
        <img src="../../assets/images/loginImage.svg" alt="Welcome back!" class="login_container_img">
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.login_container_title {
    width: 43rem;
    text-align: center;

    &_text {
        font-size: 2.5rem;
        color: #3C1900;
        margin-bottom: 0;
    }
}

.login_container_img {
    width: 35rem;
    height: 32rem;
    margin-top: 3rem;
}
</style>