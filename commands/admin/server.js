const { prefix, admins } = require("../../config.json")
const os = require("os")
const path = require("path")
const fs = require("fs")
const process = require("process")






function uptime() {
    const uptime = process.uptime();
    if (uptime < 1) {
      return `${Math.floor(uptime * 1000)} milliseconds`;
    } else if (uptime < 60) {
      return `${Math.floor(uptime)} seconds`;
    } else if (uptime < 3600) {
      return `${Math.floor(uptime / 60)} minutes`;
    } else if (uptime < 86400) {
      return `${(uptime / 3600).toFixed(1)} hours`;
    } else {
      return `${(uptime / 86400).toFixed(2)} days`;
    }
  }
  

module.exports = {
    config: {
      name: "server",
      description: "server",
      usage: "server"
    },
    run: async (client, message, args) => {
      if(!admins.includes(message.author.id)) return message.reply("only for admins")
      const embed = 
        {
        
            type: "rich",
            title: "server and bot info",
            color: 0x00FF00,
            fields: [
                {
                    name: "server uptime",
                    value: uptime(),
                },
                {
                    name: "working directory",
                    value: `/${path.basename(path.dirname(path.join(__dirname, "../../../    "))) + "/" + path.basename(path.dirname(path.join(__dirname, "../.."))) + "/" + path.basename(path.dirname(path.join(__dirname, "../")))}`,//`${process.cwd()}`
                },
                {
                    name: "cpu",
                    value: os.cpus().at(0).model + " | speed: " + os.cpus().at(0).speed
                },
                {
                    name: "cores",
                    value: os.cpus().length
                },
                {
                    name: "server memory usage",
                    value: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1) + "mb"
                },
                {
                    name: "free memory/total memory",
                    value: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + "/" + ((os.totalmem() / 1024) / 1024 / 1024).toFixed(2) + "GB"
                },
                {
                  name: "device architecture",
                  value: os.arch()
                },
                {
                  name: "operating system/type",
                  value: os.platform() + os.release() + "/" + os.type()
                },

            ],
            author: {
                name: "discord-template",
                url: "https://github.com/Rednexie/discord-template"
            },
            footer: {
                text: "Rednexie",
                icon_url: "https://cdn.discordapp.com/attachments/1068642023789301884/1090565045626347560/kalixp.jpg"
            }

        }
        message.channel.send({ content: "server info for admins", embeds: [embed]})
    }
  }
