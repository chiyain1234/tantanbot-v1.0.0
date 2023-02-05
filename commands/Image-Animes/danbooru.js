const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const fs = require("fs")
const booru = require('booru');

const cmdName = "danbooru"

module.exports = {
    guildOnly: true, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
  nsfwOnly: true,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("画像を検索する。")
 	      .addStringOption(option => option.setName('word')
			.setDescription('検索ワードを入力してください。')
			.setRequired(true)),
  
    async execute(i, client) {
      var word = i.options.getString('word');
  const wEmbed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('Searching...')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`${word}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.reply({ embeds: [wEmbed] })

    booru.search('db', [word], {
        random: true
      })
      .then(images => {
        for (let image of images) {
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('Download Link')
	.setURL(`${image.file_url}`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`検索ワード | ${word}`)
	.setImage(`${image.file_url}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			return i.editReply({ embeds: [Embed] })

        }
      }).catch(err => {
        if (err.name === 'booruError') {
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('エラー')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`検索結果が見つかりませんでした。`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			return i.editReply({ embeds: [Embed] })
        } else {
           const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('エラー')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`検索結果が見つかりませんでした。`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			return i.editReply({ embeds: [Embed] })
        }
      })
    }
}