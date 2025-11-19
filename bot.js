const TelegramBot = require("node-telegram-bot-api");

// 👉 сюда вставь токен бота от BotFather
const TOKEN = "8295857185:AAXhxD6JWyYQe3LKIavM1TnEj1_Qo5pFFVg";

// 👉 сюда вставь https-ссылку ngrok, которая ведёт на твой мини-апп
const WEB_APP_URL = "https://nonvenous-jamar-rambunctious.ngrok-free.dev/";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "Добро пожаловать в New Riga Alliance 👋\n\nОткрой мини-приложение ниже:",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Открыть New Riga Alliance",
              web_app: { url: WEB_APP_URL },
            },
          ],
        ],
      },
    }
  );
});
