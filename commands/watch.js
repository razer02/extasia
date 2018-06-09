const {RichEmbed} = require("discord.js");

exports.run = async (client, message, args, func) => {
  if (message.author.id == "216241946190938112") {
      var nameResult = args.join(' ');
        if (!nameResult) nameResult = null;
client.user.setActivity(nameResult, {type: "WATCHING"});
  let embed = new RichEmbed()
  .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
  .setDescription(`Le bot Extasia RP regarde actuellement ${nameResult} `)
  message.channel.send(embed)
  } else {
    let embed2 = new RichEmbed()
    .setTitle("Vous n'avez pas la permission.")
    message.channel.send(embed2)
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "setWatching",
  category: "Owner",
  description: "Sets new bot game in watching form",
  usage: "setWatching"
};
