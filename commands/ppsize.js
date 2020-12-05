const Discord = require('discord.js')

module.exports = {
    name: "ppsize",
    description: "see how much pp u have.",

    async run (client, message, args) {


        var randNum = Math.random() * 13;
        randNum = Math.round(randNum);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`You have a ${randNum} incher. Wow. 🍆`)


        message.channel.send(embed);
    }
}
