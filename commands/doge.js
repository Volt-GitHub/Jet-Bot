const Discord = require('discord.js');

module.exports = {
    name: "doge",
    description: "Gives you a meme",
    async run (client, message, args){
        message.channel.send('https://cdn.discordapp.com/emojis/769722866412683264.png?v=1');
    }
}