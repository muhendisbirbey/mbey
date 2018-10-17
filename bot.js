const Discord = require('discord.js');
const bot = new Discord.Client ();


bot.on('ready', () => {
   bot.user.setStatus('idle')
  bot.user.setGame('Bilgisayar Başında Değilim')
})




bot.login(process.env.BOT_TOKEN);
