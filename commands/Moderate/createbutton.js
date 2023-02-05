const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed } = require('discord.js');

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    userPerm: "ADMINISTRATOR",
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName("createbutton")
        .setDescription("ボタンを作成する"),
  
    async execute(i, client) {
      
    const buttonmodal = new Modal()
			.setCustomId('button')
			.setTitle('ボタン作成')

            const label = new TextInputComponent()
  			.setCustomId('label')
			  .setLabel("ラベル名を入力してください。")
        .setMaxLength(80)  
        .setPlaceholder("ラベル名を入力")
	      .setRequired(true)
			  .setStyle('SHORT');   
      
            const urls = new TextInputComponent()
  			.setCustomId('urls')
			  .setLabel("URLを入力してください。")
        .setPlaceholder("URLを入力")  
        .setRequired(true)    
			  .setStyle('SHORT');

      		const lav = new MessageActionRow().addComponents(label);
		const ur = new MessageActionRow().addComponents(urls);
      
		buttonmodal.addComponents(lav,ur);
      
		await i.showModal(buttonmodal);
      
    }
}