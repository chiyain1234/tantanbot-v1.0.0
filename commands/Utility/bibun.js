const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed,MessageActionRow, MessageSelectMenu } = require('discord.js');
const math = require('mathjs');
const cmdName = "bibun"

module.exports = {
      guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("微分する。")
 	      .addStringOption(option => option.setName('関数')
			.setDescription('関数を入力してください。')
			.setRequired(true))
 	      .addStringOption(option => option.setName('値')
			.setDescription('値を入力してください。')
			.setRequired(true)),

	async execute(i, client) { // Function to run on call
  var cal = i.options.getString('関数');
var x = i.options.getString('値');
var mat = cal.replace( "×", "*" ).replace("÷","/").replace("√","sqrt").replace(",",".").replace("π","pi")
    
let result;
        try {
            result = math.derivative(mat, x);
        } catch (e) {
 const Embed = new MessageEmbed()
    .setColor("RED")
    .setTitle(`エラー`)
    .setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
.setDescription("**有効な値を入力してください。**\n\n**計算の例** - \n1. **平方根の計算** - `sqrt(3^2 + 4^2) = 5`\n2. **単位の変換** - `2 inch to cm = 0.58`\n3. **三角関数** - `cos(45 deg) = 0.7071067811865476`\n4. **通常の計算** - `+, -, ^, /, /n少数` = **2.5 - 2 = 0.5\n5. **累乗の計算** - `2^3 = 8`")
    .setTimestamp()
    .setFooter({ text: `/${cmdName}`, iconURL: '' });
    
return i.reply({ embeds: [Embed] ,  ephemeral: true });  
        }

        const lembed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
.setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")
            .addField("**関数**", `\`\`\`Js\n${cal}\`\`\``)
            .addField("**結果**", `\`\`\`Js\n${result}\`\`\``)
            	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
         i.reply({ embeds: [lembed] });  
}
}