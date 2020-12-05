const { MessageFlags } = require("discord.js");

module.exports = {
    name: "announce",
    desciption: "say command",

    async run (client, message, args) {
        
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Sorry, but you do not have permission to do that.')

        let msg;
        let textChannel = message.mentions.channels.first()
        message.react('✅')

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}