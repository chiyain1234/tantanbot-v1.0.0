const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

    if (i.customId === "voiceCmd") {
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
              .setCustomId("voiceCmd")
              .setPlaceholder('Command Usage')
              .setMinValues(1)
              .setMaxValues(1)
              .addOptions([
                {
                  label: "/join",
                  description: "ボットが指定したボイスチャンネルに接続する。",
                  value: "join",
                },
                {
                  label: "/leave",
                  description: "ボットがボイスチャンネルから切断する。",
                  value: "leave",
                },
                {
                  label: "/together",
                  description: "ボイスチャンネルでTogetherする。",
                  value: "together",
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

        if (i.values[0] === "join") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`join`)
	.setDescription("```\n" + `/join channel: #VOICE` + "\n```")
    .addField("Info" , `ボットが指定したボイスチャンネルに接続する。`, true)
   .addField("Usage" , "```\n" + `/join channel: Voice` + "\n```", true)
   .addField("Command" , "</join:1003935406259183636>", true)
     .addField("Permissions" , `User:  無し\nBot: 接続`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "leave") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`leave`)
	.setDescription("```\n" + `/leave` + "\n```")
    .addField("Info" , `ボットがボイスチャンネルから切断する。`, true)
   .addField("Usage" , "```\n" + `/leave` + "\n```", true)
   .addField("Command" , "</leave:1003944031279128586>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })               
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "together") {
          await i.deferUpdate() 
         const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`together`)
.setDescription("```\n" + `/together` + "\n```")
 .addField("Info" , `ボイスチャンネルでTogetherする。`, true)
.addField("Usage" , "```\n" + `/together` + "\n```", true)
.addField("Command" , "</together:1017708030982373416>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })               
   await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }

      
    }
        })