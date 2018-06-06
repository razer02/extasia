const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Extasia RP");
    console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - *help")
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === "ça va ?"){
        message.reply("Trés bien et toi ?");
        console.log("Commande Etat effectué");
    }
});
