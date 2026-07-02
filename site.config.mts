// import type { AstroInstance } from 'astro';
// import { Github, Instagram } from 'lucide-astro';

// export interface SocialLink {
// 	name: string;
// 	url: string;
// 	icon: AstroInstance;
// }

// export default {
// 	title: 'SR',
// 	favicon: 'favicon.ico',
// 	owner: 'Sara Richard',
// 	profileImage: 'profile.webp',
// 	socialLinks: [
// 		{
// 			name: 'GitHub',
// 			url: 'https://github.com/rockem/astro-photography-portfolio',
// 			icon: Github,
// 		} as SocialLink,
// 		{
// 			name: 'Instagram',
// 			url: 'https://www.instagram.com',
// 			icon: Instagram,
// 		} as SocialLink,
// 	],
// };


import type { AstroInstance } from 'astro';
import { Instagram, Facebook } from 'lucide-astro';

export interface SocialLink {
  name: string;
  url: string;
  icon: AstroInstance;
}

export default {
  title: 'Udon Photography',
  favicon: 'favicon.ico',
  owner: 'Udon',
  profileImage: 'profile.webp',
  socialLinks: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/udonphotography',
      icon: Instagram,
    } as SocialLink,
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/udonphotography',
      icon: Facebook,
    } as SocialLink,
  ],
};