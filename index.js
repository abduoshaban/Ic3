const {Client,ActivityType} = require("discord.js");

const client = new Client({
  intents: 131071,
});

const prefix = "+"; // البريفكس

client.on("ready", () => {
  console.log(`✅ | Logged in as ${client.user.tag}!\n⭐ | By General Progs </> : discord.gg/g-p
    `);

  client.user.setActivity({
    type: ActivityType.Streaming,
    name : '𝑳𝑰𝑪 𝒑1',
    url: "https://www.twitch.tv/fxdark1."
  });

});


const express = require('express');
const app = express();
app.listen(() => console.log(('General Progs Help you every time ↗️ ')));
app.use('/ping', (req, res) => {  res.send(new Date());
});

//==================== MENTION BOT  ===============================

client.on("messageCreate" , (message) => {
  if(message.content == `<@${client.user.id}>`){
    if(message.author.bot) return;
    message.reply(`Hi I'm *voice 24h* bot , My prefix is \`${prefix}\``)
  }
})

//==================== MENTION BOT ===============================

//==================== VOICE JOINER ===============================
const { joinVoiceChannel } = require('@discordjs/voice');

    setInterval( async () => {
    client.channels.fetch("1211401935844941874") // ايدي الروم الصوتي
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { console .log(`I don't found the voice room`)});
    }, 1000)

//==================== VOICE JOINER ===============================

client.login("MTE1MTU1NzI5NDczMjA5NTQ5MA.GS4_iw.vfxUjAJnrd_72Abje1cjOC7010_a4BYB5ORV2I"); // توكن البوت 
