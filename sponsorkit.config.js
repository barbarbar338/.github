import { defineConfig, presets } from "sponsorkit"

export default defineConfig({
	width: 800,
	formats: ["json", "svg", "png"],
	github: {
		login: "barbarbar338",
		type: "user",
	},
	tiers: [
		{
			title: "Backers",
			preset: presets.base,
		},
		{
			title: "Sponsors",
			monthlyDollars: 5,
			preset: presets.medium,
		},
		{
			title: "Dedicated Sponsors",
			monthlyDollars: 10,
			preset: presets.large,
		},
		{
			title: "Lovers",
			monthlyDollars: 25,
			preset: presets.xl,
		},
	],
})
