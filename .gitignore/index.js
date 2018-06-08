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
        message.delete()
        if (!message.member.roles.has(message.guild.roles.find("name", "DEVBOT").id)) return message.reply("Vous n'avez pas la permission'");
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondez à la question avec :white_check_mark: ou :x:")
                .setColor("FF0000T")
                .setTimestamp()
            message.guild.channels.find("name", "test").sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() {
            });
            }else{
                return message.reply("Vous n'avez pas la permission.")
                message.delete()
}})

bot.on('message', message => {

    if(message.content === prefix + "commandes") {
        message.delete()
        var embed = new Discord.RichEmbed()
        .setDescription("__**Les commandes IG**__")
        .addField("Ouvrir le coffre d'un véhicule", "[ALT + E]")
        .addField("Ouvrir le menu personnel", "[F5]")
        .setColor("3AFF00")
    message.channel.sendEmbed(embed)
}})

bot.on('message', message => {

    if(message.content === prefix + "rappel") {
        message.delete()
        if (!message.member.roles.has(message.guild.roles.find("name", "DEVBOT").id)) return message.reply("Vous n'avez pas la permission'");
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("**__Rappel : OBLIGATOIRE__** @everyone")
                .addField("Ces informations sont indispensables pour votre immigration", "Merci de mettre votre **__NOM__** et **__PRÉNOM RP__** sur **__DISCORD__** ainsi que sur **__STEAM__**")
                .setColor("FF0000")
            message.channel.sendEmbed(embed)
    }});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "say")) {
        message.delete()
        if (!message.member.roles.has(message.guild.roles.find("name", "DEVBOT").id)) return message.reply("Vous n'avez pas la permission'");
            var embed = new Discord.RichEmbed()
                .setDescription(thingToEcho)
                .setColor("FF0000")
            message.channel.send({embed})
}});

bot.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.

    // Commands

    // Ping
    if (msg === prefix + 'PING') { // This checks if msg (the message but in all caps), is the same as the prefix + the command in all caps.

        // Now, let's send a response.
        message.channel.send('Pong!'); // This 'sends' the message to the channel the message was in. You can change what is in the message to whatever you want.

    }


    // Purge
    if (msg.startsWith(prefix + 'PURGE')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", "DEVBOT")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send(`Vous n'avez pas la permission.`); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }
});
