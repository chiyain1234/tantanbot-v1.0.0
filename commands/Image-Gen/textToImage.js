const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');

const cmdName = "text2image"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("テキストを画像にする。")        
	.addStringOption(option => option
		.setName('type')
			.setDescription('画像タイプを選択してください。')
			.setRequired(true)
			.addChoices(
				{ name: 'Glow', value: 'glow' },
				{ name: 'Alien', value: 'alien' },
        	{ name: 'Steel', value: 'steel'},
        	{ name: 'Electrc', value: 'electric'},
        	{ name: 'Chrom', value: 'chrom'},
                	{ name: 'Scribble', value: 'scribble'},
                	{ name: 'Kyptonite', value: 'kryptonite'},
                	{ name: 'Lava', value: 'lava'},
                	{ name: 'Disco', value: 'disco'},
                	{ name: 'Glass', value: 'glass'},
                	{ name: 'Husky', value: 'husky'},
                	{ name: 'Fluffy', value: 'fluffy'},
                	{ name: 'Water', value: 'water'},
                	{ name: 'Harry', value: 'harry'},
                	{ name: 'Twitter', value: 'twitter'},
                	{ name: 'Star-Wars', value: 'starwars'},
                	{ name: 'Dance', value: 'dance'},
                	{ name: 'Frozen', value: 'frozen'},
                	{ name: 'Neon', value: 'neon'},
                	{ name: 'Smurfs', value: 'smurfs'},
                	{ name: 'Clan', value: 'clan'},
                	{ name: 'Mattix', value: 'matrix'},
                	{ name: 'Sugar', value: 'sugar'},
                	{ name: 'Monsoon', value: 'monsoon'},
        ))

	.addStringOption(option => option
		.setName('font')
			.setDescription('フォントを選択してください。')
			.setRequired(true)
			.addChoices(
				{ name: 'デフォルト', value: 'default' },
				{ name: 'Mincho', value: 'mincho' },
        	{ name: 'Impact', value: 'impact'},
				{ name: 'American-text', value: 'american-text' },
				{ name: 'Bullpen-3d', value: 'bullpen-3d' },
        	{ name: 'Zwisdom', value: 'zwisdom'},
        	{ name: 'Bizarre', value: 'bizarre'},
        	{ name: 'Kinkie', value: 'kinkie'},
        	{ name: 'KingsCross', value: 'kingscross'},
				{ name: 'Freebooter-Script', value: 'freebooter' },
				{ name: 'Bloodlust', value: 'bloodlust' },
        	{ name: 'Starbats', value: 'starbats'},
				{ name: 'Action-Is-JL', value: 'action-is-jl' },
				{ name: 'Election+Day', value: 'election-day' },
        	{ name: 'Capri', value: 'capri'},
        	{ name: 'Husky-Stash', value: 'husky-stash'},
        	{ name: 'FatBoySmiles', value: 'fatboysmiles'},
        	{ name: 'Monoton', value: 'monoton'},
        	{ name: 'Cinzel-Decorative', value: 'cinzel-decorative'},
				{ name: 'Cretino', value: 'cretino' },
				{ name: 'Planet-X', value: 'planet-X' },
        	{ name: 'Paytone-One', value: 'paytone-one'},
        	{ name: 'Cinzel', value: 'cinzel'},
        	{ name: 'Cooper', value: 'cooper'},
        	{ name: 'Linquidism', value: 'linquidism'},
        ))

	.addStringOption(option => option
		.setName('background')
			.setDescription('背景を選択してください。')
			.setRequired(true)
			.addChoices(
				{ name: 'デフォルト', value: 'default' },
      	{ name: '背景透過', value: 'transparent' },
				{ name: 'Rain', value: 'rain' },
        	{ name: 'Pastel-Stuff', value: 'pastel-stuff'},
				{ name: 'Leaves', value: 'leaves' },
        	{ name: 'Pastel-Rainbow', value: 'pastel-rainbow'},
				{ name: 'Amethyst', value: 'amethyst' },
				{ name: 'Multicolor+bar', value: 'multicolor' },
      { name: 'Bricks', value: 'bricks'},
				{ name: 'Ice', value: 'ice' },
        	{ name: 'Lightning', value: 'lightning'},
				{ name: 'Stone', value: 'stone' },
				{ name: 'Warning!', value: 'warning' },
        	{ name: '3D-weave', value: 'weave'},
				{ name: 'Blue-Grid', value: 'grid' },
        	{ name: 'Colorful-Whirl', value: 'colorful'},
				{ name: 'Rainbow', value: 'rainbow' },
				{ name: 'Golden', value: 'golden' },
      { name: 'Pride', value: 'pride'},
				{ name: 'Blue-Green', value: 'blue-green' },
        	{ name: 'Deep-Sea', value: 'deep-sea'},
        )) 

      .addStringOption(option => option.setName('text')
			.setDescription('文字を入力してください。')
        .setRequired(true)),

