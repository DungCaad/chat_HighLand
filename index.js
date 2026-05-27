// ==============================
// COZE WEB SDK FULL CONFIG
// ==============================

// Tạo chat client
const chatClient = new CozeWebSDK.WebChatClient({

    // ==============================
    // CONFIG BOT
    // ==============================
    config: {

        type: 'bot',

        // ID BOT COZE
        bot_id: '7641821512684961797',

        // Render trực tiếp lên web
        isIframe: false,
    },

    // Reset session mỗi lần load
    component_id: 'chat_' + Date.now(),

    // ==============================
    // AUTH
    // ==============================
    auth: {

        type: 'token',

        token: 'pat_RTSt5kZjsp6vdYAM8orR0uPuxFaXf4OtuCKCBV8bQ2D1Sk8DDDcPeSQoOURYvhn4',

        onRefreshToken: async () => {

            return 'YOUR_COZE_TOKEN';
        }
    },

    // ==============================
    // USER INFO
    // ==============================
    userInfo: {

        id: 'user',

        nickname: 'User',

        url: 'https://sf-coze-web-cdn.coze.com/obj/eden-sg/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png'
    },

    // ==============================
    // UI
    // ==============================
    ui: {

        // ==========================
        // BASE
        // ==========================
        base: {

            icon: 'https://sf-coze-web-cdn.coze.com/obj/eden-sg/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png',

            layout: 'pc',

            lang: 'vi',

            zIndex: 1000
        },

        // ==========================
        // HEADER
        // ==========================
        header: {

            isShow: true,

            closeable: true,
        },

        // ==========================
        // ASSIST BUTTON
        // ==========================
        asstBtn: {

            isNeed: true
        },

        // ==========================
        // FOOTER
        // ==========================
        footer: {

            isShow: false,

            expressionText: 'Powered by Coze'
        },

        // ==========================
        // CHATBOT
        // ==========================
        chatBot: {

            title: 'Hỗ trợ khách hàng',

            uploadable: true,

            width: 1200,

            height: 800
        },
    },
});


// =====================================
// TẠO NÚT X ĐÓNG CHAT
// =====================================

// Tạo button
const closeBtn = document.createElement('button');

closeBtn.id = 'close-chat-btn';

closeBtn.innerHTML = '✕';

// Append vào body
document.body.appendChild(closeBtn);


// =====================================
// STYLE CHO NÚT X
// =====================================

const style = document.createElement('style');

style.innerHTML = `

#close-chat-btn{

    position: fixed;

    top: 15px;
    right: 15px;

    width: 45px;
    height: 45px;

    border: none;

    border-radius: 50%;

    background: rgba(0,0,0,0.75);

    color: white;

    font-size: 24px;

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

/* Force hiện nút close của Coze */

.coze-web-sdk-chat-header-close,
[class*="close"],
[class*="Close"]{

    display:flex !important;

    opacity:1 !important;

    visibility:visible !important;

    cursor:pointer !important;
}

.coze-web-sdk-chat-header-close svg{

    width:20px !important;

    height:20px !important;
}

`;

document.head.appendChild(style);


// =====================================
// ĐÓNG CHAT
// =====================================

closeBtn.onclick = () => {

    // Tìm container Coze
    const chatElement = document.querySelector(
        '[class*="coze"], .coze-web-sdk-chat-container'
    );

    if(chatElement){

        chatElement.style.display = 'none';
    }

    // Ẩn nút X
    closeBtn.style.display = 'none';
};


// =====================================
// OPTIONAL: MỞ LẠI CHAT
// =====================================

window.openCozeChat = () => {

    const chatElement = document.querySelector(
        '[class*="coze"], .coze-web-sdk-chat-container'
    );

    if(chatElement){

        chatElement.style.display = 'block';
    }

    closeBtn.style.display = 'flex';
};
