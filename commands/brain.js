const Discord = require('discord.js')

module.exports = {
    name: "brain",
    description: "see how much brain u got!",

    async run (client, message, args) {


        var randNum = Math.random() * 101;
        randNum = Math.round(randNum);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(` You have a ${randNum}% bigger brain than average! 🧠`)


        message.channel.send(embed);
    }
}

