const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment} = require('discord.js');
const axios = require('axios')
const canvacord = require("canvacord");
const cmdName = "img-mod"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("ミーム画像を生成する。")
      
      .addSubcommand(subcommand => 
          subcommand
              .setName("clyde")      
              .setDescription("Clyde")        
	      .addStringOption(option => option.setName('text')
			.setDescription('テキストを入力してください。')
			.setRequired(true)),
                 )

.addSubcommand(subcommand => 
          subcommand
              .setName("fusion")      
              .setDescription("アイコンとアイコンを合体させる。")        
   .addUserOption((option) => {
         return option
        .setName('user1')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   }
                 )
   .addUserOption((option) => {
         return option
        .setName('user2')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
           }
           ),
    )
      
.addSubcommand(subcommand => 
          subcommand
              .setName("rip")      
              .setDescription("R.I.P.")        
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   }
                 )
    )

      .addSubcommand(subcommand => 
          subcommand
              .setName("affect")      
              .setDescription("Affect")        
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   }
                 )
    )
      .addSubcommand(subcommand => 
          subcommand
              .setName("beautiful")      .setDescription("Beautiful")        
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   }
                 )
    )

      .addSubcommand(subcommand => 
          subcommand
              .setName("bed")      
              .setDescription("Bed")    
   .addUserOption((option) => {
         return option
        .setName('user1')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   }
                 )
   .addUserOption((option) => {
         return option
        .setName('user2')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
           }
           ),
    )
      
    .addSubcommand(subcommand => 
          subcommand
              .setName("changemymind")      
              .setDescription("Change my mind")        
	      .addStringOption(option => option.setName('text')
			.setDescription('テキストを入力してください。')
			.setRequired(true)),
                 )

      .addSubcommand(subcommand => 
          subcommand
              .setName("delete")      
        .setDescription("Delete")        
        	.addStringOption(option => option
		.setName('color')
			.setDescription('背景の色を選択してください。')
			.setRequired(true)
			.addChoices(
				{ name: 'White', value: 'white' },
    		{ name: 'Black', value: 'black' },
        ))
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   }
    
                 )
    )
      
         .addSubcommand(subcommand => 
          subcommand
              .setName("distracted")      
              .setDescription("Distracted")    
   .addUserOption((option) => {
         return option
        .setName('user1')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   }
                 )
   .addUserOption((option) => {
         return option
        .setName('user2')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
           }
           )
.addUserOption((option) => {
         return option
        .setName('user3')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   }
                 ),

    )

               .addSubcommand(subcommand => 
          subcommand
              .setName("facepalm")      
              .setDescription("Facepalm")    
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   })
                 )
      
      .addSubcommand(subcommand => 
          subcommand
          .setName("gradient")      
          .setDescription("Gradient")  
   .addStringOption((option) => {
         return option
        .setName('start')
        .setDescription('開始色の色コードを入力してください。')
        .setRequired(true)
   })

  .addStringOption((option) => {
         return option
        .setName('end')
        .setDescription('終了色の色コードを入力してください。')
        .setRequired(true)
   })

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
)

        .addSubcommand(subcommand => 
          subcommand
          .setName("hitler")      
          .setDescription("hitler")  
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   })
)

        .addSubcommand(subcommand => 
          subcommand
          .setName("jail")      
          .setDescription("jail")  
  	.addStringOption(option => option
		.setName('greyscale')
			.setDescription('グレーにしますか。')
			.setRequired(true)
			.addChoices(
				{ name: 'Yes', value: 'true' },
    		{ name: 'No', value: 'false' },
        ))
          
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   })
)

          .addSubcommand(subcommand => 
          subcommand
          .setName("jokeoverhead")      
          .setDescription("jokeoverhead")  
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   })
)

      .addSubcommand(subcommand => 
          subcommand
              .setName("kiss")      
              .setDescription("KISS!")    
   .addUserOption((option) => {
         return option
        .setName('user1')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   }
                 )
   .addUserOption((option) => {
         return option
        .setName('user2')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
           }
           ),
    )

    .addSubcommand(subcommand => 
          subcommand
              .setName("ohno")      
              .setDescription("Oh...No!!!")        
	      .addStringOption(option => option.setName('text')
			.setDescription('テキストを入力してください。')
			.setRequired(true)),
                 )

    .addSubcommand(subcommand => 
          subcommand
              .setName("opinion")      
              .setDescription("Opinion")        
	      .addStringOption(option => option.setName('text')
			.setDescription('テキストを入力してください。')
			.setRequired(true))
    .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
           })
  )

          .addSubcommand(subcommand => 
          subcommand
          .setName("shit")      
          .setDescription("Oh shit!")  
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   })
)

      .addSubcommand(subcommand => 
          subcommand
              .setName("slap")      
              .setDescription("Slap someone XD")    
   .addUserOption((option) => {
         return option
        .setName('user1')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   }
                 )
   .addUserOption((option) => {
         return option
        .setName('user2')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
           }
           ),
    )

        .addSubcommand(subcommand => 
          subcommand
              .setName("spank")      
              .setDescription("Spank someone XD")    
   .addUserOption((option) => {
         return option
        .setName('user1')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   }
                 )
   .addUserOption((option) => {
         return option
        .setName('user2')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
           }
           ),
    )

          .addSubcommand(subcommand => 
          subcommand
          .setName("trash")      
          .setDescription("Trash?")  
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   })
)

          .addSubcommand(subcommand => 
          subcommand
          .setName("trigger")      
          .setDescription("Triggerd")  
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   })
)
  
          .addSubcommand(subcommand => 
          subcommand
          .setName("wanted")      
          .setDescription("Wanted")  
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   })
)
    
          .addSubcommand(subcommand => 
          subcommand
          .setName("wasted")      
          .setDescription("Wasted")  
   .addUserOption((option) => {
         return option
        .setName('user')
        .setDescription('ユーザーを選択してください。')
        .setRequired(true)
   })
)
  ,
      
    async execute(i, client) {
      
         if (i.options.getSubcommand()=== 'clyde') {
 var text = i.options.getString('text');        
 var img = await canvacord.Canvas.clyde(text);
 var title = text
         }
      
    else if (i.options.getSubcommand()=== 'fusion') {
var user1 = i.options.getUser('user1');
var user2 = i.options.getUser('user2');  
var avatar1 = user1.displayAvatarURL({size: 4096, format: 'png' })
var avatar2 = user2.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.fuse(avatar1,avatar2);
var title = `${user1.username} × ${user2.username}`

   }
      else if (i.options.getSubcommand()=== 'rip') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.rip(avatar);
var title = `R.I.P. ${user.username}`

   }
        
      else if (i.options.getSubcommand()=== 'affect') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.affect(avatar);
