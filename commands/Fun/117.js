const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed,MessageActionRow, MessageSelectMenu } = require('discord.js');

const functions = require(`../../functions.js`);
module.exports = {
      guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName("117")
        .setDescription("現在時刻を送信する。"),

	async execute(interaction, client) { // Function to run on call
  
    
interaction.reply(new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })); //やりますやります
}
}