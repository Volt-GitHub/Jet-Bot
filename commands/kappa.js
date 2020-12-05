const Discord = require('discord.js');

module.exports = {
    name: "kappa",
    description: "Gives you a meme",
    async run (client, message, args){
        message.channel.send('https://cdn.discordapp.com/emojis/778456886717579274.png?v=1');
    }
}