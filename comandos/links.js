const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
      let premium = db.fetch(`classic_${message.author.id}`)
    let embedErro = new Discord.MessageEmbed()
      .setTitle("Erro!")
        .setColor("#FF0000")
       .setDescription(`<@${message.author.id}>, Você não é um assinante PREMIUM! para ter todos os benefícios, veja o nosso PATREON! [Clicando Aqui!](https://www.patreon.com/isabelabot?fan_landing=true)`)
      if (premium < 1) return message.reply(embedErro)
  db.add(`xp_${message.author.id}`, 1)
    let embedP = new Discord.MessageEmbed()
    .setTitle("Links Exclusivos para PREMIUM")
    .setColor("RANDOM")
    .setDescription(`Links especiais para PREMIUM
Grupo do Whatsapp(em breve)

Servidor [PREMIUM do Discord](https://discord.gg/aC2Swjv)`)
    .setTimestamp()
    .setFooter(`Comando executado por: ASSINANTE PREMIUM ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    message.author.send(embedP)
    let empedC = new Discord.MessageEmbed()
    .setTitle("Comando executado com sucesso!")
    .setColor("RANDOM")
    .setDescription(" :white_check_mark: Confira sua DM! Se não chegou a mensagem, tente novamente ou ative as mensagens diretas no servidor!")
    .setTimestamp()
    message.channel.send(empedC)
}
exports.help = {
  name: "i!links"
}