const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')

const cmdName = "laughomoji"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("ランダムな(笑)顔文字を送信する。"),
  
    async execute(i, client) {

      let getuni = async () => {
        let response = await axios.get(
          'https://yapi.ta2o.net/apis/warosuapi.cgi?format=json'
          );
        let uni = response.data;
        return uni;
      };
    let uniValue = await getuni();
     i.reply(`${uniValue.str}`)
}
    }