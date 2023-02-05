const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const cmdName = "inmu"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("ランダムに淫夢語録を送信する。"),


	async execute(i, client) {
      let getuni = async () => {
        
        let response = await axios.get(
          'https://gist.githubusercontent.com/HRTK92/4807a989e53531767c8614e6dd77a0f2/raw/b0d47e27ba981657c9adf7d534f51f2fb09ada0d/%25E6%25B7%25AB%25E5%25A4%25A2%25E8%25AA%259E%25E9%258C%25B2.json'
          );
        let uni = response.data;
        return uni;
      };
    
    let uniValue = await getuni();
    let arr = uniValue.淫夢語録
    var random = Math.floor(Math.random() * arr.length);
    var result = arr[random];
    
  i.reply({ content: result });  
}
}