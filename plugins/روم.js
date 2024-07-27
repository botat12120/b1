let handler = async (m, { conn, args, usedPrefix, command }) => {
  const pp ='https://telegra.ph/file/3dacacfc87f805433e551.png'
  const fakecontact = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': '𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
  let isClose = { // Switch Case Like :v
      'فتح': 'not_announcement',
      'قفل': 'announcement',
  }[(args[0] || '')]
  if (isClose === undefined)
      return conn.sendButton(
      m.chat,
      'اخـتـر', 
      '𝘽𝙔:𝗕𝗢𝗧 𝗘𝗟𝗔𝗞𝗥𝗔𝗕 ',
      pp,
      [
        ['open group ', `${usedPrefix + command} فتح`],
        ['close group ', `${usedPrefix + command} قفل`]
      ], null, 
      m
    );
  await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open/close*']
handler.tags = ['group']
handler.command = ['group', 'روم','room'] 
handler.admin = true
handler.botAdmin = true

export default handler
