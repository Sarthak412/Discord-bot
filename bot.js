console.log("Welcome Sir...");

const Discord = require("discord.js");

require("dotenv").config();

const Token = "";

const generateImage = require("./generateImage");

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

/*
  Application Id: 953562476786638859
  Public Key: 947d71d5cdd92c24c24c5e9b61f24ba1dd446db084abec60728cc70de7859913 
  Client-secret key: RP0QXb-iSabBLH_bM9oj7h-yG5Cap_oV
*/

client.login(process.env.Token);

client.on("ready", () => {
  console.log("Authentication completed sir...");
});

client.on("messageCreate", (msg) => {
  if (msg.content === "Hello Michael") {
    msg.reply("That's what she said!!");
  }
});

const welcomeChannelId = "953576740926660648";

client.on("guildMemberAdd", async (member) => {
  const img = await generateImage(member);
  member.guild.channels.cache.get(welcomeChannelId).send({
    content: `<@${member.id}> Welcome to the server boiii`,
    files: [img],
  });
});
