const Discord = require('discord.js');

module.exports = {
    name: "mute",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if (!message.member.hasPermission("MUTE_MEMBERS")) {
            return message.channel.send(
              "Sorry but you do not have permission to mute anyone"
            );
          }
      
          if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I do not have permission to manage roles.");
          } 
            const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the user you would like to mute."
      );
    }
 
    if(user.id === message.author.id) {
      return message.channel.send("Dont mute yourself. -_-");
    }

    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Please Give the reason to mute the member")
    }

      
    let muterole = message.guild.roles.cache.find(x => x.name === "JetMuted")
    
    
      if(!muterole) {
      return message.channel.send("This server do not have role with name `JetMuted`, Please add one for this feature to work!")
    }
    
    if(user.roles.cache.has(muterole)) {
        return message.channel.send("Given User is already muted")
      }

      user.roles.add(muterole)
    
await message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
    
    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
    }
}