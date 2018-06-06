const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Extasia RP");
    console.log("Connected");
});

bot.login("NDUzODI1MjI5Nzk4NTA2NDk2.DfkldA.0nT_CCA-apB7vG1EBXFqdbbeI6A");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour :)");
        console.log("Commande ça va effectué");
    }

     if (message.content === "ça va ?"){
        message.reply("ça va très bien et toi ?");
        console.log("Commande ça va effectué");
    }

});
