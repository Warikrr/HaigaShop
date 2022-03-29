/* Base Ori : ABIL BOTZ
Script Ori : ABIL BOTZ
Nama Base : KuzaBase
Nama Script : ScStore
Recode : ABIL BOTZ
Youtube Author : ABIL BOTZ
Youtube Recode : ABIL BOTZ
Nama Script Recode : ScStore
Versi Script Ori : 2
Versi Script Recode : 2
Created By ABILBOTZ
*/

/* Info Maszeh
Tutor Run Termux Modal Scini
cd /sdcard
cd BaseV2
git clone https://github.com/AbilBotz/node_modules
node .

kalau Dh Ada Modulenya G Ush Git clone Lagi Sung node . Aja 

Tutor Run Heroku
Klen Cek Github Gw Gk Ush Pake Module Tinggal Klen Clonin Aja Recode trs Run Heroku

https://github.com/AbilBotz/KuzaBase

Bukan Untuk Dijual Lagi
Bukan Untuk Di Cap 🗿🤭
*/


const 
{ 
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const brainly = require('brainly-scraper')
const crypto = require('crypto')
const speed = require("performance-now")
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const util = require('util')
const request = require('request')
const { exec, spawn } = require('child_process')
const { removeBackgroundFromImageFile } = require('remove.bg')
const client = new WAConnection()
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const toMs = require('ms')
const ms = require('parse-ms')
const os = require('os');
const { fetchJosn, fetchText, kyun } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { dmff } = require('./listsell/dmff')
const { dmpubg } = require('./listsell/dmpubg')
const { dmml } = require('./listsell/dmml')
const { dmaov } = require('./listsell/dmaov')
const { dmcodm } = require('./listsell/dmcodm')
const { dmhigsdomino } = require('./listsell/dmhigsdomino')
const { dmsausageman } = require('./listsell/dmsausageman')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const simple = require('./lib/simple.js')

    //--Data--//
    let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
    let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
    let welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
    let scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
    
    //--media--//
    let thumb = fs.readFileSync("./media/thumb.jpg");
    let gopay = fs.readFileSync("./media/QRIS-1.jpg");
    let ovo = fs.readFileSync("./media/QRIS-2.jpg");
    let dana = fs.readFileSync("./media/QRIS-3.jpg");

    //--Setting--//

let botname = '*_｢ HagiaBotz ｣ 冬_*' //NAMA BOT
let lolkey = 'isi'
let zekskey = 'NXRu7zmcmyWTn0YGNzIV0gTFgoP' //Ganti Pake Api Lu Sendiri Biar Limitnya Gak Cepet Abis , Login Di zeks.me Untuk Mendapatkan Api Gratis
let ownername = '*_｢ HagiaShop ✘ ｣_*' //NAMA OWNER
let owner = '6281380844720' // NOMOR OWNER
let symbol = '*🦅*'
let faketeks = `*_｢ HagiaBotz ｣ 冬_*` 

readGc = true; 
readPc = true;
autovn = false;
autoketik = true;

    //--Module.Exports--//
    
module.exports = kuza = async (kuza, mek, _welkom) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '.'          	
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const Verived = "0@s.whatsapp.net"
const ytabilbotz = "6282293295376@s.whatsapp.net"
const txt = mek.message.conversation
const botNumber = kuza.user.jid
const ownerNumber = [`${owner}@s.whatsapp.net`, `6282293295376@s.whatsapp.net`, `6282293295376@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await kuza.chats.all()
const groupMetadata = isGroup ? await kuza.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const c = args.join(' ')
const m = simple.smsg(kuza, mek)
const isListMsg = (type == 'listResponseMessage')
const conts = mek.key.fromMe ? kuza.user.jid : kuza.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const isOwner = ownerNumber.includes(sender)
const pushname = mek.key.fromMe ? kuza.user.name : conts.notify || conts.vname || conts.name || '-'
const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? _welkom.includes(from) : false
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false

 //--Gblk
	    
	    const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  

const Wib = moment().utcOffset('+0700').format('HH:mm')
const Wita = moment().utcOffset('+0800').format('HH:mm')
const Wit = moment().utcOffset('+0900').format('HH:mm')
const p1 = await kuza.getStatus(sender)
const uptime = process.uptime();
const d = new Date
const locale = 'id'
const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Malam🌃'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Petang🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Sore🌅'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Siang🏙'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Pagi🌁'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Malam🌉'
}
var ase = new Date();
var jamss = ase.getHours();
switch(jamss){
case 0: jamss = "Midnight 🌚"; break;
case 1: jamss = "Midnight 🌚"; break;
case 2: jamss = "Midnight 🌚"; break;
case 3: jamss = "Midnight 🌔"; break;
case 4: jamss = "Midnight 🌔"; break;
case 5: jamss = "Dawn 🌄"; break;
case 6: jamss = "Morning 🌄"; break;
case 7: jamss = "Morning 🌄"; break;
case 8: jamss = "Morning ☀️"; break;
case 9: jamss = "Morning ☀️"; break;
case 10: jamss = "Morning ☀️"; break;
case 11: jamss = "Afternoon 🌞"; break;
case 12: jamss = "Zuhur 🌞"; break;
case 13: jamss = "Afternoon 🌞"; break;
case 14: jamss = "Afternoon 🌞"; break;
case 15: jamss = "Asr 🌞"; break;
case 16: jamss = "Afternoon ☀️"; break;
case 17: jamss = "Evening 🌄"; break;
case 18: jamss = "Maghrib 🌄"; break;
case 19: jamss = "Isha 🌙"; break;
case 20: jamss = "Night 🌙"; break;
case 21: jamss = "Night 🌙"; break;
case 22: jamss = "Midnight 🌙"; break;
case 23: jamss = "Midnight 🌚"; break;
}
var tampilUcapan = "" + jamss;
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
let po = kuza.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Take Here","listType": "SINGLE_SELECT","sections": list}}, {})
return kuza.relayWAMessage(po, {waitForAck: true})
}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

countDownDate = new Date("2022-01-01").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
newYear = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`
countDownDate = new Date("2022-04-02").getTime();
Ramadhan = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`
var ampun = await kuza.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await kuza.chatRead(jid)
})
var chatss = await kuza.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await kuza.chatRead(jid)
})
if (autovn) {
if (autovn === false) return
await kuza.updatePresence(from, Presence.recording)
} else if (autoketik) {
if (autoketik === false) return
await kuza.updatePresence(from, Presence.composing)
}


    //--Cn--//
    
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
} 
const reply = (teks) => {
kuza.sendMessage(from, teks, text, {quoted:mek})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anu = await kuza.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
kuza.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendMess = (hehe, teks) => {
kuza.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? kuza.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : kuza.sendMessage(from, teks.trim(), extendedText, { quoted: fstatus, contextInfo: { "mentionedJid": memberr } })
}
const Ytabilbotz = fs.readFileSync ('./media/pee.jpg')
const costum = (pesan, tipe, target, target2) => {
kuza.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
let runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
const p2 = '.'


    //--Butt--//


const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
  };
  kuza.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
  );
};
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
kuza.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: fstatus
})
}
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await kuza.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
kuza.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendBug = async (target) => {
await kuza.relayWAMessage(
kuza.prepareMessageFromContent(
target,
kuza.prepareDisappearingMessageSettingContent(0),
{}
),{ waitForAck: true }) 
}
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await kuza.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
kuza.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: fstatus,
contexInfo: kuza
})
}

const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await kuza.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
kuza.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

// fakenya

const katalog = (teks) => {
res = kuza.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "HagiaBotz😈", "thumbnail": fs.readFileSync('./media/pee.jpg'), "surface": 'CATALOG' }}, {quoted:fstatus})
kuza.relayWAMessage(res)}
const fakeyt = (teks) => { 
kuza.sendMessage(from, teks, text,{contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: false, sendEphemeral: false, "externalAdReply": { "title": `hallo ${pushname}🗿` , "body": `HAGIA BOTZ`, "mediaType": "2", "thumbnailUrl": "https://c.top4top.io/p_2087f30hj1.jpeg", "mediaUrl": "https://tps.com/channel/UCJPqI5eVhKPXPL2V8y6pIDA", "thumbnail": fs.readFileSync('./media/pee.jpg'), "sourceUrl": "", },mentionedJid:[sender]}, quoted : fstatus})};

const fakestatus = (teks) => { kuza.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": faketeks, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/pee.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282293295376-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} }
const fstatus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "HAGIA SHOP", 'jpegThumbnail': fs.readFileSync('./media/pee.jpg')}}}

const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu}, ${pushname}`, 
                            orderTitle: `Jangan Lupa Nafas Bro`,
                            thumbnail: Ytabilbotz, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }

    //--Cn2--//
    
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
kuza.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}

