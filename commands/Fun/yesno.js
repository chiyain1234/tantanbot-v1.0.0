const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const translate = require("translatte")

const cmdName = "yesno"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("Yes or No"),
                
async execute(i, client) {

let getuni = async () => {
        let response = await axios.get(
          'https://yesno.wtf/api'
          );
        let uni = response.data;
        return uni;
      };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setImage(`${uniValue.image}`)
  .setTitle(`${uniValue.answer}`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })

	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed] });  

  if(uniValue.gender === "null") {
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`エラー`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`その名前は判別出来ません。\nローマ字表記でお試しください。`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed], ephemeral: true});  
    
  }
 }
}