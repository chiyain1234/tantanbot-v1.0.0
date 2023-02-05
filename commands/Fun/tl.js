const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const cmdName = "tl"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("話題を提供する。"),
                
async execute(i, client) {
            let arr = ["予測変換で1人しりとりしろ", "悪口か下ネタ出るまで50音順に言う", "キャラクターの名前を50音順にいう", "食べ物の名前を50音順に言う"];
    var random = Math.floor(Math.random() * arr.length);
    var de = arr[random]
  
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`見た人もやる`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${de}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed] });  
}
}