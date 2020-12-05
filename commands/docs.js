const Discord = require('discord.js');

module.exports = {
    name: "docs",
    description: "Gives you a meme",
    async run (client, message, args){

        const user = message.mentions.members.first();

        user.send('**Get help here!**');
    }
}