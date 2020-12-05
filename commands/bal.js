  const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bal",
    description: "bleh",

    async run (client, message, args) {

        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;
        
        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`**${member.username} curently has ${bal} coins**`)
        .setDescription(`You currently have ${bal} coins, you can\ 
        earn more cash by doing these things!\
         >daily,\
         >weekly,\
         >work,\
         >trivia,\
         >roulette,
         and >slots`)
        .setThumbnail(avatar)
        
        message.channel.send(embed)
    }
}