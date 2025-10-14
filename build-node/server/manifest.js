const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.ZafN3oSk.js",app:"_app/immutable/entry/app.BuIL_-jx.js",imports:["_app/immutable/entry/start.ZafN3oSk.js","_app/immutable/chunks/Oocps0ge.js","_app/immutable/chunks/CIVpFGfg.js","_app/immutable/entry/app.BuIL_-jx.js","_app/immutable/chunks/CR-C9glK.js","_app/immutable/chunks/CIVpFGfg.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Cve9s6do.js')),
			__memo(() => import('./chunks/1-DnYLv69o.js')),
			__memo(() => import('./chunks/2-DpH8IEps.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
