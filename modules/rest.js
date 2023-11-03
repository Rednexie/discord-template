const https = require('https');
const config = require("../config.json")

require("dotenv").config();
const { guild_id, application_id } = require("../config.json")
const token = process.env.TOKEN || config.token;

module.exports = (command, description) => {

    const data = JSON.stringify({
        name: command,
        description: description
    });

    const options = {
        hostname: 'discord.com',
        port: 443,
        path: `/api/v9/applications/${application_id}/guilds/${guild_id}/commands`,
        method: 'POST',
        headers: {
            'Authorization': `Bot ${token}`,
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.write(data);
    req.end();

}