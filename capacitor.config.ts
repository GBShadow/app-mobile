import type { CapacitorConfig } from '@capacitor/cli';
import 'dotenv/config';

const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'app-mobile',
	webDir: 'build-static',
	server: {
		url:
			process.env.VITE_ADAPTER === 'vercel'
				? 'https://app-mobile-nine.vercel.app'
				: 'http://172.18.0.1:3000',
		// url: 'http://172.18.0.1:3000',
		cleartext: true
	},
	android: {
		buildOptions: {
			releaseType: 'APK',
			keystorePath: '/home/gbshadow/debug.keystore',
			keystorePassword: 'android',
			keystoreAlias: 'android',
			keystoreAliasPassword: 'android'
		}
	}
};

export default config;
