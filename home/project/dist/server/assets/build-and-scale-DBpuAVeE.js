import { t as FadeIn } from "./FadeIn-DxJc9HZu.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
//#region src/routes/build-and-scale.tsx?tsr-split=component
var SERVICES = [
	{
		key: "build",
		label: "BUILD",
		heading: ["Build your", "Foundation"],
		body: "Craft a brand voice that resonates. Develop messaging frameworks that convert. Create content strategies that scale.",
		bullets: [
			"Brand Voice Development",
			"Messaging Architecture",
			"Content Strategy"
		]
	},
	{
		key: "attract",
		label: "ATTRACT",
		heading: ["Attract the", "Right Audience"],
		body: "Reach the people already looking for you. Position your brand where attention lives and pull ideal customers in.",
		bullets: [
			"Audience Research",
			"Channel Strategy",
			"Magnetic Content"
		]
	},
	{
		key: "convert",
		label: "CONVERT",
		heading: ["Convert Clicks", "into Customers"],
		body: "Turn attention into action. Landing pages, funnels and copy engineered to move browsers to buyers.",
		bullets: [
			"Conversion Copywriting",
			"Landing Page Design",
			"A/B Testing"
		]
	},
	{
		key: "scale",
		label: "SCALE",
		heading: ["Scale Without", "the Growing Pains"],
		body: "Systems and automation that grow with you. Multiply output without multiplying headcount or chaos.",
		bullets: [
			"Marketing Automation",
			"AI Workflows",
			"Performance Optimisation"
		]
	}
];
function BuildAndScalePage() {
	const [active, setActive] = useState("build");
	const service = SERVICES.find((s) => s.key === active);
	return /* @__PURE__ */ jsx("main", {
		className: "pt-28 md:pt-36",
		children: /* @__PURE__ */ jsx("section", {
			className: "px-5 pb-24 md:px-10",
			"aria-label": "Build and Scale services",
			children: /* @__PURE__ */ jsxs(FadeIn, {
				className: "mx-auto max-w-7xl text-center",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-5xl font-bold tracking-tight text-purple md:text-7xl",
						children: "BUILD & SCALE"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-lg md:text-xl",
						children: "From foundation to domination — we've got you covered"
					}),
					/* @__PURE__ */ jsx("div", {
						role: "tablist",
						"aria-label": "Service areas",
						className: "mt-10 flex flex-wrap justify-center gap-3",
						children: SERVICES.map((s) => /* @__PURE__ */ jsx("button", {
							role: "tab",
							id: `bs-tab-${s.key}`,
							"aria-selected": active === s.key,
							"aria-controls": `bs-panel-${s.key}`,
							onClick: () => setActive(s.key),
							className: `rounded-full px-7 py-3 text-sm font-bold tracking-widest transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral ${active === s.key ? "bg-gradient-to-r from-coral to-purple text-white" : "bg-indigo-2 text-grey hover:text-white"}`,
							children: s.label
						}, s.key))
					}),
					/* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ jsxs(motion.div, {
							id: `bs-panel-${active}`,
							role: "tabpanel",
							"aria-labelledby": `bs-tab-${active}`,
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -16
							},
							transition: {
								duration: .35,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "mx-auto mt-14 max-w-3xl rounded-3xl border border-indigo-2 bg-indigo-2/30 p-8 text-left md:p-12",
							children: [
								/* @__PURE__ */ jsxs("h2", {
									className: "text-4xl font-bold leading-tight md:text-5xl",
									children: [
										service.heading[0],
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-purple",
											children: service.heading[1]
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-5 text-lg leading-relaxed text-white/90",
									children: service.body
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "mt-7 space-y-3",
									children: service.bullets.map((b) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-3 text-lg",
										children: [/* @__PURE__ */ jsx("svg", {
											width: "20",
											height: "20",
											viewBox: "0 0 24 24",
											fill: "none",
											"aria-hidden": "true",
											className: "shrink-0 text-purple",
											children: /* @__PURE__ */ jsx("path", {
												d: "M4 12h14m0 0-6-6m6 6-6 6",
												stroke: "currentColor",
												strokeWidth: "2.5",
												strokeLinecap: "round",
												strokeLinejoin: "round"
											})
										}), b]
									}, b))
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: "/get-in-touch",
									className: "mt-9 inline-flex items-center gap-3 rounded-full border-2 border-coral px-8 py-3 text-sm font-bold tracking-widest transition-colors duration-200 hover:bg-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-indigo",
									children: ["GET IN TOUCH", /* @__PURE__ */ jsx("svg", {
										width: "18",
										height: "18",
										viewBox: "0 0 24 24",
										fill: "none",
										"aria-hidden": "true",
										className: "text-coral",
										children: /* @__PURE__ */ jsx("path", {
											d: "M4 12h14m0 0-6-6m6 6-6 6",
											stroke: "currentColor",
											strokeWidth: "2.5",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										})
									})]
								})
							]
						}, active)
					})
				]
			})
		})
	});
}
//#endregion
export { BuildAndScalePage as component };
