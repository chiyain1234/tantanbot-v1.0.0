const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')

const cmdName = "animefeel"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("アニメのいろいろな感情の画像を取得する。")
        .addSubcommand(subcommand => 
          subcommand
              .setName("emotion")      
              .setDescription("アニメの感情の画像")        
      	.addStringOption(option => option
		.setName('type')
			.setDescription('どの感情にしますか。')
			.setRequired(true)
       .addChoices(
          	{ name: 'Awoo', value: 'awoo' },
    	  		{ name: 'Blush', value: 'blush' },
         { name: 'Bully', value: 'bully' },
         { name: 'Cuddle', value: 'cuddle' },
         { name: 'Cringe', value: 'cringe' },
         { name: 'Cry', value: 'cry' },
         	{ name: 'Happy', value: 'happy' },
         { name: 'Pat', value: 'pat' },
             { name: 'Poke', value: 'poke' },
            	{ name: 'Smile', value: 'smile' },
    				{ name: 'Smug', value: 'smug' },
    				{ name: 'Yeet', value: 'yeet' },
         	{ name: 'Wink', value: 'wink' },
          )),)

              .addSubcommand(subcommand => 
          subcommand
              .setName("motion")      
              .setDescription("アニメの動作の画像")        
      	.addStringOption(option => option
		.setName('type')
			.setDescription('どの動作にしますか。')
			.setRequired(true)
       .addChoices(
    				{ name: 'Bonk', value: 'bonk' },
         { name: 'Bite', value: 'bite' },
    { name: 'Dance', value: 'dance' },
    		  	{ name: 'Handhold', value: 'handhold' },
      			{ name: 'Highfive', value: 'highfive' },
          	{ name: 'Hug', value: 'hug' },
     	{ name: 'Kick', value: 'kick' },
          	{ name: 'Kill', value: 'kill' },
			    	{ name: 'Kiss', value: 'kiss' },
          	{ name: 'Lick', value: 'lick' },
    			{ name: 'Nom', value: 'nom' },
      			{ name: 'Slap', value: 'slap' },
    			{ name: 'Wave', value: 'wave' },
          ))),
  
    async execute(i, client) {
      
if (i.options.getSubcommand() === 'emotion') {
  
if (i.options.getString('type') === 'awoo') {
var type = "awoo"
}
 else  if (i.options.getString('type') === 'blush') {
var type = "blush"
}
  else  if (i.options.getString('type') === 'bully') {
var type = "bully"
}
  else  if (i.options.getString('type') === 'cuddle') {
var type = "cuddle"
}
  else  if (i.options.getString('type') === 'cringe') {
var type = "cringe"
}
  else  if (i.options.getString('type') === 'cry') {
var type = "cry"
}
  else  if (i.options.getString('type') === 'happy') {
var type = "happy"
}
  else  if (i.options.getString('type') === 'pat') {
var type = "pat"
}
  else  if (i.options.getString('type') === 'poke') {
var type = "poke"
}
  else  if (i.options.getString('type') === 'smile') {
var type = "smile"
}
  else  if (i.options.getString('type') === 'smug') {
var type = "smug"
}
  else  if (i.options.getString('type') === 'yeet') {
var type = "yeet"
}
  else  if (i.options.getString('type') === 'wink') {
var type = "wink"
}
}
      
if (i.options.getSubcommand() === 'motion') {
if (i.options.getString('type') === 'bonk') {
var type = "bonk"
}
else  if (i.options.getString('type') === 'dance') {
var type = "dance"
}
else  if (i.options.getString('type') === 'dance') {
var type = "dance"
}
else  if (i.options.getString('type') === 'handhold') {
var type = "handhold"
}
  else  if (i.options.getString('type') === 'highfive') {
var type = "highfive"
}
  else  if (i.options.getString('type') === 'hug') {
var type = "hug"
}
  else  if (i.options.getString('type') === 'kick') {
var type = "kick"
}
  else  if (i.options.getString('type') === 'kill') {
var type = "kill"
}
    else  if (i.options.getString('type') === 'kiss') {
var type = "kiss"
}
  else  if (i.options.getString('type') === 'lick') {
var type = "lick"
}
  else  if (i.options.getString('type') === 'nom') {
var type = "nom"
}
  else  if (i.options.getString('type') === 'slap') {
var type = "slap"
}
  else  if (i.options.getString('type') === 'wave') {
var type = "wave"
}
}
      
    let getuni = async () => {
        let response = await axios.get(
        `https://api.waifu.pics/sfw/${type}`
          );
        let uni = response.data;
        return uni;
      };
      
    let uniValue = await getuni();
      const image = uniValue.url
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('Download Link')
	.setURL(image)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`${type}`)
	.setImage(image)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
			await i.reply({ embeds: [Embed] })
}
    }