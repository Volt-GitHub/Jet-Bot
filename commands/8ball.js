const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "8ball",
    description: "tells you the funny",
    async run (client, message, args){
        const Ball = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.", "Yes.", "Yes – definitely.", "You may rely on it."]
        const random = Ball[Math.floor(Math.random() * Ball.length)]

        if(!args[0]) {
            return message.channel.send("Please give the question you want to ask!")
          }

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${random}`)

        message.channel.send(embed);
    }
}