const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {
        if (i.customId ===  "embed") {
          
        const title1 = i.fields.getTextInputValue("title"),
              description1 = i.fields.getTextInputValue("description")
              footer1 = i.fields.getTextInputValue("footer"),
              author1 = i.fields.getTextInputValue("author")
              color1 = i.fields.getTextInputValue("color") || "#ffffff"

      const Embed = new MessageEmbed()
	.setColor(color1)
	.setAuthor({ name: `${author1}`, iconURL: ``, url: '' })
	.setFooter({ text: `${footer1}`, iconURL: '' })
	.setTitle(title1)
	.setDescription(description1)
	.setTimestamp()

  const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`editEmbedImage`)
          .setLabel(`Add Image`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`editEmbedThumbnail`)
          .setLabel(`Add Thumbnail`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`editEmbedComplete`)
          .setLabel(`Complete`)
          .setStyle(`SUCCESS`),
  )
    
return i.reply({ embeds: [Embed], components: [button] });
       }
})