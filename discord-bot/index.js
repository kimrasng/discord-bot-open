const fs = require("fs");
const Discord = require("discord.js");

setInterval(() => {
  const statuses = [
      '개발',
      '작동',
      '!명령어',
      'kimrasng.kro.kr'
  ]

  const status = statuses[Math.floor(Math.random() * statuses.length)]
  client.user.setActivity(status, {type: "PLAYING"})
}, 9000)

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
  }
});

client.login('token');
