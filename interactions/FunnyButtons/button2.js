const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const fs = require("fs")
const {CommandCooldown, msToMinutes} = require('discord-command-cooldown');
const ms = require('ms');

client.on("interactionCreate", async (i, client) => {

if (i.customId ===  "b5") { 
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
    
    let arr = ["おめでとう、当たりだよ！\r\n1人をメンションしてボタンを押させよう！",
               "おめでとう、大当たりだよ！\r\n指定した人に3回ボタンを押させよう！",
               "残念、大外れ\r\n5rtで5人にdmでエッチな単語を言う",
               "残念、外れ！\r\n10rtで一番好きな異性に告白！",
               "残念、外れ！\r\n4rtで1日エッチなイラスト！",
               "残念、外れ！\r\n6rtで同性に告白！",
               "残念、外れ！\r\n3rtが3時間以内に来ないと\r\n1日浮上禁止",
               "残念ハズレ！\r\n9rtで誰かとdmセックス！",
               "超残念、大大大外れ\r\n4rtで5人に顔を見せろ！" ];
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
	.setTitle(`摩訶不思議ボタン`)
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
	.setTitle(`摩訶不思議ボタン`)
	.setDescription(`結果パターン: 9 通り`)
	.setTimestamp()
	.setFooter({ text: `${val}`, iconURL: '' });

      const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`b5`)
          .setLabel(`見たら押せ？ 当たり外れ激しいぞ？`)
          .setStyle(`PRIMARY`),
  )
      
  msgs.edit({ embeds: [fEmbed], components: [button]  });  
    
  }
    
})

  }
}

        })