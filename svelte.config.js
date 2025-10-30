import adapterVercel from '@sveltejs/adapter-vercel';
import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

process.env.VITE_ADAPTER ??= 'node';

const adapterStaticConfigured = adapterStatic({
	fallback: 'index.html',
	pages: 'build-static',
	assets: 'build-static'
});

const adapterNodeConfigured = adapterNode({
	out: 'build-node'
});

const adapterVercelConfigured = adapterVercel();

if (process.env.VITE_ADAPTER === 'node') {
	process.env.PUBLIC_API_BASE = '';
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	// kit: {
	// 	adapter: adapterAuto(),
	// 	experimental: {
	// 		remoteFunctions: true
	// 	}
	// },
	// compilerOptions: {
	// 	experimental: {
	// 		async: true
	// 	}
	// },
	// vitePlugin: {
	// 	inspector: true
	// }
	// },
	kit: {
		experimental: {
			remoteFunctions: true
		},
		adapter:
			process.env.VITE_ADAPTER === 'vercel'
				? adapterVercelConfigured
				: process.env.VITE_ADAPTER === 'node'
					? adapterNodeConfigured
					: adapterStaticConfigured,
		...(process.env.VITE_ADAPTER !== 'vercel' && {
			outDir:
				process.env.VITE_ADAPTER === 'node' ? '.svelte-kit/build-node' : '.svelte-kit/build-static'
		})
	}
};

export default config;
