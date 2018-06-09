const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("Extasia RP");
    console.log("Connected");
});

bot.login(process.env.TOKEN);
