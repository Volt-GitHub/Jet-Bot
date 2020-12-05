const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "hphouse",
    description: "Gives you a dad joke",
    async run (client, message, args){
        const RandomDadJoke = ["**Gryffindor**", "**Hufflepuff**", "**Ravenclaw**", "**Slytherin**"]
        const random = RandomDadJoke[Math.floor(Math.random() * RandomDadJoke.length)]

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`You are in ${random}!`)

        message.channel.send(embed);
    }
}