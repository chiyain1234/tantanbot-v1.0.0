const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed, MessageAttachment } = require("discord.js")
const ms = require("ms")

const cmdName = "avatar"
const { Permissions } = require('discord.js');

module.exports = {
guildOnly: false, 
    adminGuildOnly: false, 
    data: new SlashCommandBuilder() 
    .setName(cmdName)
    .setDescription('指定したユーザーのアバターを取得する。')
    .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }),
           
async execute(i, client) {
  
      if(i.options.getUser('user') === null) {
var avatar = i.user.displayAvatarURL({size: 4096, format: 'png'})
var title = `${i.user.tag}'s Avatar`
      }
      else if(i.options.getUser('user') !== null) {
var user = i.options.getUser('user')
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var title = `${user.tag}'s Avatar`
      }

  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(title)
	.setURL(`${avatar}`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage('attachment://useravatar.png')
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  
        await i.deferReply();    
  
          let attachment = new MessageAttachment(avatar, "useravatar.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })
}
}