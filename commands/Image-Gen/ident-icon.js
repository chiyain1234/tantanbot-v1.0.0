const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require('axios')

const cmdName = "ident-icon"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("Githubのアイデントアイコンを作成する。")
      
      .addStringOption(option => option.setName('text')
			.setDescription('文字を入力してください。')
        .setRequired(true)),
  
    async execute(i, client) {

const text = i.options.getString('text');
const dd = `https://api.kwelo.com/v1/media/identicon/${text}`

const image = encodeURI(dd)
  
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${text}`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage('attachment://identicon.png')
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.deferReply(); 
  
  let attachment = new MessageAttachment(image, "identicon.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })

}
    }