const path = require("path")
const fs = require("fs")
const os = require("os")

const consoled = require("consoled.js")
const { ActivityType } = require("discord.js")
const { activity } = require("../config.json")

module.exports = {
  config: {
    name: 'ready',
    once: true,
  },
  execute: async (client) => {
    client.application.commands.set([...client.slashes.values()]).catch(err => console.error(err))
    consoled.cyan(`${client.user.username} is online on ${client.guilds.cache.size} ${client.guilds.cache.size > 1 ? "servers" : "server"} with a ping of ${client.ws.ping + "ms"}!`)
    client.user.setStatus(activity.status)
    client.user.setActivity(activity.presence, { type: ActivityType.Custom, status: activity.status});
  }
}
