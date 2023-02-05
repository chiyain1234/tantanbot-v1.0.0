const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

const cmdName = "makememe"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("ミーム画像を作成する。")        
	.addStringOption(option => option
		.setName('type')
			.setDescription('画像タイプを選択してください。')
			.setRequired(true)
			.addChoices(
				{ name: 'Cbg', value: 'cbg' },
				{ name: 'Rollsafe', value: 'rollsafe' },
        	{ name: 'Michael-scott', value: 'michaelscott'},
        
        	{ name: 'Woman-cat', value: 'womancat'},
        
        	{ name: 'Drunk', value: 'drunk'},
        ))
      .addStringOption(option => option.setName('文字列')
			.setDescription('文字を入力してください。')
        .setRequired(true)),

async execute(i, client) {
var text = i.options.getString('文字列');
  
if (i.options.getString('type') === 'cbg') {
var form = "cbg"
}
        else  if (i.options.getString('type') === 'rollsafe') {
var form = "rollsafe"
}        
        else  if (i.options.getString('type') === 'michaelscott') {
var form = "michael-scott"
}
        else  if (i.options.getString('type') === 'womancat') {
var form = "woman-cat"
}
        else  if (i.options.getString('type') === 'drunk') {
var form = "drunk"
}
const image = `https://api.memegen.link/images/${form}/${text}`
  
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('Download Link')
	.setURL(image)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription("MEMES")
	.setImage(image)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });  
  } 
}