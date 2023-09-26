const { admins } = require("../../config.json")
const consoled = require("consoled.js")

module.exports = {
    config: {
      name: "logout",
      description: "logout",
      usage: "logout"
    },
    run: async (client, message, args) => {
      if(!admins.includes(message.author?.id)) return message.reply("only for admins")
      consoled.red(`Logged out: ${message.author?.id}`)
      await client.destroy()

    }
  }
