'use strict';

// O8N - Sigmascape 4.0 Normal
[{
  zoneId: ZoneId.SigmascapeV40,
  timelineFile: 'o8n.txt',
  triggers: [
    {
      id: 'O8N Hyper Drive',
      netRegex: NetRegexes.startsUsing({ id: '292E', source: 'Kefka' }),
      netRegexDe: NetRegexes.startsUsing({ id: '292E', source: 'Kefka' }),
      netRegexFr: NetRegexes.startsUsing({ id: '292E', source: 'Kefka' }),
      netRegexJa: NetRegexes.startsUsing({ id: '292E', source: 'ケフカ' }),
      netRegexCn: NetRegexes.startsUsing({ id: '292E', source: '凯夫卡' }),
      netRegexKo: NetRegexes.startsUsing({ id: '292E', source: '케프카' }),
      alertText: function(data, matches) {
        if (matches.target == data.me) {
          return {
            en: 'Hyperdrive on YOU',
            fr: 'Colonne de feu sur VOUS',
            de: 'Hyperantrieb auf DIR',
            cn: '死刑点名',
            ko: '하이퍼드라이브 대상자',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Hyperdrive on ' + data.ShortName(matches.target),
            fr: 'Colonne de feu sur ' + data.ShortName(matches.target),
            de: 'Hyperantrieb auf ' + data.ShortName(matches.target),
            cn: '死刑点名' + data.ShortName(matches.target),
            ko: '"' + data.ShortName(matches.target) + '" 하이퍼드라이브',
          };
        }
      },
      tts: function(data, matches) {
        if (matches.target == data.me) {
          return {
            en: 'buster',
            fr: 'Colonne de feu',
            de: 'hyperantrieb',
            cn: '死刑',
            ko: '탱버',
          };
        }
      },
    },
    {
      id: 'O8N Shockwave',
      netRegex: NetRegexes.startsUsing({ id: '2927', source: 'Graven Image', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2927', source: 'Heilig(?:e|er|es|en) Statue', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2927', source: 'Statue Divine', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2927', source: '神々の像', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2927', source: '众神之像', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2927', source: '신들의 상', capture: false }),
      delaySeconds: 5,
      response: Responses.knockback(),
    },
    {
      id: 'O8N Gravitational Wave',
      netRegex: NetRegexes.startsUsing({ id: '2929', source: 'Graven Image', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2929', source: 'Heilig(?:e|er|es|en) Statue', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2929', source: 'Statue Divine', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2929', source: '神々の像', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2929', source: '众神之像', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2929', source: '신들의 상', capture: false }),
      response: Responses.goEast(),
    },
    {
      id: 'O8N Intemperate Will',
      netRegex: NetRegexes.startsUsing({ id: '292A', source: 'Graven Image', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '292A', source: 'Heilig(?:e|er|es|en) Statue', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '292A', source: 'Statue Divine', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '292A', source: '神々の像', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '292A', source: '众神之像', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '292A', source: '신들의 상', capture: false }),
      response: Responses.goWest(),
    },
    {
      id: 'O8N Ave Maria',
      netRegex: NetRegexes.startsUsing({ id: '292B', source: 'Graven Image', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '292B', source: 'Heilig(?:e|er|es|en) Statue', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '292B', source: 'Statue Divine', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '292B', source: '神々の像', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '292B', source: '众神之像', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '292B', source: '신들의 상', capture: false }),
      alertText: {
        en: 'Look At Statue',
        fr: 'Regardez la statue',
        de: 'Statue anschauen',
        cn: '面对神像',
        ko: '시선 바라보기',
      },
      tts: {
        en: 'look towards',
        fr: 'Regardez la statue',
        de: 'anschauen',
        cn: '面对神像',
        ko: '쳐다보기',
      },
    },
    {
      id: 'O8N Indolent Will',
      netRegex: NetRegexes.startsUsing({ id: '292C', source: 'Graven Image', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '292C', source: 'Heilig(?:e|er|es|en) Statue', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '292C', source: 'Statue Divine', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '292C', source: '神々の像', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '292C', source: '众神之像', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '292C', source: '신들의 상', capture: false }),
      alertText: {
        en: 'Look Away From Statue',
        fr: 'Ne regardez pas la statue',
        de: 'Von Statue wegschauen',
        cn: '背对神像',
        ko: '시선 피하기',
      },
      tts: {
        en: 'look away',
        fr: 'Ne regardez pas la statue',
        de: 'weckschauen',
        cn: '背对神像',
        ko: '뒤돌기',
      },
    },
    {
      id: 'O8N Aero Assault',
      netRegex: NetRegexes.startsUsing({ id: '2924', source: 'Kefka', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2924', source: 'Kefka', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2924', source: 'Kefka', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2924', source: 'ケフカ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2924', source: '凯夫卡', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2924', source: '케프카', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'O8N Flagrant Fire Single',
      netRegex: NetRegexes.headMarker({ id: '0017' }),
      condition: function(data, matches) {
        return matches.target == data.me;
      },
      infoText: {
        en: 'fire on YOU',
        fr: 'Feu sur VOUS',
        de: 'Feuer auf DIR',
        cn: '火点名',
      },
      tts: {
        en: 'fire',
        fr: 'feu',
        de: 'Feuer',
        cn: '火',
      },
    },
    {
      id: 'O8N Flagrant Fire Stack',
      netRegex: NetRegexes.headMarker({ id: '003E' }),
      response: Responses.stackOn(),
    },
    {
      id: 'O8N Thrumming Thunder Real',
      netRegex: NetRegexes.startsUsing({ id: '291D', source: 'Kefka', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '291D', source: 'Kefka', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '291D', source: 'Kefka', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '291D', source: 'ケフカ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '291D', source: '凯夫卡', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '291D', source: '케프카', capture: false }),
      suppressSeconds: 1,
      infoText: {
        en: 'True Thunder',
        fr: 'Vraie foudre',
        de: 'Wahrer Blitz',
        cn: '真雷',
        ko: '진실 선더가',
      },
      tts: {
        en: 'True',
        fr: 'Vrai',
        de: 'Wahr',
        cn: '真',
        ko: '진실',
      },
    },
    {
      id: 'O8N Thrumming Thunder Fake',
      netRegex: NetRegexes.startsUsing({ id: '291B', source: 'Kefka', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '291B', source: 'Kefka', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '291B', source: 'Kefka', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '291B', source: 'ケフカ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '291B', source: '凯夫卡', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '291B', source: '케프카', capture: false }),
      suppressSeconds: 1,
      infoText: {
        en: 'Fake Thunder',
        fr: 'Fausse foudre',
        de: 'Falscher Blitz',
        cn: '假雷',
        ko: '거짓 선더가',
      },
      tts: {
        en: 'Fake',
        fr: 'Fausse',
        de: 'Falsch',
        cn: '假',
        ko: '거짓',
      },
    },
    {
      id: 'O8N Blizzard Fake Donut',
      netRegex: NetRegexes.startsUsing({ id: '2916', source: 'Kefka', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2916', source: 'Kefka', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2916', source: 'Kefka', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2916', source: 'ケフカ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2916', source: '凯夫卡', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2916', source: '케프카', capture: false }),
      suppressSeconds: 1,
      infoText: {
        en: 'Fake Ice: Get out',
        fr: 'Fausse glace : Sortez',
        de: 'Falsches Eis: Rausgehen',
        cn: '假冰：远离',
        ko: '거짓 블리자가: 밖으로',
      },
      tts: {
        en: 'Get out',
        fr: 'Sortez',
        de: 'Rausgehen',
        cn: '远离',
        ko: '밖으로',
      },
    },
    {
      id: 'O8N Blizzard True Donut',
      netRegex: NetRegexes.startsUsing({ id: '2919', source: 'Kefka', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2919', source: 'Kefka', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2919', source: 'Kefka', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2919', source: 'ケフカ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2919', source: '凯夫卡', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2919', source: '케프카', capture: false }),
      suppressSeconds: 1,
      infoText: {
        en: 'True Ice: Get in',
        fr: 'Vraie glace: Rentrez dedans',
        de: 'Wahre Eis: Reingehen',
        cn: '真冰：靠近',
        ko: '진실 블리자가: 안으로',
      },
      tts: {
        en: 'Get in',
        fr: 'rentrez dedans',
        de: 'Reingehen',
        cn: '靠近',
        ko: '안으로',
      },
    },
    {
      id: 'O8N Blizzard Fake Near',
      netRegex: NetRegexes.startsUsing({ id: '2914', source: 'Kefka', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2914', source: 'Kefka', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2914', source: 'Kefka', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2914', source: 'ケフカ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2914', source: '凯夫卡', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2914', source: '케프카', capture: false }),
      suppressSeconds: 1,
      infoText: {
        en: 'Fake Ice: Get in',
        fr: 'Fausse glace: Rentrez dedans',
        de: 'Falsches Eis: Reingehen',
        cn: '假冰：靠近',
        ko: '거짓 블리자가: 안으로',
      },
      tts: {
        en: 'Get in',
        fr: 'rentrez dedans',
        de: 'Reingehen',
        cn: '靠近',
        ko: '안으로',
      },
    },
    {
      id: 'O8N Blizzard True Near',
      netRegex: NetRegexes.startsUsing({ id: '2918', source: 'Kefka', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2918', source: 'Kefka', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2918', source: 'Kefka', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2918', source: 'ケフカ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2918', source: '凯夫卡', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2918', source: '케프카', capture: false }),
      suppressSeconds: 1,
      infoText: {
        en: 'True Ice: Get out',
        fr: 'Vraie glace: Sortez',
        de: 'Wahres Eis: Rausgehen',
        cn: '真冰：远离',
        ko: '진실 블리자가: 밖으로',
      },
      tts: {
        en: 'Get out',
        fr: 'Sortez',
        de: 'raus da',
        cn: '远离',
        ko: '밖으로',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Destroy! Destroy! Destroy! I will destroy it all!': 'Nichts wird mir standhalten, nichts! Alles will ich vernichten!',
        'Graven Image': 'heilig(?:e|er|es|en) Statue',
        'Kefka': 'Kefka',
      },
      'replaceText': {
        'Aero Assault': 'Wallendes Windga',
        'Aero/Ruin': 'Wind/Ruin',
        'Blizzard Blitz': 'Erstarrendes Eisga',
        'Flagrant Fire': 'Flammendes Feuga',
        'Graven Image': 'Göttliche Statue',
        'Half Arena': 'Halbe Arena',
        'Hyperdrive': 'Hyperantrieb',
        'Shockwave': 'Schockwelle',
        'Statue Gaze': 'Statuenblick',
        'Thrumming Thunder': 'Brachiales Blitzga',
        'Timely Teleport': 'Turbulenter Teleport',
        'Ultima Upsurge': 'Ultima-Wallung',
        'Wave Cannon': 'Wellenkanone',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Graven Image': 'Statue divine',
        'Kefka': 'Kefka',
      },
      'replaceText': {
        'Aero Assault': 'Méga Vent véhément',
        'Aero/Ruin': 'Vent/Ruine',
        'Blizzard Blitz': 'Méga Glace glissante',
        'Flagrant Fire': 'Méga Feu faufilant',
        'Graven Image': 'Statue divine',
        'Half Arena': 'Moitié d\'arène',
        'Hyperdrive': 'Colonne de feu',
        'Shockwave': 'Onde de choc',
        'Statue Gaze': 'Regard de statue',
        'Thrumming Thunder': 'Méga Foudre fourmillante',
        'Timely Teleport': 'Téléportation turbulente',
        'Ultima Upsurge': 'Ultima ulcérante',
        'Wave Cannon': 'Canon plasma',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Graven Image': '神々の像',
        'Kefka': 'ケフカ',
      },
      'replaceText': {
        'Aero Assault': 'ずんずんエアロガ',
        'Blizzard Blitz': 'ぐるぐるブリザガ',
        'Flagrant Fire': 'めらめらファイガ',
        'Graven Image': '神々の像',
        'Hyperdrive': 'ハイパードライブ',
        'Shockwave': '衝撃波',
        'Thrumming Thunder': 'もりもりサンダガ',
        'Timely Teleport': 'ぶっとびテレポ',
        'Ultima Upsurge': 'どきどきアルテマ',
        'Wave Cannon': '波動砲',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Destroy! Destroy! Destroy! I will destroy it all!': '我要破坏一切！破坏！破坏！破坏！',
        'Graven Image': '众神之像',
        'Kefka': '凯夫卡',
      },
      'replaceText': {
        'Aero Assault': '疼飕飕暴风',
        'Aero/Ruin': '暴风/毁荡',
        'Blizzard Blitz': '滴溜溜冰封',
        'Flagrant Fire': '呼啦啦爆炎',
        'Graven Image': '众神之像',
        'Half Arena': '半场',
        'Hyperdrive': '超驱动',
        'Shockwave': '冲击波',
        'Statue Gaze': '神像视线',
        'Thrumming Thunder': '劈啪啪暴雷',
        'Timely Teleport': '跳蹦蹦传送',
        'Ultima Upsurge': '扑腾腾究极',
        'Wave Cannon': '波动炮',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Graven Image': '신들의 상',
        'Kefka': '케프카',
      },
      'replaceText': {
        'Aero Assault': '갈기갈기 에어로가',
        'Blizzard Blitz': '빙글빙글 블리자가',
        'Flagrant Fire': '이글이글 파이가',
        'Graven Image': '신들의 상',
        'Hyperdrive': '하이퍼드라이브',
        'Shockwave': '충격파',
        'Thrumming Thunder': '찌릿찌릿 선더가',
        'Timely Teleport': '껑충껑충 텔레포',
        'Ultima Upsurge': '두근두근 알테마',
        'Wave Cannon': '파동포',
      },
    },
  ],
}];
