new CozeWebSDK.WebChatClient({

    config: {
        type: 'bot',
        bot_id: '7641821512684961797',
        isIframe: false,
    },

    component_id: 'chat_' + Date.now(),

    auth: {
        type: 'token',
        token: 'pat_RTSt5kZjsp6vdYAM8orR0uPuxFaXf4OtuCKCBV8bQ2D1Sk8DDDcPeSQoOURYvhn4',

        onRefreshToken: async () =>
            'pat_RTSt5kZjsp6vdYAM8orR0uPuxFaXf4OtuCKCBV8bQ2D1Sk8DDDcPeSQoOURYvhn4'
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
            isNeedClose: false,
        },

        asstBtn: {
            isNeed: true
        },

        footer: {
            isShow: false,
            expressionText: 'Powered by ...',
        },

        chatBot: {
            title: 'Hỗ trợ khách hàng',
            uploadable: true,
            width: 390,
        },
    },
});
