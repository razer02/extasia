const db = require('quick.db')

exports.run = (bot, message, args, func) => {

  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Vous ne pouvez pas executer cette commande')
  if (!args.join(" ")) return message.channel.send('Entrez un argument. `setAutoRole <roleName>`')

  db.set(`autoRole_${message.guild.id}`, args.join(" ").trim()).then(i => {

    message.channel.send('AutoRole a été modifié avec succès : `' + i + '`');
  })
}
