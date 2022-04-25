/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	testDir: './tests',
	reporter: 'html',
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000
	},
	use: {
		headless: true,
		baseURL: 'http://localhost:3000/',
		trace: 'on'
	}
};

export default config;
