const Discord = require('discord.js');

module.exports = {
    name: "pog",
    description: "Gives you a meme",
    async run (client, message, args){
        message.channel.send('https://cdn.discordapp.com/emojis/769820493783367711.png?v=1');
    }
}