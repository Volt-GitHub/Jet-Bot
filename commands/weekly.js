const Discord = require('discord.js')

const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "weekly",
    description: "Receive a weekly award of money",

    async run (client, message, args) {


        let user = message.author;
        let timeout = 604800000;
        let amount = 10000;

        let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

        if(weekly !== null && timeout - (Date.now() - weekly) > 0){
            let time = ms(timeout - (Date.now() - weekly));

            return message.channel.send(`You've already collected your daily award. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`weekly_${message.guild.id}_${user.id}`, Date.now());

            message.channel.send(`Successfully added ${amount} coins to your account!`)
        }
    }
}