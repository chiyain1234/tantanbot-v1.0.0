const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

  if (i.customId === "commandlist") {
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

    if (i.values[0] === "server") {
      await i.deferUpdate()

      const serverEmbed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(`サーバー管理`)
        .setDescription("```\n" + `addrole, clear, createbutton, createchannel, createembed, createfreechannel` + "\n```"
        )
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
    .setFooter({ text: '1/8: サーバー管理コマンド', iconURL: '' })
        .setTimestamp()


      let servercmdinfo = new MessageActionRow()
        .addComponents(
          new MessageSelectMenu()
            .setCustomId("serverCmd")
            .setPlaceholder('Command Usage')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
              {
                label: "/addrole",
                description: "指定した人にロールを付ける。",
                value: "addrole",
              },
              {
                label: "/clear",
                description: "指定した数だけメッセージを消す。",
                value: "clear",
              },
              {
                label: "/createbutton",
                description: "ボタンを作成する。",
                value: "createbutton",
              },
              {
                label: "/createchannel",
                description: "チャンネルを作成する。",
                value: "createchannel",
              },
              {
                label: "/createembed",
                description: "埋め込みメッセージを作成する。",
                value: "createembed",
              },
              {
                label: "/createfreechannel",
                description: "フリーチャンネル作成パネルを作成する。",
                value: "createfreechannel",
              },
              {
                label: "/dm",
                description: "指定した人にダイレクトメッセージを送る。",
                value: "dm",
              },
            ])
        )
      await msg.edit({ embeds: [serverEmbed], components: [helpMenu, servercmdinfo, helps] });

    } else if (i.values[0] === "img") {
      await i.deferUpdate()

      const imgEmbed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(`ランダム画像`)
        .setDescription("```\n" + `animake, animal, animalbutton, anime, animefeel, animesearch, danbooru, desktopwallpaper, food, giphy, httpcat, ident-icon, mobilewallpaper, nsfw, person, photo ` + "\n```"
        )	
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
            .setFooter({ text: '2/8: ランダム画像コマンド', iconURL: '' })
        .setTimestamp()

      let imgcmdinfo = new MessageActionRow()
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

      await msg.edit({ embeds: [imgEmbed], components: [helpMenu, imgcmdinfo, helps] });

    } else if (i.values[0] === "imgen") {

      await i.deferUpdate()

      const imgenEmbed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(`画像操作`)
        .setDescription("```\n" + `5000cho, fakecomment, img-filter, img-mod, makememe, meme, text2image` + "\n```"
        )	
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
   .setFooter({ text: '3/8: 画像操作コマンド', iconURL: '' })
        .setTimestamp()



      let imgencmdinfo = new MessageActionRow()
        .addComponents(
          new MessageSelectMenu()
            .setCustomId("imgenCmd")
            .setPlaceholder('Command Usage')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
              {
                label: "/5000cho",
                description: "50000兆円ジェネレーターを生成する。",
                value: "5000cho",
              },
              {
                label: "/fakecomment",
                description: "指定したユーザーのフェイクコメントを作成する。",
                value: "fakecomment",
              },
              {
                label: "/img-filter",
                description: "画像にフィルターをかける。",
                value: "img-filter",
              },
              {
                label: "/img-mod",
                description: "アイコンを操作する。",
                value: "img-mod",
              },
              {
                label: "/makememe",
                description: "ミーム画像を作成する。",
                value: "makememe",
              },
              {
                label: "/meme",
                description: "ミーム画像を送信する。",
                value: "meme",
              },
              {
                label: "/text2image",
                description: "テキストを画像にする。",
                value: "text2image",
              },
            ])
        )



      await msg.edit({ embeds: [imgenEmbed], components: [helpMenu, imgencmdinfo, helps] })

    } else if (i.values[0] === "fun") {

      await i.deferUpdate();

      const funEmbed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(`娯楽`)
        .setDescription("```\n" + `117, 8ball, ascii, , bump, chuck, count, dissoku, funnybutton, inmu, kaomoji, laughmoji, lenny, ojisan, randomyoutube, tictactoe, uselessweb xd, yesno ` + "\n```"
        )
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
            .setFooter({ text: '4/8: 娯楽コマンド', iconURL: '' })
        .setTimestamp()


      let funcmdinfo = new MessageActionRow()
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

      await msg.edit({ embeds: [funEmbed], components: [helpMenu, funcmdinfo, helps] });

    } else if (i.values[0] === "info") {

      await i.deferUpdate()

      const infoEmbed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(`情報`)
        .setDescription("```\n" + `avatar, banner, bot, help, ping, randomavatar, server, user` + "\n```"
        )
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
     .setFooter({ text: '5/8: 情報コマンド', iconURL: '' })
        .setTimestamp()


      let infocmdinfo = new MessageActionRow()
        .addComponents(
          new MessageSelectMenu()
            .setCustomId("infoCmd")
            .setPlaceholder('Command Usage')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
              {
                label: "/avatar",
                description: "指定したユーザーのアバターを取得する。",
                value: "avatar",
              },
              {
                label: "/banner",
                description: "指定したユーザーのバーナーを取得する。",
                value: "banner",
              },             
              {
                label: "/bot",
                description: "TanTanBotの情報を見る。",
                value: "bot",
              },
              {
                label: "/help",
                description: "コマンドリストを表示する。",
                value: "help",
              },
              {
                label: "/ping",
                description: "ping値を測定。",
                value: "ping",
              },
              {
                label: "/randomavatar",
                description: "ボットが確認できるユーザーの中からランダムにアバターを取得する。",
                value: "randomavatar",
              },
              {
                label: "/server",
                description: "サーバーの情報を取得する。",
                value: "server",
              },
              {
                label: "/user",
                description: "指定したユーザーの情報を取得する。",
                value: "user",
              },
            ])
        )
      await msg.edit({ embeds: [infoEmbed], components: [helpMenu, infocmdinfo, helps] });

    } else if (i.values[0] === "text") {
      await i.deferUpdate()

      const textEmbed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(`テキストツール`)
        .setDescription("```\n" + `binary, decode, font, gal-moji, length, mc-enchant-moji, oldkanji, random, reverse, zalgo` + "\n```"
        ) 
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
    .setFooter({ text: '6/8: テキストツールコマンド', iconURL: '' })
        .setTimestamp()


      let textcmdinfo = new MessageActionRow()
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

      await msg.edit({ embeds: [textEmbed], components: [helpMenu, textcmdinfo, helps] });

    } else if (i.values[0] === "utility") {
      await i.deferUpdate()

      const utilityEmbed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(`実用的`)
        .setDescription("```\n" + `appstore, bibun, calc, covid, discordstatus, f, iss, mcskin, numbers, pagescreenshot, qrcode, shorturl, translate` + "\n```")
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
    .setFooter({ text: '7/8: 実用的なコマンド', iconURL: '' })
        .setTimestamp()


 let utilitycmdinfo = new MessageActionRow()
   .addComponents(
     new MessageSelectMenu()
       .setCustomId("utilityCmd")
       .setPlaceholder('Command Usage')
     .setMinValues(1)
       .setMaxValues(1)
      .addOptions([
      {
       label: "/appstore",
       description: "AppStoreの情報を取得する。",
       value: "appstore",
     },
     {
      label: "/bibun",
      description: "微分する。",
      value: "bibun",
     },
      {
     label: "/calc",
     description: "計算をする。",
     value: "calc",
     },
       {
     label: "/calculator",
     description: "計算機を使う。",
     value: "calculator",
     },
      {
    label: "/covid",
    description: "コロナに関する情報を取得する。",
    value: "covid",
     },
     {
     label: "/discordstatus",
     description: "Discordのステータスを取得する。",
     value: "discordstatus",
      },
    {
     label: "/f",
     description: "チャンネル最初のメッセージを取得する。",
     value: "f",
      },
   {
         label: "/iss",
         description: "ISS（国際宇宙ステーション）の現在位置を取得する。",
       value: "iss",
     },
    {
       label: "/mcskin",
       description: "マインクラフトのスキンの画像を取得する。",
       value: "mcskin",
     },
    {
      label: "/numbers",
      description: "数字に関する豆知識を取得する。",
    value: "numbers",
      },
     {
    label: "/pagescreenshot",
    description: "URLのスクショ画像を取得する。",
   value: "pagescreenshot",
       },
        {
    label: "/qrcode",
    description: "URLをQRにする。",
     value: "qrcode",
     },
     {
        label: "/translate",
        description: "翻訳する。",
       value: "translate",
   },
   {
  label: "/urlshorten",
  description: "URLをショートURLにする。",
    value: "urlshorten",
 },
   ])
 )

      await msg.edit({ embeds: [utilityEmbed], components: [helpMenu, utilitycmdinfo, helps] });

    } else if (i.values[0] === "voice") {
      await i.deferUpdate()

      const voiceEmbed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(`ボイス`)
        .setDescription("```\n" + `join, leave, together` + "\n```"
        )
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
   .setFooter({ text: '8/8: ボイスコマンド', iconURL: '' })
        .setTimestamp()

      let voicecmdinfo = new MessageActionRow()
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

      await msg.edit({ embeds: [voiceEmbed], components: [helpMenu, voicecmdinfo, helps] })
    }
  }
})