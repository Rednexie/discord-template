const { prefix } = require("../../config.json")
const { PermaDB } = require("perma.db")
const db = new PermaDB('perma.db', { minimize: true, memory: false, });
const cache = require("../../modules/cache")
const { admins } = require("../../config.json")

module.exports = {
    config: {
      name: "unban",
      description: "unban",
      usage: "unban"
    },
    run: async (client, message, args) => {
      if(!admins.includes(message.author.id)) return message.reply("only for admins")
      const id = args[0]
      if(typeof id != "string" || id.trim() == "") return message.reply(`${prefix}unban <id>`)
      cache.remove(`ban@${id.trim()}`)
      let banned = await db.get("banned")
      banned = banned !== undefined && banned !== null ? JSON.parse(banned) : []
      banned = new Set([...banned])
      banned = Array.from(banned)
      if(banned.indexOf(id) == -1) return message.reply(id + " was not banned.")
      banned.splice(banned.indexOf(id), 1)
      await db.set("banned", JSON.stringify(banned))
      message.reply("Unbanned " + id)
    }
  }