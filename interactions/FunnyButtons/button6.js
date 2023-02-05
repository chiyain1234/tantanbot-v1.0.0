const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const fs = require("fs")
const {CommandCooldown, msToMinutes} = require('discord-command-cooldown');
const ms = require('ms');

client.on("interactionCreate", async (i, client) => {

if (i.customId ===  "b1") { 
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
    
    let arr = ["2RTで本人アイコン\n2RTされないように頑張りましょう✨",
               "3RTでメイド化\n頑張ってくださいね★",
               "4RTで好きな歌を歌う\n(　ﾟ∀ﾟ)o彡ﾌｩﾌｩ♪",
               "6RTでボカロを2曲歌う\n🎼.•*¨*•.¸¸🎶",
               "特に何も無いです\nもう一度やってみて",
               "3RTで私物を晒しましょう\nふぁいとー★",
               "100RTで本人アイコン\n100RT来たら貴方は人気者です",
               "7RTで誰かの絵を描く\n絵が下手でも描きましょう",
               "3RTで性別転換\nΣd(ﾟ∀ﾟd)ｵｩｨｪｱ",
               "10RTで本人アイコン\n10RTされない事を願いましょう(b･ω･)b",
               "5RTされたら下ネタを1週間言い続けましょう\nドン引きされそうですね",
               "12RTでリプで来たキャラを描く\n＿φ(°-°=)ｶｷｶｷ",
               "すいませんハズレです\nもう一度やってみてっ！",
               "3RTで手を晒す\n✋ﾃ",
               "2RTで鎖骨を晒す\n(*･∀･*)ｴｯﾁｰ!!",
               "6RTで私服を晒す\nﾌｧｯｼｮﾝｾﾝｽ☆",
               "5RTで声を晒す\n(b ･ω･ d)イェァ♪",
               "2RTで2日間猫化\n(\u002F・ω・)\u002Fにゃー！",
               "3RTで好きなユーザーに告白する\n青   春",
               "3いいねで1句\n待機_( ˙꒳​˙ _ )",
               "5いいねで好きなアニメを晒そーっ\n(｀・∀・)ﾉｲｪ-ｲ！" ];
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
	.setTitle(`見たら押すボタン`)
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
	.setTitle(`見たら押すボタン`)
	.setDescription(`結果パターン: 21 通り`)
	.setTimestamp()
	.setFooter({ text: `${val}`, iconURL: '' });

      const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`b1`)
          .setLabel(`見たね？押してね？`)
          .setStyle(`PRIMARY`),
  )
      
  msgs.edit({ embeds: [fEmbed], components: [button]  });  
    
  }
    
})

  }
}

        })