/**
 * Add new categories as needed to this enum for classification purposes.
 */
export enum Category {
  NFTFI = 'NFTFI',
  Gaming = 'Gaming',
  Social = 'Social',
  DEX = 'DEX',
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
    url: 'https://twitter.com/sbbattlerz',
    logoPath: 'logos/super_blur_battlerz.jpeg',
    category: Category.Gaming,
    twitterUrl: 'https://twitter.com/sbbattlerz',
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
    name: 'Ambient',
    url: 'https://blast.ambient.finance/',
    logoPath: 'logos/ambient.png',
    category: Category.DEX,
    twitterUrl: 'https://twitter.com/ambient_finance',
  }
];

export { protocols };
