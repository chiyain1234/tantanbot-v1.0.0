const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton } = require("discord.js")
const cmdName = "user"
const { Permissions } = require('discord.js');

module.exports = {
guildOnly: false, 
    adminGuildOnly: false, 
    data: new SlashCommandBuilder() 
    .setName(cmdName)
    .setDescription('指定したユーザーの情報を取得する。')
    .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }),
           
async execute(i, client) {
  
const user = i.options.getMember('user') || i.member;
    const MemLogo = user.user.avatarURL({ dynamic: true });
    const row1 = new MessageActionRow().addComponents(
      new MessageButton()
        .setStyle('LINK')
        .setURL(`https://discord.com/users/${user.user.id}`)
        .setLabel('Profile Link'))
    let embed1 = new MessageEmbed()
      	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`})
      .setImage(MemLogo)
      .setThumbnail(MemLogo)
      .setColor(client.config.color)
      .addField("**ユーザーネーム :**", `**${user.user.username}**`, true)
      .addField("**ユーザータグ:**", `**#${user.user.discriminator}**`, true)
      .addField("**ユーザーID:**", `**${user.user.id}**`, true)
      .addField("**アカウント作成日 :**", `** <t:${parseInt(user.user.createdAt / 1000)}:R> **`, true)
      .addField("**サーバー参加日 :**", `** <t:${parseInt(user.joinedAt / 1000)}:R> **`, true)
      .addField(`_ _`, `[Avatar Link](${MemLogo})`, false)
        	.setFooter({ text: `/${cmdName}`, iconURL: '' })
      .setTimestamp()

    await i.reply({ embeds: [embed1], components: [row1] })

}
}