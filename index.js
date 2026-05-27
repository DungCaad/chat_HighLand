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


// thêm nút X vào header chat
setTimeout(() => {

    // tìm root chat
    const chatRoot = document.querySelector('.coze-chat-sdk');

    if (!chatRoot) {
        console.log('Không tìm thấy chat');
        return;
    }

    // tìm header đỏ
    const header = chatRoot.querySelector('header');

    if (!header) {
        console.log('Không tìm thấy header');
        return;
    }

    // tránh tạo nhiều lần
    if (document.getElementById('close-chat-btn')) return;

    // cho absolute hoạt động
    header.style.position = 'relative';

    // tạo nút X
    const closeBtn = document.createElement('div');

    closeBtn.id = 'close-chat-btn';

    closeBtn.innerHTML = '✕';

    closeBtn.style.cssText = `
        position:absolute;
        right:60px;
        top:50%;
        transform:translateY(-50%);
        color:white;
        font-size:22px;
        font-weight:bold;
        cursor:pointer;
        z-index:999999;
        user-select:none;
    `;

    // thêm vào header
    header.appendChild(closeBtn);

    // click đóng chat
    closeBtn.onclick = () => {

        chatRoot.style.display = 'none';
    };

}, 3000);
