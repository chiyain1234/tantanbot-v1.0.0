const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed,MessageActionRow, MessageSelectMenu, MessageAttachment } = require('discord.js');
const axios = require('axios')
const fs = require("fs")
const hamsterImg = require(`../../db/animals/hamster.json`);
const cmdName = "animal"
const animals = require('random-animals-api'); 

module.exports = {
      guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("動物の画像を表示する。")
      .addSubcommand(subcommand => 
          subcommand
              .setName("bird")      
              .setDescription("鳥の画像を表示する。")    
    )
      
      .addSubcommand(subcommand => 
          subcommand
              .setName("rabbit")      
              .setDescription("ウサギの画像を表示する。")    
    )

      .addSubcommand(subcommand => 
          subcommand
              .setName("cat")      
              .setDescription("ネコの画像を表示する。")    
    )

      .addSubcommand(subcommand => 
          subcommand
              .setName("dog")      
              .setDescription("イヌの画像を表示する。")    
    )
      
      .addSubcommand(subcommand => 
          subcommand
              .setName("duck")      
              .setDescription("アヒルの画像を表示する。")    
    )

      .addSubcommand(subcommand => 
          subcommand
              .setName("fox")      
              .setDescription("キツネの画像を表示する。")    
    )

      .addSubcommand(subcommand => 
          subcommand
              .setName("hamster")      
              .setDescription("ハムスターの画像を表示する。")    
    )
      
      .addSubcommand(subcommand => 
          subcommand
              .setName("kangaroo")      
              .setDescription("カンガルーの画像を表示する。")    
    )
      
      .addSubcommand(subcommand => 
          subcommand
              .setName("koala")      
              .setDescription("コアラの画像を表示する。")    
    )
      
      .addSubcommand(subcommand => 
          subcommand
              .setName("panda")      
              .setDescription("パンダの画像を表示する。")    
    )
      
      .addSubcommand(subcommand => 
          subcommand
              .setName("racoon")      
              .setDescription("アライグマの画像を表示する。")    
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("red_panda")      
              .setDescription("レッサーパンダの画像を表示する。")    
    )      
      .addSubcommand(subcommand => 
          subcommand
              .setName("shiba")      
              .setDescription("シバ犬の画像を表示する。")    
    )

      .addSubcommand(subcommand => 
          subcommand
              .setName("bear")      
              .setDescription("クマの画像を表示する。")    
    )

      .addSubcommand(subcommand => 
          subcommand
              .setName("whale")      
              .setDescription("クジラの画像を表示する。")    
    ),
      
    async execute(i, client) {
      
     if (i.options.getSubcommand()=== 'bird') {
    let getuni = async () => {
        let response = await axios.get(
          'https://some-random-api.ml/img/bird'
          );
        let uni = response.data;
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.link
       var type = "鳥"
     }

     else if (i.options.getSubcommand()=== 'cat') {
        let getuni = async () => {
        let response = await axios.get(
          'https://some-random-api.ml/img/cat'
          );
        let uni = response.data;
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.link
       var type = "ネコ"
     }
      
     else if (i.options.getSubcommand()=== 'rabbit') {
       var img = await animals.bunny()
       var type = "ウサギ"
     }
      
     else if (i.options.getSubcommand()=== 'dog') {
         let getuni = async () => {
        let response = await axios.get(
          'https://some-random-api.ml/img/dog'
          );
        let uni = response.data;
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.link
       var type = "イヌ"
     }
      
     else if (i.options.getSubcommand()=== 'duck') {
       var img = await animals.duck()
       var type = "アヒル"
     }
      
     else if (i.options.getSubcommand()=== 'fox') {
         let getuni = async () => {
        let response = await axios.get(
          'https://some-random-api.ml/img/fox'
          );
        let uni = response.data;
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.link
       var type = "キツネ"
     }
      
     else if (i.options.getSubcommand()=== 'hamster') {
       var img = hamsterImg[Math.floor(Math.random() * hamsterImg.length)];
       var type = "ハムスター"
     }
      
     else if (i.options.getSubcommand()=== 'kangaroo') {
         let getuni = async () => {
        let response = await axios.get(
          'https://some-random-api.ml/animal/kangaroo'
          );
        let uni = response.data;
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.image
       var type = "カンガルー"
     }
      
     else if (i.options.getSubcommand()=== 'koala') {
         let getuni = async () => {
        let response = await axios.get(
          'https://some-random-api.ml/img/koala'
          );
        let uni = response.data;
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.link
       var type = "コアラ"
     }
      
     else if (i.options.getSubcommand()=== 'panda') {
         let getuni = async () => {
        let response = await axios.get(
          'https://some-random-api.ml/img/panda'
          );
        let uni = response.data;
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.link
       var type = "パンダ"
     }
      
     else if (i.options.getSubcommand()=== 'racoon') {
         let getuni = async () => {
        let response = await axios.get(
          'https://some-random-api.ml/animal/racoon'
          );
        let uni = response.data;
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.image
       var type = "アライグマ"
     }
      
    else if (i.options.getSubcommand()=== 'shiba') {
       var img = await animals.shiba()
       var type = "シバ犬"
     }          
      
    else if (i.options.getSubcommand()=== 'red_panda') {
         let getuni = async () => {
        let response = await axios.get(
          'https://some-random-api.ml/img/red_panda'
          );
        let uni = response.data;
        var img = uniValue.link
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.link
       var type = "レッサーパンダ"
     }          
      
          else if (i.options.getSubcommand()=== 'whale') {
         let getuni = async () => {
        let response = await axios.get(
          'https://some-random-api.ml/img/whale'
          );
        let uni = response.data;
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.link
       var type = "クジラ"
     }          
      
     if (i.options.getSubcommand()=== 'bear') {
      var rating = Math.floor(Math.random() * 500) + 100;
          var rating1 = Math.floor(Math.random() * 500) + 100;
      
      const img = `https://placebear.com/${rating}/${rating1}`
             var type = "クマ"
             const Embed = new MessageEmbed()
             .setColor(client.config.color)
             .setTitle(`${type}の画像`)
             .setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
             .setImage(img)
             .setTimestamp()
             .setFooter({ text: i.toString(), iconURL: '' });
                  
                   return i.reply({embeds: [Embed] })
           }
           else {
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${type}の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage('attachment://animal.png')
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
       
await i.deferReply(); 
  
  let attachment = new MessageAttachment(img, "animal.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })
     }

    }
}