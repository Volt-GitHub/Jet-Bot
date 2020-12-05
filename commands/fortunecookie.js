const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "fortunecookie",
    description: "Gives you a fortune cookie saying",
    async run (client, message, args){
        const RandomDadJoke = ["A lifetime of happiness lies ahead of you.", "A lifetime friend shall soon be made.", "A hunch is creativity trying to tell you something.", "A good time to finish up old tasks.", "A good friendship is often more important than a passionate romance.", "A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "All the effort you are making will ultimately pay off.", "Believe in yourself and others will too.", "Competence like yours is underrated.", "Courtesy is contagious.", "Curiosity kills boredom. Nothing can kill curiosity.", "Do not let ambitions overshadow small success.", "Don’t be discouraged, because every wrong attempt discarded is another step forward.", "Don’t just think, act!", "Don’t confuse recklessness with confidence.", "Don’t just spend time. Invest it.", "Each day, compel yourself to do something you would rather not do.", "Emulate what you respect in your friends.", "Emulate what you admire in your parents.", "Every wise man started out by asking many questions.", "Failure is the chance to do better next time.", "Fear and desire – two sides of the same coin.", "From now on your kindness will lead you to success.", "go for the gold today! You’ll be the champion of whatever.", "Go take a rest; you deserve it.", "Have a beautiful day.", "How you look depends on where you go.", "If you continually give, you will continually have.", "If you think you can do a thing or think you can’t do a thing, you’re right.", "It is better to be an optimist and proven a fool than to be a pessimist and be proven right.", "It is honorable to stand up for what is right, however unpopular it seems.", "It takes courage to admit fault.", "Man is born to live and not prepared to live.", "Meditation with an old enemy is advised.", "Never fear! The end of something marks the start of something new.", "New ideas could be profitable.", "Now is the time to try something new.", "Observe all men, but most of all yourself.", "physical activity will dramatically improve your outlook today.", "Practice makes perfect.", "Resting well is as important as working hard.", "Sift through your past to get a better idea of the present.", "Soon life will become more interesting.", "Success is a journey, not a destination.", "Success is failure turned inside out.", "Success is going from failure to failure without loss of enthusiasm.", "The greatest achievement in life is to stand up again after falling.", "The only people who never fail are those who never try.", "Those who care will make the effort.", "Welcome change.", "Well done is better than well said.", "Wish you happiness.", "You are almost there.", "You are admired by everyone for your talent and ability.", "You always bring others happiness.", "With age comes wisdom.", "You are offered the dream of a lifetime. Say yes!", "You are talented in many ways.", "You will inherit a large sum of money.", "You will make change for the better.", "You will take a chance in something in near future.", "Your biggest virtue is your modesty.", "Your reputation is your wealth.", "Your mind is your greatest asset.", "Your life will be happy and peaceful.", "Your leadership qualities will be tested and proven.", "Your ideals are well within your reach.", "Your home is the center of great love.", "Your heart will always make itself known through your words.", "Your hard work will payoff today.", "Your reputation is your wealth.", "Your quick wits will get you out of a tough situation.", "Your success will astonish everyone."]
        const random = RandomDadJoke[Math.floor(Math.random() * RandomDadJoke.length)]

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${random}`)

        message.channel.send(embed);
    }
}