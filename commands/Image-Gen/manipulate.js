const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')


const cmdName = "manipulate"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("指定したユーザーのアイコンを操作する。")
      	.addStringOption(option => option
		.setName('type')
			.setDescription('どのフィルターにしますか。')
			.setRequired(true)
       .addChoices(
          	{ name: 'Wasted', value: 'wasted' },
    	  		{ name: 'Mission', value: 'mission' },
         { name: 'Jail', value: 'jail' },
          	{ name: 'Comrade', value: 'comrade' },
    	  		{ name: 'Triggered', value: 'triggered' },
         { name: 'Simpcard', value: 'simpcard' },
          	{ name: 'Horny', value: 'horny'},
    	  		{ name: 'Lolice', value: 'lolice' },
          ))
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
           }),
  
    async execute(i, client) {
const user = i.options.getUser('user');
const avatar = user.displayAvatarURL({size: 4096, format: 'png' })
	
      
if (i.options.getString('type') === 'wasted') {
var type = "wasted"
}
 else  if (i.options.getString('type') === 'mission') {
var type = "passed"
}
  else  if (i.options.getString('type') === 'jail') {
var type = "jail"
}
else if (i.options.getString('type') === 'comrade') {
var type = "comrade"
}
 else  if (i.options.getString('type') === 'triggered') {
var type = "triggered"
}
  else  if (i.options.getString('type') === 'simpcard') {
var type = "simpcard"
}
else if (i.options.getString('type') === 'horny') {
var type = "horny"
}
 else  if (i.options.getString('type') === 'lolice') {
var type = "lolice"
}
      
const image = `https://some-random-api.ml/canvas/${type}?avatar=${avatar}`
      
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${user.tag}'s Avatar`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(image)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.reply({ embeds: [Embed] })
}
    }