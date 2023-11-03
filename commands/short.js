const { prefix } = require("../config.json")
const http = require('https')
module.exports = {
    config: {
        name: "short",
        description: "short",
        usage: "short"
      },
      run: async (bot, message, args) => {
        const url = args[0];
        if(!url || (!url.startsWith("http") && !url.startsWith("https"))) return message.reply("please provide a valid link.")
        try {
          let link = new URL(url);
          link = link.origin + link.pathname;
          const req = http.get('https://is.gd/create.php?format=simple&url=' + url, res => {
          res.setEncoding("utf8")
          let data = '';
          console.log(`statusCode: ${res.statusCode}`);
          res.on('data', chunk => data = data + chunk.toString())
          res.on('end', () => message.reply(data))
          })

        
        }
        catch (err) {
          console.error(err)
          return message.reply("invalid url, or error.")
        }
    
      },
  }



