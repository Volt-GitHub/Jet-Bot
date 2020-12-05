const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "dadjoke",
    description: "Gives you a dad joke",
    async run (client, message, args){
        const RandomDadJoke = ["Dad, did you get a haircut? No, I got them all cut!", "Why don't eggs tell jokes? They'd crack each other up!", "Why couldn't the bicycle stand up by itself? It was two tired.", "Why can't a nose be 12 inches long? Because then it would be a foot.", "What time did the man go to the dentist? Tooth hurt-y.", "What concert costs just 45 cents? 50 Cent featuring Nickelback!", "How do you make a tissue dance? You put a little boogie in it.", "Why did the math book look so sad? Because of all of its problems!", "What kind of shoes do ninjas wear? Sneakers!", "How does a penguin build its house? Igloos it together.", "What do you call cheese that isn't yours? Nacho cheese.", "I'm on a seafood diet. I see food and I eat it.", "Why did the scarecrow win an award? Because he was outstanding in his field.", "I made a pencil with two erasers. It was pointless."]
        const random = RandomDadJoke[Math.floor(Math.random() * RandomDadJoke.length)]

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${random}`)

        message.channel.send(embed);
    }
}