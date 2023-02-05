const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const ms = require("ms")

const { Permissions } = require('discord.js');

module.exports = {
guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
      userPerm: "MANAGE_CHANNELS",
  botPerm: "MANAGE_CHANNELS",   
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
    .setName('createchannel')
    .setDescription('チャンネルを作成する。')
    .addStringOption((option) => {
         return option
        .setName('name')
        .setDescription('名前を入力してください。')
        .setRequired(true)
           }),
           
async execute(i, client) {

        const name = i.options.getString('name')

i.guild.channels.create(name, { type: 'GUILD_TEXT' })

  i.reply({
    content: `チャンネル作成`, ephemeral: true })
}
}
