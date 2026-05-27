<button id="toggle-chat">
    Mở Chat
</button>

<script>
    const chatClient = new CozeWebSDK.WebChatClient({
        config: {
            type: 'bot',
            bot_id: '7641821512684961797',
            isIframe: false,
        },

        component_id: 'chat_' + Date.now(),

        auth: {
            type: 'token',
            token: 'YOUR_TOKEN',
            onRefreshToken: async () => 'YOUR_TOKEN'
        },

        userInfo: {
            id: 'user',
            url: 'https://sf-coze-web-cdn.coze.com/obj/eden-sg/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png',
            nickname: 'User',
        },

        ui: {
            base: {
                icon: 'https://sf-coze-web-cdn.coze.com/obj/eden-sg/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png',
                layout: 'pc',
                lang: 'en',
                zIndex: 1000
            },

            header: {
                isShow: true,
                isNeedClose: true,
            },

            asstBtn: {
                isNeed: false
            },

            footer: {
                isShow: false,
            },

            chatBot: {
                title: 'Hỗ trợ khách hàng',
                uploadable: true,
                width: 1200,
            },
        },
    });

    let isOpen = false;

    document
        .getElementById('toggle-chat')
        .addEventListener('click', () => {

            if (isOpen) {
                chatClient.hide();
                document.getElementById('toggle-chat').innerText = 'Mở Chat';
            } else {
                chatClient.show();
                document.getElementById('toggle-chat').innerText = 'Tắt Chat';
            }

            isOpen = !isOpen;
        });
</script>
