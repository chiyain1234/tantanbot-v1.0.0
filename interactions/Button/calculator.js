const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const fs = require("fs") // Import FS to read event files
const math = require('mathjs');

client.on("interactionCreate", async (i, client) => {

  const one = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`calcAC`)
          .setLabel(`AC`)
          .setStyle(`DANGER`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc(`)
          .setLabel(`(`)
          .setStyle(`PRIMARY`),
  )
      .addComponents(
          new MessageButton()
          .setCustomId(`calc)`)
          .setLabel(`)`)
          .setStyle(`PRIMARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc÷`)
          .setLabel(`÷`)
          .setStyle(`PRIMARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calcDEL`)
          .setLabel(`DEL`)
          .setStyle(`DANGER`),
  )
    
      const two = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`calc7`)
          .setLabel(`7`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc8`)
          .setLabel(`8`)
          .setStyle(`SECONDARY`),
  )
      .addComponents(
          new MessageButton()
          .setCustomId(`calc9`)
          .setLabel(`9`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc×`)
          .setLabel(`×`)
          .setStyle(`PRIMARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc5DEL`)
          .setLabel(`DEL5`)
          .setStyle(`DANGER`),
  )

    const three = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`calc4`)
          .setLabel(`4`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc5`)
          .setLabel(`5`)
          .setStyle(`SECONDARY`),
  )
      .addComponents(
          new MessageButton()
          .setCustomId(`calc6`)
          .setLabel(`6`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc-`)
          .setLabel(`-`)
          .setStyle(`PRIMARY`),
  )

        const four = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`calc1`)
          .setLabel(`1`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc2`)
          .setLabel(`2`)
          .setStyle(`SECONDARY`),
  )
      .addComponents(
          new MessageButton()
          .setCustomId(`calc3`)
          .setLabel(`3`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc+`)
          .setLabel(`+`)
          .setStyle(`PRIMARY`),
  )
    
        const five = new MessageActionRow()
.addComponents(
          new MessageButton()
          .setCustomId(`calc.`)
          .setLabel(`.`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc0`)
          .setLabel(`0`)
          .setStyle(`SECONDARY`),
  )
      .addComponents(
          new MessageButton()
          .setCustomId(`calc00`)
          .setLabel(`00`)
          .setStyle(`SECONDARY`),
  )
    .addComponents(
          new MessageButton()
          .setCustomId(`calc=`)
          .setLabel(`=`)
          .setStyle(`SUCCESS`),
  )
  
        if (i.customId ===  "calc1") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}1\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

          if (i.customId ===  "calc2") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}2\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

          if (i.customId ===  "calc3") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}3\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc4") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}4\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc5") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}5\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc6") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}6\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

          if (i.customId ===  "calc7") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}7\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

          if (i.customId ===  "calc8") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}8\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc9") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}9\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc0") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}0\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc00") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}00\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc×") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}×\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc÷") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}÷\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

          if (i.customId ===  "calc-") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}-\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc+") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}+\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc(") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}(\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc)") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula})\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc.") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}.\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calcAC") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formula = args.replace(/```/g, "");
          
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`0\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

      if (i.customId ===  "calcDEL") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formul = args.replace(/```/g, "");
let formula = formul.substring(0, formul.length - 1);
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }

        if (i.customId ===  "calc5DEL") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formul = args.replace(/```/g, "");
let formula = formul.substring(0, formul.length - 5);
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formula}\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }
  
        if (i.customId ===  "calc=") {
let msgs = await i.channel.messages.fetch(i.message.id)
let args = msgs.embeds[0].description
let formul = args.replace(/```/g, "");
var formula = formul.replace( /×/g, "*" ).replace(/÷/g,"/")
          
let result;
        try {
            result = math.evaluate(formula);
          
          await i.deferUpdate()
              const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`${formul}=${result}\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
  
        } catch (e) {
           await i.deferUpdate()
    const embed = new MessageEmbed()
	.setColor(config.color)
	.setAuthor({ name: msgs.embeds[0].author.name, iconURL: msgs.embeds[0].author.iconURL, url: '' })
      .setTitle("電卓")
      .setThumbnail("https://media.discordapp.net/attachments/1001354677226590308/1001354686865088542/IMG_5531.jpg")          
      .setDescription(`\`\`\`ERROR!\`\`\``)
            	.setTimestamp()
	.setFooter({ text: msgs.embeds[0].footer.text, iconURL: '' })
          
await msgs.edit({ embeds: [embed], components: [one,two,three,four,five]})
        }
          
        }
  
})