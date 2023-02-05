const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

    if (i.customId === "funCmd") {
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
            .setCustomId("funCmd")
            .setPlaceholder('Command Usage')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
              {
                label: "/117",
                description: "現在時刻を送信する。",
                value: "117",
              },
              {
                label: "/8ball",
                description: "あなたの質問に答える。",
                value: "8ball",
              },
              {
                label: "/ascii",
                description: "文字をアスキーアートにする。",
                value: "ascii",
              },
              {
                label: "/bump",
                description: "Bump(偽)をします。",
                value: "bump",
              },
              {
                label: "/chuck",
                description: "楽しいコマンド。",
                value: "chuck",
              },
              {
                label: "/count",
                description: "カウントパネルを作成する。",
                value: "count",
              },
              {
                label: "/dissoku",
                description: "Dissoku UP(偽)をします。",
                value: "dissoku",
              },
              {
                label: "/funnybutton",
                description: "見たら押すボタン",
                value: "funnybutton",
              },
              {
                label: "/inmu",
                description: "ランダムに淫夢語録を送信する",
                value: "inmu",
              },
              {
                label: "/kaomoji",
                description: "ランダムな顔文字を送信する。",
                value: "kaomoji",
              },
              {
                label: "/laughmoji",
                description: "ランダムな(笑)顔文字を送信する。",
                value: "laughmoji",
              },
              {
                label: "/lenny",
                description: "LennyFaceの顔文字を送信する。",
                value: "lenny",
              },
              {
                label: "/ojisan",
                description: "おじさん構文を生成する。",
                value: "ojisan",
              },
              {
                label: "/randomyoutube",
                description: "ランダムにYouTubeのURLを送信する。",
                value: "randomyoutube",
              },
              {
                label: "/tictactoe",
                description: "○×ゲームをする。",
                value: "tictactoe",
              },
              {
                label: "/uselessweb",
                description: "役に立たないURLを送信する。",
                value: "uselessweb",
              },
              {
                label: "/xd",
                description: "暇つぶしに使ってください。",
                value: "xd",
              },
              {
                label: "/yesno",
                description: "Yes or No",
                value: "yesno",
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

        if (i.values[0] === "117") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`117`)
	.setDescription("```\n" + `/117` + "\n```")
    .addField("Info" , `現在時刻を送信する。`, true)
   .addField("Usage" , "```\n" + `/117` + "\n```", true)
   .addField("Command" , "</117:1003232760246308874>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "8ball") {
          await i.deferUpdate()
   
         const joinEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`8ball`)
.setDescription("```\n" + `/8ball` + "\n```")
 .addField("Info" , `あなたの質問に答える。`, true)
.addField("Usage" , "```\n" + `/8ball` + "\n```", true)
.addField("Command" , "</8ball:1013719510722809927>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
     .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })
       
 
   await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
     }
   
        if (i.values[0] === "ascii") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`ascii`)
	.setDescription("```\n" + `/asciitext: TEXT` + "\n```")
    .addField("Info" , `文字をアスキーアートにする。`, true)
   .addField("Usage" , "```\n" + `/ascii text: en` + "\n```", true)
   .addField("Command" , "</ascii:1001367932976238674>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "bump") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`bump`)
	.setDescription("```\n" + `/bump` + "\n```")
    .addField("Info" , `Bump（偽）をします。`, true)
   .addField("Usage" , "```\n" + `/bump` + "\n```", true)
   .addField("Command" , "</bump:1004650235622072370>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "dissoku") {
          await i.deferUpdate()
   
         const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`dissoku`)
.setDescription("```\n" + `/dissoku up` + "\n```")
 .addField("Info" , `Dissoku Up（偽）をします。`, true)
.addField("Usage" , "```\n" + `/dissoku up` + "\n```", true)
.addField("Command" , "</dissoku up:1021721703862247434>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
    
           
   await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }

        if (i.values[0] === "chuck") {
          await i.deferUpdate()
   
         const joinEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`chuck`)
.setDescription("```\n" + `/chuck TYPE` + "\n```")
 .addField("Info" , `楽しいコマンド。`, true)
 .addField("Options" , "```\n" + `advice, antijoke, bujoku, chat, chucknorris, compliment, dare, joke, name, omosiroi, pun, quotes, roast, showerthought, trivia, truth ` + "\n```", true)
.addField("Usage" , "```\n" + `/chuck joke ` + "\n```", true)
.addField("Command" , "</chuck:1014432429592817754>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
   await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
     }
   
        if (i.values[0] === "inmu") {
          await i.deferUpdate()
   
         const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`inmu`)
.setDescription("```\n" + `/inmu` + "\n```")
 .addField("Info" , `ランダムに淫夢語録を送信する。`, true)
.addField("Usage" , "```\n" + `/inmu` + "\n```", true)
.addField("Command" , "</inmu:1014087354811699220>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
        
   await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }

     if (i.values[0] === "lenny") {
      await i.deferUpdate()

     const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`lenny`)
.setDescription("```\n" + `/lenny` + "\n```")
.addField("Info" , `LennyFace の顔文字を送信する。`, true)
.addField("Usage" , "```\n" + `/lenny` + "\n```", true)
.addField("Command" , "</lenny:1014100051741646871>", true)
.addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
    
await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
 }


        if (i.values[0] === "kaomoji") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`kaomoji`)
	.setDescription("```\n" + `/kaomoji` + "\n```")
    .addField("Info" , `ランダムな顔文字を送信する。`, true)
   .addField("Usage" , "```\n" + `/kaomoji` + "\n```", true)
   .addField("Command" , "</kaomoji:998920719197012065>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "laughmoji") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`laughmoji`)
	.setDescription("```\n" + `/laughmoji` + "\n```")
    .addField("Info" , `ランダムな(笑)文字を送信する。`, true)
   .addField("Usage" , "```\n" + `/laughmoji` + "\n```", true)
   .addField("Command" , "</laughmoji:998920719197012066>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "randomyoutube") {
          await i.deferUpdate()
    
         const leaveEmbed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(`randomyoutube`)
    .setDescription("```\n" + `/randomyoutube` + "\n```")
    .addField("Info" , `ランダムにYouTubeのURLを送信する。`, true)
    .addField("Usage" , "```\n" + `/randomyoutube` + "\n```", true)
    .addField("Command" , "</randomyoutube:1014101690703675523>", true)
    .addField("Permissions" , `User:  無し\nBot: 無し`, true)
    .setTimestamp()
    .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
    .setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
        
    await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }
    
     if (i.values[0] === "uselessweb") {
      await i.deferUpdate()

     const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`uselessweb`)
.setDescription("```\n" + `/uselessweb` + "\n```")
.addField("Info" , `役に立たないURLを送信する。`, true)
.addField("Usage" , "```\n" + `/uselessweb` + "\n```", true)
.addField("Command" , "</uselessweb:1014096417423368232>", true)
.addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
    
await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
 }

        if (i.values[0] === "xd") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`popmeter`)
	.setDescription("```\n" + `/xd TYPE` + "\n```")
    .addField("Info" , `暇つぶしに使ってください。`, true)
    .addField("Options" , "```\n" + `bodyprice, disires, disliker, facerank, girlrate, headscrew, height-weight, howgay, howdispop, howliar, howmarry, howpervert, howpop, howsimp, iq, liker, peenis` + "\n```", true)
   .addField("Usage" , "```\n" + `/xd` + "\n```", true)
   .addField("Command" , "</xd:1008645301407580160>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "yesno") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`yesno`)
	.setDescription("```\n" + `/yesno` + "\n```")
    .addField("Info" , `Yes、Noのどちらかの画像をランダムに送信する。\n超低確率でMaybeが返ってくることもあるかもしれない。`, true)
   .addField("Usage" , "```\n" + `/yesno` + "\n```", true)
   .addField("Command" , "</yesno:1002920187848298507>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

     if (i.values[0] === "ojisan") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`ojisan`)
	.setDescription("```\n" + `/ojisan 任意| name: NAME emoji: AMOUNT[0~9]` + "\n```")
    .addField("Info" , `おじさん構文を作成する。`, true)
   .addField("Usage" , "```\n" + `/ojisan name: Bob emoji:9` + "\n```", true)
   .addField("Command" , "</ojisan:1008185319486652426>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

     if (i.values[0] === "count") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`count`)
	.setDescription("```\n" + `/count` + "\n```")
    .addField("Info" , `カウントパネルを作成する。`, true)
   .addField("Usage" , "```\n" + `/count` + "\n```", true)
   .addField("Command" , "</count:1009080726467117146>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

     if (i.values[0] === "funnybutton") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`funnybutton`)
	.setDescription("```\n" + `/funnybutton type: [options]` + "\n```")
    .addField("Info" , `見たら押すボタンを作成する。`, true)
   .addField("Usage" , "```\n" + `/funnybutton type: 押したら絵描くボタン` + "\n```", true)
   .addField("Note" , "```\n" + `ボタンクールダウン:10s\n一度に押せる回数は5回です。` + "\n```", true)
   .addField("Command" , "</funnybutton:1008982833957703720>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
}
})
        