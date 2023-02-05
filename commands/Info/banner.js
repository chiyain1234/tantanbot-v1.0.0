const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed, MessageAttachment } = require("discord.js")
const ms = require("ms")

const cmdName = "banner"
const { Permissions } = require('discord.js');

module.exports = {
guildOnly: false, 
    adminGuildOnly: false, 
    data: new SlashCommandBuilder() 
    .setName(cmdName)
    .setDescription('指定したユーザーのバーナーを取得する。')
    .addStringOption((option) => {
         return option
        .setName('user_id')
        .setDescription('ユーザーIDを選択してください。')
        .setRequired(false)
           }),
           
async execute(i, client) {

      const user = i.options.getString('user_id') || i.user;

try {
		const fetchUser = await client.users.fetch(user);  
  
		if(fetchUser.bannerURL() !== null) {
		const embed = new MessageEmbed()
			.setURL(fetchUser.bannerURL({ dynamic: true, size: 2048, dynamic: true }))
	.setColor(client.config.color)
	.setTitle(fetchUser.tag + "'s Banner")
	.setURL(fetchUser.bannerURL({ dynamic: true, size: 4096, format: 'png' }))
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage('attachment://banner.png')
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
        await i.deferReply();    
  
          let attachment = new MessageAttachment(fetchUser.bannerURL({ dynamic: true, size: 4096, format: 'png' }), "banner.png");
  
        return i.editReply({embeds: [embed] , files:[attachment] })
		}
  
} catch {
              
			const nobanner = new MessageEmbed()
				.setColor(client.config.color)
	.setTitle("バーナーが見つからないか、ユーザーIDが無効です。")
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  
        return i.reply({embeds: [nobanner], ephemeral: true})
		}
  
}
}