const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
kuza.sendMessage(to, media, type, { quoted: fstatus, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('Admin Mah Bebas Yekan:v')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
kuza.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply('Admin Mah Bebas Yekan:v')
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
kuza.groupRemove(from, [sender])
}     

    //--Cn3--//
    
    colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('|| PRIBADI ||', color(command), 'FROM', color(sender.split('@')[0]), 'ARGS :', color(args.length))
if (isCmd && isGroup) console.log('|| GROUP ||', color(command), 'FROM', color(sender.split('@')[0]), 'in', color(groupName), 'ARGS :', color(args.length))
if (!mek.key.fromMe === false) return

kuza.setStatus(`${botname} || Active Time : ${kyun(uptime)} || {'PUBLIC-MODE'}`).catch((_)=>_);

settingstatus = new Date() * 1;

switch (command) {
case 'menu':
fakeyt(`Menampilkan Menu..`)
teks = `hai Saya Haiga Botz 

Haloo Kak ${pushname} 
Salam Kenal, Aku Bot Hagia Asisten Kami Bisa Kini!

Hagia Shop Menyediakan Top Up All Game dll.
Silahkan Pilih Button Di Bawah Ini Jika button Tidak Muncul Ketik .command`
img = fs.readFileSync('./media/pee.jpg')
trans = `Hagia Botz`
but = [
          { buttonId: `${prefix}command`, buttonText: { displayText: 'MENU BOT' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER BOT' }, type: 1 }
        ]
        sendButImage(from, teks, trans, img, but, {quoted: mek})
break

case 'command':
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
 listMsg = {
 buttonText: 'Buttons',
 footerText: '🌀 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘈𝘣𝘪𝘭𝘉𝘰𝘵𝘻',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan Pilih Salah Satu Button List Dibawah Yaa 🙏
 
 *_｢ Indonesia Time ｣_*
${symbol} Date : ${date}
${symbol} Wib : ${Wib}
${symbol} Wita : ${Wita}
${symbol} Wit : ${Wit}

*_｢ Bot Info ｣_*
${symbol} Bot Name : ${botname}
${symbol} Owner Name : ${ownername}
${symbol} Prefix : 「${prefix}」
${symbol} Mode : PUBLIC
${symbol} Lib : *Baileys*
${symbol} Calender : *${date}*
${symbol} Time : *${jmn}*
${symbol} Speed : *${latensi.toFixed(4)} second*
${symbol} Runtime : *${kyun(run)}*

*_｢ User Info ｣_*
❱ Name : *${pushname}*
❱ Bio : *${p1 ? `${p1.status}` : '-'}*
❱ Nomor : *wa.me/${sender.split("@")[0]}*
❱ Status : *${isOwner ? 'Owner' :  'User'}*`,
 sections: [
                     {
                      "title": `ListButMessage`,
 rows: [
                          {
                              "title": "☰ Allmenu",
                              "rowId": ".allmenu"
                          },
                          {
                              "title": "☰ Menu Group",
                              "rowId": ".groupmenu"
                          },
                          {
                              "title": "☰ Menu Sticker",
                              "rowId": ".stickermenu"
                           },
                           {
                              "title": "☰ Menu Store",
                              "rowId": ".storemenu"
                           },
                           {
                              "title": "☰ Menu Download",
                              "rowId": ".downloadmenu"
                           },
                           {
                              "title": "☰ Menu Other",
                              "rowId": ".othermenu"
                           },
                           {
                              "title": "☰ Menu Owner",
                              "rowId": ".ownermenu"
                           },
                           {
                              "title": "☰ Via Login",
                              "rowId": ".vialogin"
                           },
                       	{
                              "title": "☰ Pulsa",
                              "rowId": ".pulsa"
                          },
                          {
                              "title": "☰ Kebutuhan Sosmed",
                              "rowId": ".sosmed"
                          },
                          {
                              "title": "☰ Diamond Dragon Raja",
                              "rowId": ".dmdragonraja"
                          },
                          {
                              "title": "☰ Diamond Zepetto",
                              "rowId": ".dmzepetto"
                          },
                          {
                              "title": "☰ Cash Point Blank",
                              "rowId": ".dmpointblank"
                          },
                          {
                              "title": "☰ Vp Valorant",
                              "rowId": ".dmvalorant"
                          },
                          {
                              "title": "☰ Diamond FreeFire",
                              "rowId": ".dmff"
                          },
                          {
                              "title": "☰ Diamond MobileLegends",
                              "rowId": ".dmml"
                          },
                          {
                              "title": "☰ Uc Pubg",
                              "rowId": ".dmpubg"
                          },
                          {
                              "title": "☰ Voc Aov",
                              "rowId": ".dmaov"
                          },
                          {
                              "title": "☰ Cp Codm",
                              "rowId": ".dmcodm"
                          },
                          {
                              "title": "☰ Chip HigsDomino",
                              "rowId": ".dmhigsdomino"
                          },
                          {
                              "title": "☰ Candies Sausageman",
                              "rowId": ".dmsausageman"
                          },
                          {
                              "title": "☰ SewaBot / Rent A Bot️",
                              "rowId": ".sewabot"
                           }
                           
                        ]
                     }],
 listType: 1
}
kuza.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fstatus})
break

case 'dmff':
teks = `${ucapanWaktu} ${pushname}

${dmff}`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'dmml':
teks = `${ucapanWaktu} ${pushname}

${dmml}`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'ucpubg':
teks = `${ucapanWaktu} ${pushname}

PUBGM REGION INDO 

PAKET CN PUBGM INDO
*183 UC = 32.100*

 52 UC = Rp 9.100
104 UC = Rp 18.500
 131 UC = Rp 22.200 
 156 UC = Rp 26.700
 208 UC = Rp 35.100
 263 UC = Rp 43.500
 315 UC = Rp 54.300
 419 UC = Rp 69.600
 525 UC = Rp 87.500
 629 UC = Rp 107.000
 788 UC = Rp 127.100
 825 UC = Rp 132.600
 1008 UC = Rp 162.100
 1050 UC = Rp 173.200
 1100 UC = Rp 174.200
 1204 UC = Rp 194.300
 1375 UC = Rp 220.600
 1.638 UC = Rp 260.700
 1650 UC = Rp 261.700
 1.900 UC = Rp 305.400
 1.925 UC = Rp 306.000
 2.163 UC = Rp 338.400
 2.200 UC = Rp 345.200
 2.425 UC = Rp 395.400
 2.875 UC = Rp 447.100
 3.138 UC = Rp 484.500
 3.400 UC = Rp 530.300
 3.925 UC = Rp 616.300
 4.250 UC = Rp 662.600
 4.775 UC = Rp 748.600
 5.038 UC = Rp 810.500
 6000 UC = Rp 890.100
 9375 UC = Rp 1.330.100
 10.136 UC = Rp 1.440.600
 20.326 UC = Rp 2.970.100
 30.489 UC = Rp 4.310.400
 46.875 UC = Rp 6.860.000
 50.013 UC = Rp 7.670.000
 93.750 UC = Rp 13.368.600
*OPEN PUKUL 09:00 - 19:00 WIB
PROSES 5 - 180 MENIT, MAX 24 JAM JIKA ERROR / MAINTENANCE


PUBGM ALL REGION
 62     UC = Rp 14.600
 198    UC = Rp 43.700
 324   UC = Rp 71.200
 690    UC = Rp 144.465
 1875 UC = Rp 348.143
 4000 UC = Rp 689.435
 8400 UC = Rp 1.392.343
 10275 UC = Rp 1.695.386
OPEN PUKUL 09.00 - 21.00 WIB
PROSES 5 - 180 MENIT, MAX 24 JAM JIKA ERROR / MAINTENANCE`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'vocaov':
teks = `${ucapanWaktu} ${pushname}

${dmaov}`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'cashcodm':
teks = `${ucapanWaktu} ${pushname}

${dmcodm}`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'chiphigsdomino':
teks = `${ucapanWaktu} ${pushname}

${dmhigsdomino}`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'dmdragonraja':
teks = `${ucapanWaktu} ${pushname}

DRAGON RAJA (VIA ID)
90 Coupons        = Rp 18.000
337 Coupons      = Rp 66.700
988 Coupons      = Rp 173.000
2.553 Coupons   = Rp 428.000
3.589 Coupons   = Rp 595.000
7.546 Coupons   = Rp 1.268.000
15.092 Coupons = Rp 2.520.000
Investment Funds = Rp 196.000
Investment Funds II = Rp 286.000
OPEN PUKUL 09.00 - 19.00 WIB`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'vialogin':
teks = `${ucapanWaktu} ${pushname}

TOPUP GAME VIA LOGIN

RAGNAROK X
 2500 = 5$
 5000 = 10$
 10000 = 20$
 15300 = 30$
 26000 = 50$
 53000 = 100$

FREE FIRE 
 310     = 3$
 520     = 5$
 1060   = 10$
 2180   = 20$
 5600   = 50$
 11200  = 100$
Member Mingguan = 2$
Member Bulanan = 11$

PUBGM ALL REGION 
 325    UC = 5$
 660    UC = 10$
 1800  UC = 25$
 3850 UC = 50$
 8100  UC = 100$
 11950 UC = 150$

PES 2021 
310     COIN = 3$
1050   COIN = 10$
2180   COIN = 20$
3300  COIN = 30$
5800   COIN = 50$
12000  COIN = 100$

NIMO TV 
 139    = 2$
 349   = 5$
 699   = 10$
 3499 = 50$
 6999 = 100$

ZEPETO 
32 Zems = 2$
65 Zems = 4$

LIFE AFTER
330 SC = 5$
558 SC = 8$
1108 SC = 15$
2268 SC = 30$
3468 SC = 47$
5768 SC = 75$
7768 SC = 100$
HOPEFUND = 15$
MEMBERSHIP = 5$
BENEFIT DAILYPACK = 15$

OMEGA LEGENDS 
550 Gold = 5$
1150 Gold = 10$
2380 Gold = 20$
6100 Gold = 50$
12500 Gold = 100$

CLASH OF CLANS 
500 Permata = 5$
1200 Permata = 10$
2500 Permata = 20$
6500 Permata = 50$
14000 Permata = 100$

LINE PLAY 
14 Cash = 2$
38 Cash = 5$
92 Cash = 12$
194 Cash = 25$
350 Cash = 45$
632 Cash = 80$
3600 Gems = 3$
11800 Gems = 9$
40000 Gems = 25$
56 Heart = 2$
146 Heart = 5$
475 Heart = 15$
845 Heart = 25$

ROBLOX
400     ROBUX = 5$
800     ROBUX = 10$
1700    ROBUX = 20$
4500   ROBUX = 50$
10000 ROBUX = 100$

GENSHIN IMPACT 
300   GC = 5$
980   GC = 15$
1980 GC = 30$
3280 GC = 50$
6480 GC = 100$
Blessing             = 5$
Gnostic Hymn   = 10$
Gnostic Chorus = 20$

LOL WILD RIFT 
375 WC = 3$
650 WC = 5$
1350 WC = 10$
2100 WC = 15$
3600 WC = 25$
7500 WC = 50$

POKEMON UNITED
250 Gems = 4$
525 Gems = 8$
1235 Gems = 20$
2740 Gems = 40$
3500 Gems = 50$
7100 Gems = 100$

TIKTOK
350 KOIN = 5$
700 KOIN = 10$
3500 KOIN = 50$
17.500 KOIN = 250$

LITA
203 KOIN = 2$
301 KOIN = 3$
525 KOIN = 5$
1043 KOIN = 10$
4193 KOIN = 40$

CARA HITUNG : RATE x $ = HARGA
RATE -> cek di DAFTAR UPDATE
OPEN PUKUL 09.00 - 21.00 WIB
PROSES 5 - 180 MENIT, MAX 24 JAM JIKA ERROR / MAINTENANCE`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'kuponopm':
teks = `${ucapanWaktu} ${pushname}

ONE PUNCH MAN (VIA ID)
3 Kupon = Rp 5.300
6 Kupon = Rp 9.000
17 Kupon = Rp 27.400
27 Kupon = Rp 44.500
41 Kupon = Rp 66.400
54 Kupon = Rp 87.500
81 Kupon = Rp 130.500
161 Kupon = Rp 259.500
267 Kupon = Rp 435.500
OPEN PUKUL 09.00 - 21.00 WIB
PROSES 5 - 180 MENIT, MAX 24 JAM JIKA ERROR / MAINTENANCE`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'sosmed':
teks = `${ucapanWaktu} ${pushname}

KSHOPEE

 FOLLOWERS Shopee
100 Followers = Rp 5.000
300 Followers = Rp 13.000
500 Followers = Rp 20.000
1.000 Followers = Rp 35.000
1.500 Followers = Rp 52.000
2.000 Followers = Rp 65.000
 LIKE Shopee
100 Likes = Rp 2.000
200 Likes = Rp 3.500
300 Likes = Rp 4.500
400 Likes = Rp 6.500
500 Likes = Rp 8.000
1000 Likes = Rp 15.000

KEBUTUHAN INSTAGRAM

 FOLLOWERS Pasif Random
100 Followers = Rp 4.500
200 Followers = Rp 7.500
300 Followers = Rp 11.500
400 Followers = Rp 14.500
500 Followers = Rp 18.500
1000 Followers = Rp 35.000
 FOLLOWERS Indo Aktif
100 Followers = Rp 5.000
200 Followers = Rp 8.000
300 Followers = Rp 12.000
400 Followers = Rp 15.000
500 Followers = Rp 19.000
1000 Followers = Rp 34.500
 LIKES Instagram Indo
100 Likes = Rp 2.500
200 Likes = Rp 4.500
300 Likes = Rp 5.500
400 Likes = Rp 7.500
500 Likes = Rp 9.000
1000 Likes = Rp 16.000
 LIKES Instagram Random
500 Likes = Rp 3.500
1000 Likes = Rp 6.500
2000 Likes = Rp 12.000
3000 Likes = Rp 17.000
5000 Likes = Rp 28.000
 VIEWS Instagram
1000 Views = Rp 2.000
2000 Views = Rp 3.000
3000 Views = Rp 4.000
4000 Views = Rp 5.000
5000 Views = Rp 6.000
10000 Views = Rp 10.000

KEBUTUHAN TIKTOK

 FOLLOWERS Tiktok
100 Followers = Rp 5.000
300 Followers = Rp 13.000
500 Followers = Rp 20.000
1.000 Followers = Rp 36.000
1.500 Followers = Rp 53.000
2.000 Followers = Rp 66.000
 LIKES Tiktok
100 Likes = Rp 3.500
200 Likes = Rp 5.500
300 Likes = Rp 8.500
400 Likes = Rp 10.500
500 Likes = Rp 13.500
1000 Likes = Rp 25.000
 VIEWS Tiktok
10.000 Views = Rp 2.500
30.000 Views = Rp 6.500
50.000 Views = Rp 10.500
100.000 Views = Rp 20.000
500.000 Views = Rp 80.000
1.000.000 Views = Rp 120.000
5.000.000 Views = Rp 500.000
 SHARE Tiktok
100 Share = Rp 3.000
300 Share = Rp 8.000
500 Share = Rp 12.000
1000 Share = Rp 21.000
5000 Share = Rp 95.000
10000 Share = Rp 180.000

 MEMBER Telegram
100 Member = Rp 3.500
200 Member = Rp 6.000
500 Member = Rp 15.300
700 Member = Rp 19.100
1.000 Member = Rp 28.000
1.500 Member = Rp 37.100
2.000 Member = Rp 50.500
 VIEWS POST Telegram ( Latest )
500 Views = Rp 2.200
1000 Views = Rp 4.300
2000 Views = Rp 7.800
4000 Views = Rp 13.600
5000 Views = Rp 17.400
10000 Views = Rp 24.500

KEBUTUHAN BUKA LAPAK

Follower BUKA LAPAK
50 Follower = Rp 3.000
100 Follower = Rp 5.600
200 Follower = Rp  9.400
300 Follower = Rp 14.300
500 Follower = Rp 22.600
800 Follower = Rp 35.100
1.000 Follower = Rp 42.000
2.000 Follower = Rp 72.000
5.000 Follower = Rp 180.000

*KHUSUS LIKE & VIEW DAN FOLLOWER BISA DI BAGI 2 AKUN*
*BONUS AKAN DI BERIKAN SECARA RANDOM DAN NOMINAL RANDOM ( KHUSUS IG,TIKTOK )*

OPEN PUKUL 09.00 - 23.00 WIB
PROSES 5 - 180 MENIT, MAX 24 JAM JIKA ERROR / MAINTENANCE

CATATAN ! ! !

Followers di atass ituu berbentuk drop, min drop itu apa ? drop ituu followers yang bisa berkurang dari kalian beli 30% , min ada kah yang permanent? tentu ada tetapi harga lebih tinggi dri harga yg drop.

*PAKET INSTAGRAM*

*1000 Followers = Rp 65.000*
*2000 Followers = Rp 125.000*
*3000 Followers = Rp 185.000*
*5000 Followers = Rp 300.000*

*PAKET TIKTOK FYP*

*400 Share Indo Aktif = Rp 13.000*
*500 Share Indo Aktif = Rp 16.000*
*1000 Share Indo Aktif = Rp 28.000*
*1.500 Share Indo Aktif = Rp 35.000*
*3000 Share Indo Aktif = Rp 60.000*

NOTE : Kualitas : Real Indonesia Aktif // Layanan ini cocok untuk akun bisnis, olshop, maupun pribadi. Karena layanan ini memiliki kualitas real aktif sehingga berpotensi tinggi untuk melakukan interaksi, menyukai, melihat, menjangkau postingan, dan lainnya. // Estimasi pesanan selesai : 1X24 JAM (Jika overload, mungkin 3 hari)`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.sosmedkh`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'dmpointblank':
teks = `${ucapanWaktu} ${pushname}

POINT BLANK (VIA ID)
1200 Cash = Rp 8.900
2400 Cash = Rp 17.900
6000 Cash = Rp 45.000
12000 Cash = Rp 89.000
36000 Cash = Rp 266.000
OPEN PUKUL 09.00 - 21.00 WIB
PROSES 5 - 180 MENIT, MAX 24 JAM JIKA ERROR / MAINTENANCE`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'dmhigsdomino':
teks = `${ucapanWaktu} ${pushname}

${dmhigsdomino}`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'dmvalorant':
teks = `${ucapanWaktu} ${pushname}

_VALORANT (VIA ID) 
420 VP = Rp 48.500
700 VP = Rp 76.400
1375 VP = Rp 143.400
2400 VP = Rp 238.525
4000 VP = Rp 380.152
8150 VP = Rp 760.164
OPEN PUKUL 09.00 - 21.00 WIB
PROSES 1-60 MENIT, MAX 24 JAM JIKA ERROR/MAINTANCE`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'dmzepetto':
teks = `${ucapanWaktu} ${pushname}

ZEPETO (VIA ID)
29 Zems = Rp 26.800
60 Zems = Rp 53.600
125 Zems = Rp 106.200
196 Zems = Rp 158.800
770 Zems = Rp 599.000
10200 Coins = Rp 26.800
21000 Coins = Rp 53.600
38900 Coins = Rp 98.600
62800 Coins = Rp 151.000
234000 Coins = Rp 511.000
OPEN PUKUL 09.00 - 21.00 WIB
PROSES 5 - 180 MENIT, MAX 24 JAM JIKA ERROR / MAINTENANCE`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'pulsa':
teks = `${ucapanWaktu} ${pushname}

TELKOMSEL
*isi ulang pulsa*

5k.  Rp.5.800
10k Rp.10.575
15k Rp.15.350
20k Rp.20.225
25k Rp.25.225
30k Rp.30.275
35k Rp.35.375
40k Rp.40.275
45k Rp.45.375
50k Rp.50.250
60k Rp.60.350
65k Rp.65.300
70k Rp.70.350
75k Rp.75.350
80k Rp.80.100
85k Rp.85.300
90k Rp.90.200
95k Rp.95.300
100k Rp.99.050
150k Rp.148.600
200k Rp.198.600

INDOSAT
*isi ulang pulsa*

5k.  Rp.6.000
10k Rp.11.000
12k Rp.12.400
15k Rp.16.100
20k Rp.21.000
25k Rp.26.000
30k Rp.30.550
40k Rp.41.175
50k Rp.50.575
60k Rp.60.490
80k Rp.79.250
90k Rp.89.300
100k Rp.97.200

AXIS 
*isi ulang pulsa*

5k.  Rp.6.100
10k Rp.11.050
15k Rp.15.600
25k Rp.26.000
30k Rp.30.550
50k Rp.50.575
100k Rp.97.200

THREE
*isi ulang pulsa*

5k.  Rp.6.000
10k Rp.11.006
15k Rp.15.700
20k Rp.20.800
25k Rp.25.300
30k Rp.30.550
40k Rp.40.375
50k Rp.50.575
75k Rp.74.600
100k Rp.97.200

SMARTFREEN 
*isi ulang pulsa*

5k.  Rp.5.500
10k Rp.10.475
15k Rp.15.250
20k Rp.20.725
25k Rp.25.325
30k Rp.30.275
35k Rp.35.375
40k Rp.40.375
45k Rp.45.375
50k Rp.50.250
60k Rp.60.350
65k Rp.65.300
70k Rp.70.350
75k Rp.75.350
80k Rp.80.100
85k Rp.85.300
90k Rp.90.200
95k Rp.95.300
100k Rp.97.050
150k Rp.148.600
200k Rp.198.600
300k Rp.296.600

menambah masa aktif`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'dmsausageman':
teks = `${ucapanWaktu} ${pushname}

SAUSAGE MAN (VIA ID)

=---STATUS : ✅---=

60      Candies = Rp 12.400
180    Candies = Rp 37.800
316    Candies = Rp 63.400
718    Candies = Rp 126.100
1368  Candies = Rp 251.500
2118   Candies = Rp 378.500
3548 Candies = Rp 628.800
7048 Candies = Rp 1.246.100
OPEN PUKUL 09.00 - 21.00 WIB
PROSES 5 - 180 MENIT, MAX 24 JAM JIKA ERROR / MAINTENANCE`
  but = [
{ buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: `.id`, buttonText: { displayText: 'Masukkan Data' }, type: 1 },
{ buttonId: `.payment`, buttonText: { displayText: 'Bayar' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'payment':
teks = `Hai Kak @${pushname} Mau Make Payment apa Kak ? Silahkan Dipilih Yaaa`
but = [
{ buttonId: `.qris`, buttonText: { displayText: 'QRIS' }, type: 1 },
{ buttonId: `.notf`, buttonText: { displayText: 'NOMOR' }, type: 1 },
{ buttonId: `.dana`, buttonText: { displayText: 'DANA' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'qris':
teksnya = `Hai kak ${pushname}
Silahkan scan kode pembayaran di Atas
*TUTORIAL SCAN*
1. PASTIAN KALIAN ADA SALDO_-
2. PENCET BAYAR
3. SCAN
4. MASUKIN NOMINAL
5. TF`
teks = `*NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER'}, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI'}, type: 1 }
        ]    
sendButImage(from, teksnya, teks, gopay, but)
break

case 'notf':
teksnya = `Hai kak ${pushname}
TRANSFER UANG MELAUI 


[  DANA � 081380844720 A/n Aldi Ardiansyah

[  GOPAY � 081380844720 A/n Hagia Shop

[  OVO � 081380844720 A/n Hagia Shop

[  BCA  � 5135195691 A/n Aldi Ardiansyah

[  BSI � 8219260060 A/n Aldi Ardiansyah

[  SHOPPE � 081380844720 A/n Hagia Game

[  SAKUKU � 081380844720 A/n Aldi Ardiansyah 

`
teks = `*NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER'}, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI'}, type: 1 }
        ]    
sendButImage(from, teksnya, teks, ovo, but)
break

case 'dana':
teksnya = `Hai kak ${pushname}
Silahkan scan kode pembayaran di Atas
*TUTORIAL SCAN*
1. PASTIAN KALIAN ADA SALDO_-
2. PENCET BAYAR
3. SCAN
4. MASUKIN NOMINAL
5. TF`
teks = `*NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER'}, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI'}, type: 1 }
        ]    
sendButImage(from, teksnya, teks, dana, but)
break

case 'id':
reply(`*Silahkan Diisi*
_ID =_
_NICK =_
_NOMINAL =_
_HARGA =_
_PAYMENT =_

*_Silahkan Mengirimkan Data Ke Owner Beserta Bukti Transfernya Yaa 🙏_*`)
break

case 'sosmedkh':
reply(`*Silahkan Diisi*
FORMAT ORDER
Sosial Media :
Layanan : 
Link / Username :
Jumlah Order :
Pembayaran :

CONTOH
FORMAT ORDER
Sosial Media : Instagram
Layanan : Followers
Link / Username : hagia.game
Jumlah Order : 200
Pembayaran : DANA

CATATAN
1. Akun dan postingan tidak boleh di PRIVATE selama proses berlangsung.
2. Masukkan username jika membeli layanan followers
3. Masukkan link postingan jika membeli layanan like, views, dan share

*_Silahkan Mengirimkan Data Ke Owner Beserta Bukti Transfernya Yaa 🙏_*`)
break

case 'groupmenu':
reply(`*_Menu Group_*
${symbol} ${prefix}welcome 1/0
${symbol} ${prefix}antilink 1/0
${symbol} ${prefix}antivirtex 1/0
${symbol} ${prefix}rulesgroup
${symbol} ${prefix}promote
${symbol} ${prefix}demote
${symbol} ${prefix}promoteall
${symbol} ${prefix}demoteall
${symbol} ${prefix}kick
${symbol} ${prefix}add
${symbol} ${prefix}sider
${symbol} ${prefix}resetlinkgc
${symbol} ${prefix}linkgc
${symbol} ${prefix}listonline
${symbol} ${prefix}leave
${symbol} ${prefix}opengc
${symbol} ${prefix}closegc
${symbol} ${prefix}tagall
${symbol} ${prefix}hidetag

*_Created By HagiaShop_*`)
break

case 'storemenu':
reply(`*_Menu Store_*
${symbol} ${prefix}sosmed
${symbol} ${prefix}pulsa
${symbol} ${prefix}dmff
${symbol} ${prefix}dmml
${symbol} ${prefix}ucpubg
${symbol} ${prefix}vocaov
${symbol} ${prefix}cpcodm
${symbol} ${prefix}candiessausageman
${symbol} ${prefix}chiphigsdomino
${symbol} ${prefix}dmdragonraja
${symbol} ${prefix}zemszepetto
${symbol} ${prefix}cashpoinkblank
${symbol} ${prefix}vpvalorant
${symbol} ${prefix}payment
${symbol} ${prefix}id
${symbol} ${prefix}sewabot

*_Created By HagiaShop_*`)
break

case 'stickermenu':
reply(`*_Menu Sticker_*
${symbol} ${prefix}attp
${symbol} ${prefix}ttp
${symbol} ${prefix}stiker
${symbol} ${prefix}doge
${symbol} ${prefix}patrick
${symbol} ${prefix}gawgura
${symbol} ${prefix}stickeranime

*_Created By HagiaShop_*`)
break

case 'downloadmenu':
reply(`*_Menu Download_*
${symbol} ${prefix}play
${symbol} ${prefix}ytsearch
${symbol} ${prefix}tiktokmusic
${symbol} ${prefix}pinterest

*_Created By HagiaShop_*`)
break

case 'othermenu':
reply(`*_Menu Other_*
${symbol} ${prefix}sewabot
${symbol} ${prefix}owner
${symbol} ${prefix}readmore
${symbol} ${prefix}bay
${symbol} ${prefix}selamatdatang
${symbol} ${prefix}groupbot
${symbol} ${prefix}runtime
${symbol} ${prefix}speed

*_Created By HagiaShop_*`)
break

case 'ownermenu':
reply(`*_Menu Owner_*
${symbol} ${prefix}owner
${symbol} ${prefix}setsymbol
${symbol} ${prefix}bc
${symbol} ${prefix}upswteks
${symbol} ${prefix}upswsticker
${symbol} ${prefix}upswaudio
${symbol} ${prefix}upswvideo
${symbol} ${prefix}upswimage

*_Created By HagiaShop_*`)
break

case 'upswteks':
reply(mess.wait)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
kuza.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break

case 'upswsticker':
reply(mess.wait)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await kuza.downloadMediaMessage(encmedia)
kuza.sendMessage('status@broadcast', buff, sticker)
}
reply(`Sukses upload sticker`)
break

case 'upswaudio':
reply(mess.wait)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await kuza.downloadMediaMessage(encmedia)
kuza.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
}
reply(`Sukses upload audio`)
break

case 'upswvideo':
reply(mess.wait)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var konti = body.slice(11)
reply(mess.wait)
var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var mediap = await kuza.downloadAndSaveMediaMessage(enmediap)
const buffer3 = fs.readFileSync(mediap)
kuza.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
reply(`Sukses upload video:\n${konti}`)
break

case 'upswimage':
reply(mess.wait)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var teksyy = body.slice(11)
reply(mess.wait)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await kuza.downloadAndSaveMediaMessage(enmedia)
buffer = fs.readFileSync(media)
kuza.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
reply(`Sukses upload image:\n${teksyy}`)
break

case 'setsymbol':
	    	if (args.length < 1) return reply('Symbolnya Mana ?')
			if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
            symbol = args[0]
            reply(`SUKSES SET SYMBOL KE ${symbol}`)
            break
case 'bc':
					if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner) 
					if (args.length < 1) return reply('Teksnya?')
					anu = await kuza.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await kuza.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kuza.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Sukses Boadcast')
             } else {
             for (let _ of anu) {
             kuza.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST 」*\n\n${body.slice(4)}`,
			"footerText": 'HagiaBotz',
			"buttons": [
			{"buttonId": `${prefix}owner`,
			"buttonText": {"displayText": "OWNER"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Sukses broadcast')}
        break

case 'play':
reply(mess.wait)
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} Orange7`)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await kuza.sendMessage(from, ini_buffer, image, { quoted: fstatus, caption: caption })
get_audio = await getBuffer(result.link)
await kuza.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: fstatus })
})
})
break

case 'ytsearch':
reply(mess.wait)
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break

case 'tiktokmusic':
reply(mess.wait)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
await kuza.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: fstatus })
break

case 'pinterest':
reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await kuza.sendMessage(from, ini_buffer, image, { quoted: fstatus })
break

case 'attp':
reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
kuza.sendMessage(from, buffer, sticker, { quoted: fstatus })
break

case 'ttp':
reply(mess.wait)
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerFromUrl(from, anjay) 
break

case 'sticker':
case 'stiker':
case 's':
reply(mess.wait)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await kuza.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Yt Abil Botz`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await kuza.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await kuza.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
kuza.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: fstatus })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break

case 'doge':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break

case 'patrick':
case 'pat':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
  sendStickerFromUrl(from, pjr)
}
)
break

case 'gura':
case 'gawgura':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break

case 'anime':
case 'stickeranime':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerFromUrl(from, pjrr)
}
)
break

case 'sewabot':
 listMsg = {
 buttonText: 'Buttons',
 footerText: '🌀 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘈𝘣𝘪𝘭𝘉𝘰𝘵𝘻',
 description: `Hai kak @${sender.split('@')[0]}, Mau Sewabot Ya?
 Nih Kak Listnya
 
 *Permanen*
 Rp 7.000
 *Perbulan*
 Rp 5.000
 *Perminggu*
 Rp 3.000
 
 *Note : Beli Tinggal Beli Kak Fitur Cek Sendiri Gk Usah Banyak Nanya Atau Basa Basi Soalnya Owner Sibuk 🙏*`,
 sections: [
                     {
                      "title": `ListButMessage`,
 rows: [
                          {
                              "title": "☰ Owner / Pemilik Bot",
                              "rowId": ".owner"
                           }
                        ]
                     }],
 listType: 1
}
kuza.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fstatus})
break

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
kuza.sendMessage(from, {displayName: `Creator ${ownername}`, vcard: vcard2}, contact, 
{ quoted: fstatus, 
})
   break

case 'readmore':
  reply('‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎')
  break

  case 'rulesgroup':
  reply(`*Desc :* \n${groupMetadata.desc}`)
  break

  case 'bay':
  reply(`Sayonara buat yang pergi😔\n Semoga amal ibadahnya di terima :)`)
  break

  case 'selamatdatang':
  reply('welcome kak jangan lupa patuhi peraturan  grup ya kaka \n Semoga betah👏')
  break

case 'groupbot':
reply(`https://chat.whatsapp.com/CS4ESARec5o476nHesGIDt`)
break

case "runtime":
case "test":
run = process.uptime();
teks = `*${kyun(run)}*`;
reply(teks);
break
case "speed":
case "ping":
timestamp = speed();
latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString("utf-8");
ssd = child.replace(/Memory:/, "Ram:");
pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break

case 'testi':
 listMsg = {
 buttonText: 'Buttons',
 footerText: '🌀 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘈𝘣𝘪𝘭𝘉𝘰𝘵𝘻',
 description: `Hai kak @${sender.split('@')[0]}, Kami juga menyediakan Testimoni Loh jika kalian masih tidak yakin sama Hagia Shop, langsung aja

Link Testi : https://t.me/testihagiashop 🙏*`,
 sections: [
                     {
                      "title": `ListButMessage`,
 rows: [
                          {
                              "title": "☰ Owner / Pemilik Bot",
                              "rowId": ".owner"
                           }
                        ]
                     }],
 listType: 1
}
kuza.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fstatus})
break

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome 1 untuk mengaktifkan\n${prefix}welcome 0 untuk menonaktifkan`)
if ((args[0]) === '1') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === '0') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'antilink':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
  if (!q) return reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
  if (args[0].toLowerCase() === '1'){
  if (isAntiLink) return reply(`Udah aktif`)
  antilink.push(from)
  fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
  reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === '0'){
  let anu = antilink.indexOf(from)
  antilink.splice(anu, 1)
  fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
  reply('*「 ANTILINK DI NONAKTIFKAN 」*')
  } else {
  reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
}
  break
case 'antivirtex':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
  if (!q) return reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
  if (args[0].toLowerCase() === '1'){
  if (isAntiVirtex) return reply(`Udah aktif`)
  antivirtex.push(from)
  fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
  reply('*「 ANTI VIRTEX DI AKTIFKAN 」*\n\nYang Ngirim Virtex Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === '0'){
  let anu = antivirtex.indexOf(from)
  antivirtex.splice(anu, 1)
  fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
  reply('*「 ANTI VIRTEX DI NONAKTIFKAN 」*')
  } else {
  reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
}
  break

case 'demoteall':
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
   	members_id.push(mem.jid)
  	}
kuza.groupDemoteAdmin(from, members_id)
break

case 'promoteall':
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
   	members_id.push(mem.jid)
  	}
kuza.groupMakeAdmin(from, members_id)
break

case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await kuza.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

case 'resetlinkgc':
 case 'resetlinkgroup':
 case 'revoke':
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
  json = ['action', 'inviteReset', from]
 kuza.query({json, expect200: true})
  reply('Sukses Mereset Link Group')
 break

case 'link':
case 'linkgc':
case 'linkgrup' :
case 'linkgroup':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await kuza.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
kuza.sendMessage(from, yeh, text, { quoted: fstatus })
break

case 'online':
case 'listonline':
case 'here':                
case 'nyimak':
if (!isGroup) return reply(mess.only.group)
 try {
 let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
 let online = [...Object.keys(kuza.chats.get(ido).presences), kuza.user.jid]
 kuza.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fstatus, contextInfo: { mentionedJid: online }})
 } catch (e) {
 reply(`${e}`)
}
 break

case 'leave':
if (!isGroupAdmins) return reply(mess.only.admin)
  setTimeout( () => {
  kuza.groupLeave(from) 
  }, 2000)
  setTimeout( () => {
  reply('Byee...')
  }, 0)
  break

case 'opengc' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
kuza.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'closegc' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
kuza.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
kuza.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
kuza.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
kuza.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
kuza.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
try {
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await kuza.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Eror, user private acc')
if(inv[0].code == 408) return reply('Eror, user baru saja keluar')
if(inv[0].code == 401) return reply('Eror, Karena Bot Di Block Oleh Target')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await kuza.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target')
}
} catch {
return 
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
kuza.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
kuza.groupRemove(from, mentioned)
}
break

case 'allmenu':
teks = `${ucapanWaktu} ${pushname}

 *GROUP MENU* 
${symbol} ${prefix}welcome 1/0
${symbol} ${prefix}antilink 1/0
${symbol} ${prefix}antivirtex 1/0
${symbol} ${prefix}rulesgroup
${symbol} ${prefix}promote
${symbol} ${prefix}demote
${symbol} ${prefix}promoteall
${symbol} ${prefix}demoteall
${symbol} ${prefix}kick
${symbol} ${prefix}add
${symbol} ${prefix}sider
${symbol} ${prefix}resetlinkgc
${symbol} ${prefix}linkgc
${symbol} ${prefix}listonline
${symbol} ${prefix}leave
${symbol} ${prefix}opengc
${symbol} ${prefix}closegc
${symbol} ${prefix}tagall
${symbol} ${prefix}hidetag

 *STORE MENU* 
${symbol} ${prefix}sosmed
${symbol} ${prefix}pulsa
${symbol} ${prefix}dmff
${symbol} ${prefix}dmml
${symbol} ${prefix}dmpubg
${symbol} ${prefix}dmaov
${symbol} ${prefix}dmcodm
${symbol} ${prefix}dmsausageman
${symbol} ${prefix}dmhigsdomino
${symbol} ${prefix}dmdragonraja
${symbol} ${prefix}dmzepetto
${symbol} ${prefix}dmpoinkblank
${symbol} ${prefix}dmvalorant
${symbol} ${prefix}payment
${symbol} ${prefix}id
${symbol} ${prefix}sewabot

 *STICKER MENU* 
${symbol} ${prefix}attp
${symbol} ${prefix}ttp
${symbol} ${prefix}stiker
${symbol} ${prefix}doge
${symbol} ${prefix}patrick
${symbol} ${prefix}gawgura
${symbol} ${prefix}stickeranime

 *SEARCH MENU* 
${symbol} ${prefix}play
${symbol} ${prefix}ytsearch
${symbol} ${prefix}tiktokmusic
${symbol} ${prefix}pinterest

 *OTHER MENU* 
${symbol} ${prefix}sewabot
${symbol} ${prefix}donasi
${symbol} ${prefix}owner
${symbol} ${prefix}readmore
${symbol} ${prefix}bay
${symbol} ${prefix}selamatdatang
${symbol} ${prefix}groupbot
${symbol} ${prefix}runtime
${symbol} ${prefix}speed

 *OWNER MENU* 
${symbol} ${prefix}owner
${symbol} ${prefix}setsymbol
${symbol} ${prefix}bc
${symbol} ${prefix}upswteks
${symbol} ${prefix}upswsticker
${symbol} ${prefix}upswaudio
${symbol} ${prefix}upswvideo
${symbol} ${prefix}upswimage`
  but = [
{ buttonId: `.sewabot`, buttonText: { displayText: 'SEWA BOT' }, type: 1 },
{ buttonId: `.owner`, buttonText: { displayText: 'OWNER' }, type: 1 },
{ buttonId: `.storemenu`, buttonText: { displayText: 'HAGIA SHOP' }, type: 1 }
]
sendButLocation(from, teks, faketeks, thumb, but)
break

case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break

case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await kuza.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
kuza.sendMessage(from, options, text)
break



if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
	let evaled = await eval(budy.slice(2))
	if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
	reply(`${evaled}`)
} catch (err) {
	reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
	return kuza.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: fstatus })
} catch (err) {
	e = String(err)
	reply(e)
}
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}




