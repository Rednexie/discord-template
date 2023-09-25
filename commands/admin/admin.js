const path = require("path")
const fs = require("fs")
const os = require("os")


const consoled = require("consoled.js")

const { admins } = require("../../config.json")

module.exports = {
    config: {
      name: "admin",
      description: "admin",
      usage: "admin"
    },
    run: async (client, message, args) => {

      if(!admins.includes(message.author.id)) return message.reply("only for admins")
      const id = args[0]
      if(typeof id != "string" || id.trim() == "") return message.reply(`${prefix}admin <id>`)
      fs.readFile(path.join(__dirname, "../../config.json"), "utf8", (err, data) => {
        if(err) return consoled.bright.red("error loading config file");
        else{
            let configFile = JSON.parse(data);
            configFile.admins.push(id);
            configFile = JSON.stringify(configFile, null, 2)
            fs.writeFile(path.join(__dirname, "../../config.json"), configFile, "utf8", (err) => { if(err) console.error(err)})
        }
      })
    }
  }