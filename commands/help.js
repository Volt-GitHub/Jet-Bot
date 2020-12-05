const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`>kick`', 'Kicks a member from your server via mention **Usage:** >kick @(usermention)')
        .addField('`>ban`', 'Bans a member from your server via mention **Usage:** >ban @(usermention)')
        .addField('`>purge`', 'Purges messages **Usage:** >purge (amount of messages to delete)')
        .addField('`>mute`', 'Mutes a member, **Usage:** >mute (member mention) (reason)\
(The muted role name should be "**JetMuted**" otherwise, mute wont work.')
        .addField('`>unmute`', 'Unmutes members **Usage:** >unmute (member @ of muted person)')
        .addField('`>slowmode`', 'Adds slowmode to desired channel **Usage:** >slowmode (channel mention) (slowmode time)')
        .addField('`>give-role`', 'Gives members desired role, **Usage:** >give-role (member mention) (role id) - **MAKE SURE\
        JET BOT ROLE IS ABOVE DESIRED ROLE')

        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`>meme`', 'Generates a random meme! **Usage:** >meme')
        .addField('`>ascii`', 'Converts text into ascii! **Usage:** >ascii (text to convert)\
        **with this be sure to split your text to avoid text smashing together**')
        .addField('`>sus`', 'tells how sus you are! **Usage:** >sus')
        .addField('`>brain`', 'see how big your brain is! **Usage:** >brain')
        .addField('`>ping`', 'Pong! **Usage:** >ping')
        .addField('`>8ball`', '8ball!, Everyone knows what an 8ball is, right? **Usage:** >8ball (y/n question)')
        .addField('`>dadjoke`', 'Gives a random dad joke! **Usage:** >dadjoke')
        .setTimestamp()

        const fun2 = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`>doge`', 'Sends doge face/emote. **Usage:** >doge')
        .addField('`>pog`', 'Sends PogChamp emote. **Usage:** >pog)')
        .addField('`>kappa`', 'Sends Kappa emote! **Usage:** >kappa') 
        .addField('`>hug`', 'Hug members **Usage:** >hug (member @)')
        .addField('`>fortunecookie`', 'Get a fortune! **Usage:** >fortunecookie')
        .addField('`>element`', 'Tells what element you bend! **Usage:** >element')
        .addField('`>hphouse`', 'Tells what Harry Potter house you are in! **Usage:** >hp')
        

        .setTimestamp()
        

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`>help`', 'Pretty obvious isnt it? **Usage:** >help, >commands')
        .addField('`>avatar`', 'Shows peoples avatars. **Usage:** >avatar (someones @ if desired)')
        .addField('`>say`', 'Announce/Say command for mods! **Usage:** >say (channel if desired) (message)')   
        .addField('`>botping`', 'Gives the bots ping/connection status! **Usage:** >botping')
        .addField('`>poll`', 'Creates a poll **Usage:** >poll (channel mention) (Poll info)')
        .addField('`>bot-info`', 'Checks bot stats! **Usage:** >bot-info')
        .addField('`>user-info`', 'Shows user info! **Usage:** >user-info (member @ if desired)')
        .addField('`>website`', 'Sends website/docs page! **Usage:** >website')
        .addField('`>docs`', 'Shows bot documentation! **Usage:** >docs')

        .setTimestamp()

        const economy = new Discord.MessageEmbed()
        .setTitle('Economy')
        .addField('`>bal`', 'Check how much money you have. **Usage:** >bal')
        .addField('`>daily`', 'Recieve a daily cash bonus. **Usage:** >daily')
        .addField('`>weekly`', 'Recieve a weekly cash bonus. **Usage:** >weekly')
        .addField('`>work`', 'Get some moeny by working! (can only be done every ten minutes) **Usage:** >work')
        .addField('`>trivia`', 'Gives random trivia, answer using numbers. **Usage:** >trivia')
        .addField('`>roulette`', 'Play roulette! **Usage:** >roulette <red | black | green> <bet>')
        .addField('`>slots`', 'Play slots! **Usage:** >slots <bet>')
        .addField('`>pay`', 'Pay someone! **Usage:** >pay <user> <money amount>')
        .addField('`>add-money`', 'Add someone money! **Usage:** >add-money <user> <amount>')
        .setTimestamp()

        const giveaways = new Discord.MessageEmbed()
        .setTitle('Giveaways')
        .addField('`>giveaway`', 'Starts a giveaway! **Usage:** >giveaway (channel id) (duration) (winners #) (title)')
        .addField('`>reroll`', 'Rerolls finished giveaway! **Usage:** >reroll (giveaway message id)')
        .setTimestamp()

        const animals = new Discord.MessageEmbed()
        .setTitle('Animals')
        .addField('`>dog`', 'Sends random dog photo and dog fact! **Usage:** >dog')
        .addField('`>cat`', 'Sends random cat photo and cat fact! **Usage:** >cat')
        .addField('`>panda`', 'Sends random panda photo and panda fact! **Usage:** >panda')
        .addField('`>koala`', 'Sends random koala photo and koala fact! **Usage:** >dog')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                fun2,
                utility,
                economy,
                animals,
                giveaways,
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}