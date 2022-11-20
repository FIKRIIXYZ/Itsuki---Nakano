import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let ok = 'https://telegra.ph/file/ecff08d75ae5e689aa184.jpg'
let stiker = await sticker(false, ok, global.packname, global.author)
  conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}

handler.customPrefix = /^(thanks)$/i
handler.command = new RegExp

export default handler
