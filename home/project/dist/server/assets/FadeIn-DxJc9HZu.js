import { jsx } from "react/jsx-runtime";
import { motion, useReducedMotion } from "framer-motion";
//#region src/components/FadeIn.tsx
function FadeIn({ children, delay = 0, y = 50, className = "", as = "div" }) {
	const reduced = useReducedMotion();
	const Comp = as === "section" ? motion.section : motion.div;
	return /* @__PURE__ */ jsx(Comp, {
		className,
		initial: reduced ? false : {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
//#endregion
export { FadeIn as t };
