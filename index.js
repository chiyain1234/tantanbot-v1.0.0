const Discord = require("discord.js") 
const fs = require("fs") 

const config = require("./config.js");
const functions = require("./functions.js");

const client = new Discord.Client({ 
  intents: [
    Discord.Intents.FLAGS.GUILDS, 
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,	
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ], 
 });

module.exports = client;

client.setMaxListeners(0);
client.commands = new Discord.Collection()
client.cooldowns = new Discord.Collection()
client.queues = new Discord.Collection()

const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions } = require('discord.js');

module.exports = client;

process.on("uncaughtException", error => {
    console.error(`[${functions.timeToJST(Date.now(), true)}] ${error.stack}`);
    const embed = new Discord.MessageEmbed()
        .setTitle("ERROR - uncaughtException")
        .setDescription("```\n" + error.stack + "\n```")
        .setColor("RED")
        .setTimestamp();
    client.channels.fetch(config.logch.error).then(c => c.send({ embeds: [embed] }));
});
process.on("unhandledRejection", (reason, promise) => {
    console.error(`\u001b[31m[${functions.timeToJST(Date.now(), true)}] ${reason}\u001b[0m\n`, promise);
    const embed = new Discord.MessageEmbed()
        .setTitle("ERROR - unhandledRejection")
        .setDescription("```\n" + reason + "\n```")
        .setColor("RED")
        .setTimestamp();
    client.channels.fetch(config.logch.error).then(c => c.send({ embeds: [embed] }));
});

client.login(config.token) 