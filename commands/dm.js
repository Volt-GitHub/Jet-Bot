module.exports = {
    name: "dm",
    description: "DM a user in the guild",
    category: "fun",
    run: async (bot, message, args) => {
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
      if (!args.slice(1).join(" "))
        return message.channel.send("You did not specify your message");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("That user could not be DMed!"))
        .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
    },
  };