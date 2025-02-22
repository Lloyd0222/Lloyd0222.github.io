document.addEventListener("DOMContentLoaded", function() {
    console.log("サイトが読み込まれました！");

    // 言語切り替えボタンの動作
    const langSwitch = document.querySelectorAll(".language-switch a");
    langSwitch.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            alert("言語切り替えは現在準備中です。");
        });
    });
});
