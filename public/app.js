let tg = null;

if (window.Telegram && window.Telegram.WebApp) {
    tg = window.Telegram.WebApp;
    tg.expand(); // растянуть на весь экран в Telegram
}

const btn = document.getElementById("startBtn");

btn.addEventListener("click", () => {
    if (tg) {
        // Если открыто как мини-апп в Telegram
        tg.showAlert("Мы строим New Riga Mini App. Скоро тут будет функционал!");
    } else {
        // Если просто открыто в браузере
        alert("Мы строим New Riga Mini App. Скоро тут будет функционал!");
    }
});
