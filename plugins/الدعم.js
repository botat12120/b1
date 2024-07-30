import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/anime-naruto.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendButton(m.chat, `

*اخــتـر مـن تـحـت*

*『 ️اتفضل قائمه بسورس البوت 』*
╯────────────────⟢ـ
* ️مــنـــصـاتـي 
╯────────────────⟢ـ
* ️نـقـابـة واتـسـاب
╯────────────────⟢ـ
*╯────────────────⟢ـ* `, '𝐸𝐿𝐴𝐾𝑅𝐸𝐵', haha, [[``,``]], null, [
  [`الـمـطـور`, `https://wa.me/201028085788`],
  [`قـنـاتـي`, `https://whatsapp.com/channel/0029VahbMZl4tRrkdpJrCv2f`],
  [`مــنـصـاتـي`, `https://atom.bio/elakrabelyotyobr`]], m)
}
handler.command = handler.help = ['دعم','الدعم']
handler.tags = ['Elakreb']
export default handler
