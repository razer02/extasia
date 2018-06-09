exports.run = (bot, message, args, func) => {

  async function purge() {
    message.delete(); // Efface la Commande

    // Les permissions.

    if (!message.member.roles.find("name", "STAFF")) {
      message.channel.send('Vous avez besoin du rôle \'STAFF\' pour utiliser cette commande.');
      return;
    }

    // L'arguement est un nombre.

    if (isNaN(args[0])) {
      message.channel.send('Mettez un nombre en argument. \n Usage: ' + prefix + 'purge <amount>');
      return;
    }

    const fetched = await message.channel.fetchMessages({limit: args[0]});
    console.log(fetched.size + ' Messages trouvés, en cours de suppression...');

    // Suppresion des messages
    message.channel.bulkDelete(fetched)
      .catch(error => message.channel.send(`Error: ${error}`));


  }

  purge();
}
