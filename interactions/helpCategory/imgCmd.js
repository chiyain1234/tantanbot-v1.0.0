const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

    if (i.customId === "imgCmd") {
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
          .setCustomId("imgCmd")
          .setPlaceholder('Command Usage')
          .setMinValues(1)
          .setMaxValues(1)
          .addOptions([
            {
              label: "/animake",
      description: "指定したタグで2次画像を検索する。",
              value: "animake",
            },
            {
              label: "/animal",
description: "動物の画像を生成する。",
              value: "animal",
            },
            {
              label: "/animalbutton",
description: "指定したタグで2次画像を検索する。",
              value: "animalbutton",
            },
            {
              label: "/anime",
description: "2次画像を生成する。",
              value: "anime",
            },
            {
              label: "/animefeel",
description: "アニメの監視の画像を送信する。",
              value: "animefeel",
            },
            {
              label: "/animesearch",
description: "アニメを検索する。",
              value: "animesearch",
            },
            {
              label: "/danbooru",
description: "画像を検索する。",
              value: "danbooru",
            },
            {
              label: "/desktopwallpaper",
description: "デスクトップ用背景の画像を取得する。",
              value: "desktopwallpaper",
            },
            {
              label: "/food",
description: "食べ物の画像を取得する。",
              value: "food",
            },
            {
              label: "/giphy",
description: "GIF画像を検索する。",
              value: "giphy",
            },              
            {
              label: "/httpcat",
description: "Httpのステータスコードに対応するを検索する。",
              value: "httpcat",
            },
            {
              label: "/ident-icon",
description: "GitHubのアイデントアイコンを作成する。",
              value: "ident-icon",
            },
            {
              label: "/mobilewallpaper",
description: "指定モバイル用背景の画像を取得する。",
              value: "mobilewallpaper",
            },
            {
              label: "/nsfw",
description: "NSFWの画像を生成する。",
              value: "nsfw",
            },
            {
              label: "/person",
description: "人物の画像を取得する。",
              value: "person",
            },
            {
              label: "/photo",
description: "ランダムの画像を取得する。",
              value: "photo",
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

 if (i.values[0] === "animake") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`animake`)
	.setDescription("```\n" + `/animake` + "\n```")
    .addField("Info" , `指定したタグで2次画像を検索する。`, true)
     .addField("Options" , "```\n" + `emotion, motion` + "\n```", true)
   .addField("Usage" , "```\n" + `/animake hair-color: black_hair ` + "\n```", true)
   .addField("Command" , "</animake:1010761033616478210>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }


         else if (i.values[0] === "animal") {
            await i.deferUpdate()
          
            const addroleEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`animal`)
	.setDescription("```\n" + `/animal ANIMAL-NAME` + "\n```")
    .addField("Info" , `動物の画像を表示する。`, true)
   .addField("Options" , "```\n" + `bear, bird, cat, dog, duck, fox, hamster, kangaroo, koala, panda, ranbit, racoon, red_panda, shiba, whale` + "\n```", true)
   .addField("Usage" , "```\n" + `/animal cat\n/animal dog` + "\n```", true)
   .addField("Command" , "</animal:1006436607890571284>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [addroleEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
    else if (i.values[0] === "animalbutton") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`animalbutton`)
	.setDescription("```\n" + `/animalbutton animal: [options] label: LABEL-NAME color: [options]` + "\n```")
    .addField("Info" , `動物の画像を生成するボタンを作成する。`, true)
   .addField("Usage" , "```\n" + `/animalbutton animal: トリ label: Bird-Gen color: グリーン ` + "\n```", true)
   .addField("Command" , "</animalbutton:1001024559685832734>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

    else if (i.values[0] === "anime") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`anime`)
	.setDescription("```\n" + `/anime NAME` + "\n```")
    .addField("Info" , `アニメの画像を生成する。`, true)
     .addField("Options" , "```\n" + `coffee-girl, fox-girl, genshin, gotiusa, hololive, jahy, megumin, miku, neko-girl, proseka, rizero, shinobu, touhou, umamusume, waifu, wolf-girl` + "\n```", true)
   .addField("Usage" , "```\n" + `/anime coffee-girl ` + "\n```", true)
   .addField("Command" , "</anime:1006447181504462938>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

    else if (i.values[0] === "animefeel") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`animefeel`)
	.setDescription("```\n" + `/animefeel TYPE [options]` + "\n```")
    .addField("Info" , `アニメの感情の画像を送信する。`, true)
     .addField("Options" , "```\n" + `emotion, motion` + "\n```", true)
   .addField("Usage" , "```\n" + `/anime emotion type: Awoo ` + "\n```", true)
   .addField("Command" , "</animefeel:1006449343001280584>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

    else if (i.values[0] === "animesearch") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`animesearch`)
	.setDescription("```\n" + `/animesearch word: WORDS` + "\n```")
    .addField("Info" , `アニメを検索する。`, true)
   .addField("Usage" , "```\n" + `/anime word: Sord Art Online` + "\n```", true)
   .addField("Command" , "</animesearch:1006106871695933442>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

    else if (i.values[0] === "danbooru") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`danbooru`)
	.setDescription("```\n" + `/danbooru word: WORDS ` + "\n```")
    .addField("Info" , `Danbooruの画像を検索する。`, true)
   .addField("Usage" , "```\n" + `/danbooru word: neko \nNSFW Channelのみ` + "\n```", true)
   .addField("Command" , "</danbooru:1001255201212219533>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

    else if (i.values[0] === "desktopwallpaper") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`desktopwallpaper`)
	.setDescription("```\n" + `/desktopwallpaper nsfwcheck: True/False ` + "\n```")
    .addField("Info" , `デスクトップ用背景の画像を取得する。`, true)
   .addField("Usage" , "```\n" + `/desktopwallpaper nsfwcheck: True \nNSFW Channelのみ\ndesktopwallpaper nsfwcheck: False` + "\n```", true)
   .addField("Command" , "</desktopwallpaper:998920719268323364>", true)
   .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

      else if (i.values[0] === "food") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`food`)
	.setDescription("```\n" + `/food` + "\n```")
    .addField("Info" , `食べ物の画像を取得する。`, true)
   .addField("Usage" , "```\n" + `/food` + "\n```", true)
   .addField("Command" , "</food:998920719268323365>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

    else if (i.values[0] === "giphy") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`giphy`)
	.setDescription("```\n" + `/giphy text: WORDS` + "\n```")
    .addField("Info" , `GIF画像を検索する。`, true)
   .addField("Usage" , "```\n" + `/giphy text: Cat` + "\n```", true)
   .addField("Command" , "</giphyapi:1007979829959872592>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        else if (i.values[0] === "httpcat") {
          await i.deferUpdate()
        
          const cbEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`httpcat`)
.setDescription("```\n" + `/httpcat number: NUMBER` + "\n```")
  .addField("Info" , `Httpのステータスコードに対応するを検索する。`, true)
 .addField("Usage" , "```\n" + `/httpcat number: 404` + "\n```", true)
 .addField("Command" , "</httpcat:1012899222581936239>", true)
   .addField("Permissions" , `User: 無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
     
    await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
      }

      else if (i.values[0] === "ident-icon") {
        await i.deferUpdate()
      
        const cbEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`ident-icon`)
.setDescription("```\n" + `/ident-icon text: TEXT` + "\n```")
.addField("Info" , `GitHubのアイデントアイコンを作成する。`, true)
.addField("Usage" , "```\n" + `/ident-icon text: aiueo` + "\n```", true)
.addField("Command" , "</ident-icon:1012899222581936240>", true)
 .addField("Permissions" , `User: 無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
   
  await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
    }


    else if (i.values[0] === "mobilewallpaper") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`mobilewallpaper`)
	.setDescription("```\n" + `/mobilewallpaper word: WORDS` + "\n```")
    .addField("Info" , `モバイル用背景の画像を取得する。`, true)
   .addField("Usage" , "```\n" + `/mobilewallpaper nsfwcheck: True \nNSFW Channelのみ\nmobilewallpaper nsfwcheck: False` + "\n```", true)
   .addField("Command" , "</mobilewallpaper:998920719268323367>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

    else if (i.values[0] === "nsfw") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`nsfw`)
	.setDescription("```\n" + `/nsfw OPTIONS [options]` + "\n```")
    .addField("Info" , `NSFWの画像を生成する。`, true)
   .addField("Options" , `anime1, anime2 porn1, porn2, porn3`, true)
   .addField("Usage" , "```\n" + `/nsfw anime1 type: Maid\nNSFW Channelのみ` + "\n```", true)
   .addField("Command" , "</nsfw:998920719268323369>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

    else if (i.values[0] === "person") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`person`)
	.setDescription("```\n" + `/person person: [options] ` + "\n```")
    .addField("Info" , `人物の画像を取得する。`, true)
   .addField("Usage" , "```\n" + `/person person: ビル・マーレイ` + "\n```", true)
   .addField("Command" , "</person:1003966691325255680>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

      else if (i.values[0] === "photo") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`photo`)
	.setDescription("```\n" + `/photo` + "\n```")
    .addField("Info" , `ランダムの画像を取得する。`, true)
   .addField("Usage" , "```\n" + `/photo` + "\n```", true)
   .addField("Command" , "</photo:1007148808343388200>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
    }
        })