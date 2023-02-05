const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const fs = require("fs")
const {CommandCooldown, msToMinutes} = require('discord-command-cooldown');
const ms = require('ms');

client.on("interactionCreate", async (i, client) => {

if (i.customId ===  "b4") { 
  const earnCashCommandCooldown = new CommandCooldown('earnCash', ms("10s"))

const userCooldowned = await earnCashCommandCooldown.getUser(`${i.guild.id}_${i.user.id}`); 

  
  if(userCooldowned){
        const timeLeft = msToMinutes(userCooldowned.msLeft, false); // False for excluding '0' characters for each number < 10
  
  const TimeEmbed = new MessageEmbed()
	.setColor(config.color)
	.setTitle(`${i.user.tag}のクールダウン`)
.setThumbnail(`${i.user.displayAvatarURL({dynamic: true})}`)
	.setDescription("クールダウン中です。\n```" + timeLeft.hours + ' 時間 ' + timeLeft.minutes + ' 分 ' + timeLeft.seconds + ' 秒' + "```\n後にまた実行してください。")
	.setTimestamp()

  await i.reply({ embeds: [TimeEmbed], ephemeral: true  })
    } else{
        // do your command stuff
        // and
        await earnCashCommandCooldown.addUser(`${i.guild.id}_${i.user.id}`); // Cooldown user again
    
    let arr = ["3RTで｢寂しい...かまって？｣と生声でツイートする",
               "5RTで｢闇の炎に抱かれて消えろ！！｣と生声(全力)でツイートする",
               "6RTで｢申し訳ございません。\r\n夢の中のお嬢様があまりに可愛らしかったので……うっかり、いつもより長く寝てしまっておりました。｣と生声でツイートする",
               "7RTで｢あははは、何言ってるの？突き落としたんじゃないよ、かってに落ちたんだよ？｣と生声でツイートする",
               "8RTで｢好きです。付き合って?｣と生声でツイートする",
               "10RTで｢ふふっこのプリンは貰っていくぜ！｣と生声でツイートする",
               "15RTで｢俺(私)のっ…そこ…触らないでっ…あぅ…あぁ…｣と生声でツイートする",
               "9RTで｢抱きしめてやるから、こいよ。…ん？抱きしめてほしいんだろ？｣と生声でツイートする",
               "11RTで｢手、つなご？そっちのほうがあったかいよ？｣",
               "13RTで｢す、す、好きなんです！ホントにホントに好きなんです！だ、だから・・・その・・・僕(私)と付き合ってくれませんか？｣と生声でツイートする",
               "12RTで｢おやすみなさい。俺(私)が寝るまで傍に居てくれる？｣と生声でツイートする",
               "14RTで｢なかなか懐かない奴ほど落とし甲斐があるってもんだ｣と生声でツイートする",
               "20RTで君が代を生声でツイートする",
               "16RTで｢やめてっっ…そんなおっきな注射イタイよぉ｣と生声でツイートする",
               "17RTで｢あっ…やっ…そんなっ…ダメっっっ俺(私)っこんなのっっ感じ…ちゃうっ｣と生声でツイートする",
               "18RTで生声でフォロワーさんに一言",
               "19RTで｢あっ…ちょっと……そんなところっあっ……くすぐっ…たいっ！｣と生声でツイートする",
               "5RTで｢お前の身に何かあったらオレが嫌なんだよ！｣と生声でツイートする",
               "7RTで｢好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き好き｣と生声でツイートする",
               "30RTで30秒全力で喘いで生声でツイートする",
               "1RTで｢おやすみなさい｣と生声でツイートする",
               "2RTで｢おはようございます｣と生声でツイートする",
               "6RTで生声で一発ギャグをしてツイートする",
               "4RTで｢今日だけは...甘えさせて？｣と生声でツイートする",
               "当たり！！！フォロワーさん2人を指名して強制的にこのボタンを押させる" ];
    var random = Math.floor(Math.random() * arr.length);
    var result = arr[random];

    let msgs = await i.channel.messages.fetch(i.message.id)

msgs.embeds.forEach(async (lembed) => {
        var value = lembed.footer.text
if(value === "0" ){
  const tEmbed = new MessageEmbed()
	.setColor(config.color)
	.setTitle(`上限に達しました。`)
.setThumbnail(`${i.user.displayAvatarURL({dynamic: true})}`)
	.setDescription("1つのパネルにつき、ボタンを押せる回数は5回です。")
	.setTimestamp()

  await i.reply({ embeds: [tEmbed], ephemeral: true  })
  
  }
  else if(value !== "0" ) {
    
const Embed = new MessageEmbed()
	.setColor(config.color)
	.setTitle(`声晒すボタン`)
  .setDescription(`${i.user.username}: \n${result}`)
 .setThumbnail(`${i.user.displayAvatarURL({dynamic: true})}`)
	.setTimestamp()
 i.reply({ embeds: [Embed] })

  		const msg = await i.fetchReply();
   msg.react("1008987979286593546");
   msg.react("❤️");
    
var val = value -1

const fEmbed = new MessageEmbed()
	.setColor(config.color)
	.setTitle(`声晒すボタン`)
	.setDescription(`結果パターン: 25 通り`)
	.setTimestamp()
	.setFooter({ text: `${val}`, iconURL: '' });

      const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`b4`)
          .setLabel(`見たら押せ？`)
          .setStyle(`PRIMARY`),
  )
      
  msgs.edit({ embeds: [fEmbed], components: [button]  });  
    
  }
    
})

  }
}

        })