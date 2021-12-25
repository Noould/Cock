module.exports = {
    app: {
        px: '!',
        token: 'OTIzNzc2MDc4NzYwMjcxODcy.YcU7hA.iCfb-NbXJWFmz5k1DD1uXmCncK4',
        playing: 'type !help'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
