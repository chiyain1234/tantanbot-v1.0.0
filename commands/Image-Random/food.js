const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')

const cmdName = "food"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("食べ物の画像を取得する。"),
  
    async execute(i, client) {

    var pasta = Math.floor(Math.random() * 34) + 1;
    var dessert = Math.floor(Math.random() * 36) + 1;
    var pizza = Math.floor(Math.random() * 95) + 1;
    var burger = Math.floor(Math.random() * 87) + 1;
    var rice = 
Math.floor(Math.random() * 35) + 1;
    var samosa = Math.floor(Math.random() * 22) + 1;
    var biryani = Math.floor(Math.random() * 81) + 1;
    var curry = Math.floor(Math.random() * 22) + 1;
    var idly = Math.floor(Math.random() * 77) + 1;
    var dosa = Math.floor(Math.random() * 83) + 1;
    
var food = [`pasta/pasta${pasta}`, `dessert/dessert${dessert}`,`pizza/pizza${pizza}`,`burger/burger${burger}`,`rice/rice${rice}`,`samosa/samosa${samosa}`,`biryani/biryani${biryani}`,`butter-chicken/butter/chicken${curry}`,`idly/idly${idly}`,`dosa/dosa${dosa}`];

var foods = Math.floor(Math.random() * food.length);
const image = `https://foodish-api.herokuapp.com/images/${food[foods]}.jpg`

const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('Download Link')
	.setURL(image)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`食べ物の画像 | ${food[foods]}`)
	.setImage(image)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.reply({ embeds: [Embed] })
}
    }