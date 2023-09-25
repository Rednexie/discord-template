const { prefix } = require("../../config.json")
const { PermaDB } = require("perma.db")
const db = new PermaDB('perma.db', { minimize: true, memory: false, });
const cache = require("../../modules/cache")
const { admins } = require("../../config.json")

module.exports = {
    config: {
      name: "ban",
      description: "cmd",
      usage: "ban"
    },
    run: async (client, message, args) => {
      if(!admins.includes(message.author.id)) return message.reply("only for admins")
      const id = args[0]
      if(typeof id != "string" || id.trim() == "") return message.reply(`${prefix}ban <id>`)
      cache.set(`ban@${id.trim()}`, true)
      let banned = await db.get("banned")
      banned = banned !== undefined && banned !== null ? JSON.parse(banned) : []
      banned = new Set([...banned])
      banned = Array.from(banned)
      banned.push(id)
      await db.set("banned", JSON.stringify(banned))
      message.reply("Banned " + id)
    }
  }