const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')

const cmdName = "5000cho"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("5000兆円ジェネレーターを生成する。")
      
      .addStringOption(option => option.setName('top')
			.setDescription('文字を入力してください。')
        .setRequired(true))
      
      	.addStringOption(option => option
		.setName('bottom')
			.setDescription('テキストを入力してください。')
          .setRequired(false))
      
	.addStringOption(option => option
		.setName('background')
			.setDescription('背景を白色にするかどうか。')
      .setRequired(false)
			.addChoices(
				{ name: 'True', value: 'true' },
      	{ name: 'False', value: 'false' },
        ))
  
	.addStringOption(option => option
		.setName('rainbow')
			.setDescription('文字の色を虹色にするかどうか。')
      .setRequired(false)
			.addChoices(
			{ name: 'True', value: 'true' },
      { name: 'False', value: 'false' },
      )),
  
    async execute(i, client) {

const top = i.options.getString('top');

      
if(i.options.getString('rainbow') === "true"){
var rainbow = `rainbow=true`
}
else {
var rainbow = `rainbow=false`
}

if(i.options.getString('background') === "true"){
var background = `noalpha=true`
}
else {
var backgroumd = `noalpha=false`
}


const bottom = i.options.getString('bottom');

if(bottom === null){
  var dd = `https://gsapi.cbrx.io/image?top=${top}&${background}&${rainbow}&single=true`

const image = encodeURI(dd)
  
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`5000兆円ジェネレーター`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(image)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.reply({ embeds: [Embed] })
}
else{
      
var dd = `https://gsapi.cbrx.io/image?top=${top}&bottom=${bottom}&${background}&${rainbow}`
const image = encodeURI(dd)
  
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`5000兆円ジェネレーター`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(image)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.reply({ embeds: [Embed] })

}
}
    }