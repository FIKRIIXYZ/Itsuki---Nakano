import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    
    let fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6282127487538-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Halo", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./media/ok.jpg')
               }
           }
       }
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let scnya = ` 𝑯𝒂𝒍𝒍𝒐 ${tag} 𝑴𝒂𝒖 𝑺𝒆𝒘𝒂 𝑩𝒐𝒕 𝒀𝒂?`
    let footerny = `╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _5k/grup (1 minggu)_
┊⫹⫺ *Normal:* _10k/grup (1 bulan)_
┊⫹⫺ *Standar:* _20k/grup (2 bulan)_
┊⫹⫺ *Pro:* _40k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _60k/grup (12 bulan)_
╰═┅═━––––––๑
*⫹⫺ PAYMENT*
***DANA: 082123019956*
*GOPAY: 082123019956*
***PULSA: 082123019956*
📮 𝑺&𝑲
🗣️: 𝑲𝒂𝒌, 𝑲𝒐𝒌 𝒉𝒂𝒓𝒈𝒂𝒏𝒚𝒂 𝒎𝒂𝒉𝒂𝒍 𝒃𝒂𝒏𝒈𝒆𝒕?
💬: 𝑴𝒂𝒖 𝒕𝒂𝒘𝒂𝒓 𝒎𝒆𝒏𝒂𝒘𝒂𝒓? 𝒃𝒐𝒍𝒆𝒉, 𝒔𝒊𝒍𝒂𝒉𝒌𝒂𝒏 𝒄𝒉𝒂𝒕 𝒐𝒘𝒏𝒆𝒓 𝒂𝒋𝒂
`
 conn.sendButtonImg(m.chat, `https://telegra.ph/file/ca99960e961e46b14fc58.jpg`, scnya, footerny, 'Owner', '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://chat.whatsapp.com/DQImxkVI5Z84mUrNO5LzFx',
    mediaType: 2, 
    description: sgc,
    title: "𝑱𝒐𝒊𝒏 𝑺𝒊𝒏𝒊 𝑩𝒂𝒏𝒉",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^(sewa(bot)?

export default handler


function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Kak 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
