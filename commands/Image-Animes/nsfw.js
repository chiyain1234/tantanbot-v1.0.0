const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment} = require('discord.js');
const akaneko = require('akaneko');
const HMtai = require("hmtai");
const hmtai = new HMtai();
const { RandomPHUB } = require('discord-phub');
const randomPuppy = require('random-puppy');
const fs = require("fs")
const booru = require('booru');

const nsfw = new RandomPHUB(unique = true);

const cmdName = "nsfw"

module.exports = {
    guildOnly: true, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    nsfwOnly: true,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("NSFWの画像を取得する。")
  
 .addSubcommand(subcommand => 
          subcommand
              .setName("anime1")      
              .setDescription("刺激の少ない/Calm Anime NSFW Images")        
      	.addStringOption(option => option
		.setName('type')
			.setDescription('どの画像にしますか。')
			.setRequired(true)
			.addChoices(
        { name: 'Ahegao', value: 'ahegao' },
        { name: 'Ass', value: 'ass' },
        { name: 'Bdsm', value: 'bdsm' },      
				{ name: 'Elves', value: 'elves' },  
				{ name: 'Ero', value: 'ero' },
        { name: 'Foxgirl', value: 'foxgirl' },   
        { name: 'Furry', value: 'furry' },
        { name: 'Futanari', value: 'futanari' },   
        { name: 'Glasses', value: 'glasses' },      
        { name: 'Hutomomo', value: 'hutomomo' },
        { name: 'H-Neko-girl', value: 'hneko' }, 
        { name: 'Loli-girl', value: 'hloli' },
        { name: 'Maid', value: 'maid' },
  			{ name: 'Ntr', value: 'ntr' },
        { name: 'Panties', value: 'panties' },
        { name: 'Pussy', value: 'pussy' },
        { name: 'School', value: 'school' },
        { name: 'Solo', value: 'solo' },    
        { name: 'Thigh', value: 'thigh' },
        { name: 'uniform', value: 'uniform' },
        { name: 'Yuri', value: 'yuri' },
        ))
                )

      .addSubcommand(subcommand => 
          subcommand
              .setName("anime2")      
              .setDescription("刺激が強い/Intense Anime NSFW Images")        
      	.addStringOption(option => option
		.setName('type')
			.setDescription('どの画像にしますか。')
			.setRequired(true)
			.addChoices(              
        { name: 'Anal', value: 'anal' },
				{ name: 'Blowjob', value: 'blowjob' },
        { name: 'Boobjob', value: 'boobjob' },
        { name: 'Boobs', value: 'Boobs' },
        { name: 'Classic', value: 'classic' },
        { name: 'Cum', value: 'cum' },
        { name: 'Creampie', value: 'creampie' },        
        { name: 'Doujin', value: 'doujin' },
        { name: 'Feet', value: 'feet' },
        { name: 'Femdom', value: 'femdom' },
        { name: 'Footjob', value: 'footjob' },
        { name: 'Gangbang', value: 'gangbang' }, 
        { name: 'Gif', value: 'gif' },  
        { name: 'Handjob', value: 'handjob' },
				{ name: 'Hentai', value: 'hentai' },
				{ name: 'Incest', value: 'incest' },
        { name: 'Manga', value: 'manga' },
        { name: 'Orgy', value: 'orgy' },       
				{ name: 'Public', value: 'public' },
        { name: 'Succubus', value: 'succubus' },        
        { name: 'Tentacle', value: 'tentacle' },    
        { name: 'Uglybastard', value: 'uglybastard' },
        )
    )
 )
      .addSubcommand(subcommand => 
          subcommand
              .setName("porn1")      
              .setDescription("リアル-1 NSFW/Real-1 NSFW Images")        
      	.addStringOption(option => option
		.setName('type')
			.setDescription('どの画像にしますか。')
			.setRequired(true)
			.addChoices(     
        { name: '3d-Porn', value: '3d-porn' },
        { name: 'Anal', value: 'anal' },
        { name: 'Ass', value: 'ass' },
        { name: 'aesthetic', value: 'aesthetic' },
        { name: 'Amateur', value: 'amateur' },
        { name: 'Asian', value: 'asian' },
        { name: 'Bath-shower', value: 'bath-shower' },
        { name: 'Bdsm', value: 'bdsm' },
        { name: 'Boobs', value: 'boobs' },
        { name: 'Cock', value: 'cock' },
        { name: 'Cosplay', value: 'cosplay' },
        { name: 'Creampie', value: 'creampie' },
        { name: 'Cuckhold', value: 'cuckhold' },
        { name: 'Cumshots', value: 'cumshots' },
        { name: 'Double-penetration', value: 'double-penetration' },
        { name: 'Ebony', value: 'ebony' },
        { name: 'Feet', value: 'feet' },
        { name: 'Femdom', value: 'femdom' },
        { name: 'Fisting', value: 'fisting' },   
        { name: 'Food-play', value: 'food-play' },
        { name: 'Funny', value: 'funny' },
        { name: 'Goth', value: 'goth' },
        { name: 'Hands', value: 'hands' },
        { name: 'Horror', value: 'horror' },
        { name: 'Interracial', value: 'interracial' }, 

        )
    )
 )

            .addSubcommand(subcommand => 
          subcommand
              .setName("porn2")      
              .setDescription("リアル-2 NSFW/Real-2 NSFW Images")        
      	.addStringOption(option => option
		.setName('type')
			.setDescription('どの画像にしますか。')
			.setRequired(true)
			.addChoices(          
        { name: 'Joi', value: 'joi' },
        { name: 'Lactation', value: 'lactation' },
        { name: 'Latin', value: 'latin' },
        { name: 'Lgbt-bisexual', value: 'lgbt-bisexual' },
        { name: 'Lgbt-femboy', value: 'lgbt-femboy' },
        { name: 'Lgbt-gay', value: 'lgbt-gay' },
        { name: 'lgbt-lesbian', value: 'lgbt-lesbian' },
        { name: 'Lgbt-transgender', value: 'lgbt-transgender' },
        { name: 'Lgbt-twink', value: 'lgbt-twink' },
        { name: 'Lingerie', value: 'lingerie' },  
        { name: 'Massage', value: 'massage' },
        { name: 'Mature', value: 'mature' },
        { name: 'Milf', value: 'milf' },
        { name: 'Naked-wrestling', value: 'naked-wrestling' },
        { name: 'Oral', value: 'oral' },
        { name: 'Orgy', value: 'Orgy' },
        { name: 'Pegging', value: 'pegging' },  
        { name: 'Petite', value: 'petite' },
        { name: 'Plus-size', value: 'plus-size' },
        { name: 'Pornstar', value: 'Pornstar' },
        { name: 'Pov', value: 'pov' },
        { name: 'Public', value: 'Public' },
        { name: 'Pussy', value: 'pussy' },
        { name: 'Rimming', value: 'rimming' },
        { name: 'rough', value: 'rough' },
        )
    )
 )

            .addSubcommand(subcommand => 
          subcommand
              .setName("porn3")      
              .setDescription("リアル-3 NSFW/Real-3 NSFW Images")        
      	.addStringOption(option => option
		.setName('type')
			.setDescription('どの画像にしますか。')
			.setRequired(true)
			.addChoices(     
        { name: 'Solo', value: 'solo' },
        { name: 'Squirting', value: 'squirting' },
        { name: 'Tattoos-piercings', value: 'tattoos-piercings' },
        { name: 'Tease', value: 'tease' },
        { name: 'Thighs', value: 'thighs' },
        { name: 'Threesomes', value: 'threesomes' },
        { name: 'Toys', value: 'toys' },
        { name: 'Uniform', value: 'uniform' },
        { name: 'Vintage', value: 'vintage' },
        { name: 'Watersports', value: 'watersports' },
        )
    )
 ),
  
async execute(i, client) {
  
if (i.options.getSubcommand() === 'anime1') {
    if (i.options.getString('type') === 'ahegao') {
var image = await hmtai.nsfw.ahegao();
}
     else if (i.options.getString('type') === 'ass') {
var image = await akaneko.nsfw.ass();
}
  else if (i.options.getString('type') === 'ntr') {
var image = await akaneko.nsfw.netorare();
}
        else  if (i.options.getString('type') === 'bdsm') {
var image = await akaneko.nsfw.bdsm();
}             
        else  if (i.options.getString('type') === 'elves') {
var image = await hmtai.nsfw.elves();
}
        else  if (i.options.getString('type') === 'ero') {
const image = await hmtai.nsfw.ero();
}
        else  if (i.options.getString('type') === 'foxgirl') {
var image = await akaneko.nsfw.foxgirl();
}        
        else  if (i.options.getString('type') === 'furry') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('furry', tp[tps]).url

}
        else  if (i.options.getString('type') === 'glasses') {
var image = await akaneko.nsfw.glasses();
}        
        else  if (i.options.getString('type') === 'hutomomo') {
var image = await akaneko.nsfw.zettaiRyouiki();
}
        else  if (i.options.getString('type') === 'hneko') {
var image = await hmtai.nsfw.nsfwNeko();
}
        else  if (i.options.getString('type') === 'hloli') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('hentai-no-loli', tp[tps]).url
}       
        else  if (i.options.getString('type') === 'maid') {
var image = await akaneko.nsfw.maid();
}
        else  if (i.options.getString('type') === 'panties') {
var image = await akaneko.nsfw.panties();
}
        else  if (i.options.getString('type') === 'pussy') {
var image = await akaneko.nsfw.pussy();
}
        else  if (i.options.getString('type') === 'school') {
var image = await akaneko.nsfw.school();
}
        else  if (i.options.getString('type') === 'solo') {
var image = await akaneko.nsfw.masturbation();
}        
        else  if (i.options.getString('type') === 'thigh') {
var image = await akaneko.nsfw.thighs();
}
        else  if (i.options.getString('type') === 'uniform') {
var image = await akaneko.nsfw.uniform();
}
        else  if (i.options.getString('type') === 'yuri') {
var image = await akaneko.nsfw.yuri();
}        
        
  if (i.options.getString('type') === 'futanari') { 
  var word = "futanari"
    booru.search('db', [word], {
        random: true
      })
      .then(images => {
        for (let image of images){
const img = image.file_url
  const fEmbed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [fEmbed] })

        }
      })
} else {
await i.deferReply(); 
          const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage('attachment://nsfw.png')
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
  let attachment = new MessageAttachment(image, "nsfw.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })
        }
}

        
        if (i.options.getSubcommand() === 'anime2') {     
             if (i.options.getString('type') === 'anal') {
var image = await hmtai.nsfw.anal();
}          
         else if (i.options.getString('type') === 'blowjob') {
var image = await akaneko.nsfw.blowjob();
}      
         else  if (i.options.getString('type') === 'boobjob') {
var image = await hmtai.nsfw.boobjob();
}        
         else  if (i.options.getString('type') === 'boobs') {
var image = await hmtai.nsfw.boobs();
}
           else  if (i.options.getString('type') === 'classic') {
var image = await hmtai.nsfw.classic();
}
        else  if (i.options.getString('type') === 'creampie') {
var image = await hmtai.nsfw.creampie();
}
         else  if (i.options.getString('type') === 'cum') {
var image = await akaneko.nsfw.cum();
}        
        else  if (i.options.getString('type') === 'feet') {
var image = await akaneko.nsfw.feet();
}               
        else  if (i.options.getString('type') === 'femdom') {
var image = await akaneko.nsfw.femdom();
}
        else  if (i.options.getString('type') === 'footjob') {
var image = await hmtai.nsfw.footjob();
}
        else  if (i.options.getString('type') === 'doujin') {
var image = await akaneko.nsfw.doujin();
}        
        else  if (i.options.getString('type') === 'gangbang') {
var image = await hmtai.nsfw.gangbang();
}
        else  if (i.options.getString('type') === 'gif') {
var image = await akaneko.nsfw.gifs();
}        
        else if (i.options.getString('type') === 'handjob') {
var image = await hmtai.nsfw.handjob();
}        
        else if (i.options.getString('type') === 'hentai') {
var image = await hmtai.nsfw.hentai();
}         
        else if (i.options.getString('type') === 'incest') {
var image = await hmtai.nsfw.incest();
} 
        else  if (i.options.getString('type') === 'manga') {
var image = await hmtai.nsfw.manga();
}
        else  if (i.options.getString('type') === 'orgy') {
var image = await akaneko.nsfw.orgy();
}
        else if (i.options.getString('type') === 'public') {
var image = await hmtai.nsfw.public();
} 
        else  if (i.options.getString('type') === 'succubus') {
var image = await akaneko.nsfw.succubus();
}
        else  if (i.options.getString('type') === 'tentacle') {
var image = await akaneko.nsfw.tentacles();
}
        else  if (i.options.getString('type') === 'uglybastard') {
var image = await akaneko.nsfw.uglyBastard();
}
          await i.deferReply(); 
          const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage('attachment://nsfw.png')
	.setTimestamp()
	.setFooter({ text: i.toString() });

  let attachment = new MessageAttachment(image, "nsfw.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })
        }


  
if (i.options.getSubcommand() === 'porn1' || i.options.getSubcommand() === 'porn2' || i.options.getSubcommand() === 'porn3') {
    if (i.options.getString('type') === '3d-porn') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('3d-porn', tp[tps]).url
}
        else  if (i.options.getString('type') === 'aesthetic') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('aesthetic', tp[tps]).url

}
        else  if (i.options.getString('type') === 'amateur') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('amateur', tp[tps]).url

}
        else  if (i.options.getString('type') === 'anal') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('anal', tp[tps]).url

}
  else if (i.options.getString('type') === 'asian') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('asian', tp[tps]).url
}
        else  if (i.options.getString('type') === 'ass') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('ass', tp[tps]).url

}
        else  if (i.options.getString('type') === 'bath-shower') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('bath-shower', tp[tps]).url

}
        else  if (i.options.getString('type') === 'bdsm') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('bdsm', tp[tps]).url

}
  else if (i.options.getString('type') === 'boobs') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('boobs', tp[tps]).url
}
        else  if (i.options.getString('type') === 'cock') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('cock', tp[tps]).url

}
        else  if (i.options.getString('type') === 'cosplay') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('cosplay', tp[tps]).url

}
        else  if (i.options.getString('type') === 'creampie') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('creampie', tp[tps]).url

}
  else if (i.options.getString('type') === 'cuckhold') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('cuckhold', tp[tps]).url
}
        else  if (i.options.getString('type') === 'cumshots') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('cumshots', tp[tps]).url

}
        else  if (i.options.getString('type') === 'double-penetration') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('double-penetration', tp[tps]).url

}
  else if (i.options.getString('type') === 'ebony') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('ebony', tp[tps]).url
}
        else  if (i.options.getString('type') === 'feet') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('feet', tp[tps]).url

}
        else  if (i.options.getString('type') === 'femdom') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('femdom', tp[tps]).url

}
        else  if (i.options.getString('type') === 'fisting') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('fisting', tp[tps]).url

}
  else if (i.options.getString('type') === 'food-play') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('food-play', tp[tps]).url
}
        else  if (i.options.getString('type') === 'funny') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('funny', tp[tps]).url

}
        else  if (i.options.getString('type') === 'goth') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('goth', tp[tps]).url

}
      　else  if (i.options.getString('type') === 'hands') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('hands', tp[tps]).url

}

   else if (i.options.getString('type') === 'anal') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('anal', tp[tps]).url

}
        else  if (i.options.getString('type') === 'ass') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('ass', tp[tps]).url

}
  else if (i.options.getString('type') === 'boobs') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('boobs', tp[tps]).url
}
        else  if (i.options.getString('type') === 'creampie') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('creampie', tp[tps]).url

}
  else if (i.options.getString('type') === 'cuckhold') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('cuckhold', tp[tps]).url
}
        else  if (i.options.getString('type') === 'cumshots') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('cumshots', tp[tps]).url

}
        else  if (i.options.getString('type') === 'double-penetration') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('double-penetration', tp[tps]).url

}
  else if (i.options.getString('type') === 'ebony') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('ebony', tp[tps]).url
}
        else  if (i.options.getString('type') === 'fisting') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('fisting', tp[tps]).url

}
        else  if (i.options.getString('type') === 'horror') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('horror', tp[tps]).url

}
          else  if (i.options.getString('type') === 'interracial') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('interracial', tp[tps]).url

}
  else if (i.options.getString('type') === 'joi') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('joi', tp[tps]).url
}
        else  if (i.options.getString('type') === 'lactation') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('lactation', tp[tps]).url

}
        else  if (i.options.getString('type') === 'latin') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('latin', tp[tps]).url

}
  else if (i.options.getString('type') === 'lgbt-bisexual') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('lgbt-bisexual', tp[tps]).url
}
        else  if (i.options.getString('type') === 'lgbt-femboy') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('lgbt-femboy', tp[tps]).url

}
        else  if (i.options.getString('type') === 'lgbt-gay') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('lgbt-gay', tp[tps]).url

}


    else if (i.options.getString('type') === 'lingerie') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('lingerie', tp[tps]).url
}
        else  if (i.options.getString('type') === 'massage') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('massage', tp[tps]).url

}
        else  if (i.options.getString('type') === 'mature') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('mature', tp[tps]).url

}
        else  if (i.options.getString('type') === 'milf') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('milf', tp[tps]).url

}
  else if (i.options.getString('type') === 'naked-wrestling') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('naked-wrestling', tp[tps]).url
}
        else  if (i.options.getString('type') === 'oral') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('oral', tp[tps]).url

}
        else  if (i.options.getString('type') === 'orgy') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('orgy', tp[tps]).url

}
        else  if (i.options.getString('type') === 'pegging') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('pegging', tp[tps]).url

}
  else if (i.options.getString('type') === 'petite') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('petite', tp[tps]).url
}
        else  if (i.options.getString('type') === 'plus-size') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('plus-size', tp[tps]).url

}
        else  if (i.options.getString('type') === 'pornstar') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('pornstar', tp[tps]).url

}
  else if (i.options.getString('type') === 'pov') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('pov', tp[tps]).url
}
        else  if (i.options.getString('type') === 'public') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('public', tp[tps]).url

}
        else  if (i.options.getString('type') === 'pussy') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('pussy', tp[tps]).url

}
        else  if (i.options.getString('type') === 'rimming') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('rimming', tp[tps]).url

}
  else if (i.options.getString('type') === 'rough') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('rough', tp[tps]).url
}
        else  if (i.options.getString('type') === 'solo') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('solo', tp[tps]).url

}
        else  if (i.options.getString('type') === 'squirting') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('squirting', tp[tps]).url

}
      　else  if (i.options.getString('type') === 'tattoos-piercings') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('tattoos-piercings', tp[tps]).url

}

   else if (i.options.getString('type') === 'tease') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('tease', tp[tps]).url

}
        else  if (i.options.getString('type') === 'thighs') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('thighs', tp[tps]).url

}
  else if (i.options.getString('type') === 'threesomes') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('threesomes', tp[tps]).url
}
        else  if (i.options.getString('type') === 'toys') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('toys', tp[tps]).url

}
  else if (i.options.getString('type') === 'uniform') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('uniform', tp[tps]).url
}
        else  if (i.options.getString('type') === 'vintage') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('vintage', tp[tps]).url

}
        else  if (i.options.getString('type') === 'watersports') {
var tp = ["png", "jpeg", "jpg", "gif"]
  var tps = Math.floor(Math.random() * tp.length);
          
var image = nsfw.getRandomInCategory('watersports', tp[tps]).url

}
  
const rEmbed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('Download Link')
	.setURL(image)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription('NSFWの画像')
	.setImage(image)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
  i.reply({ embeds: [rEmbed] });  
  
}


  
  }
  }