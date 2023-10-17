const { prefix } = require("../config.json")

module.exports = {
    config: {
      name: "help",
      description: "help",
      usage: "!help"
    },
    run: async (client, message, args) => {
      const embed = {
        type: "rich",
        title: "help",
        description: "Help menu for discord-template's commands.",
        url: "https://github.com/Rednexie/discord-template",
        fields: [
          {
            name: prefix + "github",
            value: "github repository of the bot."
          },
          {
            name: prefix + "ping",
            value: "get your latency with the bot."
          },
          {
            name: prefix + "help",
            value: "shows the command help menu."
          },
        ]
      }
      message.reply({ content: "help menu", embeds: [embed]})
    }
  }
