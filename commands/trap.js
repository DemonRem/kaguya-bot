const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const { UserAgent } = require('../config.json')

module.exports = {
    name: 'trap',
    aliases: ['futa'],
    description: 'Send Random Trap Image',
    cooldown: 2,
    async execute(client, message, args) {
        if (!message.channel.nsfw) {
            message.channel.send('This command only can be execute on nsfw channel!')
        } else {
            axios.get('https://api.computerfreaker.cf/v1/trap', { headers: { 'User-Agent': `${UserAgent}`} } )
            .then((res) => {
            const embed = new MessageEmbed()
            .setImage(res.data.url)
            .setColor('BLUE')
            .setTimestamp()
            .setFooter('Random Trap')

            message.channel.send(embed)
            })
        }
    }

}