async execute(i, client) {
var text = i.options.getString('text');
  
if (i.options.getString('type') === 'glow') {
var form = "glow-logo"
}
        else  if (i.options.getString('type') === 'alien') {
var form = "alien-glow-logo"
}   
        else  if (i.options.getString('type') === 'steel') {
var form = "steel-logo"
}
        else  if (i.options.getString('type') === 'electric') {
var form = "electric"
}
        else  if (i.options.getString('type') === 'chrom') {
var form = "chrominium-logo"
}
        else  if (i.options.getString('type') === 'scribble') {
var form = "scribble-logo"
}
        else  if (i.options.getString('type') === 'kryptonite') {
var form = "kryptonite-logo"
} 
        else  if (i.options.getString('type') === 'lava') {
var form = "lava-logo"
}
        else  if (i.options.getString('type') === 'disco') {
var form = "disco-party-logo"
}    
        else  if (i.options.getString('type') === 'glass') {
var form = "glass-logo"
}    
        else  if (i.options.getString('type') === 'husky') {
var form = "husky-logo"
}
        else  if (i.options.getString('type') === 'fluffy') {
var form = "fluffy-logo"
}   
        else  if (i.options.getString('type') === 'water') {
var form = "water-logo"
} 
        else  if (i.options.getString('type') === 'husky') {
var form = "husky-logo"
}
        else  if (i.options.getString('type') === 'harry') {
var form = "harry-potter-logo"
}
        else  if (i.options.getString('type') === 'twitter') {
var form = "birdy-logo"
}
        else  if (i.options.getString('type') === 'starwars') {
var form = "star-wars-logo"
}
        else  if (i.options.getString('type') === 'dance') {
var form = "dance-logo"
}
        else  if (i.options.getString('type') === 'frozen') {
var form = "frozen-logo"
}
        else  if (i.options.getString('type') === 'neon') {
var form = "neon-logo"
}
          else  if (i.options.getString('type') === 'smurfs') {
var form = "smurfs-logo"
}
          else  if (i.options.getString('type') === 'clan') {
var form = "clan-logo"
}
          else  if (i.options.getString('type') === 'matrix') {
var form = "matrix-logo"
}
          else  if (i.options.getString('type') === 'sugar') {
var form = "sugar-logo"
}
          else  if (i.options.getString('type') === 'monsoon') {
var form = "monsoon-logo"
}


  
if (i.options.getString('font') === 'default') {
var fontname = "&"
}
        else  if (i.options.getString('font') === 'mincho') {
var fontname = "&fontname="
}        
else  if (i.options.getString('font') === 'impact') {
var fontname = "&fontname=impact"
}        
else  if (i.options.getString('font') === 'american-text') {
var fontname = "&fontname=american+text"
}        
else  if (i.options.getString('font') === 'bullpen-3d') {
var fontname = "&fontname=bullpen+3d"
}        
else  if (i.options.getString('font') === 'zwisdom') {
var fontname = "&fontname=zwisdom"
}        
else  if (i.options.getString('font') === 'bizarre') {
var fontname = "&fontname=bizarre"
}        
else  if (i.options.getString('font') === 'kinkie') {
var fontname = "&fontname=kinkie"
}        
else  if (i.options.getString('font') === 'kingscross') {
var fontname = "&fontname=kingscross"
}        
          else  if (i.options.getString('font') === 'freebooter') {
var fontname = "&fontname=freebooter+script"
}        
else  if (i.options.getString('font') === 'bloodlust') {
var fontname = "&fontname=bloodlust"
}        
else  if (i.options.getString('font') === 'starbats') {
var fontname = "&fontname=starbats"
}        
else  if (i.options.getString('font') === 'action-is-jl') {
var fontname = "&fontname=action+is+jl"
}        
else  if (i.options.getString('font') === 'election-day') {
var fontname = "&fontname=election+day"
}        
else  if (i.options.getString('font') === 'capri') {
var fontname = "&fontname=capri"
}        
else  if (i.options.getString('font') === 'husky-stash') {
var fontname = "&fontname=husky+stash"
}        
else  if (i.options.getString('font') === 'fatboysmiles') {
var fontname = "&fontname=FatBoySmiles"
}
          else  if (i.options.getString('font') === 'monoton') {
var fontname = "&fontname=monoton"
}        
else  if (i.options.getString('font') === 'cinzel-decorative') {
var fontname = "&fontname=decorative"
}        
else  if (i.options.getString('font') === 'cretino') {
var fontname = "&fontname=cretino"
}        
else  if (i.options.getString('font') === 'planet-X') {
var fontname = "&fontname=planet+X"
}        

else  if (i.options.getString('font') === 'paytone-one') {
var fontname = "&fontname=party+one"
}        
else  if (i.options.getString('font') === 'cinzel') {
var fontname = "&fontname=cinzel"
}        
else  if (i.options.getString('font') === 'linquidism') {
var fontname = "&fontname=linquidism"
}        

else  if (i.options.getString('font') === 'cooper') {
var fontname = "&fontname=cooper"

}
  
  
if (i.options.getString('background') === 'default') {
var background = "&"
}
        else  if (i.options.getString('background') === 'rain') {
var background = "&backgroundRadio=2&backgroundPattern=Rain"
}        
else  if (i.options.getString('background') === 'pastel-stuff') {
var background = "&backgroundRadio=2&backgroundPattern=Pastel+Stuff"
}        
else  if (i.options.getString('background') === 'leaves') {
var background = "&backgroundRadio=2&backgroundPattern=Leaves+6"
}        
else  if (i.options.getString('background') === 'pastel-rainbow') {
var background = "&backgroundRadio=3&backgroundGradient=Pastel+Rainbow"
}        
if (i.options.getString('background') === 'amethyst') {
var background = "&backgroundRadio=2&backgroundPattern=Amethyst"
}
        else  if (i.options.getString('background') === 'multicolor') {
var background = "&backgroundRadio=3"
}        
else  if (i.options.getString('background') === 'bricks') {
var background = "&backgroundRadio=2&backgroundPattern=Bricks"
}        
else  if (i.options.getString('background') === 'ice') {
var background = "&backgroundRadio=2&backgroundPattern=Ice"
}        
else  if (i.options.getString('background') === 'lightning') {
var background = "&backgroundRadio=2&backgroundPattern=Lightning"
}        
if (i.options.getString('background') === 'warning') {
var background = "&backgroundRadio=2&backgroundPattern=Warning!"
}
        else  if (i.options.getString('background') === 'weave') {
var background = "&backgroundRadio=2&backgroundPattern=3D+weave"
}        
else  if (i.options.getString('background') === 'grid') {
var background = "&backgroundRadio=2&backgroundPattern=Blue+Grid"
}        
else  if (i.options.getString('background') === 'colorful') {
var background = "&backgroundRadio=2&backgroundPattern=Colorful+Whirl"
}        
else  if (i.options.getString('background') === 'rainbow') {
var background = "&backgroundRadio=3&backgroundPattern=Parque+%231"
}        
if (i.options.getString('background') === 'golden') {
var background = "&backgroundRadio=3&backgroundPattern=Parque+%231&backgroundGradient=Golden"
}
        else  if (i.options.getString('background') === 'pride') {
var background = "&backgroundRadio=3&backgroundPattern=Parque+%231&backgroundGradient=Pride"
}        
else  if (i.options.getString('background') === 'blue-green') {
var background = "&backgroundRadio=3&backgroundPattern=Parque+%231&backgroundGradient=Blue+Green"
}        
else  if (i.options.getString('background') === 'deep-sea') {
var background = "&backgroundRadio=3&backgroundPattern=Parque+%231&backgroundGradient=Deep+Sea"
}        
else  if (i.options.getString('background') === 'transparent') {
var background = "&backgroundRadio=0"
}        

  
const uri = `https://flamingtext.com/net-fu/proxy_form.cgi?script=${form}&text=${text}&_loc=generate&imageoutput=true${fontname}${background}`
  
var image = encodeURI(uri)
  
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`${text}`)
	.setImage('attachment://text2img.png')
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });
  
        await i.deferReply();    
  
          let attachment = new MessageAttachment(image, "text2img.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })
  } 
}