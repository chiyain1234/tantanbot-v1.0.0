const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const cmdName = "addrole"
const { Permissions } = require('discord.js');

module.exports = {
guildOnly: true, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サー
  userPerm: "MANAGE_ROLES",
  botPerm: "ADMINISTRATOR",
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
    .setName(cmdName)
    .setDescription('指定した人に指定したロールをつける。')
    .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
           })
    .addRoleOption((option) => {
         return option
        .setName('role')
        .setDescription('ロールを選択してください。')
        .setRequired(true)
           }),
  
async execute(i, client) {


try {
const member = i.guild.members.cache.get(i.options.get('user').value);
const role = i.options.get('role').role;
    await member.roles.add(role.id);
  
const embed = new MessageEmbed()
                .setTitle('ロールを付与しました。')
                .setDescription(`完了: ${member} に\n${role}を付与しました。`)
                .setColor(client.config.color)
                .setTimestamp()
                .setThumbnail(member.user.displayAvatarURL())
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
        
                return i.reply({ embeds: [embed] })
            } catch {
                return i.reply({ content: `ロールの付与に失敗しました。\nボットに**ロールの管理**の権限がない可能性があります。\n・ロールがボットの上にある可能性があります。`, ephemeral: true });
            }
}
}