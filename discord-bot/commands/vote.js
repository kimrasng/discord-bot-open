const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "투표",
  description: "투표",
  execute(message) {
    const description = message.content.substring(3);

    const embed = new Discord.MessageEmbed()
      .setTitle("👇 투표 부탁드려요")
      .setDescription(description)
      .setColor("RED");

    message.channel.send(embed).then((msg) => {
        msg.react("1️⃣")
        msg.react("2️⃣")
        msg.react("3️⃣")
        msg.react("4️⃣")
    });
  },
};
