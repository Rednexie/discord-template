module.exports = {
    name: "ping", 
    description: "ping",
    usage: "ping",
    options: [],
    run: async (interaction, client) => {
      const start = Date.now();
      interaction.reply({
        content: "Sunucu ile aranızdaki gecikme alınıyor...", 
        ephemeral: true,
      }).then(msg => {
        const end = Date.now();
        const ping = end - start;
        msg.edit({
          content: "Ping Info\nDiscord.js WebSocket: " + client.ws.ping + "\nLatency: " + ping,
          ephemeral: true,
        })
      })
    }
  }