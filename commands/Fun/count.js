const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, MessageButton } = require('discord.js');

const cmdName = "count"

module.exports = {
      guildOnly: false, 
    adminGuildOnly: false, 
    data: new SlashCommandBuilder() 
        .setName(cmdName)
        .setDescription("カウントパネルを作成する。"),
  
	async execute(i, client) { 
    const text = i.options.getString('label')
const col = i.options.getString('color')
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`カウンター`)
	.setDescription(`0`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
      
      const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`counter`)
          .setLabel(`Count!`)
          .setStyle(`SUCCESS`),
  )
      
  i.reply({ embeds: [Embed], components: [button]  });  
  }

  }