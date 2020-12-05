const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
name: "cleardp",

run: async (bot, message, args) => {
    if(!message.content.startsWith('>'))return;  
  
    let user = message.mentions.members.first() 

    let moneydb = await db.fetch(`money_769321513223585802_743153979093024849`)
  
    let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)
  
    let embed5 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You have cleared dead played!`);
  
    message.channel.send(embed5)
    db.subtract(`money_769321513223585802_743153979093024849`, args[0])
  
  }
}