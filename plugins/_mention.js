let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://raw.githubusercontent.com/thearju/A17/master/Assets/audio/AUD-20240709-WA0272.mp3"
    let url = "https://www.instagram.com/vfxartist_jeff?utm_source=qr&igsh=MXF0eWRoYXMzbDdsOQ=="
    let murl = "https://www.instagram.com/vfxartist_jeff?utm_source=qr&igsh=MXF0eWRoYXMzbDdsOQ=="
    let hash = global.botname
    let img = "https://i.postimg.cc/RZq1xhzD/bubba.jpg"
    let num = "917090462940"
    // https://github.com/thearju/A17/blob/master/Assets/audio/AUD-20240709-WA0272.mp3  [ishko thora sa badalna tha jeff bhai]
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,0,0,0,0,0,0],
        fileName: "Legend",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: `‎‎Hello! ${m.name}`,
          body: "𝕭𝖚𝖇𝖇𝖆",
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 1,
          mediaUrl: murl,
          renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };

    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler
