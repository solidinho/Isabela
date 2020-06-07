const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`gari_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `'empregos` e saiba mais")
    let ganhar = await db.fetch(`coletar_${message.author.id}`)
    let timeout = 5400000
    if (ganhar !== null & timeout - (Date.now() - ganhar) > 0) {
        let time = ms(timeout - (Date.now() - ganhar));
        message.reply(`Espere **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar esse comando novamente!`)
    } else {
        db.add(`cartão_${message.author.id}`, 500)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como gari e ganhou **F$ 500**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "'coletar"
}