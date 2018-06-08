const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("Extasia RP");
    console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Immigré");
    member.guild.channels.find("name", "bienvenue").send(`Bienvenue ${member.user.username} sur Extasia RP, merci de lire le règlement, et les informations nécessaires pour la poursuite sur notre serveur discord et pour rejoindre notre serveur GTA RP. 
Vous pouvez inviter vos amis sur le discord à l'aide du lien suivant :
https://discord.gg/Zw7qQau`)
    member.addRole(role)
})

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
    }})

bot.on('message', message => {

    if(message.content === prefix + "informations") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information du Discord")
        .addField("Le serveur a ouvert le")
        .addField("Sur discord, nous somme un total de", message.guild.memberCount)
        .addField("Le site internet de notre serveur est", "http://extasia-rp.fr/")
        .setColor("DF8E00")
    message.channel.sendEmbed(embed)
    
        }
    
    if (message.content.startsWith(prefix + "sondage")) {
        if(message.author.id == "216241946190938112"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed() 
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondez à la question avec :white_check_mark: ou :x:")
                .setColor("FF0000T")
                .setTimestamp()
            message.guild.channels.find("name", "annonce-officielle").sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() {
            });
            }else{
                return message.reply("Vous n'avez pas la permission.")
}}})

bot.on('message', message => {

    if(message.content === prefix + "commandes") {
        var embed = new Discord.RichEmbed()
        .setDescription("__**Les commandes IG**__")
        .addField("Ouvrir le coffre d'un véhicule", "[ALT + E]")
        .addField("Ouvrir le menu personnel", "[F5]")
        .setColor("3AFF00")
    message.channel.sendEmbed(embed)
}})

bot.on('message', message => {

    if(message.content === prefix + "rappel") {
        var embed = new Discord.RichEmbed()
        message.delete().catch();
        .setDescription("**__Rappel : OBLIGATOIRE__** @everyone")
        .addField("Ces informations sont indispensables pour votre immigration", "Merci de mettre votre **__NOM__** et **__PRÉNOM RP__** sur **__DISCORD__** ainsi que sur **__STEAM__**")
        .setColor("FF0000")
    message.channel.sendEmbed(embed)
        
}})


