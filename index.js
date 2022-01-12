const { time, TimestampStyles, SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Intents, UserFlags, User, GuildMember } = require('discord.js');
require("dotenv").config();
const botToken = process.env.TOKEN;

console.log(botToken);

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Le bot est en ligne ma gueule!');
});
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Bonjour Dany!');
    } else if (commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    } else if (commandName === 'user') {
        //let user = interaction.options.get("utilisateur");
       await interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
    }else if (commandName === "google") {

        const userSearch = option.getString("recherche");
        const url `https://www.google.com/search?q=${userSearch}`
        interaction.reply(`Les infos sur Google : ${url}`)
    }
		



        
    
    }else if(commandName === 'searchImage'){


    
    }else if(commandName === 'time'){
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minute = currentDate.getMinutes();
        const second= currentDate.getSeconds()
        
    if(hours<12){
        await interaction.reply(`Hello [user],il est actuellement ${hours}:${minute}:${second},c'est le matin`)
    }
      else{
        await interaction.reply(`Hello [user],il est actuellement ${hours}:${minute}:${second},c'est le soir`)
      }  

      
       
    };
    
});
// Login to Discord with your client's token
client.login(botToken);