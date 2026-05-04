import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "NickTerty's Blog",
	subtitle: "Be better",
	themeColor: {
		hue: 30, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
		forceDarkMode: false, // Force dark mode and hide the light/dark switcher
	},
	banner: {
		enable: true,
		src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed
			url: "https://www.pixiv.net/artworks/122782209", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		   {
		     src: '/favicon/icon.webp',
		//   theme: 'light',
		//   sizes: '32x32',
		   }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Series,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "osu! profile",
			url: "https://osu.ppy.sh/users/17847990", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		/*
		{
			name: "Travelling",
			url: "https://www.travellings.cn/train.html",
			external: true,
		},
		*/
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/' 原assets/images/demo-avatar.png,可选https://q2.qlogo.cn/headimg_dl?dst_uin=189563385&spec=0
	name: "NickTerty",
	bio: "A university student majoring in Appled Mathematics.",
	links: [
		{
			name: "Twitter(X)",
			icon: "fa6-brands:x-twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://x.com/NickTerty",
		},
		{
			name: "Twitch",
			icon: "fa6-brands:twitch",
			url: "https://www.twitch.tv/nickterty",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/NickTerty",
		},
		/*
		{
			name: "开往",
			icon: "fa6-solid:train-subway",
			url: "https://www.travellings.cn/train.html",
		},*/
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
