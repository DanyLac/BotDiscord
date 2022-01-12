const { time, TimestampStyles, SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Intents, UserFlags, User, GuildMember } = require('discord.js');
const { url } = require('inspector');
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

    const { commandName,options } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Bonjour Dany!');
    } else if (commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    } else if (commandName === 'user') {
        //let user = interaction.options.get("utilisateur");
       await interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
    }else if (commandName === "google") {

        const userSearch = options.getString("recherche");
        const url = `https://www.google.com/search?q=${userSearch}`
        interaction.reply(`Les infos sur Google : ${url}`)
    }else if (commandName === "youtube") {

        const userSearch = options.getString("recherche");
        const url = `https://www.youtube.com/search?q=${userSearch}`
        interaction.reply(`Les infos sur Youtube : ${url}`)
    
	}else if(commandName === 'searchimage'){
        const userSearchGoogleImage = options.getString("recherche");
        const urlImage = `https://www.google.be/search?q=${userSearchGoogleImage}&hl=fr&sxsrf=AOaemvKnQn0_F0rgXON2HLkUFjhk3tFvEw:1642019793517&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj-toa0iK31AhUPyaQKHcYgCGwQ_AUoAXoECBAQAw&cshid=1642019913916797&biw=1920&bih=969&dpr=1`
        interaction.reply(`Les infos sur Google : ${urlImage}`)
    }else if(commandName === 'météo'){
        const userSearchMéteo = options.getString("recherche");
        const urlMétéo = `https://www.google.be/search?q=météo${userSearchMéteo}`
        interaction.reply(`Les infos sur Google : ${urlMétéo}`)
    
    }else if(commandName === 'time'){
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minute = currentDate.getMinutes();
        const second= currentDate.getSeconds()
        
    if(hours<12){
        await interaction.reply(`Hello ${interaction.user.username},il est actuellement ${hours}:${minute}:${second},c'est le matin`)
    }
      else{
        await interaction.reply(`Hello ${interaction.user.username},il est actuellement ${hours}:${minute}:${second},c'est le soir`)
      }  

      
       
    };
    
});
// Login to Discord with your client's token
client.login(botToken);