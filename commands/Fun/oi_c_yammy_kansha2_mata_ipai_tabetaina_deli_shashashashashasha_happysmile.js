const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const translate = require("translatte")

const cmdName = "oic_yammy_kansha_kansha"

module.exports = {
    guildOnly: false,
    adminGuildOnly: false,
    data: new SlashCommandBuilder()
        .setName(cmdName)
        .setDescription("美味しいヤミー❗️✨🤟😁👍✨⚡️感謝❗️🙌✨感謝❗️🙌✨"),
                
async execute(i, client) {

const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
  .setDescription('美味しいヤミー❗️✨🤟😁👍✨⚡️感謝❗️🙌✨感謝❗️🙌✨またいっぱい食べたいな❗️🥓🥩🍗🍖😋🍴✨デリシャッ‼️🙏✨ｼｬ‼️🙏✨ ｼｬ‼️🙏✨ ｼｬ‼️🙏✨ ｼｬ‼️🙏✨ ｼｬｯｯ‼😁🙏✨ハッピー🌟スマイル❗️❗️💥✨👉😁👈⭐️')
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed] });  

 }
}