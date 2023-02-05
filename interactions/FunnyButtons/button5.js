const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const fs = require("fs")
const {CommandCooldown, msToMinutes} = require('discord-command-cooldown');
const ms = require('ms');

client.on("interactionCreate", async (i, client) => {

if (i.customId ===  "b2") { 
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
    
    let arr = ["5リプ5RT5いいね来たら1日猫化",
               "10リプ10RT10いいね来たら1週間猫化",
               "30リプ30RT30いいね来たら1ヶ月猫化",
               "1日で来たいいねの数×1週間猫化する",
               "10いいね来るまで浮上禁止",
               "30いいね来るまで浮上禁止",
               "50いいね来るまで浮上禁止",
               "今日中に10リプ10RT10いいね来なかったら静かにDiscord引退する",
               "今日中に20リプ20RT20いいね来なかったら静かにDiscord引退する",
               "小ハズレ！\r\nあと1回このボタン押せ",
               "中ハズレ！\r\nあと3回このボタン押せ",
               "大ハズレ！\r\nあと5回このボタン押せ",
               "特大ハズレ！\r\nあと10回このボタン押せ",
               "小アタリ！\r\n1人(回)メンションしてこのボタン押させろ",
               "中アタリ！\r\n3人(回)メンションしてこのボタン押させろ",
               "大アタリ！\r\n5人(回)メンションしてこのボタン押させろ",
               "特大アタリ！\r\n10人(回)メンションしてこのボタン押させろ",
               "10いいねで萌え袖を晒す",
               "15いいねで本人アイコン加工あり",
               "20いいねで本人アイコン加工なし",
               "15いいねで声を晒す\r\nセリフはリプで決めてもらえ",
               "10リプ10RT10いいねで好きなユーザーにDMで告白するもちろん証拠も晒す",
               "15リプ15RT15いいねで好きなユーザー3人のDM凸って『好きです』って言ってこいもちろん証拠も晒せ",
               "15いいねで自分のファンクラブ作れ",
               "15いいねで『ずっと好きでした！付き合って下さい！』と発言する",
               "15いいねで『ずっと好きでした！付き合って下さい！』と発言する(ボイス)",
               "1日で来たいいねの数×大好きと発言する(ボイス)",
               "15いいねで目を晒す",
               "何も無いけど何か？\r\n時には休むことも大事だぞ",
               "10回このボタン押せ\r\n＆\r\n10人(回)メンションしてこのボタン押させろ",
               "10いいねで落書きを晒せ"];
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
	.setTitle(`見たら絶対押すボタン`)
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
	.setTitle(`見たら絶対押すボタン`)
	.setDescription(`結果パターン: 31 通り`)
	.setTimestamp()
	.setFooter({ text: `${val}`, iconURL: '' });

      const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`b2`)
          .setLabel(`いま目が合ったよね？`)
          .setStyle(`PRIMARY`),
  )
      
  msgs.edit({ embeds: [fEmbed], components: [button]  });  
    
  }
    
})

  }
}

        })