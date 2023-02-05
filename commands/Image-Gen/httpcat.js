const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require('axios')

const cmdName = "httpcat"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("Httpのステータスコードに対応する猫画像を表示する。")
      
      .addNumberOption(option => option.setName('number')
			.setDescription('数字を入力してください。')
        .setMinValue(100) 
        .setMaxValue(999) 
        .setRequired(true)),
  
    async execute(i, client) {

const number = i.options.getNumber('number');
const dd = `https://http.cat/${number}`

const image = encodeURI(dd)
  
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${number}`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage('attachment://http.png')
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.deferReply(); 
  
  let attachment = new MessageAttachment(image, "http.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })

}
    }