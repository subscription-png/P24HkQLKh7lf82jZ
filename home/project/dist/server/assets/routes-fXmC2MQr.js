import { t as FadeIn } from "./FadeIn-DxJc9HZu.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
//#region src/components/home/HeroSection.tsx
var HOMESEC1GIRL = "https://res.cloudinary.com/lafaaku5/image/upload/v1791884780/vwcnqv922hxewyl8ptwv.png";
var HERO_VIDEO = "https://res.cloudinary.com/lafaaku5/video/upload/v1791886578/twsddnfjzprpt4vulw3r.mp4";
function HeroSection() {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ jsxs("section", {
		className: "relative flex min-h-screen items-center overflow-hidden bg-indigo pt-28 md:pt-24",
		"aria-label": "Introduction",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 h-full w-full overflow-hidden",
				children: [/* @__PURE__ */ jsx("video", {
					className: "absolute inset-0 h-full w-full object-cover",
					autoPlay: true,
					loop: true,
					muted: true,
					playsInline: true,
					preload: "auto",
					"aria-hidden": "true",
					children: /* @__PURE__ */ jsx("source", {
						src: HERO_VIDEO,
						type: "video/mp4"
					})
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-indigo/60" })]
			}),
			/* @__PURE__ */ jsxs("svg", {
				className: "pointer-events-none absolute inset-0 h-full w-full opacity-40",
				viewBox: "0 0 1440 900",
				fill: "none",
				preserveAspectRatio: "xMidYMid slice",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ jsx(motion.path, {
					d: "M-80 700 C 300 560, 420 760, 720 620 S 1180 480, 1540 640",
					stroke: "#AD00FF",
					strokeOpacity: "0.35",
					strokeWidth: "2",
					strokeDasharray: "1200",
					initial: reduced ? void 0 : { strokeDashoffset: 1200 },
					animate: reduced ? void 0 : { strokeDashoffset: 0 },
					transition: {
						duration: 2.4,
						ease: "easeOut"
					}
				}), /* @__PURE__ */ jsx(motion.path, {
					d: "M-80 220 C 260 320, 560 140, 860 260 S 1300 320, 1540 200",
					stroke: "#FF0063",
					strokeOpacity: "0.25",
					strokeWidth: "2",
					strokeDasharray: "1200",
					initial: reduced ? void 0 : { strokeDashoffset: 1200 },
					animate: reduced ? void 0 : { strokeDashoffset: 0 },
					transition: {
						duration: 2.8,
						delay: .4,
						ease: "easeOut"
					}
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:px-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsxs("h1", {
						className: "leading-[1.12] tracking-tight",
						children: [
							/* @__PURE__ */ jsxs(motion.span, {
								className: "block text-[clamp(2rem,4.5vw,3.75rem)] font-normal",
								initial: reduced ? void 0 : {
									opacity: 0,
									x: -40
								},
								animate: reduced ? void 0 : {
									opacity: 1,
									x: 0
								},
								transition: {
									duration: .5,
									delay: .2,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-white",
									children: "Play it "
								}), /* @__PURE__ */ jsx("span", {
									className: "text-purple font-bold",
									children: "safe,"
								})]
							}),
							/* @__PURE__ */ jsxs(motion.span, {
								className: "block text-[clamp(2rem,4.5vw,3.75rem)] font-normal",
								initial: reduced ? void 0 : {
									opacity: 0,
									x: -40
								},
								animate: reduced ? void 0 : {
									opacity: 1,
									x: 0
								},
								transition: {
									duration: .5,
									delay: .4,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-white",
									children: "you will be "
								}), /* @__PURE__ */ jsx("span", {
									className: "text-purple font-bold",
									children: "forgotten."
								})]
							}),
							/* @__PURE__ */ jsx(motion.span, {
								className: "mt-5 block text-[clamp(2rem,4.5vw,3.75rem)] font-normal text-white",
								initial: reduced ? void 0 : {
									opacity: 0,
									x: -40
								},
								animate: reduced ? void 0 : {
									opacity: 1,
									x: 0
								},
								transition: {
									duration: .5,
									delay: .6,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								children: "It's time to"
							}),
							/* @__PURE__ */ jsx(motion.span, {
								className: "mt-1 block whitespace-nowrap text-[clamp(3.5rem,8vw,7rem)] font-bold leading-none text-yellow",
								initial: reduced ? void 0 : {
									opacity: 0,
									scale: .9
								},
								animate: reduced ? void 0 : {
									opacity: 1,
									scale: 1
								},
								transition: {
									duration: .6,
									delay: .8,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								children: "stand out!"
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "relative h-64 w-full flex items-end justify-end pt-10",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative h-48 w-80",
							children: [
								/* @__PURE__ */ jsx(motion.svg, {
									className: "absolute right-20 top-0 md:right-24",
									width: "96",
									height: "96",
									viewBox: "0 0 24 24",
									fill: "none",
									"aria-hidden": "true",
									initial: reduced ? void 0 : {
										opacity: 0,
										x: -18
									},
									animate: reduced ? void 0 : {
										opacity: 1,
										x: 0
									},
									transition: {
										delay: 1.4,
										duration: .5
									},
									children: /* @__PURE__ */ jsx("path", {
										d: "M5 4l8 8-8 8",
										stroke: "#FF0063",
										strokeWidth: "3",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								}),
								/* @__PURE__ */ jsx(motion.svg, {
									className: "absolute right-32 top-16 md:right-40 md:top-20",
									width: "56",
									height: "56",
									viewBox: "0 0 24 24",
									fill: "none",
									"aria-hidden": "true",
									initial: reduced ? void 0 : {
										opacity: 0,
										x: -18
									},
									animate: reduced ? void 0 : {
										opacity: 1,
										x: 0
									},
									transition: {
										delay: 1.6,
										duration: .5
									},
									children: /* @__PURE__ */ jsx("path", {
										d: "M5 4l8 8-8 8",
										stroke: "#FFF500",
										strokeWidth: "3",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								}),
								/* @__PURE__ */ jsx(motion.svg, {
									className: "absolute right-4 top-16 md:right-6 md:top-20",
									width: "64",
									height: "64",
									viewBox: "0 0 24 24",
									fill: "none",
									"aria-hidden": "true",
									initial: reduced ? void 0 : {
										opacity: 0,
										x: -18
									},
									animate: reduced ? void 0 : {
										opacity: 1,
										x: 0
									},
									transition: {
										delay: 1.8,
										duration: .5
									},
									children: /* @__PURE__ */ jsx("path", {
										d: "M5 4l8 8-8 8",
										stroke: "#AD00FF",
										strokeWidth: "3",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})
							]
						})
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "relative mx-auto flex w-full items-end md:col-start-2 md:row-start-1 md:h-full",
					children: /* @__PURE__ */ jsx("img", {
						src: HOMESEC1GIRL,
						alt: "Expressing confidence and individuality — communicate your brand by being uniquely you.",
						className: "mx-auto h-auto w-full max-w-full object-contain object-bottom md:max-h-[110%] md:w-auto",
						loading: "eager",
						decoding: "async"
					})
				})]
			})
		]
	});
}
//#endregion
//#region src/components/home/ServicesMarquee.tsx
var SERVICES = [
	"BRANDING",
	"GRAPHIC DESIGN",
	"WEB DESIGN",
	"SOCIAL MEDIA",
	"AI GENERATION",
	"AUTOMATION CALLS",
	"LEAD GENERATION",
	"COMMUNICATION MARKETING",
	"AD ANALYSIS",
	"RESEARCH",
	"A/B TESTING",
	"VIDEOS AND ADS"
];
function ServicesMarquee() {
	const ticker = [...SERVICES, ...SERVICES];
	return /* @__PURE__ */ jsxs("section", {
		"aria-label": "Services",
		children: [/* @__PURE__ */ jsx("div", {
			className: "overflow-hidden bg-purple py-4",
			role: "marquee",
			"aria-label": "Our services",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex w-max animate-marquee-left whitespace-nowrap",
				children: ticker.map((s, i) => /* @__PURE__ */ jsxs("span", {
					className: "px-6 text-xl font-normal tracking-[0.08em] text-white md:text-2xl",
					children: [
						s,
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "mx-3 text-white/70",
							"aria-hidden": "true",
							children: "•"
						})
					]
				}, i))
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-5 py-20 text-center md:py-28",
			children: [/* @__PURE__ */ jsxs("h2", {
				className: "text-5xl font-bold leading-tight md:text-7xl lg:text-8xl",
				children: [
					"Do they get it in",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("span", {
						className: "text-coral",
						children: "3 seconds?"
					})
				]
			}), /* @__PURE__ */ jsxs("h3", {
				className: "mt-6 text-lg md:text-xl",
				children: [
					"If not, ",
					/* @__PURE__ */ jsx("span", {
						className: "font-bold italic text-purple",
						children: "your copy's the problem"
					}),
					" — not your product."
				]
			})]
		})]
	});
}
//#endregion
//#region src/components/home/MessageSection.tsx
function MessageSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative overflow-hidden bg-indigo py-20 md:py-32",
		children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 md:px-10" })
	});
}
//#endregion
//#region src/components/ui/dynamic-frame-layout.tsx
var defaultFrames = [
	{
		id: 1,
		title: "Brand Identity",
		subtitle: "Visual storytelling that resonates",
		image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
		stats: [{
			label: "Projects",
			value: "150+"
		}, {
			label: "Clients",
			value: "80+"
		}],
		color: "#AD00FF"
	},
	{
		id: 2,
		title: "Digital Marketing",
		subtitle: "Data-driven campaigns",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
		stats: [{
			label: "ROI",
			value: "320%"
		}, {
			label: "Reach",
			value: "2M+"
		}],
		color: "#FF0063"
	},
	{
		id: 3,
		title: "Content Strategy",
		subtitle: "Messages that convert",
		image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80",
		stats: [{
			label: "Engagement",
			value: "+185%"
		}, {
			label: "Content",
			value: "500+"
		}],
		color: "#FFF500"
	},
	{
		id: 4,
		title: "Web Development",
		subtitle: "Digital experiences built to scale",
		image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80",
		stats: [{
			label: "Websites",
			value: "120+"
		}, {
			label: "Uptime",
			value: "99.9%"
		}],
		color: "#AD00FF"
	},
	{
		id: 5,
		title: "Social Media",
		subtitle: "Community-driven growth",
		image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
		stats: [{
			label: "Followers",
			value: "500K+"
		}, {
			label: "Growth",
			value: "+240%"
		}],
		color: "#FF0063"
	},
	{
		id: 6,
		title: "Analytics",
		subtitle: "Insights that drive decisions",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
		stats: [{
			label: "Reports",
			value: "1000+"
		}, {
			label: "Accuracy",
			value: "98%"
		}],
		color: "#FFF500"
	}
];
function DynamicFrameLayout({ frames = defaultFrames, className = "" }) {
	const [activeFrame, setActiveFrame] = useState(null);
	const containerRef = useRef(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springConfig = {
		damping: 25,
		stiffness: 200
	};
	const x = useSpring(mouseX, springConfig);
	const y = useSpring(mouseY, springConfig);
	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			mouseX.set((e.clientX - centerX) / 30);
			mouseY.set((e.clientY - centerY) / 30);
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [mouseX, mouseY]);
	return /* @__PURE__ */ jsx("div", {
		ref: containerRef,
		className: `relative w-full ${className}`,
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: frames.map((frame, index) => {
				const isActive = activeFrame === frame.id;
				const rotateX = useTransform(y, [-20, 20], [5, -5]);
				const rotateY = useTransform(x, [-20, 20], [-5, 5]);
				return /* @__PURE__ */ jsxs(motion.div, {
					className: "group relative cursor-pointer overflow-hidden rounded-2xl bg-indigo-2",
					style: {
						rotateX: isActive ? rotateX : 0,
						rotateY: isActive ? rotateY : 0,
						transformStyle: "preserve-3d"
					},
					initial: {
						opacity: 0,
						y: 60
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-100px"
					},
					transition: {
						duration: .6,
						delay: index * .1
					},
					onMouseEnter: () => setActiveFrame(frame.id),
					onMouseLeave: () => setActiveFrame(null),
					whileHover: { scale: 1.02 },
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative h-64 overflow-hidden sm:h-72 lg:h-80",
							children: [/* @__PURE__ */ jsx(motion.img, {
								src: frame.image,
								alt: frame.title,
								className: "h-full w-full object-cover",
								loading: "lazy",
								initial: { scale: 1 },
								whileHover: { scale: 1.1 },
								transition: { duration: .4 }
							}), /* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-40",
								style: { background: `linear-gradient(180deg, transparent 0%, ${frame.color}40 100%)` }
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative p-6",
							children: [
								/* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: isActive ? 1 : .9,
										y: isActive ? 0 : 5
									},
									transition: { duration: .3 },
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-2xl font-bold text-white",
										children: frame.title
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-2 text-sm text-grey",
										children: frame.subtitle
									})]
								}),
								/* @__PURE__ */ jsx(motion.div, {
									className: "mt-4 grid grid-cols-2 gap-4",
									initial: {
										opacity: 0,
										height: 0
									},
									animate: {
										opacity: isActive ? 1 : 0,
										height: isActive ? "auto" : 0
									},
									transition: { duration: .3 },
									children: frame.stats.map((stat) => /* @__PURE__ */ jsxs("div", {
										className: "rounded-lg bg-indigo p-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-xs text-grey",
											children: stat.label
										}), /* @__PURE__ */ jsx("div", {
											className: "mt-1 text-xl font-bold",
											style: { color: frame.color },
											children: stat.value
										})]
									}, stat.label))
								}),
								/* @__PURE__ */ jsx(motion.div, {
									className: "absolute bottom-0 left-0 h-1 w-full",
									style: { backgroundColor: frame.color },
									initial: { scaleX: 0 },
									animate: { scaleX: isActive ? 1 : 0 },
									transition: { duration: .3 }
								})
							]
						}),
						/* @__PURE__ */ jsx(motion.div, {
							className: "pointer-events-none absolute inset-0 rounded-2xl",
							style: { boxShadow: `0 0 40px ${frame.color}40` },
							initial: { opacity: 0 },
							animate: { opacity: isActive ? 1 : 0 },
							transition: { duration: .3 }
						})
					]
				}, frame.id);
			})
		})
	});
}
//#endregion
//#region src/components/demo.tsx
function Demo() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-indigo py-20 md:py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 md:px-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "text-4xl font-bold text-white md:text-5xl lg:text-6xl",
					children: ["Our ", /* @__PURE__ */ jsx("span", {
						className: "text-purple",
						children: "Services"
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-grey md:text-xl",
					children: "Comprehensive solutions to elevate your brand"
				})]
			}), /* @__PURE__ */ jsx(DynamicFrameLayout, {})]
		})
	});
}
//#endregion
//#region src/components/home/DnaSection.tsx
var STEPS = [
	{
		title: "LISTEN",
		body: "Cut through the noise with messaging that hits hard and sticks.",
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			className: "h-14 w-14",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ jsx("circle", {
					cx: "12",
					cy: "10",
					r: "4",
					fill: "currentColor",
					stroke: "none"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7",
					fill: "currentColor",
					stroke: "none"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M18.5 5.5a9 9 0 0 1 0 9M21 3a13 13 0 0 1 0 14M5.5 5.5a9 9 0 0 0 0 9M3 3a13 13 0 0 0 0 14",
					strokeLinecap: "round"
				})
			]
		})
	},
	{
		title: "SHARPEN",
		body: "Every word serves a purpose. No fluff, no filler, just results.",
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			className: "h-14 w-14",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ jsx("circle", {
					cx: "12",
					cy: "12",
					r: "8"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "12",
					cy: "12",
					r: "4"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "12",
					cy: "12",
					r: "1",
					fill: "currentColor",
					stroke: "none"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M12 1v4M12 19v4M1 12h4M19 12h4",
					strokeLinecap: "round"
				})
			]
		})
	},
	{
		title: "LAUNCH",
		body: "Copy that converts browsers into buyers and skeptics into believers.",
		icon: /* @__PURE__ */ jsx("svg", {
			viewBox: "0 0 24 24",
			fill: "currentColor",
			className: "h-14 w-14",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx("path", { d: "M13.5 2.5c3.5.5 6 3 6.5 6.5l-4.5 4.5-6.5-6.5 4.5-4.5ZM8.5 9l6.5 6.5c-.5 2.5-2 4.5-5 5.5L8 19l-1.5 1.5c-.5-2.5 0-4.5 2-6.5v-5Zm-3 8c-1 1-1.5 3-1.5 4.5C5.5 21.5 7.5 21 8.5 20l-3-3ZM15 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" })
		})
	}
];
function DnaSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 text-center md:py-28",
		"aria-label": "D2 DNA process",
		children: /* @__PURE__ */ jsxs(FadeIn, {
			className: "mx-auto max-w-6xl px-5 md:px-10",
			children: [
				/* @__PURE__ */ jsxs("h2", {
					className: "flex items-baseline justify-center gap-2 text-5xl font-bold tracking-tight md:text-7xl",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-purple",
						children: "D2"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-coral",
						children: "DNA"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-6",
					children: STEPS.map((step, i) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-6",
						children: [
							/* @__PURE__ */ jsxs(FadeIn, {
								delay: i * .15,
								className: "w-64 text-center",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-purple text-white md:h-40 md:w-40",
										children: step.icon
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-5 text-2xl font-bold tracking-wide text-yellow",
										children: step.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-base leading-relaxed text-white/90",
										children: step.body
									})
								]
							}),
							i < STEPS.length - 1 && /* @__PURE__ */ jsx("svg", {
								width: "44",
								height: "44",
								viewBox: "0 0 24 24",
								fill: "none",
								"aria-hidden": "true",
								className: "hidden shrink-0 rotate-0 text-coral md:block",
								children: /* @__PURE__ */ jsx("path", {
									d: "M4 12h14m0 0-6-6m6 6-6 6",
									stroke: "currentColor",
									strokeWidth: "3",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							}),
							i < STEPS.length - 1 && /* @__PURE__ */ jsx("svg", {
								width: "36",
								height: "36",
								viewBox: "0 0 24 24",
								fill: "none",
								"aria-hidden": "true",
								className: "text-coral md:hidden",
								children: /* @__PURE__ */ jsx("path", {
									d: "M12 4v14m0 0-6-6m6 6 6-6",
									stroke: "currentColor",
									strokeWidth: "3",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							})
						]
					}, step.title))
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: "/d2-dna",
					className: "mt-14 inline-flex items-center gap-3 rounded-full border-2 border-purple px-8 py-3 text-sm font-bold tracking-widest text-white transition-colors duration-200 hover:bg-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-indigo",
					children: ["D2 DNA", /* @__PURE__ */ jsx("svg", {
						width: "18",
						height: "18",
						viewBox: "0 0 24 24",
						fill: "none",
						"aria-hidden": "true",
						className: "text-purple",
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
		})
	});
}
//#endregion
//#region src/components/home/BuildScaleSection.tsx
var TABS = [
	{
		key: "build",
		label: "BUILD",
		heading: ["Build your", "Foundation"],
		body: "Craft a brand voice that resonates. Develop messaging frameworks that convert. Create content strategies that scale.",
		bullets: [
			"Brand Voice Development",
			"Messaging Architecture",
			"Content Strategy"
		],
		icon: /* @__PURE__ */ jsx("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			className: "h-4 w-4",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx("path", {
				d: "M12 2 2 8l10 6 10-6-10-6ZM2 14l10 6 10-6",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		})
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
		],
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			className: "h-4 w-4",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ jsx("circle", {
				cx: "9",
				cy: "8",
				r: "3.5"
			}), /* @__PURE__ */ jsx("path", {
				d: "M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5M17 4.5a4 4 0 0 1 0 7M21.5 20c0-2.8-1.7-5.2-4.2-6.2",
				strokeLinecap: "round"
			})]
		})
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
		],
		icon: /* @__PURE__ */ jsx("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			className: "h-4 w-4",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx("path", {
				d: "M3 20 21 8M21 8h-6m6 0v6",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		})
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
		],
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			className: "h-4 w-4",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ jsx("path", {
				d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2",
				strokeLinecap: "round"
			}), /* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "12",
				r: "3"
			})]
		})
	}
];
function Dashboard() {
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full overflow-hidden rounded-2xl border border-indigo-2 bg-[#161226] shadow-2xl shadow-purple/20",
		role: "img",
		"aria-label": "Dashboard mock-up showing automation workflow, performance metrics, growth trajectory, system health, optimisation queue and scaling capacity",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 border-b border-indigo-2 px-4 py-3",
			children: [
				/* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-coral" }),
				/* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-yellow" }),
				/* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-[#4ade80]" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-2 gap-3 p-4 text-left",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-indigo-2 bg-indigo/60 p-3",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs font-bold tracking-wider text-purple",
						children: "AUTOMATION WORKFLOW"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-2 space-y-1 text-xs text-grey",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[#4ade80]" }), " Trigger"]
							}),
							/* @__PURE__ */ jsx("li", { children: "→ Action 1" }),
							/* @__PURE__ */ jsx("li", { children: "→ Action 2" }),
							/* @__PURE__ */ jsx("li", { children: "→ Complete" })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-indigo-2 bg-indigo/60 p-3",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs font-bold tracking-wider text-purple",
						children: "PERFORMANCE METRICS"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-2 space-y-1.5 text-xs",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex justify-between text-grey",
								children: [/* @__PURE__ */ jsx("span", { children: "ROI" }), /* @__PURE__ */ jsx("span", {
									className: "font-bold text-[#4ade80]",
									children: "+340%"
								})]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex justify-between text-grey",
								children: [/* @__PURE__ */ jsx("span", { children: "CAC" }), /* @__PURE__ */ jsx("span", {
									className: "font-bold text-[#4ade80]",
									children: "-45%"
								})]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex justify-between text-grey",
								children: [/* @__PURE__ */ jsx("span", { children: "LTV" }), /* @__PURE__ */ jsx("span", {
									className: "font-bold text-[#4ade80]",
									children: "+120%"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-indigo-2 bg-indigo/60 p-3",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs font-bold tracking-wider text-purple",
						children: "GROWTH TRAJECTORY"
					}), /* @__PURE__ */ jsx("svg", {
						viewBox: "0 0 120 50",
						className: "mt-2 w-full",
						"aria-hidden": "true",
						children: /* @__PURE__ */ jsx(motion.path, {
							d: "M5 45 C 40 42, 70 28, 115 8",
							stroke: "#AD00FF",
							strokeWidth: "3",
							fill: "none",
							strokeLinecap: "round",
							initial: { pathLength: 0 },
							whileInView: { pathLength: 1 },
							viewport: { once: true },
							transition: {
								duration: 1.4,
								ease: "easeOut"
							}
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-indigo-2 bg-indigo/60 p-3",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs font-bold tracking-wider text-purple",
						children: "SYSTEM HEALTH"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-2 space-y-1.5 text-xs",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex justify-between text-grey",
								children: [/* @__PURE__ */ jsx("span", { children: "Uptime" }), /* @__PURE__ */ jsx("span", {
									className: "font-bold text-[#4ade80]",
									children: "99.9%"
								})]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex justify-between text-grey",
								children: [/* @__PURE__ */ jsx("span", { children: "Response Time" }), /* @__PURE__ */ jsx("span", {
									className: "font-bold text-[#4ade80]",
									children: "45ms"
								})]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex justify-between text-grey",
								children: [/* @__PURE__ */ jsx("span", { children: "Error Rate" }), /* @__PURE__ */ jsx("span", {
									className: "font-bold text-[#4ade80]",
									children: "0.01%"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-indigo-2 bg-indigo/60 p-3",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs font-bold tracking-wider text-purple",
						children: "OPTIMISATION QUEUE"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-2 space-y-1.5 text-xs text-grey",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-yellow" }), " In Progress"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[#4ade80]" }), " Completed"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-grey" }), " Queued"]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-indigo-2 bg-indigo/60 p-3",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-bold tracking-wider text-purple",
							children: "SCALING CAPACITY"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-3 h-2.5 w-full overflow-hidden rounded-full bg-indigo-2",
							children: /* @__PURE__ */ jsx(motion.div, {
								className: "h-full rounded-full bg-gradient-to-r from-coral to-purple",
								initial: { width: "0%" },
								whileInView: { width: "86%" },
								viewport: { once: true },
								transition: {
									duration: 1.2,
									ease: "easeOut"
								}
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-center text-xs font-bold text-[#4ade80]",
							children: "Ready to Scale"
						})
					]
				})
			]
		})]
	});
}
function BuildScaleSection() {
	const [active, setActive] = useState("build");
	const tab = TABS.find((t) => t.key === active);
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 md:py-28",
		"aria-label": "Build and Scale",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 md:px-10",
			children: [/* @__PURE__ */ jsxs(FadeIn, {
				className: "text-center",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-5xl font-bold tracking-tight text-purple md:text-7xl",
						children: "BUILD & SCALE"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-lg md:text-xl",
						children: "From foundation to domination — we've got you covered"
					}),
					/* @__PURE__ */ jsx("div", {
						role: "tablist",
						"aria-label": "Build and Scale services",
						className: "mt-9 flex flex-wrap justify-center gap-3",
						children: TABS.map((t) => /* @__PURE__ */ jsxs("button", {
							role: "tab",
							id: `tab-${t.key}`,
							"aria-selected": active === t.key,
							"aria-controls": `panel-${t.key}`,
							onClick: () => setActive(t.key),
							className: `inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold tracking-widest transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral ${active === t.key ? "bg-gradient-to-r from-coral to-purple text-white" : "bg-indigo-2 text-grey hover:text-white"}`,
							children: [t.icon, t.label]
						}, t.key))
					})
				]
			}), /* @__PURE__ */ jsx(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ jsxs(motion.div, {
					id: `panel-${active}`,
					role: "tabpanel",
					"aria-labelledby": `tab-${active}`,
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
					className: "mt-12 grid items-center gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("h3", {
							className: "text-4xl font-bold leading-tight md:text-5xl",
							children: [
								tab.heading[0],
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-purple",
									children: tab.heading[1]
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-md text-lg leading-relaxed text-white/90",
							children: tab.body
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-6 space-y-2.5",
							children: tab.bullets.map((b) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-3 text-base md:text-lg",
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
						})
					] }), /* @__PURE__ */ jsx(Dashboard, {})]
				}, active)
			})]
		})
	});
}
//#endregion
//#region src/components/ui/scroll-locked-video-hero.tsx
function ScrollLockedVideoHero({ title, subtitle, videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-melbourne-tram-going-through-the-city-42240-large.mp4", posterSrc = "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1920&h=1080&fit=crop", className = "" }) {
	const containerRef = useRef(null);
	const videoRef = useRef(null);
	const reduced = useReducedMotion();
	const [isVideoLoaded, setIsVideoLoaded] = useState(false);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"]
	});
	const videoScale = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		1,
		1.2,
		1.4
	]);
	const videoOpacity = useTransform(scrollYProgress, [
		0,
		.3,
		.7,
		1
	], [
		1,
		.8,
		.6,
		.4
	]);
	const overlayOpacity = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		.3,
		.5,
		.7
	]);
	const titleY = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		0,
		-50,
		-100
	]);
	const titleOpacity = useTransform(scrollYProgress, [
		0,
		.3,
		.7,
		1
	], [
		1,
		.8,
		.6,
		0
	]);
	const subtitleY = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		0,
		-30,
		-60
	]);
	const subtitleOpacity = useTransform(scrollYProgress, [
		0,
		.4,
		.8,
		1
	], [
		1,
		.9,
		.7,
		0
	]);
	useEffect(() => {
		if (!videoRef.current || !isVideoLoaded || reduced) return;
		const video = videoRef.current;
		const duration = video.duration;
		if (isNaN(duration) || duration === 0) return;
		const unsubscribe = scrollYProgress.on("change", (latest) => {
			if (video && !video.paused) video.pause();
			const targetTime = latest * duration;
			if (video && Math.abs(video.currentTime - targetTime) > .1) video.currentTime = targetTime;
		});
		return () => unsubscribe();
	}, [
		scrollYProgress,
		isVideoLoaded,
		reduced
	]);
	const handleVideoLoaded = () => {
		setIsVideoLoaded(true);
		if (videoRef.current) {
			videoRef.current.pause();
			videoRef.current.currentTime = 0;
		}
	};
	return /* @__PURE__ */ jsx("section", {
		ref: containerRef,
		className: `relative h-[300vh] ${className}`,
		"aria-label": "Scroll-locked video hero section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "sticky top-0 h-screen overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs(motion.div, {
					style: reduced ? void 0 : {
						scale: videoScale,
						opacity: videoOpacity
					},
					className: "absolute inset-0",
					children: [/* @__PURE__ */ jsxs("video", {
						ref: videoRef,
						className: "h-full w-full object-cover",
						muted: true,
						playsInline: true,
						preload: "auto",
						poster: posterSrc,
						onLoadedMetadata: handleVideoLoaded,
						"aria-label": "Background video",
						children: [/* @__PURE__ */ jsx("source", {
							src: videoSrc,
							type: "video/mp4"
						}), "Your browser does not support the video tag."]
					}), !isVideoLoaded && /* @__PURE__ */ jsx("img", {
						src: posterSrc,
						alt: "Melbourne cityscape",
						className: "absolute inset-0 h-full w-full object-cover"
					})]
				}),
				/* @__PURE__ */ jsx(motion.div, {
					style: reduced ? void 0 : { opacity: overlayOpacity },
					className: "absolute inset-0 bg-gradient-to-b from-indigo/60 via-indigo/40 to-indigo/80"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center",
					children: [
						/* @__PURE__ */ jsx(motion.h2, {
							style: reduced ? void 0 : {
								y: titleY,
								opacity: titleOpacity
							},
							className: "text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl",
							children: title
						}),
						/* @__PURE__ */ jsx(motion.p, {
							style: reduced ? void 0 : {
								y: subtitleY,
								opacity: subtitleOpacity
							},
							className: "mt-4 text-[2.5rem] font-bold leading-tight text-yellow md:text-[5rem] lg:text-[6rem]",
							children: subtitle
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: reduced ? void 0 : {
								scale: 0,
								rotate: -180
							},
							animate: reduced ? void 0 : {
								scale: 1,
								rotate: 0
							},
							transition: {
								delay: .5,
								duration: .8,
								type: "spring"
							},
							className: "mt-8 flex gap-4",
							children: [
								/* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-coral" }),
								/* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-yellow" }),
								/* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-purple" })
							]
						})
					]
				}),
				/* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: -20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: 1,
						duration: .8,
						repeat: Infinity,
						repeatType: "reverse"
					},
					className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-sm font-medium text-white/80",
							children: "Scroll to explore"
						}), /* @__PURE__ */ jsx("svg", {
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							className: "animate-bounce text-white/80",
							children: /* @__PURE__ */ jsx("path", {
								d: "M12 5V19M12 19L5 12M12 19L19 12",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})]
					})
				}),
				/* @__PURE__ */ jsx(motion.div, {
					animate: reduced ? void 0 : {
						scale: [
							1,
							1.2,
							1
						],
						opacity: [
							.2,
							.3,
							.2
						]
					},
					transition: {
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut"
					},
					className: "absolute left-[20%] top-[20%] h-64 w-64 rounded-full bg-purple/20 blur-[100px]"
				}),
				/* @__PURE__ */ jsx(motion.div, {
					animate: reduced ? void 0 : {
						scale: [
							1.2,
							1,
							1.2
						],
						opacity: [
							.3,
							.2,
							.3
						]
					},
					transition: {
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut"
					},
					className: "absolute right-[20%] bottom-[20%] h-64 w-64 rounded-full bg-coral/20 blur-[100px]"
				})
			]
		})
	});
}
//#endregion
//#region src/components/home/TramSection.tsx
function TramSection() {
	return /* @__PURE__ */ jsx(ScrollLockedVideoHero, {
		title: "D2 Media is ready for Melbourne…",
		subtitle: "Are you ready to stand-out?",
		videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-melbourne-tram-going-through-the-city-42240-large.mp4",
		posterSrc: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1920&h=1080&fit=crop"
	});
}
//#endregion
//#region src/components/home/GrowthDashboardSection.tsx
function Stat({ value, label }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "px-4 text-center",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-4xl font-bold md:text-5xl",
			children: value
		}), /* @__PURE__ */ jsx("p", {
			className: "mx-auto mt-3 max-w-[220px] text-sm leading-snug text-white/90",
			children: label
		})]
	});
}
function CountUp({ to }) {
	const ref = useRef(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	const [val, setVal] = useState(0);
	useEffect(() => {
		if (!inView) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setVal(to);
			return;
		}
		const start = performance.now();
		const dur = 1600;
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, to]);
	return /* @__PURE__ */ jsx("span", {
		ref,
		children: val.toLocaleString("en-AU")
	});
}
var DASH_STATS = [
	{
		label: "Leads",
		sub: "New leads this week",
		value: 1248,
		delta: "+32.5%"
	},
	{
		label: "Social Media",
		sub: "Engagement this week",
		value: 4785,
		delta: "+45.7%"
	},
	{
		label: "Appointments",
		sub: "Scheduled this week",
		value: 328,
		delta: "+28.4%"
	},
	{
		label: "Outbound Calls",
		sub: "Calls made this week",
		value: 642,
		delta: "+18.9%"
	}
];
function GrowthDashboardSection() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-gradient-to-b from-indigo to-[#2a0630] py-20 md:py-28",
		"aria-label": "Growth dashboard",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10",
			children: [/* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", {
				role: "img",
				"aria-label": "Growth dashboard interface showing leads, social media, appointments and outbound calls",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-indigo-2 bg-[#161226]/90 p-5",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-bold",
								children: "Growth Dashboard"
							}), /* @__PURE__ */ jsx("span", {
								className: "rounded-full bg-purple/20 px-3 py-1 text-xs font-bold text-purple",
								children: "LIVE"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 grid grid-cols-2 gap-3",
							children: DASH_STATS.map((s) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-indigo-2 bg-gradient-to-br from-purple-2/50 to-purple-deep/60 p-3.5",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-xs font-bold",
										children: s.label
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[11px] text-white/70",
										children: s.sub
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "mt-1 text-xl font-bold",
										children: [/* @__PURE__ */ jsx(CountUp, { to: s.value }), /* @__PURE__ */ jsx("span", {
											className: "ml-2 text-xs font-bold text-[#4ade80]",
											children: s.delta
										})]
									})
								]
							}, s.label))
						}),
						/* @__PURE__ */ jsx("svg", {
							viewBox: "0 0 300 70",
							className: "mt-4 w-full",
							"aria-hidden": "true",
							children: [
								18,
								28,
								24,
								40,
								34,
								52,
								46,
								62
							].map((h, i) => /* @__PURE__ */ jsx(motion.rect, {
								x: 14 + i * 36,
								y: 66 - h,
								width: "20",
								height: h,
								rx: "3",
								fill: i % 2 ? "#AD00FF" : "#FF0063",
								initial: { scaleY: 0 },
								whileInView: { scaleY: 1 },
								viewport: { once: true },
								style: {
									transformBox: "fill-box",
									transformOrigin: "bottom"
								},
								transition: {
									delay: i * .08,
									duration: .5,
									ease: "easeOut"
								}
							}, i))
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-3 flex items-center justify-between rounded-xl border border-indigo-2 bg-[#161226]/90 px-4 py-3 text-xs text-grey",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-bold text-[#4ade80]",
						children: "STATUS: OPTIMAL"
					}), /* @__PURE__ */ jsxs("span", { children: [
						"EXECUTE ",
						">",
						" GROWTH.MODULE"
					] })]
				})]
			}) }), /* @__PURE__ */ jsxs(FadeIn, {
				delay: .15,
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "text-4xl font-bold leading-tight md:text-5xl",
					children: [
						"A Smarter Way to",
						/* @__PURE__ */ jsx("br", {}),
						"Reach your Customers"
					]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-lg text-lg leading-relaxed text-white/90",
					children: "We integrate AI with strategy, creativity, and data to identify your ideal customers, reach them through the right channels, and create personalised experiences that turn prospects into loyal customers."
				})]
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "bg-gradient-to-r from-purple to-purple-2 py-16 md:py-20",
		"aria-label": "Key statistics",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-5 md:grid-cols-4 md:px-10",
			children: [
				/* @__PURE__ */ jsx(FadeIn, {
					delay: 0,
					children: /* @__PURE__ */ jsx(Stat, {
						value: "99%",
						label: "Current agency capacity available to dedicate exclusively to your brand's launch."
					})
				}),
				/* @__PURE__ */ jsx(FadeIn, {
					delay: .1,
					children: /* @__PURE__ */ jsx(Stat, {
						value: "2x",
						label: "Faster communication and agile turnaround times compared to bloated traditional agencies."
					})
				}),
				/* @__PURE__ */ jsx(FadeIn, {
					delay: .2,
					children: /* @__PURE__ */ jsx(Stat, {
						value: "1st",
						label: "In line for our exclusive VIP support — we treat your startup's growth like our own."
					})
				}),
				/* @__PURE__ */ jsx(FadeIn, {
					delay: .3,
					children: /* @__PURE__ */ jsx(Stat, {
						value: "10/10",
						label: "Dedication to delivering pixel-perfect multimedia assets that you are completely obsessed with."
					})
				})
			]
		})
	})] });
}
//#endregion
//#region src/components/home/CtaSection.tsx
function CtaSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 text-center md:py-32",
		style: { background: "linear-gradient(135deg, #590746 0%, #370939 50%, #0e0b20 100%)" },
		"aria-label": "Call to action",
		children: /* @__PURE__ */ jsxs(FadeIn, {
			className: "mx-auto max-w-3xl px-5",
			children: [
				/* @__PURE__ */ jsxs("h2", {
					className: "text-4xl font-bold leading-tight tracking-tight md:text-6xl",
					children: [
						"STILL FIGURING OUT",
						/* @__PURE__ */ jsx("br", {}),
						"YOUR NEXT MOVE?"
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 text-xl text-white/90",
					children: "Let's make it clear."
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: "/get-in-touch",
					className: "mt-9 inline-flex items-center gap-3 rounded-full bg-coral px-9 py-4 text-sm font-bold tracking-widest text-white transition-colors duration-200 hover:bg-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo",
					children: ["BOOK A CALL", /* @__PURE__ */ jsx("svg", {
						width: "18",
						height: "18",
						viewBox: "0 0 24 24",
						fill: "none",
						"aria-hidden": "true",
						children: /* @__PURE__ */ jsx("path", {
							d: "M7 17 17 7m0 0H8m9 0v9",
							stroke: "currentColor",
							strokeWidth: "2.5",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(HeroSection, {}),
		/* @__PURE__ */ jsx(ServicesMarquee, {}),
		/* @__PURE__ */ jsx(MessageSection, {}),
		/* @__PURE__ */ jsx(Demo, {}),
		/* @__PURE__ */ jsx(DnaSection, {}),
		/* @__PURE__ */ jsx(BuildScaleSection, {}),
		/* @__PURE__ */ jsx(TramSection, {}),
		/* @__PURE__ */ jsx(GrowthDashboardSection, {}),
		/* @__PURE__ */ jsx(CtaSection, {})
	] });
}
//#endregion
export { Home as component };
