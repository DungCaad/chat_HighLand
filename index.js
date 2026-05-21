// 1. LỆNH QUAN TRỌNG: Quét sạch bộ nhớ tạm của Coze trên trình duyệt ngay khi vừa mở trang
Object.keys(localStorage).forEach(key => {
    if (key.toLowerCase().includes('coze') || key.toLowerCase().includes('interact')) {
        localStorage.removeItem(key);
    }
});

// 2. Sau khi xóa sạch bộ nhớ, tiến hành khởi tạo khung chat như bình thường
new CozeWebSDK.WebChatClient({
    /**
    * Agent or app settings
    */
    config: {
        type: 'bot',
        bot_id: '7641453928202469429',
        isIframe: false,
    },
    /**
    * The auth property is used to configure the authentication method.
    */
    auth: {
        type: 'token',
        token: 'pat_RTSt5kZjsp6vdYAM8orR0uPuxFaXf4OtuCKCBV8bQ2D1Sk8DDDcPeSQoOURYvhn4',
        onRefreshToken: async () => 'pat_RTSt5kZjsp6vdYAM8orR0uPuxFaXf4OtuCKCBV8bQ2D1Sk8DDDcPeSQoOURYvhn4'
    }, 
    /**
    * Giữ nguyên ID 'user' cố định, không cần dùng hàm Date.now() nữa
    */
    userInfo: {
        id: 'user', 
        url: 'https://sf-coze-web-cdn.coze.com/obj/eden-sg/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png',
        nickname: 'User',
    },
    ui: {
        /**
        * The ui.base parameter is used to add the overall UI effect of the chat window.
        */
        base: {
            icon: 'https://sf-coze-web-cdn.coze.com/obj/eden-sg/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png',
            layout: 'pc',
            lang: 'en',
            zIndex: 1000
        },
        /**
        * Controls whether to display the top title bar and the close button
        */
        header: {
            isShow: true,
            isNeedClose: true,
        },
        /**
        * Controls whether to display the floating ball at the bottom right corner of the page.
        */
        asstBtn: {
            isNeed: true
        },
        /**
        * The ui.footer parameter is used to add the footer of the chat window.
        */
        footer: {
            isShow: true,
            expressionText: 'Powered by ...',
        },
        /**
        * Control the UI and basic capabilities of the chat box.
        */
        chatBot: {
            title: 'Hỗ trợ khách hàng',
            uploadable: true,
            width: 390,
        },
    },
});
