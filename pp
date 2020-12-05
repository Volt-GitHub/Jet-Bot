   let profile = await leveling.Fetch(message.author.id);
    leveling.AddXp(message.author.id, 15);

    if(profile.xp + 15 > 150){
        leveling.AddLevel(message.author.id, 1);
        leveling.SetXp(message.author.id, 0)
        message.channel.send(`Congratulations ${message.author.username}, you just advanced to level ${profile.level + 1}`)
    }
