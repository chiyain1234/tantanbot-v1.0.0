const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed,MessageActionRow, MessageSelectMenu } = require('discord.js');
const TicTacToe = require("discord-tictactoe")
const game = new TicTacToe({ language: "en" })

module.exports = {
      guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName("tictactoe")
        .setDescription("○×ゲームをする。")
    .addUserOption((option) => {
         return option
        .setName('opponent')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }),

	async execute(interaction, client) { // Function to run on call
    game.handleInteraction(interaction);
}
}