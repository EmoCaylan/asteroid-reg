const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
          var taglı = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes("✫")).size;//tagınız
          var toplamüye = message.guild.memberCount
          var online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size
          var Sesli = message.guild.members.cache.filter(s => s.voice.channel).size;
          var boost = message.guild.premiumSubscriptionCount
          var boostlevel = message.guild.premiumTier
          const embed = new MessageEmbed()
              .setColor('BLACK')
              .setDescription(`\`>\` Sunucuda **${toplamüye}** adet üye var.
\`>\` Şu anda toplam **${Sesli}** kişi seslide.
\`>\` Toplamda **${taglı}** kişi tagımızı alarak bizi desteklemiş.
\`>\` Sunucuda **${boost}** Takviye Bulunmaktadır ( **${boostlevel}**. Seviye)`)
          message.channel.send(embed)
};//Justice Tarafından Yapılmıştır
exports.config = {
    name: "say",
    guildOnly: true,
    aliases: [],
    cooldown: 3000
};
