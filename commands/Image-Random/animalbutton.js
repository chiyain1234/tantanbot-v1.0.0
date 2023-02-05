const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, MessageButton } = require('discord.js');

const axios = require('axios')

const cmdName = "animalbutton"

module.exports = {
      guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("動物の画像を生成するボタンを作成する。") 	     
      	.addStringOption(option => option
		.setName('animal')
			.setDescription('どの動物にしますか。')
			.setRequired(true)
       .addChoices(
          	{ name: 'トリ', value: 'bird' },
    	  		{ name: 'ウサギ', value: 'bunny' },
         { name: 'ネコ', value: 'cat' },
          	{ name: 'イヌ', value: 'dog' },
    	  		{ name: 'アヒル', value: 'duck' },
         { name: 'キツネ', value: 'fox' },
          	{ name: 'カンガルー', value: 'kangaroo'},
    	  		{ name: 'コアラ', value: 'koala' },
         { name: 'パンダ', value: 'panda' },
         { name: 'アライグマ', value: 'racoon' },
          	{ name: 'レッサーパンダ', value: 'red'},
    	  		{ name: 'シバイヌ', value: 'shiba' },
         { name: 'クジラ', value: 'whale' },
         { name: 'ハムスター', value: 'hamster' },
        { name: 'クマ', value: 'bear' },
          ))
      
      .addStringOption(option => option.setName('label')
			.setDescription('ラベル名を入力してください。')
			.setRequired(true))
      	.addStringOption(option => option
		.setName('color')
			.setDescription('ボタンの色を選択してください。')
			.setRequired(true)
       .addChoices(
          	{ name: 'グレー', value: 'SECONDARY' },
    	  		{ name: 'ブルー', value: 'PRIMARY' },
         { name: 'レッド', value: 'DANGER' },         
         { name: 'グリーン', value: 'SUCCESS' },
          )),


    async execute(i, client) {

const text = i.options.getString('label')
const col = i.options.getString('color')
      

if (i.options.getString('animal') === 'bird') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`birdButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
else if (i.options.getString('animal') === 'bunny') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`bunnyButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
else if (i.options.getString('animal') === 'cat') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`catButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
else if (i.options.getString('animal') === 'dog') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`dogButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
else if (i.options.getString('animal') === 'duck') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`duckButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
else if (i.options.getString('animal') === 'fox') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`foxButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
else if (i.options.getString('animal') === 'kangaroo') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`kangarooButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
else if (i.options.getString('animal') === 'koala') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`koalaButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
else if (i.options.getString('animal') === 'panda') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`pandaButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
else if (i.options.getString('animal') === 'racoon') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`racoonButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
else if (i.options.getString('animal') === 'red') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`redButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
else if (i.options.getString('animal') === 'shiba') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`shibaButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
      else if (i.options.getString('animal') === 'whale') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`whaleButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}
            else if (i.options.getString('animal') === 'hamster') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`hamsterButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}

else if (i.options.getString('animal') === 'bear') {
const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`bearButton`)
          .setLabel(`${text}`)
          .setStyle(`${col}`),
  )
    i.reply({ components: [button] });
}

} 
}