const client = require('../index.js')
const Discord = require("discord.js")
const config = require("../config.js");
const functions = require("../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions } = require('discord.js');
const fs = require("fs") 

client.on('guildMemberAdd', async member => {
  const channel = member.guild.channels.cache.get('944802857880784929');
    if (!channel) return;

    channel.send("text-here!")
})