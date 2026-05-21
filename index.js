new CozeWebSDK.WebChatClient({
    config: {
        type: 'bot',
        bot_id: '7641453928202469429',
        isIframe: false,
    },
    // Sử dụng component_id động để ép reset chat room mà không cần đổi User ID
    component_id: 'chat_' + Date.now(), 
    auth: {
        type: 'token',
        token: 'pat_RTSt5kZjsp6vdYAM8orR0uPuxFaXf4OtuCKCBV8bQ2D1Sk8DDDcPeSQoOURYvhn4',
        onRefreshToken: async () => 'pat_RTSt5kZjsp6vdYAM8orR0uPuxFaXf4OtuCKCBV8bQ2D1Sk8DDDcPeSQoOURYvhn4'
    }, 
    userInfo: {
        id: 'user', // Giữ nguyên ID cố định cho người dùng này
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
            isNeed: true
        },
        footer: {
            isShow: true,
            expressionText: 'Powered by ...',
        },
        chatBot: {
            title: 'Hỗ trợ khách hàng',
            uploadable: true,
            width: 390,
        },
    },
});
