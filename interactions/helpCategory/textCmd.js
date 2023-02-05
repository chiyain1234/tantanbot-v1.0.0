const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

    if (i.customId === "textCmd") {
    let helpMenu = new MessageActionRow()
          .addComponents(
      new MessageSelectMenu()
      .setCustomId("commandlist")
      .setPlaceholder('Command List')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "サーバー管理",
          value: "server",
          description: "1ページ目: サーバー管理に関するコマンド一覧"
        },
        {
          label: "ランダム画像",
          value: "img",
          description: "2ページ目: ランダムに画像生成するコマンド一覧"
        },
        {
          label: "画像操作",
          value: "imgen",
          description: "3ページ目: 画像を編集するコマンド一覧"
        },
        {
          label: "娯楽",
          value: "fun",
          description: "4ページ目: 娯楽に関するコマンド一覧"
        },
        {
          label: "情報",
          value: "info",
          description: "5ページ目: 情報に関するコマンド一覧"
        },
        {
          label: "テキストツール",
          value: "text",
          description: "6ページ目: テキストに関するコマンド一覧"
        },
        {
          label: "実用的",
          value: "utility",
          description: "7ページ目: 実用的なコマンド一覧"
        },
        {
          label: "ボイス",
          value: "voice",
          description: "8ページ目: ボイスコマンド一覧"
        }
      ])
)

          
    let cmdinfo = new MessageActionRow()
     .addComponents(
      new MessageSelectMenu()
      .setCustomId("textCmd")
      .setPlaceholder('Command Usage')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "/textmod binary",
          description: "文字をバイナリフォーマットに変換する。",
          value: "binary",
        },
        {
          label: "/textmod decode",
          description: "文字をデコードする。",
          value: "decode",
        },
        {
          label: "/font",
          description: "英語のフォントを別のフォントに変換する。",
          value: "font",
        },
        {
          label: "/textmod gal-moji",
          description: "文字をギャル文字に変換する。",
          value: "gal-moji",
        },
        {
          label: "/textmod length",
          description: "文字数を数える。",
          value: "length",
        },
        {
          label: "/textmod mc-enchant-moji",
          description: "Minecraftのエンチャント文字に変換する。",
          value: "mcmoji",
        },
        {
          label: "/textmod oldkanji",
          description: "文字を旧字体に変換する。",
          value: "oldkanji",
        },
        {
          label: "/textmod reverse",
          description: "文字を逆にする。",
          value: "reverse",
        },
        {
          label: "/textmod zalgo",
          description: "文字をカオスにする。",
          value: "zalgo",
        },
      ])
)

              let helps = new MessageActionRow()
          .addComponents(
      new MessageSelectMenu()
      .setCustomId("operation")
      .setPlaceholder('Operation')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "ホームに戻る",
          value: "home",
        },
        {
          label: "メニューを固定",
          value: "kote",
        },
        {
          label: "メニューを削除",
          value: "delete",
        },
      ])
)
      
let msg = await i.channel.messages.fetch(i.message.id)

        if (i.values[0] === "binary") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`textmod binary`)
	.setDescription("```\n" + `/textmod binary text: TEXT` + "\n```")
    .addField("Info" , `バイナリフォーマットのテキストを取得する。`, true)
   .addField("Usage" , "```\n" + `/textmod binary text: Hello` + "\n```", true)
   .addField("Command" , "</textmod binary:1013788600170729555>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

     if (i.values[0] === "decode") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`textmod decode`)
	.setDescription("```\n" + `/textmod decode text: TEXT` + "\n```")
    .addField("Info" , `バイナリをデコードする。`, true)
   .addField("Usage" , "```\n" + `/textmod decode text: 00110000` + "\n```", true)
   .addField("Command" , "</textmod decode:1013788600170729555>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
      
     if (i.values[0] === "font") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`textmod font`)
	.setDescription("```\n" + `/textmod font text: TEXT` + "\n```")
    .addField("Info" , `英語のフォントを別のフォントに変換する。`, true)
   .addField("Usage" , "```\n" + `/textmod font font: 𝐓𝐞𝐱𝐭 text: Hello` + "\n```", true)
   .addField("Command" , "</font:1004953009169633290>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "gal-moji") {
          await i.deferUpdate()
   
         const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`textmod gal-moji`)
.setDescription("```\n" + `/textmod gal-moji text: TEXT` + "\n```")
 .addField("Info" , `文字をギャル文字に変換する。`, true)
.addField("Usage" , "```\n" + `/textmod gal-moji text: こんにちは` + "\n```", true)
.addField("Command" , "</textmod gal-moji:1013788600170729555>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
    
           
   await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }

     if (i.values[0] === "mcmoji") {
      await i.deferUpdate()

     const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`textmod mc-enchant-text`)
.setDescription("```\n" + `/textmod mc-enchant-text text: TEXT` + "\n```")
.addField("Info" , `Minecraftのエンチャント文字に変換する。`, true)
.addField("Usage" , "```\n" + `/textmod mc-enchant-text text: Minecraft` + "\n```", true)
.addField("Command" , "</textmod mc-enchant-text:1013788600170729555>", true)
.addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })     
await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
 }

 if (i.values[0] === "oldkanji") {
  await i.deferUpdate()

 const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`textmod oldkanji`)
.setDescription("```\n" + `/textmod oldkanji text: TEXT` + "\n```")
.addField("Info" , `文字を旧字体に変換する。`, true)
.addField("Usage" , "```\n" + `/textmod oldkanji text: 祇園精舎の鐘の声、諸行無常の響きあり。` + "\n```", true)
.addField("Command" , "</textmod oldkanji:1013788600170729555>", true)
.addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })     
await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
}

        if (i.values[0] === "length") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`textmod length`)
	.setDescription("```\n" + `/textmod length text: TEXT` + "\n```")
    .addField("Info" , `文字数を数える。`, true)
   .addField("Usage" , "```\n" + `/textmod length text: 1234567890` + "\n```", true)
   .addField("Command" , "</textmod length:1013788600170729555>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "random") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`textmod random`)
	.setDescription("```\n" + `/textmod random text: TEXT` + "\n```")
    .addField("Info" , `文字をランダムにする。`, true)
   .addField("Usage" , "```\n" + `/textmod random text: Bob` + "\n```", true)
   .addField("Command" , "</textmod random:1013788600170729555>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "reverse") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`textmod reverse`)
	.setDescription("```\n" + `/textmod reverse text: TEXT` + "\n```")
    .addField("Info" , `文字を逆にする。`, true)
   .addField("Usage" , "```\n" + `/textmod reverse text: よるなに逆` + "\n```", true)
   .addField("Command" , "</textmod reverse:1013788600170729555>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "zalgo") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`textmod zalgo`)
	.setDescription("```\n" + `/textmod zalgo` + "\n```")
    .addField("Info" , `文字をカオスにする。`, true)
   .addField("Usage" , "```\n" + `/textmod zalgo text: Hello` + "\n```", true)
   .addField("Command" , "</textmod zalgo:1013788600170729555>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

    }
        })