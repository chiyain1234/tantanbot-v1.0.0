const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed, MessageAttachment } = require("discord.js")
const cmdName ="giphy"
const { Permissions } = require('discord.js');
const axios = require("axios")
const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder()
    .setName(cmdName)
    .setDescription('GIF画像を検索する。')

	      .addStringOption(option => option.setName('text')
			.setDescription('ワードを入力してください。')
			.setRequired(true)),
           
async execute(i, client) {
const text = i.options.getString('text');

giphy.search(text).then(function (res) {
        // Res contains gif data!
        let id = res.data[0].id
        let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`

const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
  .setTitle(text + "の検索結果")
	.setTimestamp()
  .setImage(msgurl)
	.setFooter({ text: `/${cmdName}`, iconURL: '' });

       i.reply({embeds: [Embed] })
})
}
}