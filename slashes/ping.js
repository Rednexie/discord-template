const { SlashCommandBuilder } = require('@discordjs/builders');
const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('ping')



const execute = async (interaction, client) => {
  const start = Date.now();
  interaction.reply({
    content: "Sunucu ile aranızdaki gecikme alınıyor...", 
    ephemeral: true,
  }).then(msg => {
    const end = Date.now();
    const ping = end - start;
    msg.edit({
      content: "Ping Info\nDiscord.js WebSocket: " + bot.ws.ping + "\nLatency: " + ping,
      ephemeral: true,
    })
  })
}



const config = {
  name: "ping",
  description: "ping",
  usage: "/ping"
}

module.exports = { data, execute, config };
