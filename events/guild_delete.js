const Discord = require("discord.js");
const config = require("../config.js");
const functions = require("../functions.js");

module.exports = {
    name: "guildDelete",
    async run(guild, client) {
        const delEmbed = new Discord.MessageEmbed()
            .setTitle("サーバー退出")
            .setDescription(`${guild.name}\n${guild.id}から退出しました。`)
  .addField(`ユーザー数 :`, `${guild.memberCount}`, true)
      .addField(`総サーバー数 :`, `${client.guilds.cache.size}`, true)
  .addField(`総ユーザー数 :`, `${client.guilds.cache.map(guild => guild.memberCount).reduce((p, c) => p + c)}`, true)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .setColor(config.color)
            .setTimestamp();
        client.channels.fetch(config.logch.guildDelete).then(c => c.send({embeds: [delEmbed]}));
    }
}