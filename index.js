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

   // thêm nút X vào header chat
setTimeout(() => {

    // tìm header chat Coze
    const header = document.querySelector('.coze-chat-sdk header');

    if (!header) return;

    // tránh tạo nhiều lần
    if (document.getElementById('custom-close-chat')) return;

    // cho phép absolute
    header.style.position = 'relative';

    // tạo nút X
    const closeBtn = document.createElement('div');

    closeBtn.id = 'custom-close-chat';

    closeBtn.innerHTML = '✕';

    closeBtn.style.cssText = `
        position:absolute;
        top:50%;
        right:50px;
        transform:translateY(-50%);
        color:white;
        font-size:24px;
        font-weight:bold;
        cursor:pointer;
        z-index:999999;
    `;

    // thêm vào header
    header.appendChild(closeBtn);

    // đóng cửa sổ chat
    closeBtn.onclick = () => {

        const chatWindow = document.querySelector('.coze-chat-sdk');

        if(chatWindow){

            chatWindow.style.display = 'none';
        }
    };

}, 2000);
