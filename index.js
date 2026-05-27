// ======================================
// COZE WEB SDK CHAT
// COPY LÀ CHẠY
// ======================================

const cozeChat = new CozeWebSDK.WebChatClient({

    // ==================================
    // CONFIG
    // ==================================
    config: {

        type: 'bot',

        // BOT ID
        bot_id: '7641821512684961797',

        // render trực tiếp
        isIframe: false,
    },

    // reset room mỗi lần reload
    component_id: 'chat_' + Date.now(),

    // ==================================
    // TOKEN
    // ==================================
    auth: {

        type: 'token',

        token: 'pat_RTSt5kZjsp6vdYAM8orR0uPuxFaXf4OtuCKCBV8bQ2D1Sk8DDDcPeSQoOURYvhn4',

        onRefreshToken: async () => {

            return 'pat_RTSt5kZjsp6vdYAM8orR0uPuxFaXf4OtuCKCBV8bQ2D1Sk8DDDcPeSQoOURYvhn4';
        }
    },

    // ==================================
    // USER INFO
    // ==================================
    userInfo: {

        id: 'user',

        nickname: 'User',

        url: 'https://sf-coze-web-cdn.coze.com/obj/eden-sg/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png'
    },

    // ==================================
    // UI
    // ==================================
    ui: {

        base: {

            icon: 'https://sf-coze-web-cdn.coze.com/obj/eden-sg/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png',

            layout: 'pc',

            lang: 'vi',

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


// ======================================
// CSS
// ======================================

const style = document.createElement('style');

style.innerHTML = `

/* Nút đóng trong header */

#custom-chat-close{

    position:absolute;

    top:12px;

    right:12px;

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

#open-chat-btn:hover{

    opacity:0.9;
}

`;

document.head.appendChild(style);


// ======================================
// TẠO NÚT MỞ CHAT
// ======================================

const openBtn = document.createElement('button');

openBtn.id = 'open-chat-btn';

openBtn.innerHTML = '💬';

document.body.appendChild(openBtn);


// ======================================
// THÊM NÚT X VÀO HEADER CHAT
// ======================================

function addCloseButton(){

    // tìm header Coze
    const header = document.querySelector('[class*="header"]');

    // tránh tạo nhiều lần
    if(!header || document.getElementById('custom-chat-close')) return;

    // relative để button absolute hoạt động
    header.style.position = 'relative';

    // tạo button
    const closeBtn = document.createElement('button');

    closeBtn.id = 'custom-chat-close';

    closeBtn.innerHTML = '✕';

    // thêm vào header
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


// ======================================
// MỞ LẠI CHAT
// ======================================

openBtn.onclick = () => {

    const chat = document.querySelector(
        '[class*="coze"], .coze-web-sdk-chat-container'
    );

    if(chat){

        chat.style.display = 'block';
    }

    // ẩn nút mở
    openBtn.style.display = 'none';
};


// ======================================
// ĐỢI COZE RENDER XONG
// ======================================

const waitChat = setInterval(() => {

    const header = document.querySelector('[class*="header"]');

    if(header){

        addCloseButton();

        clearInterval(waitChat);
    }

}, 1000);
