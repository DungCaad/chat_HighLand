new CozeWebSDK.WebChatClient({
    config: {
        type: 'bot',
        bot_id: '7641821512684961797',
        isIframe: false,
    },

    // Reset chat room mỗi lần load
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

            isNeedClose: true,
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

            width: 1200,
        },
    },
});


// ====================================
// TẠO NÚT ĐÓNG CHAT
// ====================================

// tạo button
const closeBtn = document.createElement('button');

closeBtn.innerHTML = '✕';

closeBtn.id = 'close-chat-btn';

// thêm vào body
document.body.appendChild(closeBtn);


// ====================================
// CSS NÚT ĐÓNG
// ====================================

const style = document.createElement('style');

style.innerHTML = `

#close-chat-btn{

    position: fixed;

    top: 15px;

    right: 15px;

    width: 42px;

    height: 42px;

    border: none;

    border-radius: 50%;

    background: rgba(0,0,0,0.7);

    color: white;

    font-size: 22px;

    cursor: pointer;

    z-index: 999999;

    display: flex;

    align-items: center;

    justify-content: center;

    transition: 0.3s;
}

#close-chat-btn:hover{

    background: #b22830;
}

`;

document.head.appendChild(style);


// ====================================
// CLICK ĐỂ ĐÓNG CHAT
// ====================================

closeBtn.onclick = () => {

    // tìm container chat Coze
    const chat = document.querySelector(
        '[class*="coze"], .coze-web-sdk-chat-container'
    );

    if(chat){

        chat.style.display = 'none';
    }

    // ẩn luôn nút X
    closeBtn.style.display = 'none';
};
