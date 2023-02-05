const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const translate = require("translatte")

const cmdName = "covid"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("コロナに関する情報を取得する。")
  
 	      .addStringOption(option => option.setName('国名')
			.setDescription('国名を入力してください。')
			.setRequired(true)),
                   

  
async execute(i, client) {
var country = i.options.getString('国名');
translate(country, {from: "auto", to: "english"}).then(async res=>{
    var uri = `https://disease.sh/v3/covid-19/countries/${res.text.substr(0, 2000)}`;
var res1 = encodeURI(uri);

      let getuni = async () => {
        let response = await axios.get(
          `${res1}`
          );
        let uni = response.data;
        return uni;
      };
    let uniValue = await getuni();
        
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`**${country}** のコロナに関する情報`)
.setThumbnail(`${uniValue.countryInfo.flag}`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`国名: ${uniValue.country}\n総人口: ${uniValue.population}\n━━━━━━━━━━━━\n今日の感染者数: ${uniValue.todayCases}\n重傷者数: ${uniValue.critical}\n今日の死亡者数: ${uniValue.todayDeaths}\n━━━━━━━━━━━━`)
        .addField("累計感染者: " , `${uniValue.cases}`, true)
        .addField("累計死亡者数: " , `${uniValue.deaths}`, true)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed] });  
})  .catch(err => {
        if (err.name === 'AxiosError') {
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('エラー')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`国が見つかりませんでした。`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			return i.reply({ embeds: [Embed] })
        }
  }
 ) }
}