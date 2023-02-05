const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')

const cmdName = "discordstatus"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("Discordのステータスを取得する。"),
  
    async execute(i, client) {

      let getuni = async () => {
        let response = await axios.get(
          'https://discordstatus.com/api/v2/status.json'
          );
        let uni = response.data;
        return uni;
      };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ISSの位置情報を取得しました。`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription("```\n" + `ID: ${uniValue.page.id}\nTimeZone: ${uniValue.page.time_zone}\n説明: ${uniValue.status.description}` + "\n```"
      )
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.reply({ embeds: [Embed] })
}
    }