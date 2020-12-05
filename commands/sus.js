const Discord = require('discord.js')

module.exports = {
    name: "sus",
    description: "see how sus you are",

    async run (client, message, args) {


        var randNum = Math.random() * 101;
        randNum = Math.round(randNum);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`You are ${randNum}% sus. 👀`)


        message.channel.send(embed);
    }
}
