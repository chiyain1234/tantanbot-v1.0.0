const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require('axios')
const akaneko = require('akaneko');
const HMtai = require("hmtai");
const hmtai = new HMtai();
const randomPuppy = require('random-puppy');
const fs = require("fs")
const booru = require('booru');
const cmdName = "anime"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("2次元キャラの画像を取得する。")
      
        .addSubcommand(subcommand => 
          subcommand
              .setName("coffee-girl")      
              .setDescription("コーヒーをくれる女の子の画像を表示する。")    
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("jahy")      
              .setDescription("ジャヒ―の画像を表示する。")    
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("megumin")      
              .setDescription("メグミンの画像を表示する。")    
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("shinobu")      
              .setDescription("忍野忍の画像を表示する。")    
    )
            .addSubcommand(subcommand => 
          subcommand
              .setName("neko-girl")      
              .setDescription("猫耳の女の子の画像を表示する。")    
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("wolf-girl")      
              .setDescription("オオカミの女の子の画像を表示する。")    
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("waifu")      
              .setDescription("かわいいの女の子の画像を表示する。")    
    )
            .addSubcommand(subcommand => 
          subcommand
              .setName("gotiusa")      
              .setDescription("ごちうさの画像を表示する。")    
    )
            .addSubcommand(subcommand => 
          subcommand
              .setName("miku")      
              .setDescription("初音ミクの画像を表示する。")    
    )
           .addSubcommand(subcommand => 
          subcommand
              .setName("rizero")      
              .setDescription("Re:Zeroの画像を表示する。")    
    )
           .addSubcommand(subcommand => 
          subcommand
              .setName("touhou")      
              .setDescription("東方の画像を表示する。")    
    )
        .addSubcommand(subcommand => 
          subcommand
              .setName("hololive")      
              .setDescription("ホロライブの画像を表示する。")    
    )
        .addSubcommand(subcommand => 
          subcommand
              .setName("genshin")      
              .setDescription("原神の画像を表示する。")    
    )
      
        .addSubcommand(subcommand => 
          subcommand
              .setName("umamusume")      
              .setDescription("ウマ娘の画像を表示する。")    
    )
          .addSubcommand(subcommand => 
          subcommand
              .setName("pokemon")      
              .setDescription("ポケモンの画像を表示する。")    
    )
      
      .addSubcommand(subcommand => 
          subcommand
              .setName("proseka")      
              .setDescription("プロセカの画像を表示する。")    
    ),

  
    async execute(i, client) {

     if (i.options.getSubcommand()=== 'coffee-girl') {
       var img = await hmtai.sfw.coffee_arts();
       var type = "コーヒーをくれる女の子"
     }
      
    else if (i.options.getSubcommand()=== 'jahy') {
       var img = await hmtai.sfw.jahy_arts();
       var type = "ジャヒ―"
     }
      
    else if (i.options.getSubcommand()=== 'megumin') {
    let getuni = async () => {
        let response = await axios.get(
          'https://api.waifu.pics/sfw/megumin'
          );
        let uni = response.data;
        return uni;
      };

       var uniValue = await getuni();
       var img = uniValue.url
       var type = "メグミン"
     }
      
    else if (i.options.getSubcommand()=== 'shinobu') {
    let getuni = async () => {
        let response = await axios.get(
          'https://api.waifu.pics/sfw/shinobu'
          );
        let uni = response.data;
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.url
       var type = "忍野忍"
     }
      
    else if (i.options.getSubcommand()=== 'neko-girl') {
       var img = await hmtai.sfw.neko_arts();
       var type = "猫耳の女の子"
     }
      
    else if (i.options.getSubcommand()=== 'wolf-girl') {
       var img = await hmtai.sfw.wolf_arts();
       var type = "オオカミの女の子"
     }
      
    else if (i.options.getSubcommand()=== 'waifu') {
    let getuni = async () => {
        let response = await axios.get(
          'https://api.waifu.pics/sfw/waifu'
          );
        let uni = response.data;
        return uni;
      };
       var uniValue = await getuni();
       var img = uniValue.url
       var type = "かわいい女の子"
     }
      
  if (i.options.getSubcommand()=== 'gotiusa') {
        var word = "gochuumon_wa_usagi_desu_ka?"
    booru.search('sb', [word], {
        nsfw: false,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ごちうさ の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
          
        return i.reply({embeds: [Embed] })
        }
      })
  }
     else if (i.options.getSubcommand()=== 'miku') {
        var word = "hatsune_miku "
    booru.search('sb', [word], {
        nsfw: false,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`初音ミク の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
      else if (i.options.getSubcommand()=== 'rizero') {
        var word = "re:zero_kara_hajimeru_isekai_seikatsu "
    booru.search('sb', [word], {
        nsfw: false,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`Re:Zero の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
     else if (i.options.getSubcommand()=== 'touhou') {
        var word = "touhou "
    booru.search('sb', [word], {
        nsfw: false,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`東方 の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
     else if (i.options.getSubcommand()=== 'hololive') {
        var word = "hololive "
    booru.search('sb', [word], {
        nsfw: false,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ホロライブ の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
     else if (i.options.getSubcommand()=== 'genshin') {
        var word = "genshin_impact "
    booru.search('sb', [word], {
        nsfw: false,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`原神 の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
            else if (i.options.getSubcommand()=== 'umamusume') {
        var word = "umamusume "
    booru.search('sb', [word], {
        nsfw: false,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ウマ娘 の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
   else if (i.options.getSubcommand()=== 'pokemon') {
        var word = "pokemon "
    booru.search('sb', [word], {
        nsfw: false,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ポケモン の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
   else if (i.options.getSubcommand()=== 'proseka') {
        var word = "project_sekai "
    booru.search('sb', [word], {
        nsfw: false,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`プロセカ の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
      
  else {
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${type} の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage('attachment://anime.png')
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
       
await i.deferReply(); 
  
  let attachment = new MessageAttachment(img, "anime.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })
     }
    }
}