var title = `Affect ${user.username}`
   }

        else if (i.options.getSubcommand()=== 'beautiful') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.beautiful(avatar);
var title = `Beautiful ${user.username}`

   }
          
  else if (i.options.getSubcommand()=== 'bed') {
var user1 = i.options.getUser('user1');
var user2 = i.options.getUser('user2');  
var avatar1 = user1.displayAvatarURL({size: 4096, format: 'png' })
var avatar2 = user2.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.bed(avatar1,avatar2);
var title = `${user1.username} , ${user2.username}`
   }
    
      else if (i.options.getSubcommand()=== 'changemymind') {
 var text = i.options.getString('text');        
 var img = await canvacord.Canvas.changemymind(text);
 var title = text
         }
        
    else if (i.options.getSubcommand()=== 'delete') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
if(i.options.getString('color') === 'white') {
var img = await canvacord.Canvas.delete(avatar, false);
}
      else {
var img = await canvacord.Canvas.delete(avatar, true);
}
var title = `Delete ${user.username}`
   }
      
        else if (i.options.getSubcommand()=== 'distracted') {
var user1 = i.options.getUser('user1');
var user2 = i.options.getUser('user2'); var user3 = i.options.getUser('user3');       
var avatar1 = user1.displayAvatarURL({size: 4096, format: 'png' })
var avatar2 = user2.displayAvatarURL({size: 4096, format: 'png' })
var avatar3 = user3.displayAvatarURL({size: 4096, format: 'png' })      
var img = await canvacord.Canvas.distracted(avatar1,avatar2,avatar3);
var title = `${user1.username} , ${user2.username} , ${user3.username} ` 
   }

        else if (i.options.getSubcommand()=== 'facepalm') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.facepalm(avatar);
