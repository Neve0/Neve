'user strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = '!'

client.on('ready', () => {
    console.log('Online');
});

client.on('message', message => {
   
    if(message.content === prefix + 'ideologia') {
        message.channel.send('Liberal,Feminista,Apoiador das causas LGBTQ+,totalmente contra o uso de drogas');
    }
});

client.login(config.token)