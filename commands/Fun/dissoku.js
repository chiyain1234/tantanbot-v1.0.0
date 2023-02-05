const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed,MessageActionRow, MessageSelectMenu, MessageAttachment } = require('discord.js');
const cmdName = "dissoku"

module.exports = {
      guildOnly: false, 
    adminGuildOnly: false, 
    data: new SlashCommandBuilder() 
        .setName(cmdName)
        .setDescription("ディス○")
    
   .addSubcommand(subcommand => 
          subcommand
              .setName("up")              
     .setDescription("Dissoku Up(偽)をします")
     )     

  ,
      
    async execute(i, client) {        
      
            
      if (i.options.getSubcommand()=== 'up') {

    var num = Math.floor(Math.random() * 20) + 0;

    await i.deferReply(); 
const image = 'https://cdn.discordapp.com/attachments/1001354677226590308/1021723967049973801/9FF16C94-F84A-4710-B4F3-83ADAB54BC93.png'
        
const Embed = new MessageEmbed()
	.setColor("#7289da")
	.setTitle(`**ディスコード速報 | Discordサーバー・友達募集・ボット掲示板**`)
  	.setURL(`https://dissoku.net/ja`)
  .setThumbnail("attachment://disso.png")
   .setDescription(`<@${i.user.id}>\ncommand: `+`\`/dissoku up\``+`\n`+`**\`${i.guild.name}\`**`+` **をアップしたよ!**`+`\n`+`_**ActiveLevel ... ${num}**_\n \nサポートサーバー(https://discord.gg/Hj5KNY3)`)
  
  let attachment = new MessageAttachment(image, "disso.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })
     } 
    
     }
}