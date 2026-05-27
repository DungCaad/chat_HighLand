// ==============================
// COZE CHAT
// ==============================

const cozeChat = new CozeWebSDK.WebChatClient({
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
            isNeedClose: false,
        },

        asstBtn: {
            isNeed: true
        },

        footer: {
            isShow: false,
        },

        chatBot: {
            title: 'Hỗ trợ khách hàng',
            uploadable: true,
            width: 1200,
            height: 800
        },
    },
});


// ==============================
// CSS
// ==============================

const style = document.createElement('style');

style.innerHTML = `

/* Nút X trong header chat */

#custom-chat-close{

    position:absolute;

    top:14px;

    right:14px;

    width:34px;

    height:34px;

    border:none;

    border-radius:50%;

    background:rgba(255,255,255,0.15);

    color:white;

    font-size:18px;

    cursor:pointer;

    z-index:999999;

    display:flex;

    align-items:center;

    justify-content:center;

    transition:0.3s;
}

#custom-chat-close:hover{

    background:rgba(255,255,255,0.3);
}


/* Nút mở lại chat */

#open-chat-btn{

    position:fixed;

    bottom:20px;

    right:20px;

    width:60px;

    height:60px;

    border:none;

    border-radius:50%;

    background:#b22830;

    color:white;

    font-size:26px;

    cursor:pointer;

    z-index:999999;

    display:none;

    align-items:center;

    justify-content:center;

    box-shadow:0 4px 12px rgba(0,0,0,0.3);
}

`;

document.head.appendChild(style);


// ==============================
// NÚT MỞ CHAT
// ==============================

const openBtn = document.createElement('button');

openBtn.id = 'open-chat-btn';

openBtn.innerHTML = '💬';

document.body.appendChild(openBtn);


// ==============================
// THÊM NÚT X VÀO HEADER CHAT
// ==============================

function addCloseButton(){

    // tìm header chat
    const header = document.querySelector('[class*="header"]');

    // tránh tạo nhiều lần
    if(!header || document.getElementById('custom-chat-close')) return;

    // đảm bảo header relative
    header.style.position = 'relative';

    // tạo nút
    const closeBtn = document.createElement('button');

    closeBtn.id = 'custom-chat-close';

    closeBtn.innerHTML = '✕';

    // append vào header
    header.appendChild(closeBtn);

    // click đóng chat
    closeBtn.onclick = () => {

        const chat = document.querySelector(
            '[class*="coze"], .coze-web-sdk-chat-container'
        );

        if(chat){

            chat.style.display = 'none';
        }

        // hiện nút mở lại
        openBtn.style.display = 'flex';
    };
}


// ==============================
// MỞ LẠI CHAT
// ==============================

openBtn.onclick = () => {

    const chat = document.querySelector(
        '[class*="coze"], .coze-web-sdk-chat-container'
    );

    if(chat){

        chat.style.display = 'block';
    }

    openBtn.style.display = 'none';
};


// ==============================
// ĐỢI CHAT RENDER
// ==============================

const interval = setInterval(() => {

    const header = document.querySelector('[class*="header"]');

    if(header){

        addCloseButton();

        clearInterval(interval);
    }

}, 1000);
