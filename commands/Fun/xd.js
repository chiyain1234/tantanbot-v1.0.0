const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed,MessageActionRow, MessageSelectMenu } = require('discord.js');
const cmdName = "xd"

module.exports = {
      guildOnly: false, 
    adminGuildOnly: false, 
    data: new SlashCommandBuilder() 
        .setName(cmdName)
        .setDescription("XD")
      
            .addSubcommand(subcommand => 
          subcommand
              .setName("liker")      
              .setDescription("あなたのことが好きな人の人数を表示する。")    
    )
           .addSubcommand(subcommand => 
          subcommand
              .setName("howpop")      
              .setDescription("あなた人気度を表示する。")    
    )
           .addSubcommand(subcommand => 
          subcommand
              .setName("howgay")      
              .setDescription("あなたのゲイ度を表示する。")    
    )
          .addSubcommand(subcommand => 
          subcommand
              .setName("peenis")      
              .setDescription("あなたのpeepeeの大きさを表示する。")    
    )
        .addSubcommand(subcommand => 
          subcommand
              .setName("howsimp")      
              .setDescription("あなたのアホ度を表示する。")    
    )
       .addSubcommand(subcommand => 
          subcommand
              .setName("iq")      
              .setDescription("あなたのIQを表示する。")    
    )
       .addSubcommand(subcommand => 
          subcommand
              .setName("disliker")      
              .setDescription("あなたのことが嫌いな人の人数を表示する。")    
    )
       .addSubcommand(subcommand => 
          subcommand
              .setName("howdispop")      
              .setDescription("あなたの不人気度を表示する。")    
    )
       .addSubcommand(subcommand => 
          subcommand
              .setName("howliar")      
              .setDescription("あなたの嘘つき度を表示する。")    
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("howpervert")      
              .setDescription("あなたの変態度を表示する。")    
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("howmarry")      
              .setDescription("あなたが結婚できる確率を表示する。")    
    )
       .addSubcommand(subcommand => 
          subcommand
              .setName("facerank")      
              .setDescription("あなたの顔面ランクを表示する。")    
    )
       .addSubcommand(subcommand => 
          subcommand
              .setName("bodyprice")      
              .setDescription("あなたの体の値段を表示する。")    
    )
       .addSubcommand(subcommand => 
          subcommand
              .setName("headscrew")      
              .setDescription("あなたから抜けているネジの本数を表示する。")    
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("girlrate")      
              .setDescription("あなたは日本人の中でどれだけ女子力が高いかの順位を表示する。")    
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("desires")      
              .setDescription("あなたの脳内の三大欲求の割合を表示する。")    
    )
            .addSubcommand(subcommand => 
          subcommand
              .setName("height-weight")      
              .setDescription("あなたの身長体重を当てる。")    
    ),
  
	async execute(i, client) { 

    
    if (i.options.getSubcommand()=== 'liker') {
var amount = Math.floor(Math.random() * 50) + 0;
    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag}のことが好きな人`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`__${amount}人__`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

    if (i.options.getSubcommand()=== 'howpop') {
var amount = Math.floor(Math.random() * 100) + 0;
    
  if( amount <= 10) {
    var value = "🤣"
    } 
  else if 
    ( 30 >= amount > 10) {
    var value = "🥱"
    }
  else if 
    ( 30 < amount <= 60) {
    var value = "😝"
    }
  else if 
    ( 60 < amount <= 90) {
    var value = "😁"
    }
  else if 
    ( 90 < amount <= 100) {
    var value = "😇"
    }
const description = `${value}`
    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag}の人気度`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`__${amount}%__ Pop!! ${description}`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

    if (i.options.getSubcommand()=== 'howgay') {
var amount = Math.floor(Math.random() * 100) + 0;
    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag} `)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`__${amount}%__ Gay!! 🏳️‍🌈`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

        if (i.options.getSubcommand()=== 'peenis') {
var size = "="
var amount = Math.floor(Math.random() * 10) + 0;
var long = size.repeat(amount)
          
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag}'s pe... size`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`8${long}D`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

    if (i.options.getSubcommand()=== 'howsimp') {
var amount = Math.floor(Math.random() * 100) + 0;

    if( amount <= 10) {
    var value = "🤣"
    } 
  else if 
    ( 30 >= amount > 10) {
    var value = "🥱"
    }
  else if 
    ( 30 < amount <= 60) {
    var value = "😝"
    }
  else if 
    ( 60 < amount <= 90) {
    var value = "😁"
    }
  else if 
    ( 90 < amount <= 100) {
    var value = "😇"
    }
const text = `${value}`
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag} `)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`__${amount}%__ Simp!! ${text}`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

    if (i.options.getSubcommand()=== 'iq') {
var amount = Math.floor(Math.random() * 160) + 50;
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag} `)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`__IQ ${amount}__!!`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

    if (i.options.getSubcommand()=== 'disliker') {
var amount = Math.floor(Math.random() * 50) + 0;
    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag}のことが嫌い人`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`__${amount}人__`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

if (i.options.getSubcommand()=== 'howdispop') {
var amount = Math.floor(Math.random() * 100) + 0;
    
    if( amount <= 10) {
    var value = "🤣"
    } 
  else if 
    ( 30 >= amount > 10) {
    var value = "🥱"
    }
  else if 
    ( 30 < amount <= 60) {
    var value = "😝"
    }
  else if 
    ( 60 < amount <= 90) {
    var value = "😁"
    }
  else if 
    ( 90 < amount <= 100) {
    var value = "😇"
    }
const description = `${value}`
    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag}の不人気度`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`__${amount}%__ 不人気!! ${description}`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

    if (i.options.getSubcommand()=== 'howliar') {
var amount = Math.floor(Math.random() * 105) + 0;
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag} `)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`__${amount}/100__ 嘘つき!!`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

        if (i.options.getSubcommand()=== 'howpervert') {
var amount = Math.floor(Math.random() * 105) + 0;
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag} `)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`__${amount}%__ 変態!!`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }
    
        if (i.options.getSubcommand()=== 'howmarry') {
var amount = Math.floor(Math.random() * 100) + 0;
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag} `)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`__${amount}%__ 結婚できます!!`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

        if (i.options.getSubcommand()=== 'facerank') {
let arr = [`イケメン ←${i.user.username}\n上上\n上中\n上下\n中上\n中中\n中下\n下上\n下中\n下下\nブサイク`,            `イケメン\n上上 ←${i.user.username}\n上中\n上下\n中上\n中中\n中下\n下上\n下中\n下下\nブサイク`,
           `イケメン\n上上\n上中 ←${i.user.username}\n上下\n中上\n中中\n中下\n下上\n下中\n下下\nブサイク`,
           `イケメン\n上上\n上中\n上下 ←${i.user.username}\n中上\n中中\n中下\n下上\n下中\n下下\nブサイク`,
           `イケメン\n上上\n上中\n上下\n中上 ←${i.user.username}\n中中\n中下\n下上\n下中\n下下\nブサイク`,
           `イケメン\n上上\n上中\n上下\n中上\n中中 ←${i.user.username}\n中下\n下上\n下中\n下下\nブサイク`,
           `イケメン\n上上\n上中\n上下\n中上\n中中\n中下 ←${i.user.username}\n下上\n下中\n下下\nブサイク`,
           `イケメン\n上上\n上中\n上下\n中上\n中中\n中下\n下上 ←${i.user.username}\n下中\n下下\nブサイク`,
           `イケメン\n上上\n上中\n上下\n中上\n中中\n中下\n下上\n下中 ←${i.user.username}\n下下\nブサイク`,
           `イケメン\n上上\n上中\n上下\n中上\n中中\n中下\n下上\n下中\n下下 ←${i.user.username}\nブサイク`,
           `イケメン\n上上\n上中\n上下\n中上\n中中\n中下\n下上\n下中\n下下\nブサイク ←${i.user.username}`,
 ];
    var random = Math.floor(Math.random() * arr.length);
    var result = arr[random];
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag} `)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`顔面ランク\n〜〜〜〜〜〜〜〜〜\n${result}\n〜〜〜〜〜〜〜〜〜`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

        if (i.options.getSubcommand()=== 'bodyprice') {
var amount1 = Math.floor(Math.random() * 100000) + 0;
var amount2 = Math.floor(Math.random() * 10000) + 0;
var amount3 = Math.floor(Math.random() * 100000) + 0;
var amount4 = Math.floor(Math.random() * 10000) + 0;
var amount5 = Math.floor(Math.random() * 100000) + 0;
var amount6 = Math.floor(Math.random() * 10000) + 0;
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag} `)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`${i.user.username}の体の値段🥩\n【頭　部】${amount1}円\n【胸　部】${amount2}円\n【　腕　】${amount3}円\n【　腰　】${amount4}円\n【股　関】${amount5}円\n【　脚　】${amount6}円`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }
    
        if (i.options.getSubcommand()=== 'headscrew') {
var amount = Math.floor(Math.random() * 100) + 0;
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.tag} `)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`${i.user.username}の頭からは__**${amount}本**__のネジが抜けてしまっているみたいです`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

        if (i.options.getSubcommand()=== 'girlrate') {
var amount = Math.floor(Math.random() * 60000000) + 1;
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.username}さんは日本人の中でどれだけ女子力が高いか順位を調べました`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`【結果発表】\n第${amount}位\n※日本の人口は約1億2000万人とします`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

            if (i.options.getSubcommand()=== 'desires') {
var amount1 = Math.floor(Math.random() * 100) + 0;
var rate = 100 - amount1
var amount2 = Math.floor(Math.random() * rate) + 0;          
var amount3 = rate - amount2
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.username}さんの脳内`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`食欲：${amount2}%\n性欲：${amount1}%\n睡眠欲：${amount3}%`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }

if (i.options.getSubcommand()=== 'height-weight') {
var sincho = Math.floor(Math.random() * 200) + 100;
var taiju = Math.floor(Math.random() * 100) + 10;
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.username}さんの身長体重`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`身長： ${sincho}cm\n体重： ${taiju}kg`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  i.reply({ embeds: [Embed] });  
  }
    
  }
}