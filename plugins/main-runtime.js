import displayLoadingScreen from '../lib/loading.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let pp = 'https://i.postimg.cc/RZq1xhzD/bubba.jpg'
  await displayLoadingScreen(conn, m.chat)
  let _muptime
  if (process.send) {
    process.send('uptime')
    _muptime =
      (await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      })) * 1000
  }
  let muptime = clockString(_muptime)
  let str = `𝕭𝖚𝖇𝖇𝖆-Ai \n\n${muptime}`
  conn.sendMessage(m.chat, {
    text: str,
    contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: false,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363178281296360@newsletter',
        newsletterName: global.author,
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: '𝕭𝖚𝖇𝖇𝖆-Ai',
        body: 'BOT MADE BY JEFF',
        thumbnailUrl: pp,
        sourceUrl: 'https://www.instagram.com/vfxartist_jeff?igsh=MXF0eWRoYXMzbDdsOQ==',
        mediaType: 1,
        renderLargerThumbnail: false,
      },
    },
  })
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = ['runtime', 'uptime']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}
