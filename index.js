new CozeWebSDK.WebChatClient({
    // thêm nút X sau khi chat render
    setTimeout(() => {
    
        // tìm header chat
        const header = document.querySelector('[class*="header"]');
    
        if (!header) return;
    
        // tạo nút X
        const closeBtn = document.createElement('div');
    
        closeBtn.innerHTML = '✕';
    
        closeBtn.style.cssText = `
            position:absolute;
            right:15px;
            top:12px;
            color:white;
            font-size:20px;
            cursor:pointer;
            z-index:999999;
        `;
    
        // để absolute hoạt động
        header.style.position = 'relative';
    
        // thêm vào header
        header.appendChild(closeBtn);
    
        // click để ẩn chat
        closeBtn.onclick = () => {
    
            const chat = document.querySelector(
                '[class*="coze"], .coze-web-sdk-chat-container'
            );
    
            if(chat){
                chat.style.display = 'none';
            }
        };
    
    }, 1500);
    config: {
        type: 'bot',
        bot_id: '7641821512684961797',
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
