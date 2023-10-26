const path = require("path")
const fs = require("fs")
const os = require("os")

const consoled = require("consoled.js")

const { presence } = require("../config.json")

module.exports = {
  config: {
    name: 'ready',
    once: true,
  },
  execute: async (client) => {
    //client.application.commands.set([...client.slashes.values()]).catch(err => console.error(err))
    consoled.cyan(`${client.user.username} is online on ${client.guilds.cache.size} servers with a ping of ${client.ws.ping + "ms"}!`)
    client.user.setPresence({ activities: [{ name: presence }] });
  }
}