var title = `${user.username}` 

   }
      
              else if (i.options.getSubcommand()=== 'gradient') {
var start = i.options.getString('start');
var end = i.options.getString('end');
var width = i.options.getNumber('width');
var height = i.options.getNumber('height');
var img = await canvacord.Canvas.gradient(start, end, width, height);
var title = `グラデーション` 
   }
                
        else if (i.options.getSubcommand()=== 'hitler') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.hitler(avatar);
var title = `${user.username} × ヒトラー`
   }
          
    else if (i.options.getSubcommand()=== 'jail') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
if(i.options.getString('greyscale') === 'false') {
var img = await canvacord.Canvas.jail(avatar, false);
}
      else {
var img = await canvacord.Canvas.jail(avatar, true);
}
var title = `${user.username}は捕まっています...`
   }
      
   else if (i.options.getSubcommand()=== 'jokeoverhead') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.jokeOverHead(avatar);
var title = `${user.username} Joke Over Head`
   }  
     
    else if (i.options.getSubcommand()=== 'kiss') {
var user1 = i.options.getUser('user1');
var user2 = i.options.getUser('user2');  
var avatar1 = user1.displayAvatarURL({size: 4096, format: 'png' })
var avatar2 = user2.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.kiss(avatar1,avatar2);
var title = `${user1.username} × ${user2.username}`
   }
      
      else if (i.options.getSubcommand()=== 'ohno') {
 var text = i.options.getString('text');        
 var img = await canvacord.Canvas.ohno(text);
 var title = text
         }

      else if (i.options.getSubcommand()=== 'opinion') {
 var text = i.options.getString('text');     
 var user = i.options.getUser('user');
 var avatar = user.displayAvatarURL({size: 4096, format: 'png' })   
 var img = await canvacord.Canvas.opinion(avatar, text);
 var title = `${user.username}'s opinion`
         }

 else if (i.options.getSubcommand()=== 'shit') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.shit(avatar);
var title = `${user.username} `
   }

    else if (i.options.getSubcommand()=== 'slap') {
var user1 = i.options.getUser('user1');
var user2 = i.options.getUser('user2');  
var avatar1 = user1.displayAvatarURL({size: 4096, format: 'png' })
var avatar2 = user2.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.slap(avatar1,avatar2);
var title = `${user1.username} slaped ${user2.username}!!`
   }
      
    else if (i.options.getSubcommand()=== 'spank') {
var user1 = i.options.getUser('user1');
var user2 = i.options.getUser('user2');  
var avatar1 = user1.displayAvatarURL({size: 4096, format: 'png' })
var avatar2 = user2.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.spank(avatar1,avatar2);
var title = `${user1.username} spanked ${user2.username}!!`
   }
 else if (i.options.getSubcommand()=== 'trash') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.trash(avatar);
var title = `${user.username} `
   }
 else if (i.options.getSubcommand()=== 'trigger') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.trigger(avatar);
var title = `${user.username} `
   }
 else if (i.options.getSubcommand()=== 'wanted') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.wanted(avatar);
var title = `${user.username} `
   }
 else if (i.options.getSubcommand()=== 'wasted') {
var user = i.options.getUser('user');
var avatar = user.displayAvatarURL({size: 4096, format: 'png' })
var img = await canvacord.Canvas.wasted(avatar);
var title = `${user.username} `
   }
      
      
      try {
       const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setTitle(`${title}`)
	.setImage('attachment://manipulate.png')
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });

await i.deferReply(); 
  
  let attachment = new MessageAttachment(img, "manipulate.png");
  
        return i.editReply({embeds: [Embed] , files:[attachment] })
}
      catch {
                return i.reply({ content: `エラーが発生しました。`, ephemeral: true });
            }
}
    }