const Discord = require('discord.js');
const bot = new Discord.Client();
const db = require('quick.db')

const func = require('./functions.js');
console.log(func)

// Paramètres du bot
const prefix = '*';

bot.on('message', message => {

  // Variables
  let msg = message.content.toUpperCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();

  if (sender.bot) return;
  if (!message.content.startsWith(prefix)) return;

  // Commande Handler
  try {

    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(bot, message, args, func);

  } catch(e) {

      console.log(e.message);

  } finally {

      console.log(`${message.author.username} utilise la commande: ${cmd}`);

  }

});

bot.on('message', message => {
  if(message.content === prefix + "rappel") {
    message.delete()
    if (!message.member.roles.find("name", "STAFF")) {
      message.channel.send('Vous avez besoin du rôle \'STAFF\' pour utiliser cette commande.');
      return;
    }
    var embed = new Discord.RichEmbed()
      .setDescription("**__Rappel : OBLIGATOIRE__** @everyone")
      .addField("Ces informations sont indispensables pour votre immigration.", "Merci de mettre votre **__NOM__** et **__PRENOM RP__** sur **__DISCORD__** ainsi que sur **__STEAM__**")
      .setColor("FF0000")
    message.channel.send({embed})
}});


// Bot prêt !
bot.on('ready', () => {
  // Message dans la console : Le bot est prêt.
  console.log('Le bot est prêt.')
});

bot.on('guildMemberAdd', guildMember => {
  db.fetch(`autoRole_${guildMember.guild.id}`).then(i => {
    if (!i === null) return;
    else {

      try {
        guildMember.addRole(guildMember.guild.roles.find('name', i))

      } catch (e) {
          console.log("Une personne essaye d'autorole un rôle invalide à quelqu'un")

      }
    }
  })
});

// Login du bot
bot.login('process.env.TOKEN');
