import { t as FadeIn } from "./FadeIn-DxJc9HZu.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/get-in-touch.tsx?tsr-split=component
function GetInTouchPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState({});
	const [sent, setSent] = useState(false);
	const validate = () => {
		const e = {};
		if (!name.trim()) e.name = "Please enter your name.";
		if (!email.trim()) e.email = "Please enter your email address.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";
		if (!message.trim()) e.message = "Please tell us a little about your project.";
		return e;
	};
	const onSubmit = (ev) => {
		ev.preventDefault();
		const e = validate();
		setErrors(e);
		if (Object.keys(e).length > 0) return;
		const subject = encodeURIComponent(`Website enquiry from ${name}`);
		const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
		window.location.href = `mailto:info@d2media.com.au?subject=${subject}&body=${body}`;
		setSent(true);
	};
	const inputClass = (hasError) => `w-full rounded-xl border-2 bg-indigo-2/40 px-5 py-4 text-white placeholder:text-grey/60 outline-none transition-colors duration-200 focus:border-purple ${hasError ? "border-coral" : "border-indigo-2"}`;
	return /* @__PURE__ */ jsx("main", {
		className: "pt-28 md:pt-36",
		children: /* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-2xl px-5 pb-28 md:px-10",
			"aria-label": "Contact form",
			children: [
				/* @__PURE__ */ jsxs(FadeIn, {
					className: "text-center",
					children: [/* @__PURE__ */ jsxs("h1", {
						className: "text-5xl font-bold tracking-tight md:text-7xl",
						children: [
							"STILL FIGURING OUT",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-coral",
								children: "YOUR NEXT MOVE?"
							})
						]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-5 text-xl text-white/90",
						children: "Let's make it clear."
					})]
				}),
				/* @__PURE__ */ jsx(FadeIn, {
					delay: .15,
					className: "mt-12",
					children: sent ? /* @__PURE__ */ jsxs("div", {
						role: "status",
						className: "rounded-3xl border border-purple bg-indigo-2/30 p-10 text-center",
						children: [
							/* @__PURE__ */ jsxs("svg", {
								className: "mx-auto h-14 w-14 text-purple",
								viewBox: "0 0 24 24",
								fill: "none",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ jsx("circle", {
									cx: "12",
									cy: "12",
									r: "10",
									stroke: "currentColor",
									strokeWidth: "2"
								}), /* @__PURE__ */ jsx("path", {
									d: "m8 12.5 2.5 2.5L16 9.5",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "mt-5 text-3xl font-bold",
								children: [
									"Thanks, ",
									name.split(" ")[0] || "legend",
									"!"
								]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "mt-3 text-lg text-grey",
								children: [
									"Your mail app should have opened with your enquiry addressed to",
									" ",
									/* @__PURE__ */ jsx("a", {
										href: "mailto:info@d2media.com.au",
										className: "font-bold text-purple underline underline-offset-4 hover:text-coral",
										children: "info@d2media.com.au"
									}),
									". Hit send and we'll be in touch."
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-sm text-grey/80",
								children: "Nothing opened? Email us directly at info@d2media.com.au."
							})
						]
					}) : /* @__PURE__ */ jsxs("form", {
						onSubmit,
						noValidate: true,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("label", {
									htmlFor: "name",
									className: "mb-2 block text-sm font-bold tracking-widest",
									children: "YOUR NAME"
								}),
								/* @__PURE__ */ jsx("input", {
									id: "name",
									name: "name",
									type: "text",
									autoComplete: "name",
									value: name,
									onChange: (e) => setName(e.target.value),
									"aria-invalid": !!errors.name,
									"aria-describedby": errors.name ? "name-error" : void 0,
									className: inputClass(!!errors.name),
									placeholder: "Jane Citizen"
								}),
								errors.name && /* @__PURE__ */ jsx("p", {
									id: "name-error",
									role: "alert",
									className: "mt-2 text-sm font-bold text-coral",
									children: errors.name
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("label", {
									htmlFor: "email",
									className: "mb-2 block text-sm font-bold tracking-widest",
									children: "EMAIL ADDRESS"
								}),
								/* @__PURE__ */ jsx("input", {
									id: "email",
									name: "email",
									type: "email",
									autoComplete: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									"aria-invalid": !!errors.email,
									"aria-describedby": errors.email ? "email-error" : void 0,
									className: inputClass(!!errors.email),
									placeholder: "jane@yourstartup.com.au"
								}),
								errors.email && /* @__PURE__ */ jsx("p", {
									id: "email-error",
									role: "alert",
									className: "mt-2 text-sm font-bold text-coral",
									children: errors.email
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("label", {
									htmlFor: "message",
									className: "mb-2 block text-sm font-bold tracking-widest",
									children: "YOUR MESSAGE"
								}),
								/* @__PURE__ */ jsx("textarea", {
									id: "message",
									name: "message",
									rows: 6,
									value: message,
									onChange: (e) => setMessage(e.target.value),
									"aria-invalid": !!errors.message,
									"aria-describedby": errors.message ? "message-error" : void 0,
									className: `${inputClass(!!errors.message)} resize-y`,
									placeholder: "Tell us about your startup and what you're trying to achieve…"
								}),
								errors.message && /* @__PURE__ */ jsx("p", {
									id: "message-error",
									role: "alert",
									className: "mt-2 text-sm font-bold text-coral",
									children: errors.message
								})
							] }),
							/* @__PURE__ */ jsxs("button", {
								type: "submit",
								className: "inline-flex w-full items-center justify-center gap-3 rounded-full bg-coral px-9 py-4 text-sm font-bold tracking-widest text-white transition-colors duration-200 hover:bg-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo sm:w-auto",
								children: ["SEND MESSAGE", /* @__PURE__ */ jsx("svg", {
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
				}),
				/* @__PURE__ */ jsxs(FadeIn, {
					delay: .25,
					className: "mt-12 text-center text-grey",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "text-base",
						children: [
							"Prefer email?",
							" ",
							/* @__PURE__ */ jsx("a", {
								href: "mailto:info@d2media.com.au",
								className: "font-bold text-purple underline underline-offset-4 transition-colors hover:text-coral",
								children: "info@d2media.com.au"
							})
						]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-base",
						children: "Port Melbourne VIC 3207"
					})]
				})
			]
		})
	});
}
//#endregion
export { GetInTouchPage as component };
