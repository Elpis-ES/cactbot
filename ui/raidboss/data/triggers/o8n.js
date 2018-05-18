// O8N - Sigmascape 4.0 Normal
[{
  zoneRegex: /^(Sigmascape \(V4\.0\)|Sigmascape V4\.0)$/,
  timelineFile: 'o8n.txt',
  triggers: [
    {
      id: 'O8N Hyper Drive',
      regex: /14:292E:Kefka starts using Hyper Drive on (\y{Name})/,
      regexDe: /14:292E:Kefka starts using Hyperantrieb on (\y{Name})/,
      regexFr: /14:292E:Kefka starts using Colonne De Feu on (\y{Name})/,
      alertText: function(data, matches) {
        if (matches[1] == data.me)
          return {
          en: 'Hyperdrive on YOU',
          fr: 'Colonne de feu sur VOUS',
          de: 'Hyperantrieb auf DIRS',
        };
        if (data.role == 'healer')
          return {
            en: 'Hyperdrive on ' + data.ShortName(matches[1]),
            fr: 'Colonne de feu on ' + data.ShortName(matches[1]),
            de: 'Hyperantrieb auf ' + data.ShortName(matches[1]),
          };
      },
      tts: function(data, matches) {
        if (matches[1] == data.me)
          return {
            en: 'buster',
            fr: 'Colonne de feu',
            de: 'hyperantrieb',
          };
      },
    },
    {
      id: 'O8N Shockwave',
      regex: /14:2927:Graven Image starts using Shockwave/,
      regexDe: /14:2927:Heilige Statue starts using Schockwelle/,
      regexFr: /14:2927:Statue Divine starts using Onde De Choc/,
      delaySeconds: 5,
      alertText: {
        en: 'Look for Knockback',
        fr: 'Se préparer à la projection',
        de: 'Auf Rückstoß achten',
      },
      tts: {
        en: 'knockback',
        fr: 'Projection depuis le boss',
        de: 'Rückstoß',
      },
    },
    {
      id: 'O8N Gravitational Wave',
      regex: /14:2929:Graven Image starts using Gravitational Wave/,
      regexDe: /14:2929:Heilige Statue starts using Gravitationswelle/,
      regexFr: /14:2929:Statue Divine starts using Onde Gravitationnelle/,
      alertText: {
        en: 'Get Right/East =>',
        fr: 'Aller à Droite/Est =>',
        de: 'Nach Rechts/Westen =>',
      },
      tts: {
        en: 'right',
        fr: 'Projection depuis le côté droit',
        de: 'rechts',
      },
    },
    {
      id: 'O8N Intemperate Will',
      regex: /14:292A:Graven Image starts using Intemperate Will/,
      regexDe: /14:292A:Heilige Statue starts using Unmäßiger Wille/,
      regexFr: /14:292A:Statue Divine starts using Volonté Intempérante/,
      alertText: {
        en: '<= Get Left/West',
        fr: '<= Aller à Gauche/Ouest',
        de: '<= Nach Links/Westen',
      },
      tts: {
        en: 'left',
        fr: 'Projection depuis le côté gauche',
        de: 'links',
      },
    },
    {
      id: 'O8N Ave Maria',
      regex: /14:292B:Graven Image starts using Ave Maria/,
      regexDe: /14:292B:Heilige Statue starts using Ave Maria/,
      regexFr: /14:292B:Statue Divine starts using Ave Maria/,
      alertText: {
        en: 'Look At Statue',
        fr: 'Regarder la statue',
        de: 'Statue anschauen',
      },
      tts: {
        en: 'look towards',
        fr: 'Regarder la statue',
        de: 'anschauen',
      },
    },
    {
      id: 'O8N Indolent Will',
      regex: /14:292C:Graven Image starts using Indolent Will/,
      regexDe: /14:292C:Heilige Statue starts using Träger Wille/,
      regexFr: /14:292C:Statue Divine starts using Volonté Indolente/,
      alertText: {
        en: 'Look Away From Statue',
        fr: 'Ne pas regarder la statue',
        de: 'Von Statue wegschauen',
      },
      tts: {
        en: 'look away',
        fr: 'Ne pas regarder la statue',
        de: 'weckschauen',
      },
    },
    {
      id: 'O8N Aero Assault',
      regex: /14:2924:Kefka starts using Aero Assault/,
      regexDe: /14:2924:Kefka starts using Wallendes Windga/,
      regexFr: /14:2924:Kefka starts using Méga Vent Véhément/,
      infoText: {
        en: 'Knockback on Boss',
        fr: 'Projection depuis le boss',
        de: 'Rückstoß vom Boss',
      },
      tts: {
        en: 'knockback on boss',
        fr: 'Projection depuis le boss',
        de: 'Rückstoß vom Boss',
      },
    },
    {
      id: 'O8N Flagrant Fire Single',
      regex: /1B:........:(\y{Name}):....:....:0017:0000:0000:0000:/,
      condition: function(data, matches) { return matches[1] == data.me; },
      infoText: {
        en: 'fire on YOU',
        fr: 'feu sur VOUS',
        de: 'Feuer auf DIR',
      },
      tts: {
        en: 'fire',
        fr: 'feu',
        de: 'Feuer',
      },
    },
    {
      id: 'O8N Flagrant Fire Stack',
      regex: /1B:........:(\y{Name}):....:....:003E:0000:0000:0000:/,
      alertText: function(data, matches) {
        return 'Stack on ' + data.ShortName(matches[1]);
      },
      tts: {
        en: 'stack',
        fr: 'stack',
        de: 'stek',
      },
    },
    {
      id: 'O8N Thrumming Thunder Real',
      regex: /14:291D:Kefka starts using Thrumming Thunder/,
      regexDe: /14:291D:Kefka starts using Brachiales Blitzga/,
      regexFr: /14:291D:Kefka starts using Méga Foudre Fourmillante/,
      suppressSeconds: 1,
      infoText: {
        en: 'True Thunder',
        fr: 'Vraie foudre',
        de: 'Wahrer Blitz',
      },
      tts: {
        en: 'True',
        fr: 'Vrai',
        de: 'Wahr',
      },
    },
    {
      id: 'O8N Thrumming Thunder Fake',
      regex: /14:291B:Kefka starts using Thrumming Thunder/,
      regexDe: /14:291B:Kefka starts using Brachiales Blitzga/,
      regexFr: /14:291B:Kefka starts using Méga Foudre Fourmillante/,
      suppressSeconds: 1,
      infoText: {
        en: 'Fake Thunder',
        fr: 'Fausse foudre',
        de: 'Falscher Blitz',
      },
      tts: {
        en: 'Fake',
        fr: 'Fausse',
        de: 'Falsch',
      },
    },
    {
      id: 'O8N Blizzard Fake Donut',
      regex: /14:2916:Kefka starts using Blizzard Blitz/,
      regexDe: /14:2916:Kefka starts using Erstarrendes Eisga/,
      regexFr: /14:2916:Kefka starts using Méga Glace Glissante/,
      suppressSeconds: 1,
      infoText: {
        en: 'Fake Ice: Get out',
        fr: 'Fausse glace: Sortir',
        de: 'Falsches Eis: Rausgehen',
      },
      tts: {
        en: 'Get out',
        fr: 'Sortir',
        de: 'Rausgehen',
      },
    },
    {
      id: 'O8N Blizzard True Donut',
      regex: /14:2919:Kefka starts using Blizzard Blitz/,
      regexDe: /14:2919:Kefka starts using Erstarrendes Eisga/,
      regexFr: /14:2919:Kefka starts using Méga Glace Glissante/,
      suppressSeconds: 1,
      infoText: 'True: Get In',
      tts: 'true',
    },
    {
      id: 'O8N Blizzard Fake Near',
      regex: /14:2914:Kefka starts using Blizzard Blitz/,
      regexDe: /14:2914:Kefka starts using Erstarrendes Eisga/,
      regexFr: /14:2914:Kefka starts using Méga Glace Glissante/,
      suppressSeconds: 1,
      infoText: {
        en: 'Fake Ice: Get in',
        fr: 'Fausse glace: Rentrer dedans',
        de: 'Falsches Eis: Reingehen',
      },
      tts: {
        en: 'Get in',
        fr: 'rentrer dedans',
        de: 'Reingehen',
      },
    },
    {
      id: 'O8N Blizzard True Near',
      regex: /14:2918:Kefka starts using Blizzard Blitz/,
      regexDe: /14:2918:Kefka starts using Erstarrendes Eisga/,
      regexFr: /14:2918:Kefka starts using Méga Glace Glissante/,
      suppressSeconds: 1,
      infoText: {
        en: 'True Ice: Get out',
        fr: 'Vraie glace: Sortir',
        de: 'Wahres Eis: Rausgehen',
      },
      tts: {
        en: 'Get out',
        fr: 'Sortir',
        de: 'Rausgehen',
      },
    },
  ],
  timelineReplace: [
    {
      locale: 'de',
      replaceSync: {
        'Graven Image': 'Heilige Statue',
        'Kefka': 'Kefka',
        'Light Of Consecration': 'Licht Der Weihe',
        'The Mad Head': 'Verrückter Kopf',
      },
      replaceText: {
        '--targetable--': '--anvisierbar--',
        '--untargetable--': '--nich anvisierbar--',
        'Engage!': 'Start!',
        'Enrage': 'Finalangriff',

        'Aero Assault': 'Wallendes Windga',
        'Blizzard Blitz': 'Erstarrendes Eisga',
        'Flagrant Fire': 'Flammendes Feuga',
        'Graven Image': 'Göttliche Statue',
        'Gravitas': 'Gravitas',
        'Holy Ascent': 'Heiliger Aufstieg',
        'Hyperdrive': 'Hyperantrieb',
        'Idyllic Will': 'Idyllischer Wille',
        'Indolent Will': 'Träger Wille',
        'Indomitable Will': 'Unzähmbarer Wille',
        'Indulgent Will': 'Nachsichtiger Wille',
        'Inexorable Will': 'Unerbittlicher Wille',
        'Intemperate Will': 'Unmäßiger Wille',
        'Light Of Judgment': 'Licht Des Urteils',
        'Mana Charge': 'Mana-Aufladung',
        'Mana Release': 'Mana-Entladung',
        'Pulse Wave': 'Pulswelle',
        'Revolting Ruin': 'Revoltierendes Ruinga',
        'Shockwave': 'Schockwelle',
        'Thrumming Thunder': 'Brachiales Blitzga',
        'Timely Teleport': 'Turbulenter Teleport',
        'Ultima Upsurge': 'Ultima-Wallung',
        'Vitrophyre': 'Vitrophyr',
        'Wave Cannon': 'Wellenkanone',

        'All Things Ending': 'Ende Aller Dinge',
        'Blizzard III': 'Eisga',
        'Celestriad': 'Dreigestirn',
        'Explosion': 'Explosion',
        'Fire III': 'Feuga',
        'Forsaken': 'Verloren',
        "Future's End": "Ende Der Hoffnung",
        'Futures Numbered': 'Ende Des Lebens',
        'Gravitational Wave': 'Gravitationswelle',
        'Heartless Angel': 'Herzloser Engel',
        'Heartless Archangel': 'Herzloser Erzengel',
        'Hyperdrive': 'Hyperantrieb',
        'Idyllic Will': 'Idyllischer Wille',
        'Indulgent Will': 'Nachsichtiger Wille',
        'Light Of Judgment': 'Licht Des Urteils',
        'Meteor': 'Meteo',
        'Pasts Forgotten': 'Ende Des Schlummers',
        'Pulse Wave': 'Pulswelle',
        'Starstrafe': 'Sternentanz',
        'The Path Of Light': 'Pfad Des Lichts',
        'Thunder III': 'Blitzga',
        'Trine': 'Trine',
        'Ultima': 'Ultima',
        'Ultimate Embrace': 'Ultima-Umarmung',
        'Wings Of Destruction': 'Vernichtungsschwinge',
      },
    },
    {
      locale: 'fr',
      replaceSync: {
        'Graven Image': 'Statue Divine',
        'Kefka': 'Kefka',
        'Light Of Consecration': 'Lumière De La Consécration',
        'The Mad Head': 'Visage De La Folie',
        'The limit gauge resets!': 'La jauge de Transcendance a été réinitialisée.',
      },
      replaceText: {
        "Engage!": "À l'attaque",
        '--Reset--': '--Réinitialisation--',
        '--sync--': '--synchronisation--',
        '--targetable--': '--ciblable--',
        '--untargetable--': '--impossible à cibler--',
        'Enrage': 'Enragement',

        'Aero Assault': 'Méga Vent Véhément',
        'Blizzard Blitz': 'Méga Glace Glissante',
        'Flagrant Fire': 'Méga Feu Faufilant',
        'Graven Image': 'Statue Divine',
        'Gravitas': 'Tir Gravitationnel',
        'Holy Ascent': 'Ascension Sacrée',
        'Hyperdrive': 'Colonne De Feu',
        'Idyllic Will': 'Volonté Idyllique',
        'Indolent Will': 'Volonté Indolente',
        'Indomitable Will': 'Volonté Indomptable',
        'Indulgent Will': 'Volonté Indulgente',
        'Inexorable Will': 'Volonté Inexorable',
        'Intemperate Will': 'Volonté Intempérante',
        'Light Of Judgment': 'Triade Guerrière',
        'Mana Charge': 'Concentration De Mana',
        'Mana Release': 'Décharge De Mana',
        'Pulse Wave': 'Pulsation Spirituelle',
        'Revolting Ruin': 'Méga Ruine Ravageuse',
        'Shockwave': 'Onde De Choc',
        'Thrumming Thunder': 'Méga Foudre Fourmillante',
        'Timely Teleport': 'Téléportation Turbulente',
        'Ultima Upsurge': 'Ultima Ulcérante',
        'Vitrophyre': 'Vitrophyre',
        'Wave Cannon': 'Canon Plasma',

        'Blizzard+Thunder': 'Méga Glace + Méga Foudre',
        'Half Arena': "Moitié d'arène",
        'Statue Gaze': 'Regard statue',

        'All Things Ending': 'Fin De Toutes Choses',
        'Blizzard III': 'Méga Glace',
        'Celestriad': 'Tristella',
        'Explosion': 'Explosion',
        'Fire III': 'Méga Feu',
        'Forsaken': 'Cataclysme',
        "Future's End": "Fin Du Futur",
        'Futures Numbered': 'Ruine Du Futur',
        'Gravitational Wave': 'Onde Gravitationnelle',
        'Heartless Angel': 'Ange Sans Cœur',
        'Heartless Archangel': 'Archange Sans Cœur',
        'Hyperdrive': 'Colonne De Feu',
        'Idyllic Will': 'Volonté Idyllique',
        'Indulgent Will': 'Volonté Indulgente',
        'Light Of Judgment': 'Triade Guerrière',
        'Meteor': 'Météore',
        'Pasts Forgotten': 'Ruine Du Passé',
        'Pulse Wave': 'Pulsation Spirituelle',
        'Starstrafe': 'Fou Dansant',
        'The Path Of Light': 'Voie De Lumière',
        'Thunder III': 'Méga Foudre',
        'Trine': 'Trine',
        'Trine (big)': 'Trine (grand)',
        'Trine (small)': 'Trine (petit)',
        'Ultima': 'Ultima',
        'Ultimate Embrace': 'Étreinte Fatidique',
        'Wings Of Destruction': 'Aile De La Destruction',

        'Soak': 'Absorber',
        'Past/Future': 'Passé/Futur',
        'Past/Future End': 'Passé/Fin du futur',
        'Knockback Tethers': 'Liens de projection',
        'Sleep/Confuse Tethers': 'Liens de Sommeil/Confusion',
        'Statue Half Cleave': 'Demi clivage de la statue',
      },
    },
  ]
}]
