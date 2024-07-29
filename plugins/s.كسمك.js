import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn }) => {
  if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0

  let nombre = '⏐ 𝐵𝛩𝑇 𝐸𝐋𝐴𝐊𝑅𝐴𝐁'
  let nombre2 = '𝐸𝐋𝐴𝐊𝑅𝐄𝐁'
  const s = [
    'https://telegra.ph/file/784a05acc195cdb35ca29.jpg',
  ]

  let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
  setTimeout(() => {
    conn.sendFile(m.chat, stiker, null, { asSticker: true })
  }, 0000) // تاخير 5 ثواني
}

handler.customPrefix = /كسمك/i
handler.command = new RegExp
handler.exp = 50

export default handler
