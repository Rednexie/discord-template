const path = require("path")
const fs = require("fs")
const os = require("os")

const consoled = require("consoled.js")

const config = require("../config.json")
const { ratelimit, prefix } = require("../config.json")

const cache = require("../modules/cache")

module.exports = {
  config: {
    name: 'messageCreate',
    once: false,
  },


  execute: async (message, client) => {
    if(message.author.bot ) return;
    if(message.channel.type == "dm") return message.reply("https://github.com/Rednexie/discord-template")
    if(cache.has(`ban@${message.author.id}`)) return
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    //Check for prefix
    if (!cmd.startsWith(prefix)) return
    if(cache.has(`ratelimit@${message.author.id}`)) return message.reply("rate limited")
    if(!isNaN(Number(ratelimit)) && Number(ratelimit) > 0){
      cache.set(`ratelimit@${message.author.id}`, ratelimit)
      cache.expire(`ratelimit@${message.author.id}`, ratelimit * 1000)
    }
    else{}
    const commandName = cmd.slice(prefix.length)
    let commands = client.commands.get(commandName);
    if (!commands){
      const alias = client.commands.find(cmdFile => cmdFile.config.aliases && cmdFile.config.aliases.includes(commandName))
      if(alias && alias.run && config.alias){
        try {
          await alias.run(client, message, args);
        } catch (error) {
          // Handle any errors
          console.error(error);
          await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
      }
      return
    }
    
    
    try {
      await commands.run(client, message, args);
    } catch (error) {
      // Handle any errors
      console.error(error);
      await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
  }
}
