const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "element",
    description: "Gives you a dad joke",
    async run (client, message, args){
        const Element = ["**Fire**", "**Air**", "**Earth**", "**Water**", "**All 4 Elements**"]
        const random = Element[Math.floor(Math.random() * Element.length)]

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`You bend ${random}!`)

        message.channel.send(embed);
    }
}