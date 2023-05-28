<template lang="">
        <div class="homepage">
            <HomePageHeader />
                <div class="wrapper">
                    <div class="leftside-bar">
                        <button class="leftside-bar_btn" @click="addNewChat">+ Создать чат</button>
                        <div class="chat-list" v-for="(chatItem, index) in chatList" :key="chatItem.id">
                            <div class="chat-list_item" @click="openChat(chatItem.id)">
                                <img 
                                    :src="'src/assets/images/chats/' + chatItem.icon" 
                                    alt="" 
                                    class="chat-list_item-picture"
                                />
                                <div class="chat-list_item-name">
                                    {{chatItem.name}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rightside-bar">
                        <div class="rightside-bar_chat-item" v-for="(questionItem, index) in questionList" :key="index">
                            <p>{{questionItem}}</p>
                        </div>
                        <div class="rightside-bar_chat-item_answer">
                            <p>{{questionAnswer}}</p>
                        </div>
                        <!-- <FooterInput /> -->
                        <footer class="footer">
                            <div class="footer_wrapper">
                                <ModalRoles v-if="isShown" />
                            <input type="text" class="footer_wrapper_input" v-on:keypress.enter="addQuestion" v-model="question" >
                            <button class="footer_wrapper_input_btn-one" @click="toShowRoles" :class="{onhover : onHover}">
                                <img src="../../assets/images/theme-button.svg" alt="Выбрать роль">
                            </button>
                            <button class="footer_wrapper_input_btn-two" @click="addQuestion" :class="{onhover : onHover}" v-on:keypress.enter="addQuestion">
                                <img src="../../assets/images/send-button.svg" alt="Отправить">
                            </button>
                        </div>
                        </footer>
                    </div>
                </div>
        </div>
    </template>
<script>
import HomePageHeader from './HomePageHeader.vue';
import FooterInput from './FooterInput.vue';
import ModalRoles from './ModalRoles.vue';
import axios from 'axios'

export default {
    components: {
        HomePageHeader,
        FooterInput,
        ModalRoles
    },
    data() {
        return {
            chatList: [],
            chatItem: 'Новый чат',
            curChatId: null,
            curChat: null,
            question: '',
            questionList: [],
            isShown: false,
            onHover: true,
            questionAnswer: '',
            domain: 'http://92.63.105.255/api'
        }
    },
    async mounted() {
        await axios.get(
            this.domain + '/chat?user_id=' + this.$store.state.user
        )
            .then(response => {
                this.chatList = response.data;
                this.curChat = response.data[0];
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
            })
        
        await axios.get(
            this.domain + '/chat/' + this.curChat.id + '?user_id=' + this.$store.state.user
        )
            .then(response => {
                console.log(response);
                this.questionList = response.data.history
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
            })
    },
    methods: {
        async addQuestion() {
            let postData = {};
            let url = '';
            
            url = 'http://92.63.105.255/api/request?user_id=' + this.$store.state.user;
            postData = { name: this.inputValue, text: this.areaContent, icon: this.areaPics };
            
            await axios.post(url, postData)
                .then(response => {
                    showModal = !showModal
                })
                .catch(error => {
                    this.errorMessage = error.response.data.message
                })
            this.questionList.push(this.question)
            this.question = ''
        },
        openChat() {

        },
        addNewChat() {
            // const url = 'http://92.63.105.255/api/chat/create'
            // let createData = {
            //     name: '',
            //     icon: '',
            //     text: ''
            // }
            // await axios.post(url, createData)
            // .then(response => {

            // })
            // .catch(error => {
            //     this.errorMessage = error.response.data.message
            // })
        },
        toShowRoles() {
            this.isShown = !this.isShown
        },
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
    border-right: 1px solid #BFBFBF;

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
    width: 100%;

    &_chat-item {
        width: 6rem;
        background-color: #FEF0D3;
        padding: 0.5rem 1rem;
        display: flex;
        width: 50vw;
        margin: 2.5rem 10rem;
        font-size: 1.5rem;
        color: #3C1900;
        border-radius: 30px;
    }

    &_chat-item_answer {
        width: 6rem;
        background-color: #F5F5F5;
        ;
        padding: 0.5rem 1rem;
        display: flex;
        width: 50vw;
        margin: 2.5rem 10rem 0;
        font-size: 1.5rem;
        color: #3C1900;
        border-radius: 30px;
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

.footer {
    position: absolute;
    bottom: 1rem;
    display: flex;
    flex-direction: column;

    &_wrapper {
        width: 100%;

        &_input {
            margin: auto 6rem;
            height: 6rem;
            border-radius: 30px;
            width: 55vw;
            font-size: 1.5rem;
            padding-left: 1rem;
            box-shadow: 0px 0px 32px 0 rgba(0, 0, 0, 0.14);
            border: 1px solid #BFBFBF;
            outline: none;
        }

        .footer_wrapper_input_btn-one {
            position: absolute;
            right: 15rem;
            bottom: 31px;
            background: none;
            border: none;
            cursor: pointer;
        }

        .footer_wrapper_input_btn-two {
            position: absolute;
            right: 10rem;
            background: none;
            border: none;
            cursor: pointer;
            bottom: 25px;
        }
    }

}

.onhover {
    :hover {
        opacity: 0.7;
    }
}
</style>