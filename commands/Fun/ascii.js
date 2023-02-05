const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed,MessageActionRow, MessageSelectMenu } = require('discord.js');
var figlet = require('figlet');

module.exports = {
      guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName("ascii")
        .setDescription("文字をアスキーアートにする")
 	      .addStringOption(option => option.setName('文字')
			.setDescription('文字を入力してください。')
			.setRequired(true)),

	async execute(i, client) { // Function to run on call
  
var de = i.options.getString('文字');
    
figlet(de, function(err, data) {
    if (err) {
        i.reply('エラーが発生しました。');
        console.dir(err);
        return;
    }
    i.reply(`\`\`\`${data}\`\`\``)
});
  }
}