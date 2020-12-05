const Discord = require('discord.js');

module.exports = {
    name: "shop",
    description: "View the store",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`Car - 500 coins \n Watch - 250 coins \n <:pokeball:780289440643547168> \`Pokeball\` - 500 `)
        .setTimestamp();

        message.channel.send(embed);
    }
}