// index.js - Telegram X Bot
const { Telegraf } = require('telegraf');
const express = require('express');

const app = express();
const BOT_TOKEN = process.env.BOT_TOKEN || 'YOUR_BOT_TOKEN_HERE';
const bot = new Telegraf(BOT_TOKEN);

// Web interface
app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>🤖 X Bot</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body { font-family: Arial; padding: 20px; text-align: center; }
        .bot-name { color: #1DA1F2; font-size: 24px; }
        .status { background: #e8f5e9; padding: 15px; border-radius: 10px; }
      </style>
    </head>
    <body>
      <h1>🤖 X Engagement Bot</h1>
      <div class="status">
        <p>✅ Bot is running 24/7!</p>
        <p>Open Telegram and use your bot</p>
      </div>
      <p>GitHub → Replit → Telegram = 🚀</p>
    </body>
    </html>
  `);
});

// Telegram bot
bot.start((ctx) => {
  ctx.reply(`🤖 X Engagement Bot

Send me a tweet URL to engage with commenters!

Example: https://x.com/username/status/1234567890

I'll help you:
1. Find commenters
2. Reply to them
3. Follow them
4. Get follow-backs

Bot runs 24/7 on Replit!`);
});

bot.on('text', (ctx) => {
  const text = ctx.message.text;
  if (text.includes('x.com/') && text.includes('/status/')) {
    ctx.reply(`🎯 Target: ${text}

✅ Bot received your tweet URL!
(Full engagement would run here)

You can continue using your phone normally.`);
  } else {
    ctx.reply('Send me a tweet URL to get started!');
  }
});

// Keep alive
setInterval(() => {
  console.log('✅ Bot alive:', new Date().toLocaleTimeString());
}, 300000);

// Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Web server started'));
bot.launch().then(() => console.log('Telegram bot started!'));
