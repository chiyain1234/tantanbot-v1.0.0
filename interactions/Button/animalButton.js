const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const fs = require("fs") // Import FS to read event files
var axios = require('axios');
const animals = require('random-animals-api'); 

client.on("interactionCreate", async (i, client) => {
  
  if (i.customId ===  "birdButton") {
var bird = "bird"
    let getuni = async () => {
        let response = await axios.get(`https://some-random-api.ml/img/${bird}`);
        let uni = response.data;
        return uni; };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${uniValue.link}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
   else if (i.customId ===  "bearButton") {
var rating = Math.floor(Math.random() * 500) + 100;
    var rating1 = Math.floor(Math.random() * 500) + 100;


  
const img = `https://placebear.com/${rating}/${rating1}`

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${img}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }



else if (i.customId ===  "catButton") {
var bird = "cat"
    let getuni = async () => {
        let response = await axios.get(`https://some-random-api.ml/img/${bird}`);
        let uni = response.data;
        return uni; };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${uniValue.link}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
else if (i.customId ===  "dogButton") {
var bird = "dog"
    let getuni = async () => {
        let response = await axios.get(`https://some-random-api.ml/img/${bird}`);
        let uni = response.data;
        return uni; };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${uniValue.link}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
else if (i.customId ===  "birdButton") {
var bird = "fox"
    let getuni = async () => {
        let response = await axios.get(`https://some-random-api.ml/img/${bird}`);
        let uni = response.data;
        return uni; };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${uniValue.link}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
else if (i.customId ===  "foxButton") {
var bird = "fox"
    let getuni = async () => {
        let response = await axios.get(`https://some-random-api.ml/img/${bird}`);
        let uni = response.data;
        return uni; };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${uniValue.link}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
else if (i.customId ===  "kangarooButton") {
var bird = "kangaroo"
    let getuni = async () => {
        let response = await axios.get(`https://some-random-api.ml/img/${bird}`);
        let uni = response.data;
        return uni; };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${uniValue.link}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
else if (i.customId ===  "koalaButton") {
var bird = "koala"
    let getuni = async () => {
        let response = await axios.get(`https://some-random-api.ml/img/${bird}`);
        let uni = response.data;
        return uni; };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${uniValue.link}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
else if (i.customId ===  "pandaButton") {
var bird = "panda"
    let getuni = async () => {
        let response = await axios.get(`https://some-random-api.ml/img/${bird}`);
        let uni = response.data;
        return uni; };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${uniValue.link}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
else if (i.customId ===  "racoonButton") {
var bird = "racoon"
    let getuni = async () => {
        let response = await axios.get(`https://some-random-api.ml/img/${bird}`);
        let uni = response.data;
        return uni; };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${uniValue.link}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
else if (i.customId ===  "redButton") {
var bird = "red_panda"
    let getuni = async () => {
        let response = await axios.get(`https://some-random-api.ml/img/${bird}`);
        let uni = response.data;
        return uni; };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${uniValue.link}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
else if (i.customId ===  "whaleButton") {
var bird = "whale"
    let getuni = async () => {
        let response = await axios.get(`https://some-random-api.ml/img/${bird}`);
        let uni = response.data;
        return uni; };
    let uniValue = await getuni();

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${uniValue.link}`)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
else if (i.customId ===  "shibaButton") {
animals.shiba()
    .then(url => {
      const bunnyEmbed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${url}`)
	.setTimestamp()    
      i.reply({ embeds: [bunnyEmbed] , ephemeral: true  })
  })
  }
else if (i.customId ===  "bunnyButton") {
animals.bunny()
    .then(url => {
      const bunnyEmbed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${url}`)
	.setTimestamp()    
      i.reply({ embeds: [bunnyEmbed] , ephemeral: true  })
  })
}
else if (i.customId ===  "duckButton") {
animals.duck()
    .then(url => {
      const bunnyEmbed = new MessageEmbed()
	.setColor(config.color)
	.setImage(`${url}`)
	.setTimestamp()    
      i.reply({ embeds: [bunnyEmbed] , ephemeral: true  })
  })
}
  else if (i.customId ===  "hamsterButton") {
const files = require(`../../db/animals/hamster.json`);
let link = files[Math.floor(Math.random() * files.length)];

const Embed = new MessageEmbed()
	.setColor(config.color)
	.setImage(link)
	.setTimestamp()

i.reply({ embeds: [Embed], ephemeral: true  })
  }
    

        })