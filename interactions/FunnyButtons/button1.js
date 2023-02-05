const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const fs = require("fs")
const {CommandCooldown, msToMinutes} = require('discord-command-cooldown');
const ms = require('ms');

client.on("interactionCreate", async (i, client) => {

if (i.customId ===  "b3") { 
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
    
    let arr = ["1いいねで推しを描く",
               "2RTで自分の似顔絵を描く",
               "4いいねでほかのユーザーさんに描く",
               "15いいねでネタ絵を描く",
               "5RTで二次創作描く",
               "1いいねで動物を描く",
               "9いいねで創作を描く",
               "もしかして描けない？？\n無理に書かなくていいよ( ◜ ▿ ◝ )\nもっかい押してね！！" ];
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
	.setTitle(`押したら描くボタン`)
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
	.setTitle(`押したら描くボタン`)
	.setDescription(`結果パターン: 8 通り`)
	.setTimestamp()
	.setFooter({ text: `${val}`, iconURL: '' });

      const button = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`b3`)
          .setLabel(`見たね？押してね？`)
          .setStyle(`PRIMARY`),
  )
      
  msgs.edit({ embeds: [fEmbed], components: [button]  });  
    
  }
    
})

  }
}

        })