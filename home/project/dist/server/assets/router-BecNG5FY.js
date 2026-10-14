import { useEffect, useRef, useState } from "react";
import { HeadContent, Link, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/styles.css?url
var styles_default = "/assets/styles-BvVLs17z.css";
//#endregion
//#region src/components/Logo.tsx
var LOGO_URL = "https://res.cloudinary.com/lafaaku5/image/upload/v1791879037/hp9flfj7ca8pmzqzuxlz.png";
function Logo({ compact = false }) {
	return /* @__PURE__ */ jsx(Link, {
		to: "/",
		"aria-label": "D2 Media — home",
		className: "flex items-center gap-2 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded",
		children: /* @__PURE__ */ jsx("img", {
			src: LOGO_URL,
			alt: "D2 Media",
			width: compact ? 90 : 120,
			height: compact ? 30 : 40,
			className: compact ? "h-8 w-auto" : "h-10 w-auto"
		})
	});
}
//#endregion
//#region src/components/SiteHeader.tsx
var NAV = [{
	to: "/d2-dna",
	label: "D2 DNA"
}, {
	to: "/build-and-scale",
	label: "BUILD & SCALE"
}];
function SiteHeader() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-indigo/90 backdrop-blur-md" : "bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-6",
			children: [
				/* @__PURE__ */ jsx(Logo, {}),
				/* @__PURE__ */ jsxs("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-10 md:flex",
					children: [NAV.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						className: `text-base font-bold tracking-widest transition-colors duration-200 hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded px-1 py-1 ${pathname === item.to ? "text-purple" : "text-white"}`,
						children: item.label
					}, item.to)), /* @__PURE__ */ jsxs(Link, {
						to: "/get-in-touch",
						className: "group inline-flex items-center gap-3 rounded-full border-2 border-coral px-7 py-3 text-base font-bold tracking-widest text-white transition-colors duration-200 hover:bg-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-indigo",
						children: ["GET IN TOUCH", /* @__PURE__ */ jsx("svg", {
							width: "22",
							height: "22",
							viewBox: "0 0 24 24",
							fill: "none",
							"aria-hidden": "true",
							className: "text-coral transition-colors duration-200 group-hover:text-white",
							children: /* @__PURE__ */ jsx("path", {
								d: "M4 12h14m0 0-6-6m6 6-6 6",
								stroke: "currentColor",
								strokeWidth: "2.5",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})]
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					className: "flex h-11 w-11 items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-coral md:hidden",
					children: /* @__PURE__ */ jsx("svg", {
						width: "28",
						height: "28",
						viewBox: "0 0 24 24",
						fill: "none",
						"aria-hidden": "true",
						children: open ? /* @__PURE__ */ jsx("path", {
							d: "M6 6l12 12M18 6 6 18",
							stroke: "currentColor",
							strokeWidth: "2.5",
							strokeLinecap: "round"
						}) : /* @__PURE__ */ jsx("path", {
							d: "M4 7h16M4 12h16M4 17h16",
							stroke: "currentColor",
							strokeWidth: "2.5",
							strokeLinecap: "round"
						})
					})
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: `overflow-hidden bg-indigo transition-[max-height] duration-300 md:hidden ${open ? "max-h-80 border-t border-indigo-2" : "max-h-0"}`,
			children: /* @__PURE__ */ jsxs("nav", {
				"aria-label": "Mobile",
				className: "flex flex-col gap-1 px-6 py-4",
				children: [NAV.map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					className: `rounded px-3 py-3 text-lg font-bold tracking-widest transition-colors hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral ${pathname === item.to ? "text-purple" : "text-white"}`,
					children: item.label
				}, item.to)), /* @__PURE__ */ jsxs(Link, {
					to: "/get-in-touch",
					className: "mt-2 inline-flex items-center justify-center gap-3 rounded-full border-2 border-coral px-6 py-3 text-lg font-bold tracking-widest transition-colors hover:bg-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-coral",
					children: ["GET IN TOUCH", /* @__PURE__ */ jsx("svg", {
						width: "22",
						height: "22",
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
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/SiteFooter.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-indigo-2 bg-indigo",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-10",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/",
						"aria-label": "D2 Media — home",
						className: "inline-flex items-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-coral",
						children: /* @__PURE__ */ jsx("img", {
							src: "https://res.cloudinary.com/lafaaku5/image/upload/v1791879037/hp9flfj7ca8pmzqzuxlz.png",
							alt: "D2 Media",
							width: 120,
							height: 40,
							className: "h-10 w-auto"
						})
					}), /* @__PURE__ */ jsxs("address", {
						className: "space-y-3 not-italic text-base leading-relaxed text-grey",
						children: [
							/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("span", {
								className: "font-bold text-white",
								children: "A:"
							}), " Port Melbourne VIC 3207"] }),
							/* @__PURE__ */ jsxs("p", { children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-bold text-white",
									children: "E:"
								}),
								" ",
								/* @__PURE__ */ jsx("a", {
									href: "mailto:info@d2media.com.au",
									className: "underline decoration-purple underline-offset-4 transition-colors hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded",
									children: "info@d2media.com.au"
								})
							] }),
							/* @__PURE__ */ jsx("p", { children: "ABN 95 021 305 460" })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					"aria-label": "Footer",
					className: "space-y-3 text-base font-bold tracking-widest md:justify-self-center",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/d2-dna",
							className: "block w-fit rounded py-1 transition-colors hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral",
							children: "D2 DNA"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/build-and-scale",
							className: "block w-fit rounded py-1 transition-colors hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral",
							children: "BUILD & SCALE"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/get-in-touch",
							className: "block w-fit rounded py-1 transition-colors hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral",
							children: "FAQ"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-4 text-base font-bold tracking-widest md:justify-self-end",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-grey",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-grey",
							children: "Terms and Conditions"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-5 pt-2",
							children: [/* @__PURE__ */ jsx("a", {
								href: "https://www.facebook.com",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "D2 Media on Facebook",
								className: "rounded text-white transition-colors hover:text-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-coral",
								children: /* @__PURE__ */ jsx("svg", {
									width: "24",
									height: "24",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									"aria-hidden": "true",
									children: /* @__PURE__ */ jsx("path", { d: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3V14h2.8v8h3.4Z" })
								})
							}), /* @__PURE__ */ jsx("a", {
								href: "https://www.linkedin.com",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "D2 Media on LinkedIn",
								className: "rounded text-white transition-colors hover:text-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-coral",
								children: /* @__PURE__ */ jsx("svg", {
									width: "24",
									height: "24",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									"aria-hidden": "true",
									children: /* @__PURE__ */ jsx("path", { d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.2 8h4.6v14H.2V8Zm7.6 0h4.4v1.9h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V22h-4.6v-6.6c0-1.6 0-3.6-2.2-3.6s-2.6 1.7-2.6 3.5V22H7.8V8Z" })
								})
							})]
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region src/components/CustomCursor.tsx
function CustomCursor() {
	const dotRef = useRef(null);
	const ringRef = useRef(null);
	useEffect(() => {
		const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!fine || reduced) return;
		document.body.classList.add("cursor-enabled");
		const dot = dotRef.current;
		const ring = ringRef.current;
		if (!dot || !ring) return;
		dot.style.opacity = "1";
		ring.style.opacity = "1";
		let mx = -100;
		let my = -100;
		let rx = -100;
		let ry = -100;
		let raf = 0;
		const onMove = (e) => {
			mx = e.clientX;
			my = e.clientY;
			dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
			const interactive = !!e.target?.closest("a, button, [role=\"button\"], input, textarea, select, label");
			ring.style.width = interactive ? "52px" : "36px";
			ring.style.height = interactive ? "52px" : "36px";
		};
		const loop = () => {
			rx += (mx - rx) * .16;
			ry += (my - ry) * .16;
			const size = ring.offsetWidth / 2;
			ring.style.transform = `translate(${rx - size}px, ${ry - size}px)`;
			raf = requestAnimationFrame(loop);
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		raf = requestAnimationFrame(loop);
		return () => {
			document.body.classList.remove("cursor-enabled");
			window.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		ref: dotRef,
		"aria-hidden": "true",
		className: "pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-coral opacity-0 transition-opacity duration-300"
	}), /* @__PURE__ */ jsx("div", {
		ref: ringRef,
		"aria-hidden": "true",
		className: "pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border-2 border-coral/70 opacity-0 transition-[width,height,opacity] duration-200"
	})] });
}
//#endregion
//#region src/routes/__root.tsx
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "D2 Media Communication Agency in Melbourne" },
			{
				name: "description",
				content: "Based in Melbourne, D2 Media helps startups say what they really mean — and get heard. Branding, copywriting, web design, social media and lead generation."
			},
			{
				property: "og:title",
				content: "D2 Media Communication Agency in Melbourne"
			},
			{
				property: "og:description",
				content: "Play it safe, you will be forgotten. It's time to stand out!"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
			}
		]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en-AU",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", {
			className: "min-h-screen bg-indigo text-white antialiased",
			children: [
				/* @__PURE__ */ jsx(CustomCursor, {}),
				/* @__PURE__ */ jsx(SiteHeader, {}),
				children,
				/* @__PURE__ */ jsx(SiteFooter, {}),
				/* @__PURE__ */ jsx(Scripts, {})
			]
		})]
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$3 = () => import("./routes-fXmC2MQr.js");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "D2 Media Communication Agency in Melbourne" }, {
		name: "description",
		content: "Play it safe, you will be forgotten. It's time to stand out! D2 Media is a Melbourne communication agency helping startups get heard."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/build-and-scale.tsx
var $$splitComponentImporter$2 = () => import("./build-and-scale-DBpuAVeE.js");
var Route$2 = createFileRoute("/build-and-scale")({
	head: () => ({ meta: [{ title: "Build & Scale — D2 Media Communication Agency in Melbourne" }, {
		name: "description",
		content: "From foundation to domination. Brand voice, messaging architecture, content strategy, conversion copy and marketing automation — D2 Media Melbourne."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/d2-dna.tsx
var $$splitComponentImporter$1 = () => import("./d2-dna-fSYk_t7-.js");
var Route$1 = createFileRoute("/d2-dna")({
	head: () => ({ meta: [{ title: "D2 DNA — D2 Media Communication Agency in Melbourne" }, {
		name: "description",
		content: "Listen, Sharpen, Launch. The D2 DNA process: messaging that hits hard and sticks, copy with no fluff, and campaigns that convert."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/get-in-touch.tsx
var $$splitComponentImporter = () => import("./get-in-touch-DGd4pZQs.js");
var Route = createFileRoute("/get-in-touch")({
	head: () => ({ meta: [{ title: "Get in Touch — D2 Media Communication Agency in Melbourne" }, {
		name: "description",
		content: "Still figuring out your next move? Let's make it clear. Get in touch with D2 Media, Port Melbourne VIC 3207."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	BuildAndScaleRoute: Route$2.update({
		id: "/build-and-scale",
		path: "/build-and-scale",
		getParentRoute: () => Route$4
	}),
	D2DnaRoute: Route$1.update({
		id: "/d2-dna",
		path: "/d2-dna",
		getParentRoute: () => Route$4
	}),
	GetInTouchRoute: Route.update({
		id: "/get-in-touch",
		path: "/get-in-touch",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent"
	});
}
//#endregion
export { getRouter };
