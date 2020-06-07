const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, argss) => {
  db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
      .setTitle("Meu convite para o servidor!")
      .setColor("RANDOM")
      .setDescription(`Então, você gostou de mim não é mesmo?
Me adicione no seu servidor! [Clicando aqui!](https://discordapp.com/api/oauth2/authorize?client_id=694975753418440844&permissions=8&scope=bot)
||sim, é permissão de administrador, mas, eu acho que você confia em mim né =)||

Muito obrigado!`)
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
      message.channel.send(embed)
}
exports.help = {
  name: "'invite"
}