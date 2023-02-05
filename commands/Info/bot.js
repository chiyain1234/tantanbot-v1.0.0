const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton } = require("discord.js")
const cmdName = "bot"
const { Permissions } = require('discord.js');

module.exports = {
guildOnly: false, 
    adminGuildOnly: false, 
    data: new SlashCommandBuilder() 
    .setName(cmdName)
    .setDescription('TanTanBotの情報を見る。'),
           
async execute(i, client) {
  
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`**${client.user.username}**`)
.setThumbnail(`${client.user.displayAvatarURL()}`)
  
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`作成者: !.chiyain.!#9929 \n開発言語: Discord.js v14\nスラッシュコマンド対応のボットです。娯楽メインで作成しています。\n不具合があった場合はサポートサーバーから連絡をお願いします。\n[**Bot invite link**](https://discord.com/api/oauth2/authorize?client_id=998919632566091868&permissions=1103017143414&scope=bot%20applications.commands) | [**Support server**](https://discord.gg/3WYXZWDRD7)`)
  
        .addField("導入数: " , `${client.guilds.cache.size} servers`, true)
        .addField("メンバー総数: " , `${client.guilds.cache.map(guild => guild.memberCount).reduce((p, c) => p + c)} users`, true)

        .addField("チャンネル総数: " , `${client.channels.cache.size}  channels`, true)

  .addField("絵文字総数: " , `${client.emojis.cache.size}  emojis`, true)
  
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed] });  

}
}