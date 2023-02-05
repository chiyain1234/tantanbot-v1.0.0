const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require('axios')
const cmdName = "fakecomment"
const canvacord = require("canvacord");

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("指定したユーザーのフェイクコメントを作成する。")
      	.addStringOption(option => option
		.setName('type')
			.setDescription('どのフィルターにしますか。')
			.setRequired(true)
       .addChoices(
          	{ name: 'YouTube', value: 'youtube' },
    	  		{ name: 'Twitter', value: 'twitter' },
          	{ name: 'Discord', value: 'discord' },
    	  		{ name: 'Phub', value: 'phub' },
          ))
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
           })
	      .addStringOption(option => option.setName('text')
			.setDescription('テキストを入力してください。')
			.setRequired(true)),
  
    async execute(i, client) {
const user = i.options.getUser('user');
const avatar = user.displayAvatarURL({size: 4096, format: 'png' })
const username = user.username
const text = i.options.getString('text');
      
      if (i.options.getString('type') === 'phub') {

  var img = await canvacord.Canvas.phub({ username: username, message:text, image:avatar});
        
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
  .setTitle(`${user.tag}'s Comment OwO`)
	.setImage('attachment://comment.png')
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });

await i.deferReply(); 
  
  let attachment = new MessageAttachment(img, "comment.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] });
      }
      
   else if (i.options.getString('type') === 'discord') {

  var img = await canvacord.Canvas.quote({  image: avatar, message:text, username: username, color: "#ffffff" });
        
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
  .setTitle(`${user.tag}'s Comment OwO`)
	.setImage('attachment://comment.png')
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });

await i.deferReply(); 
  
  let attachment = new MessageAttachment(img, "comment.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] });
      }

      
if (i.options.getString('type') === 'youtube') {
var type = `https://some-random-api.ml/canvas/youtube-comment?username=${username}&comment=${text}&avatar=${avatar}`
}
 else  if (i.options.getString('type') === 'twitter') {
   var l = 15;
    var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var cl = c.length;
  
    var ran = "";
    for (var XD = 0; XD < l; XD++) {
      ran += c[Math.floor(Math.random() * cl)]
    }
var type = `https://some-random-api.ml/canvas/tweet?username=${ran}&displayname=${username}&avatar=${avatar}&comment=${text}`
}
      
      
      const imgs = encodeURI(type)
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${user.tag}'s Comment OwO`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage('attachment://comment.png')
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
await i.deferReply(); 
  
  let attachment = new MessageAttachment(imgs, "comment.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] });
}
    }