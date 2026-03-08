const mineflayer = require('mineflayer')

const botArgs = {
    host: 'propvps.falixsrv.me',
    port: 25565,
    username: 'ALKRKY_99',
    version: '1.21.1'
}

function createBot() {
    const bot = mineflayer.createBot(botArgs)

    bot.on('login', () => {
        console.log('Success: ALKRKY_99 joined the server!')
    })

    bot.on('end', () => {
        console.log('Disconnected. Reconnecting in 5 seconds...')
        setTimeout(createBot, 5000)
    })

    bot.on('error', (err) => {
        console.log('Error: ', err)
    })
}

createBot()
