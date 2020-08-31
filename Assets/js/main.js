const reply_btn = document.getElementsByClassName('left_btn_reply');
var reply_box = document.getElementById('reply1');

function replyBoxEvent(){
    if(reply_box.className == "replies"){
        reply_box.className = "replies_show"
    } else{
        reply_box.className = "replies"
    }
};

reply_btn.addEventListener("click", replyBoxEvent());