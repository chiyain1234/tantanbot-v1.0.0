const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, MessageButton } = require('discord.js');

const cmdName = "game"

module.exports = {
    guildOnly: false, 
  adminGuildOnly: false, 
  data: new SlashCommandBuilder() 
      .setName(cmdName)
      .setDescription("ミニゲームをする。")
  
 .addSubcommand(subcommand => 
        subcommand
            .setName("janken")              
   .setDescription("ボットとじゃんけんをする。")

   .addStringOption(option => option
    .setName('ote')
        .setDescription('種類を選択してください。')
        .setRequired(true)
        .addChoices(
            { name: '✊グー', value: 'gu' },
    { name: '✌チョキ', value: 'choki' },
    { name: '✋パー', value: 'pa' }, 
    ))
 ),
    
  async execute(i, client) {        
    
          
    if (i.options.getSubcommand()=== 'janken') {

        if (i.options.getString('ote') === 'gu') {
            var arr = [`✊\nあいこです！`,`✌\n負けました...`,`✋\n勝ちました！(^▽^)/`]
     var random = Math.floor(Math.random() * arr.length);
     var result = arr[random];
       var yourotete = "✊"
        }
      else if (i.options.getString('ote') === 'choki') {
        var arr = [`✊\n勝ちました！(^▽^)/`,`✌\nあいこです！`,`✋\n負けました...`]
            var random = Math.floor(Math.random() * arr.length);
            var result = arr[random];
              var yourotete = "✌"
               }

      else if (i.options.getString('ote') === 'pa') {
                var arr = [`✊\n負けました...`,`✌\n勝ちました！(^▽^)/`,`✋\nあいこです！`]
                var random = Math.floor(Math.random() * arr.length);
                var result = arr[random];
                  var yourotete = "✋"
                   }

        const Embed = new MessageEmbed()
        .setColor(client.config.color)
        .setTitle(`じゃんけんぽい`)
        .addField("あなた" , `${yourotete}`, true)
        .addField("TanTanBot" , `${result}`, true)
        .setTimestamp()
        .setFooter({ text: i.toString(), iconURL: '' });
      i.reply({ embeds: [Embed]})
        
 
  }
    

  }
}