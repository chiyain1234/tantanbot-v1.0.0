const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, MessageButton } = require('discord.js');

const cmdName = "funnybutton"

module.exports = {
      guildOnly: false, 
    adminGuildOnly: false, 
    data: new SlashCommandBuilder() 
        .setName(cmdName)
        .setDescription("見たら押すボタン")
      
	.addStringOption(option => option
		.setName('type')
			.setDescription('種類を選択してください。')
			.setRequired(true)
			.addChoices(
				{ name: '見たら押すボタン', value: '1' },
        { name: '見たら絶対押すボタン', value: '2' },
        { name: '押したら絵描くボタン', value: '3' },  
        { name: '声晒すボタン', value: '4' },
        { name: '摩訶不思議ボタン ', value: '5' },
        )),

  
	async execute(i, client) { 
    
    if (i.options.getString('type') === '1') {
    var amount = "21"
    var title = "見たら押すボタン"   
    var label = "見たね？押してね？"
    var buttonNun = "b1"
  }

    if (i.options.getString('type') === '2') {
    var amount = "31"
    var title = "見たら絶対押すボタン"   
    var label = "いま目が合ったよね？"
    var buttonNun = "b2"
  }

   if (i.options.getString('type') === '3') {
    var amount = "8"
    var title = "押したら絵描くボタン"   
    var label = "描く？"
    var buttonNun = "b3"
  }
    
   if (i.options.getString('type') === '4') {
    var amount = "25"
    var title = "声晒すボタン"   
    var label = "見たら押せ？"
    var buttonNun = "b4"
  }
    
   if (i.options.getString('type') === '5') {
    var amount = "9"
    var title = "摩訶不思議ボタン "   
    var label = "見たら押せ？ 当たり外れ激しいぞ？"
    var buttonNun = "b4"
  }
    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${title}`)
	.setDescription(`結果パターン: ${amount} 通り`)
	.setTimestamp()
	.setFooter({ text: "5", iconURL: '' });
      
      const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`${buttonNun}`)
          .setLabel(`${label}`)
          .setStyle(`PRIMARY`),
  )
      
  i.reply({ embeds: [Embed], components: [button]  });  
    
  }
}