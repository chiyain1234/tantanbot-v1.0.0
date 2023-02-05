const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const randomUrlGen = require("random-youtube-music-video");
const cmdName = "randomyoutube"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("ランダムにYouTubeのURLを送信する。"),

	async execute(i, client) {
const youtubeUrl = await randomUrlGen.getRandomMusicVideoUrl();
  i.reply({ content: youtubeUrl });  
}
}