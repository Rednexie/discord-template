module.exports = {
    config: {
      name: "ping",
      description: "ping",
      usage: "!ping",
      aliases: ["ping", "latency", "delay", ""]
    },
    run: async (client, message, args) => {
      const start = Date.now()
      message.reply("Measuring the latency between you and the bot...").then(msg => {
        const end = Date.now()
        const ping = end - start;
        return msg.edit(`Discord.js WebSocket Ping: ${client.ws.ping}ms\nLatency: ${ping}ms
      `)
      })
    }
  }