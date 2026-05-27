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


// thêm nút X sau khi chat render
setTimeout(() => {

    // tìm đúng khung chat
    const chatBox = document.querySelector(
        '.coze-web-sdk-chat-container'
    );

    if (!chatBox) return;

    // tìm header bên trong chat
    const header = chatBox.querySelector('header, [class*="header"]');

    if (!header) return;

    // cho phép absolute
    header.style.position = 'relative';

    // tạo nút X
    const closeBtn = document.createElement('div');

    closeBtn.innerHTML = '✕';

    closeBtn.style.cssText = `
        position:absolute;
        right:15px;
        top:50%;
        transform:translateY(-50%);
        color:white;
        font-size:22px;
        font-weight:bold;
        cursor:pointer;
        z-index:999999;
    `;

    // thêm vào header
    header.appendChild(closeBtn);

    // đóng chat
    closeBtn.onclick = () => {

        chatBox.style.display = 'none';
    };

}, 2000);
