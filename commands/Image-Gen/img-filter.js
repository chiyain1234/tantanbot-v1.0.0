const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment} = require('discord.js');
const axios = require('axios')
const canvacord = require("canvacord");
const cmdName = "img-filter"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("指定したユーザーのアイコンにフィルターをかける。")
      
.addSubcommand(subcommand => 
          subcommand
              .setName("greyscale")      
              .setDescription("アイコンを灰色にする。")        
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )

.addSubcommand(subcommand => 
          subcommand
              .setName("invertgreyscale")      
              .setDescription("アイコンを反転+灰色にする。")        
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )
      
      .addSubcommand(subcommand => 
          subcommand
              .setName("invert")      
              .setDescription("反転フィルター")        
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )

            .addSubcommand(subcommand => 
          subcommand
              .setName("bright")      
              .setDescription("ライトフィルター")     
              .addNumberOption(
        option => option
        .setName("value")
        .setDescription("大きさ")
        .setRequired(true)
        .setMinValue(1) 
        .setMaxValue(5) 
    )
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )

            .addSubcommand(subcommand => 
          subcommand
              .setName("blur")      
              .setDescription("ぼかしフィルター")        
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )
      
            .addSubcommand(subcommand => 
          subcommand
              .setName("threshold")      
              .setDescription("モノクロフィルター")        
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )

      .addSubcommand(subcommand => 
          subcommand
              .setName("sepia")      
              .setDescription("セピアフィルター")        
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )

            .addSubcommand(subcommand => 
          subcommand
              .setName("pixelate")      
              .setDescription("モザイクフィルター")    
              .addNumberOption(
        option => option
        .setName("value")
        .setDescription("大きさ")
        .setRequired(true)
        .setMinValue(1) 
        .setMaxValue(10) 
    )
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("glass")      
              .setDescription("グラスフィルター")    
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )
      
        .addSubcommand(subcommand => 
          subcommand
              .setName("burn")      
              .setDescription("燃焼フィルター")        
              .addNumberOption(
        option => option
        .setName("value")
        .setDescription("大きさ")
        .setRequired(true)
        .setMinValue(1) 
        .setMaxValue(5) 
    )
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )
      
      .addSubcommand(subcommand => 
          subcommand
              .setName("dark")      
              .setDescription("ダークフィルター")    
              .addNumberOption(
        option => option
        .setName("value")
        .setDescription("大きさ")
        .setRequired(true)
        .setMinValue(1) 
        .setMaxValue(5) 
    )
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )
      
                     .addSubcommand(subcommand => 
          subcommand
              .setName("rainbow")      
              .setDescription("虹色フィルター")        

   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )

      .addSubcommand(subcommand => 
          subcommand
              .setName("sharpen")      
              .setDescription("シャープフィルター")        
              .addNumberOption(
        option => option
        .setName("lvl")
        .setDescription("大きさ")
        .setRequired(true)
        .setMinValue(1) 
        .setMaxValue(100) 
    )
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )

      
   .addSubcommand(subcommand => 
          subcommand
          .setName("colorfy")      
          .setDescription("カラーフィルター")  
   .addStringOption((option) => {
         return option
        .setName('color')
        .setDescription('色の色コードを入力してください。')
        .setRequired(true)
   })
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           })   
  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           })
                  
    )
      
    .addSubcommand(subcommand => 
          subcommand
              .setName("resize")      
              .setDescription("画像をリサイズする。")        

   .addNumberOption(
        option => option
        .setName("width")
        .setDescription("幅の大きさを指定")
        .setRequired(true)
    )

    .addNumberOption(
        option => option
        .setName("height")
        .setDescription("高さの大きさを指定")
        .setRequired(true)
    )
      
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(false)
           }
                 )
                  .addAttachmentOption((option) => {
         return option
        .setName('attachment')
        .setDescription('画像を選択してください。')
        .setRequired(false)
           }
                 ),
    )
  
  ,
  
    async execute(i, client) {

      if((i.options.getUser('user') === null) && (i.options.getAttachment('attachment') !== null)){
      var avatar = i.options.getAttachment('attachment').url
var title = "image"
      }
      else if((i.options.getUser('user') !== null) && (i.options.getAttachment('attachment') === null)) {
var user = i.options.getUser('user')
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
  var title = user.tag + "'s Avatar"
        
 }
            else if((i.options.getUser('user') === null) && (i.options.getAttachment('attachment') === null)) {
var avatar = i.user.displayAvatarURL({size: 4096, format: 'png' })
var title = i.user.tag + "'s Avatar"
        
 }

      
     if (i.options.getSubcommand()=== 'burn') {
    var value = i.options.getNumber('value');
    var img = await canvacord.Canvas.burn(avatar,value);
   } 
    else if (i.options.getSubcommand()=== 'rainbow') {
  var img = `https://some-random-api.ml/canvas/gay?avatar=${avatar}`
   }    
     else if (i.options.getSubcommand()=== 'pixelate') {
  var value = i.options.getNumber('value');    
  var img = await canvacord.Canvas.pixelate(avatar,value);
   }
    else if (i.options.getSubcommand() === 'greyscale') {
            
 var img = await canvacord.Canvas.greyscale(avatar);
} 
 else  if (i.options.getSubcommand() === 'invert') {
 var img = await canvacord.Canvas.invert(avatar);
}
 else  if (i.options.getSubcommand() === 'invertgreyscale') {
 var img = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${avatar}`
}
else if (i.options.getSubcommand() === 'threshold') {
  var img = `https://some-random-api.ml/canvas/threshold?avatar=${avatar}`
}
 else  if (i.options.getSubcommand() === 'sepia') {
  var img = `https://some-random-api.ml/canvas/sepia?avatar=${avatar}`
}
 else  if (i.options.getSubcommand() === 'glass') {
  var img = `https://some-random-api.ml/canvas/glass?avatar=${avatar}`
}
 else  if (i.options.getSubcommand() === 'bright') {
  var value = i.options.getNumber('value');    
  var img = await canvacord.Canvas.brightness(avatar,value);
}
  else  if (i.options.getSubcommand() === 'dark') {
  var value = i.options.getNumber('value');    
  var img = await canvacord.Canvas.darkness(avatar,value);
}
else  if (i.options.getSubcommand() === 'blur') {
  var img = `https://some-random-api.ml/canvas/blur?avatar=${avatar}`
}
      else  if (i.options.getSubcommand() === 'sharpen') {
  var lvl = i.options.getNumber('lvl');    
var img = await canvacord.Canvas.sharpen(avatar,lvl);
}
   else  if (i.options.getSubcommand() === 'colorfy') {
var color = i.options.getString('color');    
var img = await canvacord.Canvas.colorfy(avatar,color);
}
   else  if (i.options.getSubcommand() === 'resize') {
var height = i.options.getString('height');    
var width = i.options.getString('width');   
var img = await canvacord.Canvas.resize(avatar,width, height);
}

      
try{
  if ((i.options.getUser('user') !== null) && (i.options.getAttachment('attachment') !== null)) {
const Deembed = new MessageEmbed()
            .setTitle("エラー")
            .setDescription(`userオプション、attachmentオプションは、どちらか1つを選択してください。`)
            .setColor("RED");
        i.reply({embeds: [Deembed], ephemeral: true })
        
 }
  else {
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setTitle(`${title}`)
	.setImage('attachment://filter.png')
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });

await i.deferReply(); 
  
  let attachment = new MessageAttachment(img, "filter.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })
      }
   } catch {
                return i.reply({ content: `エラーが発生しました。`, ephemeral: true });
            }
}
}