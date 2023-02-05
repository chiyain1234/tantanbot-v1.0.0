const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const Memer = require("random-jokes-api");
const cmdName = "uselessweb"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("役に立たないURLを送信する。"),

	async execute(i, client) {
let web = Memer.uselessweb()

  i.reply({ content: web });  
}
}