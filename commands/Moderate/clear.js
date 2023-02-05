const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const ms = require("ms")

const { Permissions } = require('discord.js');

module.exports = {
guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, 
    userPerm: "MANAGE_MESSAGES",
  botPerm: "MANAGE_MESSAGES",   
    data: new SlashCommandBuilder() 
    .setName('clear')
    .setDescription('指定した数だけメッセージを消す。')
    .addIntegerOption((option) => {
         return option
        .setName('amount')
        .setDescription('数を入力してください。')
        .setRequired(true)
           }),
           
async execute(i, client) {
        const amount = i.options.getInteger('amount')
  
  if( amount > 100) 
    return i.reply({
      content: 
        "100以下にしてください。", ephemeral: true 
    });

const messages = await i.channel.messages.fetch({
limit: amount + 1,
});

const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms("14 days")
  );

await i.channel.bulkDelete(filtered)

  i.reply({
    content: `${filtered.size - 1}文字を消去しました。`, ephemeral: true })
}
}