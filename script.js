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

    // メニュー開閉動作
    const menuContainer = document.querySelector(".menu-container");
    const menuIcon = document.querySelector(".menu-icon");
    const menuBar = document.querySelector(".menu-bar");

    menuIcon.addEventListener("click", function(event) {
        event.stopPropagation(); // クリックイベントが親要素に伝播するのを防ぐ
        menuBar.classList.toggle("open");
    });

    // メニュー外をクリックしたら閉じる
    document.addEventListener("click", function(event) {
        if (!menuContainer.contains(event.target)) {
            menuBar.classList.remove("open");
        }
    });
});
