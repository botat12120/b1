let handler = m => m;
handler.all = async function (m) {
  let chat = global.db.data.chats[m.chat];

  if (/^احا|احااا$/i.test(m.text)) {
    let vn =  'https://qu.ax/ruSl.wav' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }

  if (/^الجن|جن$/i.test(m.text)) {
    let vn =  'https://qu.ax/RQOw' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^غني$/i.test(m.text)) {
    let vn =     'https://qu.ax/QNEy.m4a'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
 if (/^🙂|🙂🙂|🙂🙂🙂🙂$/i.test(m.text)) {
    let vn =     'https://qu.ax/cAEc.m4a'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
 if (/قالو اي|خولات|خول^$/i.test(m.text)) {
    let vn =     'https://qu.ax/hWVk.m4a'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }

 if (/^غدر الصحاب$/i.test(m.text)) {
    let vn =     'https://qu.ax/tGyz.m4a'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
 if (/^بحبك|حبك|احبك$/i.test(m.text)) {
    let vn =     'https://qu.ax/ozZE.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
 if (/^المطور|المالك|مطور$/i.test(m.text)) {
    let vn =     'https://qu.ax/zNZN.m4a'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
 if (/^ مين معايا|مين$/i.test(m.text)) {
    let vn =     'https://qu.ax/benC.m4a'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
 }
  if (/^سبحانه$/i.test(m.text)) {
    let vn =  'https://qu.ax/nGFt.mp3' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^علاوي$/i.test(m.text)) {
    let vn =  'https://qu.ax/vXcL.mp3' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^دانس$/i.test(m.text)) {
    let vn =  'https://qu.ax/NDrj.m4a' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype: 'audio/mpeg' , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^ههههههههههه|😂😂😂😂😂😂😂😂|ضحك$/i.test(m.text)) {
    let vn =  'https://qu.ax/PFyy.wav' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }

  if (/^بضاني$/i.test(m.text)) {
    let vn = 'https://qu.ax/oOd';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype: 'audio/mpeg', fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^تبتبتينينثن$/i.test(m.text)) {
    let vn = 'https://qu.a';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype: 'audio/mpeg', fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^نو ريب$/i.test(m.text)) {
    let vn =  'https://qu.ax/pSra' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^انا الادمن|هات رول|رول$/i.test(m.text)) {
    let vn =   'https://qu.ax/pEbX'  ;
    conn.sendPresenceUpdate(  'recording'  , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:   'audio/mpeg'  , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^راب فشيخ$/i.test(m.text)) {
    let vn =    'https://qu.ax/MGGw'   ;
    conn.sendPresenceUpdate(   'recording'   , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:    'audio/mpeg'   , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^اهلا|منور$/i.test(m.text)) {
    let vn =     'https://qu.ax/cuo.m4a'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
    if (/^سامو عليكو|السلام عليكم|سمو عليكو/i.test(m.text)) {
    let vn =     'https://qu.ax/LASb.wav'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^الغزاله$/i.test(m.text)) {
    let vn =     'https://qu.ax/nlVt'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^نا هنام|هنام$/i.test(m.text)) {
    let vn =     'https://qu.ax/OJjK'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^ربنا يسمحك$/i.test(m.text)) {
    let vn =     'https://qu.ax/cZJu'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }
  if (/^خخ|خخخ|خخخخ|خخخخخخخ|خخخخخخ$/i.test(m.text)) {
    let vn =     'https://qu.ax/YYHr'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `Elakreb_2024.opp` }, { quoted: m });
  }


  return !0;
};
export default handler;
