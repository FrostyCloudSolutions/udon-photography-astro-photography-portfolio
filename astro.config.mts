import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://rockem.github.io',
	base: 'astro-photography-portfolio',
	vite: {
		plugins: [tailwindcss()],
	},
});


// import { defineConfig } from 'astro/config';
// import tailwindcss from '@tailwindcss/vite';

// // https://astro.build/config
// export default defineConfig({
//   site: 'https://udon-photography.pages.dev',
//   base: '/',
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });

