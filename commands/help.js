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
          {
            name: prefix + "short",
            value: "shortens the given url."
          },
        ]
      }
      message.reply({ content: args[0] == "the bot was mentioned in the message" ? "hello!" : "help menu", embeds: [embed]})
    }
  }
