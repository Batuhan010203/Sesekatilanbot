const { Client, GatewayIntentBits } = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", async () => {
  const channelId = 'botun katılacağı kanal ıd si';
  const channel = await client.channels.fetch(channelId);

  if (channel) {
    try {
      const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
      });
      console.log(`Bot joined the channel: ${channel.name}`);
    } catch (error) {
      console.error(`Error joining the channel: ${error.message}`);
    }
  } else {
    console.error(`Channel with ID ${channelId} not found.`);
  }
});

client.login(process.env.TOKEN);

const app = require('express')()
app.get('/', (req, res) => {
  res.json({ httpr: 'sa' }) //httpr yazan yere istediğinizi yazabilirsiniz orası $httpResulttaki yer. sa yazan yer ise göndereceği mesaj
})
app.listen(3000)
