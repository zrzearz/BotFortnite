const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('process.env.TOKEN')

bot.on('message', function (message) {
    if (message.content === 'salut')
    message.channel.send ('Salut, sa va')
} )

bot.on('message', function (message) {
    if (message.content === 'bot oui sa va')
    message.channel.send ('Ok, Cool')
} )

bot.on('message', function (message) {
    if (message.content === 'bot tu fais quoi ?')
    message.channel.send ('Bof, je suis en devlopement')
} )

bot.on('message', function (message) {
    if (message.content === '.money')
    message.channel.send (' / MiniSandbox™ Oficielle : infinit VB /*\ Karim boulboul 0 VB /*\ KaFterProfesionel 0 VB /*\ Fanisalle 0 VB /*\ antonin43345 0 VB /*\ lolo56326 0 VB /*\ Lorenzo bia 0 VB /*\ Maxime.EAE 0 VB /*\ maxkinder 0 VB /*\ Michael974 infinit VB /*\ Natomixir 0 VB /*\ THEMICHOU78 0 VB /*\ Vipramox_kinder 🍫 /*\ Or life 0 VB /*\ 🔥🍕ÎČÊ🍕🔥 infinit VB /*\ KevFunGames 500 VB \ ')
} )

bot.on('message', function (message) {
    if (message.content === 'bot tu fais quoi ?')
    message.channel.send ('Bof, je suis en devlopement ')
} )
