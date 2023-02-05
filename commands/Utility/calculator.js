const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, MessageButton } = require('discord.js');
const math = require('mathjs');
const cmdName = "calculator"

module.exports = {
      guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("計算機を使う。"),

	async execute(i, client) { // Function to run on call

    const embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setTitle("電卓")
.setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`0\`\`\``)
            	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });

      const one = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`calcAC`)
          .setLabel(`AC`)
          .setStyle(`DANGER`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc(`)
          .setLabel(`(`)
          .setStyle(`PRIMARY`),
  )
      .addComponents(
          new MessageButton()
          .setCustomId(`calc)`)
          .setLabel(`)`)
          .setStyle(`PRIMARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc÷`)
          .setLabel(`÷`)
          .setStyle(`PRIMARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calcDEL`)
          .setLabel(`DEL`)
          .setStyle(`DANGER`),
  )
    
      const two = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`calc7`)
          .setLabel(`7`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc8`)
          .setLabel(`8`)
          .setStyle(`SECONDARY`),
  )
      .addComponents(
          new MessageButton()
          .setCustomId(`calc9`)
          .setLabel(`9`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc×`)
          .setLabel(`×`)
          .setStyle(`PRIMARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc5DEL`)
          .setLabel(`DEL5`)
          .setStyle(`DANGER`),
  )

    const three = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`calc4`)
          .setLabel(`4`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc5`)
          .setLabel(`5`)
          .setStyle(`SECONDARY`),
  )
      .addComponents(
          new MessageButton()
          .setCustomId(`calc6`)
          .setLabel(`6`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc-`)
          .setLabel(`-`)
          .setStyle(`PRIMARY`),
  )

        const four = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`calc1`)
          .setLabel(`1`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc2`)
          .setLabel(`2`)
          .setStyle(`SECONDARY`),
  )
      .addComponents(
          new MessageButton()
          .setCustomId(`calc3`)
          .setLabel(`3`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc+`)
          .setLabel(`+`)
          .setStyle(`PRIMARY`),
  )
    
        const five = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`calc.`)
          .setLabel(`.`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc0`)
          .setLabel(`0`)
          .setStyle(`SECONDARY`),
  )
      .addComponents(
          new MessageButton()
          .setCustomId(`calc00`)
          .setLabel(`00`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc=`)
          .setLabel(`=`)
          .setStyle(`SUCCESS`),
  )

    
         i.reply({ embeds: [embed], components: [one,two,three,four,five] });  
}
}