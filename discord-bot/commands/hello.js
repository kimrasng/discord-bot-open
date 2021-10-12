module.exports = {
  name: "안녕",
  description: "hello",
  execute(message) {
    return message.channel.send(`${message.author}, 안녕!`);
  },
};
