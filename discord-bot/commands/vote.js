const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "ν¬ν",
  description: "ν¬ν",
  execute(message) {
    const description = message.content.substring(3);

    const embed = new Discord.MessageEmbed()
      .setTitle("π ν¬ν λΆνλλ €μ")
      .setDescription(description)
      .setColor("RED");

    message.channel.send(embed).then((msg) => {
        msg.react("1οΈβ£")
        msg.react("2οΈβ£")
        msg.react("3οΈβ£")
        msg.react("4οΈβ£")
    });
  },
};
