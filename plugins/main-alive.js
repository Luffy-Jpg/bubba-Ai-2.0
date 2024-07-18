let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://cdn.jsdelivr.net/gh/Guru322/GURU-BOT@main/Assets/mp3/Alive.mp3'
  let url = 'https://www.instagram.com/vfxartist_jeff?igsh=MXF0eWRoYXMzbDdsOQ=='
  let murl = 'https://www.instagram.com/vfxartist_jeff?igsh=MXF0eWRoYXMzbDdsOQ=='
  let img = 'https://i.postimg.cc/RZq1xhzD/bubba.jpg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: '𝕭𝖚𝖇𝖇𝖆-Ai',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'I AM ALIVE',
        body: '𝕭𝖚𝖇𝖇𝖆-Ai',
        thumbnailUrl: img,
        sourceUrl: 'https://www.instagram.com/vfxartist_jeff?igsh=MXF0eWRoYXMzbDdsOQ==',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
