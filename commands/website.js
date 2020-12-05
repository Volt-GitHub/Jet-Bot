const Discord = require('discord.js')

module.exports = {
    name: "website",
    description: "see jet bot website",

    async run (client, message, args) {


        var randNum = Math.random() * 101;
        randNum = Math.round(randNum);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Jet Bot Website`)
        .setURL(`http://jet-bot.xyz/`)


        message.channel.send(embed);
    }
}
