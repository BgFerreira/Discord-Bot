const dotenv = require("dotenv");
const discord = require("discord.js");

dotenv.config();

const token = process.env.CLIENT_TOKEN;

const client = new discord.Client(
    {
        intents: [
            discord.GatewayIntentBits.Guilds,
            discord.GatewayIntentBits.GuildMessages,
            discord.GatewayIntentBits.GuildMessageTyping,
            discord.GatewayIntentBits.GuildMessageReactions
        ]
    });

client.on("ready", 
    function()
    {
        console.log(`Logged in as ${client.user.tag}!`);
    });

client.login(token);