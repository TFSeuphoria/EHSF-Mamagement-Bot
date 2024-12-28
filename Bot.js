// Add dotenv package to load the .env file
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({ 
    intents: [
        Discord.Intents.FLAGS.GUILDS, 
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES, 
        Discord.Intents.FLAGS.GUILD_MEMBERS 
    ] 
});

// Verify that the token is being read correctly
console.log('Bot token:', process.env.DISCORD_TOKEN);

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', (message) => {
    if (message.content.toLowerCase() === '!ping') {
        message.channel.send('Pong!');
    }
});

// Login using the token from .env
client.login(process.env.DISCORD_TOKEN)
    .catch((err) => {
        console.error('Error logging in:', err.message);
    });
