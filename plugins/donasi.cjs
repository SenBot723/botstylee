var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [082314858723]
│ • DANA [082314858723]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282314858723
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
