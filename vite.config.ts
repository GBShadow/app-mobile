import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import svgSprite from 'rollup-plugin-stdf-icon';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		devtoolsJson(),
		svgSprite([
			// { inFile: 'src/lib/svgs/Heroicons', outFile: 'static/symbols' },
		])
	]
});
