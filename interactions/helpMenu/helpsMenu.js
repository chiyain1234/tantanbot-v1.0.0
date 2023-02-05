const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {
  

    if (i.customId === "operation") {
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
      .setCustomId("cmdinfo")
      .setPlaceholder('Command Usage')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "...",
          value: "test",
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
  
if (i.values[0] === "home") {
            await i.deferUpdate()
      
let helpEmbed = new MessageEmbed()
    .setTitle('ヘルプメニュー')
    .setDescription('オプションを選択してください。')
      .addField("**Command List**" , `コマンドのカテゴリーを表示する。`, true)
        .addField("**Command Usage**" , `コマンドの使用方法を表示する。`, true)
          .addField("**Operation**" , `ヘルプメニューの操作を行う。`, true)
    .addField("**Invite Link**" , `[**招待する!**](https://discord.com/api/oauth2/authorize?client_id=998919632566091868&permissions=1103017143414&scope=bot%20applications.commands)`, true)
    .addField("**Bot Support Server**" , `[**サーバーに入る!**](https://discord.gg/3WYXZWDRD7)`, true)
    .setColor(config.color)
      .setImage("https://media.discordapp.net/attachments/1001354677226590308/1007161250263875654/IMG_5674.gif")
    	.setTimestamp()
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: "/help", iconURL: '' })
    
      await msg.edit({ embeds: [helpEmbed] , components: [helpMenu, cmdinfo, helps] });
    }
      
    else if (i.values[0] === "kote") {
            await i.deferUpdate()
            
      await msg.edit({ components: []});
        }

          else if (i.values[0] === "delete") {
            await i.deferUpdate()

await i.message.delete();  // :)
      
    }
    }
})