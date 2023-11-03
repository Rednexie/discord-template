const https = require('https')
module.exports = {
    config: {
      name: "npm",
      description: "npm",
      usage: "npm"
    },
    run: async (client, message, args) => {
        const package = args[0];
        if(typeof package !== "string" || package.length < 1) return message.reply("please provide a valid npm package\nFor example try: " + prefix + module.exports.config.name + " perma.db")
        const req = https.get('https://registry.npmjs.org/' + package, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.100.0'
            }
        }, res => {
            res.setEncoding("utf8")
            let data = '';
            console.log(`statusCode: ${res.statusCode}`);
            res.on('data', chunk => data = data + chunk.toString())
            res.on('end', () => {})
                message.reply("of")
                const json = JSON.parse(data);
        });
    }
  }