import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'apk') {
      if (!text) throw `*يـــجــب كـــتــابـة اســـم الـــتــطـبيق [❗]*`;

      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '*لـلأســـف مـــســاحـة الـــتــطـبيق كــبــيره [❗]*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text:'*لـلأســـف مـــســاحـة الـــتــطـبيق كــبــيره [❗]*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      );
    }
  } catch {
    throw `*يـــجــب كـــتــابـة اســـم الـــتــطـبيق [❗]*`;
  }
};

handler.command = /^apk/i;
export default handler;
