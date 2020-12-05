const slotItems = ["🍇", "🍉", "🍊", "🍎", "💎", "🍓", "🍒"];
const db = require("quick.db");
const Discord = require('discord.js');

module.exports = {
    name: "slots",

    run: async (bot, message, args) => {
        if(!message.content.startsWith('>'))return;  
    
        let user = message.author;
        let timeout = 1800000;
        let author = await db.fetch(`didthedeed_${message.guild.id}_${user.id}`);

        let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)
        let money = parseInt(args[0]);
        let win = false;
    
        let moneymore = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`You are betting more than you have`);
    
        let moneyhelp = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Specify an amount`);

        let antiexploit = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Max bet is 1000.`);

        let antiexploit2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Minimum bet is 100.`);
    
        if (!money) return message.channel.send(moneyhelp);
        if (money > moneydb) return message.channel.send(moneymore);
    
        if (money > 1000) return message.channel.send(antiexploit);
        if (money < 100) return message.channel.send(antiexploit2);
    
        let number = []
        for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }
    
        if (number[0] == number[1] && number[1] == number[2]) { 
            money *= 9
            win = true;
        } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
            money *= 2
            win = true;
        }
        if (win) {
            let slotsEmbed1 = new Discord.MessageEmbed()
                .setTitle(`Slot Machine`)
                .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou won ${money} coins`)
                .setColor("#FFFFFF")
            message.channel.send(slotsEmbed1)
            db.add(`money_${message.guild.id}_${user.id}`, money)
        } else {
            let slotsEmbed = new Discord.MessageEmbed()
                .setTitle(`Slot Machine`)
                .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou lost ${money} coins`)
                .setColor("#FFFFFF")
            message.channel.send(slotsEmbed)
            db.subtract(`money_${message.guild.id}_${user.id}`, money)
        }
    
    }
}