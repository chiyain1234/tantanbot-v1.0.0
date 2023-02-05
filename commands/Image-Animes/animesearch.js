const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const Scraper = require('mal-scraper');
const translate = require("translatte")
const cmdName = "animesearch"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("アニメを検索する。")
            .addStringOption(option => option.setName('word')
			.setDescription('検索ワードを入力してください。')
        .setRequired(true)),
  
    async execute(i, client) {

      var text = i.options.getString('word')
      
        let Replaced = text.replace(/ /g, " ");
  
        let Anime;
      
        let Embed;
      
        try {
      Anime = await Scraper.getInfoFromName(Replaced);
      
        if (!Anime.genres[0] || Anime.genres[0] === null) Anime.genres[0] = "None";
            translate(Anime.synopsis, {from: "auto", to: "ja"}).then(res=>{
       Embed = new MessageEmbed()
        .setColor(client.config.color)
        .setURL(Anime.url)
        .setTitle(Anime.title)
        .setDescription("```"+res.text.substr(0, 2000)+"```")
        .addField(`タイプ`, Anime.type, true)
        .addField(`ステータス`, Anime.status, true)
        .addField(`初演`, Anime.premiered, true)
        .addField(`エピソード数`, Anime.episodes, true)
        .addField(`1コマの時間`, Anime.duration, true)
        .addField(`人気ランキング`, Anime.popularity, true)
        .addField(`ジャンル`, Anime.genres.join(", "))
        .setThumbnail(Anime.picture)
        .setFooter(`評価 - ${Anime.score}`)
        .setTimestamp();
      
        return i.reply({ embeds: [Embed] });
 
    })
        }
        catch (error) {
          console.log(error)
          
    const eEmbed = new MessageEmbed()
	.setColor("RED")
	.setTitle('エラー')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`検索結果が見つかりませんでした。`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			return i.reply({ embeds: [eEmbed], ephemeral: true})
        }
  }
      
}
    