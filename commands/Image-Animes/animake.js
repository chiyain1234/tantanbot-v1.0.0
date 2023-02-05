const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const fs = require("fs")
const booru = require('booru');

const cmdName = "animake"

module.exports = {
    guildOnly: true,
    adminGuildOnly: false, 
    data: new SlashCommandBuilder() 
        .setName(cmdName)
        .setDescription("指定したタグで2次画像を検索する。")
 	      .addStringOption(option => option.setName('hair-color')
			.setDescription('タグを選択してください。')
       	.addChoices(
        { name: 'black_hair', value: 'black_hair' },
        { name: 'blonde_hair', value: 'blonde_hair' },
        { name: 'blue_hair', value: 'blue_hair' },
        { name: 'brown_hair', value: 'brown_hair' },
        { name: 'green_hair', value: 'green_hair' },
        { name: 'grey_hair', value: 'grey_hair' },
        { name: 'light_blue_hair', value: 'light_blue_hair' },
        { name: 'light_brown_hair', value: 'light_brown_hair' },
        { name: 'light_purple_hair', value: 'light_purple_hair' },
        { name: 'orange_hair', value: 'orange_hair' },
        { name: 'pink_hair', value: 'pink_hair' },
        { name: 'purple_hair', value: 'purple_hair' },
        { name: 'red_hair', value: 'red_hair' },
        { name: 'yellow_hair', value: 'yellow_hair' },
        { name: 'white_hair', value: 'white_hair' },
        )
			.setRequired(false))
      
   	      .addStringOption(option => option.setName('hairstyle')
			.setDescription('タグを選択してください。')
       	.addChoices(
        { name: 'bob_cut', value: 'bob_cut' },
        { name: 'curly_hair ', value: 'curly_hair ' },
        { name: 'long_hair', value: 'long_hair' },
        { name: 'medium_hair ', value: 'medium_hair ' },
        { name: 'ponytail', value: 'ponytail' },
        { name: 'short_hair', value: 'short_hair' },
        { name: 'straight_hair', value: 'straight_hair' },
        { name: 'tentacle_hair ', value: 'tentacle_hair ' },
        { name: 'twintails', value: 'twintails' },
        { name: 'very_long_hair ', value: 'very_long_hair ' },
        { name: 'very_short_hair ', value: 'very_short_hair ' },
        )
			.setRequired(false))
      
       	      .addStringOption(option => option.setName('eyes-color')
			.setDescription('タグを選択してください。')
       	.addChoices(
        { name: 'black_eyes', value: 'black_eyes' },
        { name: 'blue_eyes', value: 'blue_eyes' },
        { name: 'brown_eyes', value: 'brown_eyes' },
        { name: 'green_eyes', value: 'green_eyes' },
        { name: 'grey_eyes', value: 'grey_eyes' },
        { name: 'gold_eyes', value: 'blonde_eyes' },
        { name: 'light_blue_eyes', value: 'light_blue_eyes' },
        { name: 'light_brown_eyes', value: 'light_brown_eyes' },
        { name: 'light_purple_eyes', value: 'light_purple_eyes' },
        { name: 'orange_eyes', value: 'orange_eyes' },
        { name: 'pink_eyes', value: 'pink_eyes' },
        { name: 'purple_eyes', value: 'purple_eyes' },
        { name: 'red_eyes', value: 'red_eyes' },
        { name: 'yellow_eyes', value: 'yellow_eyes' },
        { name: 'white_eyes', value: 'white_eyes' },
        )
			.setRequired(false))
      
             	      .addStringOption(option => option.setName('head')
			.setDescription('タグを選択してください。')
       	.addChoices(
        { name: 'ahoge', value: 'ahoge' },
        { name: 'cat_ears', value: 'cat_ears' },
        { name: 'fox_ears', value: 'fox_ears' },
        { name: 'headphones ', value: 'headphones ' },
        { name: 'horns', value: 'horns' },
        )
			.setRequired(false))
  
             	      .addStringOption(option => option.setName('style')
			.setDescription('タグを選択してください。')
       	.addChoices(
        { name: 'christmas', value: 'christmas' },
        { name: 'dress', value: 'dress' },
        { name: 'halloween_costume', value: 'halloween_costume' },
        { name: 'loli', value: 'loli' },
        { name: 'maid', value: 'maid' },
        { name: 'seifuku', value: 'seifuku' },
        { name: 'succubus', value: 'succubus' },
        { name: 'swimsuit', value: 'swimsuit' },
        { name: 'uniform', value: 'uniform' },
        )
			.setRequired(false))
      
          .addStringOption(option => option.setName('motion')
			.setDescription('タグを選択してください。')
       	.addChoices(
        { name: 'angry', value: 'angry' },
        { name: 'blush', value: 'blush' },
        { name: 'crying ', value: 'crying' },
        { name: 'hug', value: 'hug' },
        { name: 'sleeping', value: 'sleeping' },
        { name: 'smile', value: 'smile' },
        )
			.setRequired(false)),
  
    async execute(i, client) {
      var tag1 = i.options.getString('hair-color') || ""
      var tag2 = i.options.getString('hairstyle') || ""
      var tag3 = i.options.getString('eyes-color') || ""
      var tag4 = i.options.getString('head') || ""
      var tag5 = i.options.getString('style') || ""
      var tag6 = i.options.getString('motion') || ""
      
  const wEmbed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('Searching...')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`タグ検索: \n[${tag1}] [${tag2}] [${tag3}] [${tag4}] [${tag5}] [${tag6}]`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
			await i.reply({ embeds: [wEmbed] })

    booru.search('sb', [`${tag1}`, `${tag2}`, `${tag3}`, `${tag4}`, `${tag5}`, `${tag6}`], { random: true })
      .then(images => {
        for (let image of images) {
       var des = `タグ: \n[${tag1}] [${tag2}] [${tag3}] [${tag4}] [${tag5}] [${tag6}]`
          let desc = des.replace(/[]/g, "");

  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('Download Link')
	.setURL(`${image.file_url}`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(desc)
	.setImage(`${image.file_url}`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
			return i.editReply({ embeds: [Embed] })

        }
      }).catch(err => {
        if (err.name === 'booruError') {
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('エラー')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`検索結果が見つかりませんでした。`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
			return i.editReply({ embeds: [Embed] })
        } else {
           const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('エラー')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`検索結果が見つかりませんでした。`)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
			return i.editReply({ embeds: [Embed] })
        }
      })
    }
}