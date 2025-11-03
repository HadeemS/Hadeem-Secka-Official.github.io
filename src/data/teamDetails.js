export const TEAM_DETAILS = {
  'atlanta-falcons': {
    name: 'Atlanta Falcons',
    subtitle: 'Home: Mercedes-Benz Stadium • Head Coach: Raheem Morris • Division: NFC South',
    heroImage: 'images/falconsbackground.jpg',
    heroAlt: 'Atlanta Falcons at Mercedes-Benz Stadium',
    crest: 'images/falconslogo.png',
    newsIntro: 'Latest stories, recaps, and updates from Mercedes-Benz Stadium.',
    stats: [
      { label: 'Record', value: '3-2' },
      { label: 'Points For', value: '21.3 (avg)' },
      { label: 'Points Against', value: '17.3 (avg)' },
      { label: 'Form', value: 'L L W W W (last 5)' }
    ],
    roster: [
      'QB — Michael Penix Jr',
      'WR — Drake London',
      'RB — Bijan Robinson',
      'LB — Kaden Ellis',
      'CB — A.J. Terrell'
    ],
    news: [
      {
        image: 'images/penix.jpg',
        alt: 'Falcons quarterback scanning the field',
        title: 'Late surge seals third straight win',
        description: 'Defense and ball control carry Atlanta across the line in a gritty fourth-quarter finish.',
        cta: { label: 'Read more', url: '/news' }
      },
      {
        image: 'images/falconsfans.jpg',
        alt: 'Falcons fans celebrating in the stands',
        title: 'Film room: third-down packages clicking',
        description: 'Breaking down the looks that kept drives alive and bled the clock.',
        cta: { label: 'Analysis', url: '#' }
      },
      {
        image: 'images/falcons-presser.png',
        alt: 'Coach at Falcons press conference',
        title: 'Coach updates injury list ahead of road test',
        description: 'Key starters trend upward as Atlanta prepares for a physical matchup.',
        cta: { label: 'Injury report', url: '#' }
      }
    ]
  },
  'atlanta-hawks': {
    name: 'Atlanta Hawks',
    subtitle: 'Home: State Farm Arena • Head Coach: Quinn Snyder • Conference: Eastern',
    heroImage: 'images/hawksred.png',
    heroAlt: 'Atlanta Hawks at State Farm Arena',
    crest: 'images/hawks.png',
    newsIntro: 'Updates and features from State Farm Arena.',
    stats: [
      { label: 'Record', value: '21-34' },
      { label: 'Points For', value: '123.2 (avg)' },
      { label: 'Points Against', value: '126.3 (avg)' },
      { label: 'Form', value: 'W W W L L (last 5)' }
    ],
    roster: [
      'G — Trae Young',
      'G — Luke Kennard',
      'F — Dyson Daniels',
      'F — Zachary Rissacher',
      'C — Kristaps Porzingis'
    ],
    news: [
      {
        image: 'images/hawksfans.jpg',
        alt: 'Hawks supporters in the away section',
        title: 'Road reset: lineup tweaks on deck',
        description: 'Rotation changes aim to stabilize defense ahead of a tough swing.',
        cta: { label: 'Read more', url: '/news' }
      },
      {
        image: 'images/hawkstraining.png',
        alt: 'Hawks huddle before tip',
        title: 'Set-piece sets: baseline out-of-bounds',
        description: 'New wrinkles produce clean looks in late-clock situations.',
        cta: { label: 'Tactics', url: '#' }
      },
      {
        image: 'images/Hawksinjury.png',
        alt: 'Hawks coach speaking to media',
        title: 'Injury update ahead of home stand',
        description: 'Two starters near returns as rotations tighten.',
        cta: { label: 'Press notes', url: '#' }
      }
    ]
  },
  'manchester-united': {
    name: 'Manchester United',
    subtitle: 'Home: Old Trafford • Manager: Ruben Amorim • League Position: 7th',
    heroImage: 'images/united.png',
    heroAlt: 'Old Trafford stadium at night',
    crest: 'images/united.png',
    newsIntro: 'Headlines and match notes from Old Trafford.',
    stats: [
      { label: 'Record', value: '3-3' },
      { label: 'Goals For', value: '2.2 (avg)' },
      { label: 'Goals Against', value: '2.0 (avg)' },
      { label: 'Form', value: 'W L W L W (last 5)' }
    ],
    roster: [
      'Forward — Benjamin Sesko',
      'Midfielder — Bruno Fernandes',
      'Defender — Harry Maguire',
      'Goalkeeper — Tom Heaton'
    ],
    news: [
      {
        image: 'images/amad.jpg',
        alt: 'United winger attacking space',
        title: 'United holds on late to edge rivals',
        description: 'Composed defending in stoppage time preserves a vital one-goal lead.',
        cta: { label: 'Read more', url: '/news' }
      },
      {
        image: 'images/united-youth.png',
        alt: 'Manchester United training session',
        title: 'Youth injects tempo in midfield',
        description: 'Academy products push the pace as the side targets quicker transitions.',
        cta: { label: 'Training ground', url: '#' }
      },
      {
        image: 'images/rubenamorim.png',
        alt: 'Manchester United press conference',
        title: 'Manager addresses fixture congestion',
        description: 'Rotations and recovery protocols set for a demanding run-in.',
        cta: { label: 'Press notes', url: '#' }
      }
    ]
  }
}
