const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const fs = require("fs") // Import FS to read event files
var validUrl = require('valid-url');

client.on("interactionCreate", async (i, client) => {
  
        if (i.customId ===  "button") {
      
        const labelValue = i.fields.getTextInputValue("label"),
        urlsValue = i.fields.getTextInputValue("urls")

   if (!labelValue && !urlsValue) return i.reply({
     content: "入力していない項目があります。",
     ephemeral: true
   });


var url = `${urlsValue}`
if (validUrl.isUri(url)){
  const button = new MessageActionRow()
  
.addComponents(
          new MessageButton()
          .setLabel(`${labelValue}`)
          .setStyle('LINK')
    .setURL(`${urlsValue}`),
  )
    i.reply({ components: [button] });
} 
else {
    const Deembed = new Discord.MessageEmbed()
            .setTitle("エラー")
            .setDescription(`これはURLでありません。`)
            .setColor("RED");
        i.reply({embeds: [Deembed], ephemeral: true })
}
        }
})