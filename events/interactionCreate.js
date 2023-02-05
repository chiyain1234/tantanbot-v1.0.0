const client = require('../index')
const Discord = require("discord.js")
const config = require("../config.js");
const functions = require("../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions } = require('discord.js');
const fs = require("fs") // Import FS to read event files
const {CommandCooldown, msToMinutes} = require('discord-command-cooldown');
const ms = require('ms');

client.on("interactionCreate", async (i) => {
    if (!i.isCommand()) return;
    const command = client.commands.get(i.commandName);
    if (!command) return;
  
    // DM専用コマンド
    if (command.guildOnly && !i.inGuild()) {
        const embed = new Discord.MessageEmbed()
            .setTitle("エラー")
            .setDescription("このコマンドはDMでは実行できません。")
            .setColor("RED");
        i.reply({embeds: [embed], ephemeral: true })
        return;
    }
  
if (command.userPerm && !i.member.permissions.has(command.userPerm)) {
  if(command.userPerm === "ADMINISTRATOR") {
var permission = "管理者"
  }
else if(command.userPerm === "MANAGE_ROLES") {
var permission = "ロールの管理"
  }
else if(command.userPerm === "MANAGE_CHANNELS") {
var permission = "チャンネルの管理"
  }
    else if(command.botPerm === "MANAGE_MESSAGES") {
var permission = "メッセージの管理"
  }
else if(command.userPerm === "CONNECT") {
var permission = "接続"
  }
const Deembed = new Discord.MessageEmbed()
            .setTitle("エラー")
            .setDescription(`あなたはこのコマンドを使う権限をもっていません。\n必要な権限: **${permission}** | **${command.userPerm}**`)
            .setColor("RED");
        i.reply({embeds: [Deembed], ephemeral: true })
return;
        }



if (command.botPerm && !i.guild.me.permissions.has(command.botPerm)) {
  if(command.botPerm === "ADMINISTRATOR") {
var permission = "管理者"
  }
else if(command.botPerm === "MANAGE_ROLES") {
var permission = "ロールの管理"
  }
else if(command.botPerm === "MANAGE_CHANNELS") {
var permission = "チャンネルの管理"
  }
  else if(command.botPerm === "MANAGE_MESSAGES") {
var permission = "メッセージの管理"
  }
  else if(command.botPerm === "CONNECT") {
var permission = "接続"
  }
const Deembed = new Discord.MessageEmbed()
            .setTitle("エラー")
            .setDescription(`ボットにこのコマンドを使う権限がありません。\n必要な権限: **${permission}** | **${command.botPerm}**`)
            .setColor("RED");
        i.reply({embeds: [Deembed], ephemeral: true })
return;
        }

if (!client.cooldowns.has(command.name)) { 
			client.cooldowns.set(command.name, new Discord.Collection());
		}
		const timestamps = client.cooldowns.get(command.name); 
		const cooldownAmount = (command.cooldown || 0); 

		if(timestamps.has(i.user.id)) {
			const expirationTime = timestamps.get(i.user.id) + cooldownAmount;
			if(Date.now() < expirationTime) { 
				const timeLeft = (expirationTime - Date.now()) / 1000;
        const Deembed = new Discord.MessageEmbed()
            .setTitle("エラー")
            .setDescription(`クールダウン | **${timeLeft}**秒後にまた実行してください。`)
            .setColor("RED");
        i.reply({embeds: [Deembed], ephemeral: true })
        return;
			}
		} 

		timestamps.set(i.user.id, Date.now());

  
  
    // 管理者専用コマンド
    if (command.adminOnly && !i.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        const Deembed = new Discord.MessageEmbed()
            .setTitle("エラー")
            .setDescription(`あなたはこのコマンドを使う権限をもっていません。\n必要な権限: **管理者 | ADMINISTRATOR**`)
            .setColor("RED");
        i.reply({embeds: [Deembed], ephemeral: true })
return;
    }
      
  if (command.nsfwOnly && !i.channel.nsfw) {
        const Deembed = new Discord.MessageEmbed()
            .setTitle("エラー")
            .setDescription(`NSFWチャンネルではないので、このコマンドは使用できません。`)
            .setColor("RED");
        i.reply({embeds: [Deembed], ephemeral: true })
return;
    }
  
    client.func = functions;
    client.config = config;

    // 実行
    try {
        await command.execute(i, client);
      
        const log = new Discord.MessageEmbed()
            .setTitle("コマンド実行ログ")
            .setDescription(`${i.user.tag}(${i.user.id}) がコマンドを実行しました。`)
            .setColor("YELLOW")
            .setTimestamp()
            .setThumbnail(i.user.displayAvatarURL({ dynamic: true }))
            .addField("コマンド", "```\n" + i.toString() + "\n```")
            .addField("実行サーバー", "```\n" + `${i.guild.name}(${i.guild?.id ?? "DM"})` + "\n```", true)
            .addField("実行ユーザー", "```\n" + `${i.user.tag}(${i.user.id})` + "\n```", true)
            .setFooter({ text: String(i.id) })
        client.channels.fetch(config.logch.command).then(c => c.send({ embeds: [log] }));

    } catch (error) {
        console.error(error);
    }
      
    })

