const db = require('quick.db');
const ms = require('parse-ms');

const { MessageEmbed } = require("discord.js");

let questions = [
  {
    title: "**Which actor or actress is killed off in the opening scene of the movie Scream?**",
    options: ["Neve Campbell", "Drew Barrymore", "Courtney Cox", "Rose McGowan"],
    correct: 2,
  },
  {
    title: "**What is the highest-grossing film of all time without taking inflation into account?**",
    options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"],
    correct: 3,
  },
  {
    title: "**Which film did Steven Spielberg win his first Oscar for Best Director?**",
    options: ["E.T.", "Schindler’s List", "Catch Me If You Can", "Jaws"],
    correct: 2,
  },
  {
    title: "**Which film won the first Academy Award for Best Picture?**",
    options: ["All Quiet on the Western Front", "Sunrise", "Metropolis", "Wings"],
    correct: 4,
  },
  {
    title: "**What is the name of Quint’s shark-hunting boat in Jaws?**",
    options: ["The Orca", "The Whale", "The Dolphin", "The Shark"],
    correct: 1,
  },
  {
    title: "**What is the name of Quint’s shark-hunting boat in Jaws?**",
    options: ["The Orca", "The Whale", "The Dolphin", "The Shark"],
    correct: 1,
  },
  {
    title: "**What is the longest movie ever made?**",
    options: ["The Stand", "The Cure for Insomnia", "Dances With Wolves", "Hamlet"],
    correct: 2,
  },
  {
    title: "**What movie, starring Al Jolson, is generally considered to be the first talking picture?**",
    options: ["The Mason", "The Singing Fool", "New York Knights", "The Jazz Singer"],
    correct: 4,
  },
  {
    title: "**What was the first movie by Pixar to receive a rating higher than G in the United States?**",
    options: ["The Incredibles", "Monsters Inc.", "Toy Story 3", "Finding Dory"],
    correct: 1,
  },
  {
    title: "**What was the first movie for which the cost of obtaining rights to the soundtrack outweighed all other production costs?**",
    options: ["The Wall", "Titanic", "Clerks", "The Blair Witch Project"],
    correct: 3,
  },
  {
    title: "**What film features a fight scene in which Bruce Lee breaks Jackie Chan's neck?**",
    options: ["The Big Brawl", "Game Of Death", "South Park: Bigger, Longer & Uncut", "Enter The Dragon"],
    correct: 4,
  },
  {
    title: "**What is the name for the Jewish New Year?**",
    options: ["Hannukah", "Yom Kippur", "Rosh Hashanah", "Kwanza"],
    correct: 3,
  },
  {
    title: "**How many blue stripes are there on the U.S. flag?**",
    options: ["6", "7", "3", "0"],
    correct: 4,
  },
  {
    title: "**Which one of these characters is** ***not*** **friends with Harry Potter?**",
    options: ["Neville Longbottom", "Draco Malfoy", "Ron Weasley", "Hermione Granger"],
    correct: 2,
  },
  {
    title: "**What is the color of Donald Duck’s bowtie?**",
    options: ["Red", "Yellow", "Blue", "White"],
    correct: 1,
  },
  {
    title: "**Does the Monopoly Man wear a monocle?**",
    options: ["Yes", "No"],
    correct: 2,
  },
  {
    title: "**Which animal does not appear in the Chinese zodiac?**",
    options: ["Rabbit", "Dog", "Humming-Bird", "Dragon"],
    correct: 3,
  },
  {
    title: "**Which country held the 2016 Summer Olympics??**",
    options: ["Brazil", "U.S.A", "China", "Italy"],
    correct: 1,
  },
  {
    title: "**Which planet is the hottest?**",
    options: ["Mercury", "Saturn", "Mars", "Venus"],
    correct: 4,
  },
  {
    title: "**Wwho was the only U.S. President to resign?**",
    options: ["Barack Obama", "Richard Nixon", "George W. Bush", "Herbert Hoover"],
    correct: 2,
  },
  {
    title: "**In Pirates of the Caribbean, what was the name of Captain Jack Sparrow’s ship?**",
    options: ["The Marauder", "The Black Python", "The Slytherin", "The Black Pearl"],
    correct: 4,
  },
  {
    title: "**According to Forrest Gump, “life was like…”**",
    options: ["A bag of lemons.", "A handful of roses.", "Like a box of chocolates.", "A lollipop"],
    correct: 3,
  },
  {
    title: "**Linda and Bob from Bob’s Burgers have 3 kids. Which one of these characters is not one of them?**",
    options: ["Tina.", "Jimmy", "Gene", "Louise"],
    correct: 2,
  },
  {
    title: "**What is the rarest blood type?**",
    options: ["AB-Negative", "O", "A", "B"],
    correct: 1,
  },
  {
    title: "**Which U.S. state is known as the sunflower state?**",
    options: ["Florida", "Maine", "California", "Kansas"],
    correct: 4,
  },
  {
    title: "**How many bones are there in the human body?**",
    options: ["209", "201", "206", "205"],
    correct: 3,
  },
  {
    title: "**Fe is the chemical symbol for…**",
    options: ["Iron", "Zinc", "Hydrogen", "Fluorine"],
    correct: 1,
  },
  {
    title: "**How old do you have to be to enter the hunger games?**",
    options: ["11", "10", "15", "12"],
    correct: 4,
  },
  {
    title: "**What language is the most spoken worldwide?**",
    options: ["Spanish", "Arabic", "Chinese", "English"],
    correct: 3,
  },
  {
    title: "**What is Shakespeare’s shortest tragedy?**",
    options: ["Macbeth", "Hamlet", "Romeo & Juliet", "Othello"],
    correct: 1,
  },
  {
    title: "**What is the #1 cookie in the U.S.?**",
    options: ["Girl Scouts Thin Mints", "Oreo", "Chips Ahoy!", "Milano"],
    correct: 2,
  },
];
module.exports = {
  name: "trivia",
  description: "Test your knowledge!",
  category: "fun",
  run: async (bot, message, args) => {

    let amount = Math.floor(Math.random() * 100) + 1;

    let user = message.author;
        let timeout = 1800000;
        let author = await db.fetch(`didtrivia_${message.guild.id}_${user.id}`);
    
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Reply to this message with the correct question number! You have 20 seconds.`
      );

      const AnswerCorrect = new MessageEmbed()
      .setTitle(`You got it correct! You earned ${amount} coins!`)
      .setColor("GREEN")

      const AnswerWrong = new MessageEmbed()
      .setTitle('You got it incorrect.')
      .setColor("RED")

      const DidntAnswer = new MessageEmbed()
      .setTitle('You did not answer!')
      .setColor("YELLOW")

      if(author !== null && timeout - (Date.now() - author) > 0){
        let time = ms(timeout - (Date.now() - author));
        return message.channel.send(`You cannot get trivia again for ${time.minutes}m and ${time.seconds}s.`)
    } else {
      db.set(`didtrivia_${message.guild.id}_${user.id}`, Date.now())
        message.channel.send(Embed)
    }
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 20000, max: 1, errors: ["time"] }
      );


      if (parseInt(msgs.first().content) == q.correct) {
        db.add(`money_${message.guild.id}_${user.id}`, amount)

        return  message.channel.send(AnswerCorrect)

      } else {
        return message.channel.send(AnswerWrong);
      }
    } catch (e) {
      return message.channel.send(DidntAnswer);
    } 
  },
};