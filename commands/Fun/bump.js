const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const translate = require("translatte")

const cmdName = "bump"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("Bump(偽)をします。"),
                
async execute(i, client) {
const Embed = new MessageEmbed()
	.setColor("#24b7b7")
	.setTitle(`DISBOARD: Discordサーバー掲示板`)
  .setURL("https://disboard.org/")
  .setDescription(`表示順をアップしたよ 👍
[ディスボード](https://disboard.org/ja/server/${i.guild.id})で確認してね`)
  .setImage("https://cdn.discordapp.com/attachments/1001354677226590308/1004651095244689408/bumpbump.png")
  i.reply({ embeds: [Embed] });  
}
}
