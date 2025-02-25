interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '东坪山吴彦祖的跑步世界',
  siteUrl: 'https://adongtt.github.io/adong',
  logo: 'https://uk.weika.live/github.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://adongtt.github.io/adong',
    },
    {
      name: 'About',
      url: 'https://adongtt.github.io/adong',
    },
  ],
};

export default data;
