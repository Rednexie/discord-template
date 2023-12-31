const https = require('https');
const { prefix } = require('../config.json');
module.exports = {
    config: {
      name: "github",
      description: "github",
      usage: "github"
    },
    run: async (client, message, args) => {
        const user = args[0]
        if(typeof user !== "string" || user.length < 1) return message.reply("please provide a valid user\nFor example try: " + prefix + module.exports.config.name + " Rednexie")
        const req = https.get('https://api.github.com/users/' + user, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.100.0'
            }
        }, res => {
            res.setEncoding("utf8")
            let data = '';
            console.log(`statusCode: ${res.statusCode}`);
            res.on('data', chunk => data = data + chunk.toString())
            res.on('end', () => message.reply(data))
        });
    }
  }