let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : (m.fromMe ? conn.user.jid : m.sender);
  let name = conn.getName(who);
  let mentionedUsername = `@${who.replace(/@.+/, '')}`; // اسم المستخدم المنشن

  let imgurl = 'https://telegra.ph/file/abe5472ce95c7356efb86.jpg'; // رابط الصورة
  let filename = 'imgerror.jpg'; // اسم الملف

  // رسالة مع التعديل المطلوب
  let msg = `*اهـلا ⌊ ${mentionedUsername} ⌉ انـا بـــيـبو • تـحـتـاج الـى مـسـاعـدة؟ ، اكـتـب﹙.اوامــر﹚*\n\n> *الـبـوت يـعـمـل فـي الـخـاص والـجـروبـات ويـمـنـع شـتـم الـبـوت لاي سـبـب*`;

  conn.sendButton(m.chat, str, '𝐸𝐿𝐴𝐾𝑅𝐸𝐵', videoUrl,[[``,``]], null,[[`المطور`,`https://wa.me/201028085788`],[`القناه`,`https://whatsapp.com/channel/0029VahbMZl4tRrkdpJrCv2f`]], m);
};

handler.customPrefix = /^(بيبو|bot|bebo)$/i;
handler.command = new RegExp;

export default handler;
