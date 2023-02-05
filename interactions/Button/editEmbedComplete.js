const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

        if (i.customId ===  "editEmbedComplete") {
          
let msgs = await i.channel.messages.fetch(i.message.id)
          
     await i.deferUpdate()

return msgs.edit({components: [] });
          
        }
  
})