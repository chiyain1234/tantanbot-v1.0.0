const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

const cmdName = "8ball"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("あなたの質問に答える。")
 	      .addStringOption(option => option.setName('text')
			.setDescription('テキストを入力してください。')
			.setRequired(true)),


	async execute(i, client) {
const text = i.options.getString('text');

    let arr = ["はい","はい!","はい!!",
               "いいえ","いいえ？","もちろんさぁ",
               "たぶん",
               "絶対そう",
               "もう一度言ってくれない？",
               "考えてみる","うーん...",
               "もちろん違います",
               "完全に違うね",
               "私はそうは思わない",
               "ママに聞いてみるよ",
               "何を言ってるの？"];
    var random = Math.floor(Math.random() * arr.length);
    var result = arr[random];
    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.user.username}「${text}」`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
  .setDescription(`丹丹「${result}」`)
  .setThumbnail(`${i.user.displayAvatarURL({dynamic: true})}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });  
}
}