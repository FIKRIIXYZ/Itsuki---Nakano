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
    let footerny = `╭━━━━「 𝙃𝙖𝙧𝙜𝙖 𝙎𝙚𝙬𝙖 」
┊⫹⫺ 𝟭 𝙈𝙞𝙣𝙜𝙜𝙪 𝟱𝙆
┊⫹⫺ 𝟭 𝘽𝙪𝙡𝙖𝙣 𝟭𝟬𝙆
┊⫹⫺ 𝟮 𝘽𝙪𝙡𝙖𝙣 𝟮𝟬𝙆
┊⫹⫺ 𝙋𝙚𝙧𝙢𝙖𝙣𝙚𝙣𝙩 𝟯𝟱𝙆                                                  
╰═┅═━––––––๑

╭━━━━「 𝙃𝙖𝙧𝙜𝙖 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 」
┊⫹⫺𝟭 𝙈𝙞𝙣𝙜𝙜𝙪 𝟱𝙆
┊⫹⫺𝟭 𝘽𝙪𝙡𝙖𝙣 𝟭𝟬𝙆
┊⫹⫺ 𝙋𝙚𝙧𝙢𝙖𝙣𝙚𝙣𝙩 𝟮𝟱𝙆
╰═┅═━––––––๑

╭━━━━「 𝙅𝘼𝘿𝙄 𝘽𝙊𝙏 + 𝙊𝙒𝙉𝙀𝙍 」
┊⫹⫺Minat Wa.me/6281515980491
╰═┅═━––––––๑
*⫹⫺ PAYMENT*
*DANA: 083128555829*
*GOPAY: 083128555829*
📮 𝑺&𝑲
🗣️: 𝑲𝒂𝒌, 𝑲𝒐𝒌 𝒉𝒂𝒓𝒈𝒂𝒏𝒚𝒂 𝒎𝒂𝒉𝒂𝒍 𝒃𝒂𝒏𝒈𝒆𝒕?
💬: 𝑴𝒂𝒖 𝒕𝒂𝒘𝒂𝒓 𝒎𝒆𝒏𝒂𝒘𝒂𝒓? 𝒃𝒐𝒍𝒆𝒉, 𝒔𝒊𝒍𝒂𝒉𝒌𝒂𝒏 𝒄𝒉𝒂𝒕 𝒐𝒘𝒏𝒆𝒓 𝒂𝒋𝒂
`
 conn.send2ButtonImg(m.chat, `https://telegra.ph/file/b93564b61dbcf69f42496.jpg`, scnya, footerny, 'Owner', '.owner','Menu', '.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
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
handler.help = ['sewabot', 'premium']
handler.tags = ['info']
handler.command = /^(sewa(bot)?|premium)$/i

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
