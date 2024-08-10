/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
  GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */

const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
const express = require('express');
require('dotenv').config();

const client = new Client({
  intents: Object.values(GatewayIntentBits),
});

const app = express();
const port = 3000;

const statusMessages = ["Playing Games", "Gambling 🤑"];
let currentIndex = 0;

app.get('/', (req, res) => {
  res.send('🎉 Yipee Your Bot Status Changed✨');
});

app.listen(port, () => {
  console.log(`🔗 Listening on http://localhost:${port}`);
  console.log('🔗 Server is running');
});

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
    console.log(`\x1b[36m%s\x1b[0m`, `|    ✨ ${client.user.tag} is now shining`);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🔥 Wassup Kazy`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom }],
    status: 'dnd',
  });

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 15000);
});

login();

/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */
