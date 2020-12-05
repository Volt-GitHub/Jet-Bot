const Discord = require('discord.js')

module.exports = {
    name: "simp",
    description: "see how much of a simp you are",

    async run (client, message, args) {


        var randNum = Math.random() * 101;
        randNum = Math.round(randNum);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`You are ${randNum}% more likely to simp than anyone else. 🤡`)


        message.channel.send(embed);
    }
}


