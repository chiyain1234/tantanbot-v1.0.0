const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const Memer = require("random-jokes-api");

let snake = Memer.snake()

let otter = Memer.otter()

let lizard = Memer.lizard()

module.exports = {
    guildOnly: false, 
    adminGuildOnly: true, 
    data: new SlashCommandBuilder() 
        .setName("admincmd")
        .setDescription("コマンドテスト")
        .addStringOption(option => 
            option.setName("test")
            .setDescription("引数")
            .setRequired(true)), 

    async execute(i, client) {
const user = client.users.cache.random()

        const embed = new Discord.MessageEmbed()
                .setTitle(user.tag)
                .addField("h", members)
                .setColor(client.config.color)
                .setImage(otter)
          
                .setTimestamp();
        i.reply({embeds: [embed]});
    },
}