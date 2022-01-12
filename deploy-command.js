const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require("dotenv").config();
//const { clientId, guildId, token } = require('./config.json');
const token = process.env.TOKEN;
const clientId = process.env.CLIENTID;
const guildId = process.env.SERVERID;


const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
    new SlashCommandBuilder().setName('time').setDescription('Replies with user info!'),
    new SlashCommandBuilder().setName('google').setDescription('Renvoie votre recherche Google!')
    .addStringOption(option =>
    option.setName('recherche')
    .setDescription('Votre recherche')
    .setRequired(true))
    
    //new SlashCommandBuilder().setName('searchImage').setDescription('Affiche une image google!')
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);