const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const ms = require("ms")

const cmdName = "server"
const { Permissions } = require('discord.js');

module.exports = {
guildOnly: true, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サー
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
    .setName(cmdName)
    .setDescription('サーバーの情報を取得する。'),
           
async execute(i, client) {

const emojis = i.guild.emojis.cache
 .map((e) => `${e} `)
 .join(', ');
        const Embed = new MessageEmbed()
      	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`})
      .setColor(client.config.color)
			.setThumbnail(i.guild.iconURL({ dynamic: true }))
    	.setFooter({ text: `/${cmdName}`, iconURL: '' })
      .setTimestamp()
			.addFields(
       	{
					name: '🏷️ サーバーネーム:',
					value: i.guild.name,
					inline: false,
				},
				{
					name: ':id: サーバーID:',
					value: i.guild.id,
					inline: false,
				},
				{
					name: ':calendar: 作成日:',
					value: `<t:${Math.floor(i.guild.createdTimestamp / 1000)}:f> | <t:${Math.floor(
						i.guild.createdTimestamp / 1000,
					)}:R>`,
					inline: false,
				},
				{
					name: ':crown: 所有者:',
					value: `<@${i.guild.ownerId}>`,
					inline: false,
				},
				{
					name: `:busts_in_silhouette: メンバー: (${i.guild.memberCount})`,
					value: `${i.guild.premiumSubscriptionCount} ブースト :sparkles:`,
					inline: false,
				},
				{
					name: `:speech_balloon: チャンネル (${i.guild.channels.cache.size})`,
					value: `**${i.guild.channels.cache.filter((r) => r.type == 'GUILD_TEXT').size}** テキスト | **${
						i.guild.channels.cache.filter((r) => r.type == 'GUILD_VOICE').size
					}** ボイス | **${i.guild.channels.cache.filter((r) => r.type === 'GUILD_CATEGORY').size}** カテゴリー`,
					inline: false,
				},
        {
					name: '💻 カウント',
					value: `**${i.guild.roles.cache.size}** ロール | **${i.guild.emojis.cache.size}** 絵文字 | \n**😉 絵文字リスト**\n${emojis}`,
					inline: false,
				},
				{
					name: ':earth_africa: その他',
					value: `**認証レベル:** ${i.guild.verificationLevel}`,
					inline: false,
				},
      	
			);
  
		i.reply({
			embeds: [Embed],
		}); 
  
  }
}