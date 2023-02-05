const Discord = require("discord.js");
const config = require("../config.js");
const functions = require("../functions.js");

module.exports = {
    name: "guildCreate",
    async run(guild, client) {
        const addEmbed = new Discord.MessageEmbed()
            .setTitle("サーバー追加")
            .setDescription(`${guild.name}\n${guild.id}にBotが追加されました。`)
  .addField(`ユーザー数 :`, `${guild.memberCount}`, true)
      .addField(`総サーバー数 :`, `${client.guilds.cache.size}`, true)
  .addField(`総ユーザー数 :`, `${client.guilds.cache.map(guild => guild.memberCount).reduce((p, c) => p + c)}`, true)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .setColor(config.color)
            .setTimestamp();
        client.channels.fetch(config.logch.guildCreate).then(c => c.send({embeds: [addEmbed]}));
    }
}