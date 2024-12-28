// Import the necessary modules
require('dotenv').config();  // Load environment variables from the .env file
const { Client, Intents } = require('discord.js');  // Import Discord.js library

// Create a new Discord client instance with intents
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.MESSAGE_CONTENT
  ]
});

// Log the bot into Discord
client.login(process.env.DISCORD_TOKEN)
  .then(() => {
    console.log('Bot logged in successfully!');
  })
  .catch(err => {
    console.error('Error logging in:', err);  // Log any errors that occur during login
  });

// Handle the 'ready' event (bot is logged in and ready)
client.once('ready', () => {
  console.log('Bot is online!');
});

// Handle the 'messageCreate' event (new message in the server)
client.on('messageCreate', (message) => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Handle simple commands like !ping
  if (message.content.toLowerCase() === '!ping') {
    message.reply('Pong!');
  }

  // Add additional custom commands below
  if (message.content.toLowerCase() === '!hello') {
    message.channel.send('Hello! How can I assist you today?');
  }

  // Example of a command that requires a role (Admin check)
  if (message.content.toLowerCase() === '!admin') {
    if (message.member.roles.cache.some(role => role.name === 'Admin')) {
      message.channel.send('You are an Admin!');
    } else {
      message.channel.send('You do not have the Admin role!');
    }
  }
});

// Handle the 'error' event for uncaught errors
client.on('error', (error) => {
  console.error('An error occurred:', error);
});

require('dotenv').config();  // Add this line to load the .env file
console.log(process.env.DISCORD_TOKEN);  // Verify that the token is being read correctly
