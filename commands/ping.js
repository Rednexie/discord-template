module.exports = {
    config: {
      name: "ping",
      description: "ping",
      usage: "!ping",
      aliases: ["ping", "latency", "delay", ""]
    },
    run: async (client, message, args) => {
      message.reply("pong!")
    }
  }