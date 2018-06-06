const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Extasia RP");
    console.log("Connected");
});

bot.login("NDUzODI1MjI5Nzk4NTA2NDk2.DfkwhQ.TcNPI6-AkJ0HpvcGa3RAkjLjYCc");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - *help")
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === "ça va ?"){
        message.reply("Très bien et toi ?");
        console.log("Commande Etat effectué");
    }
});
