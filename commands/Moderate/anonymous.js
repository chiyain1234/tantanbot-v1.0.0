const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed, MessageAttachment} = require("discord.js")
const ms = require("ms")

const { Permissions } = require('discord.js');

module.exports = {
guildOnly: true,
    adminGuildOnly: true, 
    data: new SlashCommandBuilder() 
    .setName('anonymous')
    .setDescription('指定した人に匿名ダイレクトメッセージを送る。')
   .addStringOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーIDを選択してください。')
        .setRequired(true)
           })
      .addStringOption(option => option.setName('text')
			.setDescription('テキストを入力してください。')
			.setRequired(true)),
  
async execute(i, client) {
const user = i.options.getString('user')
const text = i.options.getString('text')
const member = i.client.users.cache.get(user)
 try{

        await member.send(text)

   
 const embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
            .setTitle(`${member.tag} にダイレクトメッセージを送信しました。`)
            .setDescription(text)
            	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
         i.reply({ embeds: [embed]});  
} catch {
                return i.reply({ content: `メッセージの送信に失敗しました。\nユーザーIDを間違えている可能性があります。\n相手がDMの受信をできないようにしている可能性があります。`, ephemeral: true });
            }
}
}