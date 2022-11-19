import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let ok = 'https://telegra.ph/file/87e0f536e407058772234.png'
let stiker = await sticker(false, ok, global.packname, global.author)
  conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}

handler.customPrefix = /^(.jadibot)$/i
handler.command = new RegExp

export default handler
