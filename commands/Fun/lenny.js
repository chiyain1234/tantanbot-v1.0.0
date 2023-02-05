const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const lenny = require("lenny");
const cmdName = "lenny"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("LennyFace の顔文字を送信する。"),

	async execute(i, client) {
  i.reply({ content: lenny() });  
}
}