const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')

const cmdName = "person"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("人物の画像を取得する。")
  	.addStringOption(option => option
		.setName('person')
			.setDescription('どの人物にしますか。')
			.setRequired(true)
			.addChoices(
				{ name: 'ビル・マーレイ', value: 'b' },
				{ name: 'ニコラス・ケイジ', value: 'n' },
      	{ name: 'スティーブン・セガール', value: 's' },
        )),
  
    async execute(i, client) {


if (i.options.getString('person') === 'b') {
  var type = "fillmurray"
  var d = "ビル・マーレイ"
}
  else if (i.options.getString('person') === 'n') {
  var type = "placecage"
    var d = "ニコラス・ケイジ"
}
  else if (i.options.getString('person') === 's') {
  var type = "stevensegallery"
    var d = "スティーブン・セガール"
}
        var rating = Math.floor(Math.random() * 500) + 100;
    var rating1 = Math.floor(Math.random() * 500) + 100;


  
const image = `https://www.${type}.com/${rating}/${rating1}`

const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setURL(image)
  .setTitle(d)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(``)
	.setImage(image)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.reply({ embeds: [Embed] })
}
    }