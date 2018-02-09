
const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready',() => {
    bot.user.setPresence({game: {name: 'Dragonica'}});
    console.log('Bot ready !');
});

bot.login('NDExMTA0Njk3NzAxNjI5OTYy.DV7vTg.2yNr8TTW5-c0v9_Xx8ncUSnF6ZY')

bot.on('message', message => {
    if (message.content === "!infoguerrier"){
            var guerrier_embed = new Discord.RichEmbed()
             .setColor('#B9121B')
             .setTitle("Information sur la Classe Guerrier:")
             .setDescription(" - Attaque                        ★★★                                                                                                                                      - Défense                      ★★★★                                                                                                                                  - Vitesse D'Attaque     ★★★                                                                                                                                  - Portée D'Attaque       ★★★                                                                                                                                  - Force Physique        ★★★★★                                                                                                                                  - Puissance Magique      ★★")
             .addField("Arbre d'évolution du Guerrier:","Niv.1     |              Guerrier              |                                                                                                                                  Niv.20 |  Gladiateur  | Chevalier |                                                                                                                                  Niv.40 |  Myrmidon  |   Paladin   |                                                                                                                                  Niv.60 | Destructeur |   Dragon   |")
        message.channel.sendEmbed(guerrier_embed);
         //message.channel.sendMessage("Voici les informations sur la classe Guerrier:");
        console.log('ping pong');
    }
});

bot.on('message', message => {
    if (message.content === "!infoarcher"){
        var archer_embed = new Discord.RichEmbed()
         .setColor('#01CD18')
         .setTitle("Information sur la Classe Archer:")
         .setDescription(" - Attaque                        ★★★                                                                                                                                      - Défense                      ★★★★                                                                                                                                  - Vitesse D'Attaque  ★★★★★                                                                                                                                - Portée D'Attaque    ★★★★★                                                                                                                                - Force Physique            ★★★                                                                                                                                    - Puissance Magique      ★★")
         .addField("Arbre d'évolution de l'Archer:","Niv.1     |                  Archer                  |                                                                                                                                  Niv.20 |   Eclaireur   |   Albaletrier   |                                                                                                                                  Niv.40 |    Ranger    |    Grenadier    |                                                                                                                                  Niv.60 |  Sentinelle  |  Commando  |")
    message.channel.sendEmbed(archer_embed);
        //message.channel.sendMessage("Voici les informations sur la classe Archer:");
    console.log('ping pong');
    }
});

bot.on('message', message => {
    if (message.content === "!infovoleur"){
        var voleur_embed = new Discord.RichEmbed()
         .setColor('#9201BC')
         .setTitle("Information sur la Classe Voleur:")
         .setDescription(" - Attaque                       ★★★★                                                                                                                                      - Défense                        ★★★                                                                                                                                  - Vitesse D'Attaque    ★★★★                                                                                                                                 - Portée D'Attaque    ★★★★★                                                                                                                                - Force Physique            ★★★                                                                                                                                    - Puissance Magique      ★★")
         .addField("Arbre d'évolution du Voleur:","Niv.1     |                   Voleur                   |                                                                                                                                  Niv.20 |    Assassin    |    Acrobate    |                                                                                                                                  Niv.40 |       Ninja       |     Arlequin     |                                                                                                                                  Niv.60 |      Ombre      |    Voltigeur    |")
    message.channel.sendEmbed(voleur_embed);
        //message.channel.sendMessage("Voici les informations sur la classe Archer:");
    console.log('ping pong');
    }
});

bot.on('message', message => {
    if (message.content === "!infovoleur"){
        var voleur_embed = new Discord.RichEmbed()
         .setColor('#9201BC')
         .setTitle("Information sur la Classe Voleur:")
         .setDescription(" - Attaque                       ★★★★                                                                                                                                      - Défense                        ★★★                                                                                                                                  - Vitesse D'Attaque    ★★★★                                                                                                                                 - Portée D'Attaque    ★★★★★                                                                                                                                - Force Physique            ★★★                                                                                                                                    - Puissance Magique      ★★")
         .addField("Arbre d'évolution du Voleur:","Niv.1     |                   Voleur                   |                                                                                                                                  Niv.20 |    Assassin    |    Acrobate    |                                                                                                                                  Niv.40 |       Ninja       |     Arlequin     |                                                                                                                                  Niv.60 |      Ombre      |    Voltigeur    |")
    message.channel.sendEmbed(voleur_embed);
        //message.channel.sendMessage("Voici les informations sur la classe Archer:");
    console.log('ping pong');
    }
});

bot.on('message', message => {
    if (message.content === "!infomagicien"){
        var magicien_embed = new Discord.RichEmbed()
         .setColor('#01CCB1')
         .setTitle("Information sur la Classe Magicien:")
         .setDescription(" - Attaque                          ★★★                                                                                                                                      - Défense                        ★★★★                                                                                                                                  - Vitesse D'Attaque       ★★★                                                                                                                                 - Portée D'Attaque       ★★★★                                                                                                                                - Force Physique             ★★★                                                                                                                                    - Puissance Magique    ★★★★")
         .addField("Arbre d'évolution du Magicien:","Niv.1     |                  Magicien                  |                                                                                                                                  Niv.20 |        Moine       |        Mage       |                                                                                                                                  Niv.40 |        Prêtre       |   Archimage   |                                                                                                                                  Niv.60 |       Oracle       |     Arcaniste    |")
    message.channel.sendEmbed(magicien_embed);
        //message.channel.sendMessage("Voici les informations sur la classe Archer:");
    console.log('ping pong');
    }
});
