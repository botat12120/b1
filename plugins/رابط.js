Enter.gps رابط|let handler = async (m, { conn, groupMetadata }) => { 
  let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat)
  let messageText = `رابط المجموعة: *${groupMetadata.subject}*\n\n${link}`;
  let videoUrl = 'https://telegra.ph/file/afc96eee951d7c8d05d35.jpg';  // ضع هنا رابط الفيديو الذي تريده

  conn.reply(m.chat, `\n${messageText}`, m, { detectLink: true })
  
  conn.sendButton(
    m.chat, 
    `\n${messageText}`, 
    '𝐸𝐿𝐴𝐾𝑅𝐸𝐵', 
    videoUrl,
    [[]], 
    null,
    [
      ['المطور', 'https://wa.me/201028085788'],
      ['القناه', 'https://whatsapp.com/channel/0029VahbMZl4tRrkdpJrCv2f']
    ], 
    m
  );
};

handler.help = ['رابط']
handler.tags = ['group']
handler.command = ['لينك'] 
handler.group = true
handler.botAdmin = true

export default handler
