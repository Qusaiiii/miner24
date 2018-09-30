var ServerID = "495832875875434497"; //اي دي السيرفر
var ChannelID1 = "495837784804687872";// اي دي الروم
var ChannelID2 = "495837842010931200";// 
var ChannelID3 = "495837892875386890";// 
var ChannelID4 = "495837903730114560";// 
var ChannelID5 = "495837915524366350";// 

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID1).send(Math.random().toString(36).substring(7))


    });
}

function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID2).send(Math.random().toString(36).substring(7))


    });
}

function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID3).send(Math.random().toString(36).substring(7))


    });
}

function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID4).send(Math.random().toString(36).substring(7))


    });
}

function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID5).send(Math.random().toString(36).substring(7))


    });
}
var timer = setTimeout(timerFunc, 1000);

client.login(process.env.BOT_TOKEN);
