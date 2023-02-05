const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed,MessageActionRow, MessageSelectMenu } = require('discord.js');
const AppleStore = require("app-store-scraper");
const cmdName = "appstore"

module.exports = {
      guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("AppStoreの情報を取得する。")
 	      .addStringOption(option => option.setName('検索ワード')
			.setDescription('検索ワードを入力してください。')
			.setRequired(true)),

	async execute(i, client) { // Function to run on call
  var text = i.options.getString('検索ワード');

AppleStore.search({
      term: text,
      num: 1,
      lang: 'ja'
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return i.reply(
          `アプリケーションが見つかりませんでした。`
        );
      }
      
      let Description = App.description.length > 200 ? `${App.description.substr(0, 200)}...` : App.description
      let Price = App.free ? "無料" : `$${App.price}`;
      let Score = App.score.toFixed(1);

      let Screen = App.screenshots

      var shots = Math.floor(Math.random() * Screen.length);
  
      let Embed = new MessageEmbed()
        .setColor(client.config.color)
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .setDescription(Description)
        .addField(`値段`, Price, true)
        .addField(`開発者`, App.developer, true)
        .addField(`評価`, Score, true)
        .setImage(`${Screen[shots]}`)

    .setTimestamp()
    .setFooter({ text: `/${cmdName}`, iconURL: '' });

      return i.reply({ embeds: [Embed] });
    });
    }
}
