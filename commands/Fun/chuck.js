const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed,MessageActionRow, MessageSelectMenu, MessageAttachment } = require('discord.js');
const axios = require('axios')
const translate = require("translatte")
const Memer = require("random-jokes-api");
const cmdName = "chuck"

module.exports = {
      guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("Funs")
      
   .addSubcommand(subcommand => 
          subcommand
              .setName("advice")      
              .setDescription("あなたにアドバイスをする。")
     )
      
   .addSubcommand(subcommand => 
          subcommand
              .setName("chat")              
     .setDescription("AIとチャットする。")
 	   .addStringOption(option => option.setName('text')
			.setDescription('文字を入力してください。')
			.setRequired(true)),
     )            
      
   .addSubcommand(subcommand => 
          subcommand
                .setName("bujoku")              
     .setDescription("侮辱する文章を提供します。")
     )   
      
   .addSubcommand(subcommand => 
          subcommand
              .setName("name")              
     .setDescription("名前から性別を判断する。")
 	   .addStringOption(option => option.setName('name')
			.setDescription('文字を入力してください。')
			.setRequired(true)),
     )      
   .addSubcommand(subcommand => 
          subcommand
              .setName("omosiroi")              
     .setDescription("おもしろいことを言います。🤔")
     )     
      .addSubcommand(subcommand => 
          subcommand
              .setName("joke")              
     .setDescription("冗談を言います。🤔")
     )        
      .addSubcommand(subcommand => 
          subcommand
              .setName("pun")              
     .setDescription("ダジャレを言います。🤔")
     )   
   .addSubcommand(subcommand => 
          subcommand
              .setName("roast")              
     .setDescription("あなたをからかいます。🤔")
     )     
      .addSubcommand(subcommand => 
          subcommand
              .setName("antijoke")              
     .setDescription("切れ芸を言います。🤔")
     )        
      .addSubcommand(subcommand => 
          subcommand
              .setName("quotes")              
     .setDescription("名言を言います。🤔")
     )   
     .addSubcommand(subcommand => 
          subcommand
              .setName("showerthought")              
     .setDescription("シャワーソートを言います。🤔")
     )     
      .addSubcommand(subcommand => 
          subcommand
              .setName("trivia")              
     .setDescription("トリビアを言います。🤔")
     )        
      .addSubcommand(subcommand => 
          subcommand
              .setName("compliment")              
     .setDescription("誉め言葉を言います。🤔")
     )   
       .addSubcommand(subcommand => 
          subcommand
              .setName("truth")              
     .setDescription("あなたの事実を言ってください。🤔")
     )     
      .addSubcommand(subcommand => 
          subcommand
              .setName("dare")              
     .setDescription("あなたはこれをする勇気はありますか？🤔")
     )    
      .addSubcommand(subcommand => 
          subcommand
              .setName("chucknorris")              
     .setDescription("チェック・ノリス。🤔")
     )
  ,
      
    async execute(i, client) {        
      
            
      if (i.options.getSubcommand()=== 'truth') {
let text = Memer.truth()
const res = await translate(text, {from: "auto", to: "ja"})    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`事実を言ってください`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });
     } 
      
      if (i.options.getSubcommand()=== 'dare') {
let text = Memer.dare()
const res = await translate(text, {from: "auto", to: "ja"})    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`あなたはこれをする勇気はありますか？`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });
     }
      
      if (i.options.getSubcommand()=== 'compliment') {
let text = Memer.compliment()
const res = await translate(text, {from: "auto", to: "ja"})    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`誉め言葉`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });
     } 
      
      if (i.options.getSubcommand()=== 'trivia') {
let text = Memer.trivia()
const res = await translate(text, {from: "auto", to: "ja"})    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`トリビア`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });
     }
      
     if (i.options.getSubcommand()=== 'chucknorris') {
let text = Memer.chuckNorris()
const res = await translate(text, {from: "auto", to: "ja"})    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`チェック・ノリス`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });
     }
      
     if (i.options.getSubcommand()=== 'showerthought') {
let text = Memer.showerThought()
const res = await translate(text, {from: "auto", to: "ja"})    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`シャワーソート`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });
     }
      
     if (i.options.getSubcommand()=== 'quotes') {
let text = Memer.quotes()
const res = await translate(text, {from: "auto", to: "ja"})    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`名言`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });
     }
      
     if (i.options.getSubcommand()=== 'antijoke') {
let text = Memer.antijoke()
const res = await translate(text, {from: "auto", to: "ja"})    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`切れ芸`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });
     }
      
     if (i.options.getSubcommand()=== 'roast') {
let text = Memer.roast()
const res = await translate(text, {from: "auto", to: "ja"})    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`からかいのお言葉`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });
     }
      
     if (i.options.getSubcommand()=== 'pun') {
let text = Memer.pun()
const res = await translate(text, {from: "auto", to: "ja"})    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ダジャレ`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });
     }
      
     if (i.options.getSubcommand()=== 'joke') {
let a = Memer.joke()
const res = await translate(a, {from: "auto", to: "ja"})    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ジョーク`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] });
     }
      
      
     if (i.options.getSubcommand()=== 'advice') {
var uri = `https://api.adviceslip.com/advice`;
var res1 = encodeURI(uri);

      let getuni = async () => {
        let response = await axios.get(
          `${res1}`
          );
        let uni = response.data;
        return uni;
      };
    let uniValue = await getuni();
  const text = uniValue.slip.advice
  
translate(text, {from: "auto", to: "ja"}).then(async res=>{
        
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`アドバイス`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text.substr(0, 2000)}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed] });  
})  .catch(err => {
        if (err.name === 'AxiosError') {
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('エラー')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`取得出来ませんでした。`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			return i.reply({ embeds: [Embed] })
        }
  }
 )
     }
      
           if (i.options.getSubcommand()=== 'chat') {
const text = i.options.getString('text');
    var uri = `http://api.brainshop.ai/get?bid=153861&key=0ZjvbPWKAxJvcJ96&uid=1&msg=${text}`;
var res1 = encodeURI(uri);
      let getuni = async () => {
        let response = await axios.get(
          `${res1}`
          );
        let uni = response.data;
        return uni;
      };
    let uniValue = await getuni();
    
      translate(uniValue.cnt, {from: "auto", to: "ja"}).then(res=>{

  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
.setTitle(text)
.setDescription("```"+res.text.substr(0, 2000)+"```")
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed] });  
        })
    }
      

           if (i.options.getSubcommand()=== 'bujoku') {
var uri = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
var res1 = encodeURI(uri);

      let getuni = async () => {
        let response = await axios.get(
          `${res1}`
          );
        let uni = response.data;
        return uni;
      };
    let uniValue = await getuni();
  const text = uniValue.insult
  
translate(text, {from: "auto", to: "ja"}).then(async res=>{
        
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`侮辱ワード`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text.substr(0, 2000)}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  i.reply({ embeds: [Embed] }); 
  
})  .catch(err => {
        if (err.name === 'AxiosError') {
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('エラー')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`取得出来ませんでした。`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			return i.reply({ embeds: [Embed] })
        }
  }
 )

     }
      
     if (i.options.getSubcommand()=== 'name') {
var name = i.options.getString('name');

var uri = `https://api.genderize.io/?name=${name}`;
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
	.setTitle(`${name}の性別`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`名前: ${uniValue.name}\n性別: ${uniValue.gender}\n可能性: ${uniValue.probability * 100}%`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed] });  

  if(uniValue.gender === "null") {
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`エラー`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`その名前は判別出来ません。\nローマ字表記でお試しください。`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed], ephemeral: true});  
    
  }
     }
      
     if (i.options.getSubcommand()=== 'omosiroi') {
var uri = `https://corporatebs-generator.sameerkumar.website/`;
var res1 = encodeURI(uri);

      let getuni = async () => {
        let response = await axios.get(
          `${res1}`
          );
        let uni = response.data;
        return uni;
      };
    let uniValue = await getuni();
  const text = uniValue.phrase
  
translate(text, {from: "auto", to: "ja"}).then(async res=>{
        
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`バズワード`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text.substr(0, 2000)}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed] });  
})  .catch(err => {
        if (err.name === 'AxiosError') {
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('エラー')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`取得出来ませんでした。`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			return i.reply({ embeds: [Embed] })
        }
  }
 )
     }
    
     }
}