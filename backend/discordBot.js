const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildCreate', guild => {
  console.log(`Joined server: ${guild.name}`);
  // Optional: Notify web backend or store data
});

client.login(process.env.DISCORD_BOT_TOKEN);

module.exports = client; 