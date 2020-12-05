const Discord = require('discord.js')

module.exports = {
    name: "botping",
    description: "gives connection status",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${client.ws.ping}\`ms`);


        message.channel.send(ping);
    }
}