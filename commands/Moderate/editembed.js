const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed } = require('discord.js');

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: true, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName("edit")
        .setDescription("埋め込みメッセージを編集する")
       .addStringOption((option) => {
         return option
        .setName('id')
        .setDescription('メッセージIDを入力してください。')
        .setRequired(true)
           }),
  
    async execute(i, client) {
      
    const emodal = new Modal()
			.setCustomId('Eembed')
			.setTitle('埋め込みメッセージ')

            const eauthor = new TextInputComponent()
  			.setCustomId('eauthor')
			  .setLabel("著者欄を入力してください。")
        .setPlaceholder("著者欄を入力")
			  .setStyle('SHORT');   
      
            const etitle = new TextInputComponent()
  			.setCustomId('etitle')
			  .setLabel("タイトルを入力してください。")
        .setPlaceholder("タイトルを入力")  
			  .setStyle('SHORT');
      
            const edescription = new TextInputComponent()
  			.setCustomId('edescription')
			  .setLabel("説明を入力してください。")
        .setPlaceholder("説明を入力")
			  .setStyle('PARAGRAPH');   

            const efooter = new TextInputComponent()
  			.setCustomId('efooter')
			  .setLabel("フッターを入力してください。")
        .setPlaceholder("フッターを入力")
			  .setStyle('SHORT');   
      
            const ecolor = new TextInputComponent()
  			.setCustomId('ecolor')
			  .setLabel("カラーコードを入力してください。")
        .setPlaceholder("カラーコードを入力(任意)")
			  .setStyle('SHORT');   

      		const one = new MessageActionRow().addComponents(etitle);
		const two = new MessageActionRow().addComponents(edescription);
		const three = new MessageActionRow().addComponents(ecolor);
const four = new MessageActionRow().addComponents(efooter);
const five = new MessageActionRow().addComponents(eauthor);
      
		emodal.addComponents(five, one, two, four, three);
      
		await i.showModal(emodal);
      
const id = i.options.getString('id')
     const embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
            .setTitle(`エディット中`)
            .setDescription(id)
            	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
         i.reply({ embeds: [embed], ephemeral: true});  
      
    }
}