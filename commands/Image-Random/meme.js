const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed,MessageAttachment } = require('discord.js');
const randomPuppy = require('random-puppy')
const cmdName = "meme"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("ミーム画像を送信する。")        
	.addStringOption(option => option
		.setName('type')
			.setDescription('タイプを選択してください。')
			.setRequired(true)
			.addChoices(
				{ name: 'comics', value: 'comics' },
				{ name: 'dankmeme', value: 'dankmeme' },
        { name: 'discordmeme', value: 'discord_meme'},
				{ name: 'facepalm', value: 'facepalm' },
        { name: 'greentext', value: 'greentext'},
				{ name: 'meme', value: 'meme' },
				{ name: 'memeeconomy', value: 'memeeconomy' },
        { name: 'me_irl', value: 'me_irl'},
        { name: 'owo', value: 'owo'},
				{ name: 'wholesome', value: 'wholesome' },
        )),

async execute(i, client) {
const form = i.options.getString('type')
const img = await randomPuppy(form);
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('Meme')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`[${form}](https://reddit.com/r/${form})`)
	.setImage('attachment://meme.png')
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  
        await i.deferReply();    
  
        let attachment = new MessageAttachment(img, "meme.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })
  } 
}