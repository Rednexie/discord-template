module.exports = {
    config: {
      name: "cmd",
      description: "cmd",
      usage: "cmd"
    },
    run: async (client, message, args) => {
      if(!admins.includes(message.author.id)) return message.reply("only for admins")
      consoled.red(`Exited: ${message.author.id}`)
      return process.exit(0)
    }
  }
