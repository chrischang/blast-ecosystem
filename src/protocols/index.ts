/**
 * Add new categories as needed to this enum for classification purposes.
 */
export enum Category {
  NFTFI = 'NFTFI',
  Gaming = 'Gaming',
  Social = 'Social',
  DEX = 'DEX',
  PerpDEX = 'PerpDEX',
  RWA = 'RWA',
  GambleFi = 'GambleFi',
}

export type Protocol = {
  logoPath: string;
  url: string;
  name: string;
  category: Category;
  twitterUrl: string;
};

const protocols: Protocol[] = [
  {
    name: 'MetaStreet',
    url: 'https://metastreet.xyz',
    logoPath: 'logos/metastreet.png',
    category: Category.NFTFI,
    twitterUrl: 'https://twitter.com/metastreetxyz',
  },
  {
    name: 'Wasabi',
    url: 'https://www.wasabi.xyz',
    logoPath: 'logos/wasabi.jpeg',
    category: Category.NFTFI,
    twitterUrl: 'https://twitter.com/wasabi_protocol',
  },
  {
    name: 'nftperp',
    url: 'https://nftperp.xyz',
    logoPath: 'logos/nftperp.jpeg',
    category: Category.NFTFI,
    twitterUrl: 'https://twitter.com/nftperp',
  },
  {
    name: 'Cambria',
    url: 'https://cambria.gg',
    logoPath: 'logos/cambria.png',
    category: Category.Gaming,
    twitterUrl: 'https://twitter.com/playdegenarena',
  },
  {
    name: 'PugLife',
    url: 'https://www.puglife.io',
    logoPath: 'logos/puglife.jpeg',
    category: Category.Gaming,
    twitterUrl: 'https://twitter.com/PugLifeGame',
  },
  {
    name: 'SuperBlurBattlerz',
    url: 'https://blurbattlerz.io',
    logoPath: 'logos/super_blur_battlerz.jpeg',
    category: Category.Gaming,
    twitterUrl: 'https://twitter.com/sbbattlerz',
  },
  {
    name: 'Captain & Company',
    url: 'https://capnco.gg/',
    logoPath: 'logos/captain_and_company.jpeg',
    category: Category.Gaming,
    twitterUrl: 'https://twitter.com/capncompany',
  },
  {
    name: 'Fantasy',
    url: 'https://www.fantasy.top',
    logoPath: 'logos/fantasy_top.jpeg',
    category: Category.Social,
    twitterUrl: 'https://twitter.com/fantasy_top_',
  },
  {
    name: 'DistrictOne',
    url: 'https://districtone.io',
    logoPath: 'logos/districtone.jpeg',
    category: Category.Social,
    twitterUrl: 'https://twitter.com/DistrictOneIO',
  },
  {
    name: 'Thruster',
    url: 'https://thruster.finance',
    logoPath: 'logos/thruster.jpeg',
    category: Category.DEX,
    twitterUrl: 'https://twitter.com/ThrusterFi',
  },
  {
    name: 'Blaster Swap',
    url: 'https://blasterswap.com',
    logoPath: 'logos/blasterswap.jpeg',
    category: Category.DEX,
    twitterUrl: 'https://twitter.com/blasterswap',
  },
  {
    name: 'Ambient',
    url: 'https://blast.ambient.finance/',
    logoPath: 'logos/ambient.png',
    category: Category.DEX,
    twitterUrl: 'https://twitter.com/ambient_finance',
  },
  {
    name: 'Bebop',
    url: 'https://bebop.xyz/',
    logoPath: 'logos/bebop.png',
    category: Category.DEX,
    twitterUrl: 'https://twitter.com/bebop_dex',
  },
  {
    name: 'Ring Protocol',
    url: 'https://ring.exchange',
    logoPath: 'logos/ringprotocol.jpeg',
    category: Category.DEX,
    twitterUrl: 'https://twitter.com/protocolring',
  },
  {
    name: 'Bladeswap',
    url: 'https://bladeswap.xyz',
    logoPath: 'logos/Bladeswap.png',
    category: Category.DEX,
    twitterUrl: 'https://twitter.com/bladeswapxyz',
  },
  {
    name: '100x',
    url: 'https://100x.finance/',
    logoPath: 'logos/100x.jpeg',
    category: Category.PerpDEX,
    twitterUrl: 'https://twitter.com/100xfinance',
  },
  {
    name: 'Particle',
    url: 'https://www.particle.trade/',
    logoPath: 'logos/particle.png',
    category: Category.PerpDEX,
    twitterUrl: 'https://twitter.com/particle_trade',
  },
  {
    name: 'Kettle',
    url: 'https://app.kettle.fi/',
    logoPath: 'logos/kettle.png',
    category: Category.RWA,
    twitterUrl: 'https://twitter.com/KettleFinance',
  },
  {
    name: 'Decentral Games',
    url: 'https://decentral.games/casino',
    logoPath: 'logos/decentral_games.jpeg',
    category: Category.GambleFi,
    twitterUrl: 'https://twitter.com/decentralgames',
  },
  {
    name: 'BetBIG',
    url: 'https://betbig.gg/',
    logoPath: 'logos/betbig.jpeg',
    category: Category.GambleFi,
    twitterUrl: 'https://twitter.com/BetBIG_gg',
  },
  {
    name: 'IKB',
    url: 'https://ikb.gg/',
    logoPath: 'logos/ikb.jpeg',
    category: Category.GambleFi,
    twitterUrl: 'https://twitter.com/ikbdotgg',
  },
  {
    name: 'Dwarf Battles',
    url: 'https://www.dwarfbattles.xyz/',
    logoPath: 'logos/dwarfbattles.jpeg',
    category: Category.Gaming,
    twitterUrl: 'https://twitter.com/DwarfBattles',
  },
];

export { protocols };
