module.exports = {
    name: "purge",
    description: "Clears messages",

    async run (client, message, args) {

        const amount = args.join(" ");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t use that!')

        if(!amount) return message.reply('please provide an amount of messages for me to delete')

        if(amount > 100) return message.reply(`you cannot clear more than 100 messages at once`)

        if(amount < 1) return message.reply(`you need to delete at least one message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('Success!')

    }
}