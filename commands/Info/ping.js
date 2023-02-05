const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
  adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName("ping")
        .setDescription("Ping値を測定"),

    async execute(i, client) {
        const embed = new Discord.MessageEmbed()
                .setTitle("Ping")
                .addField("WebSocket", `**${client.ws.ping} ms**`, true)
                .addField("Command", `**${new Date() - i.createdAt} ms**`, true)
                .setColor(client.config.color)
                .setTimestamp();
       await i.reply({embeds: [embed]});
    }
}