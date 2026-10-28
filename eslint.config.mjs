import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

// eslint-config-next 16 ships native flat config — the FlatCompat shim and
// @eslint/eslintrc it needed are gone.
const config = [
	{ ignores: [".next/**", "node_modules/**", "out/**"] },
	...coreWebVitals,
	...typescript,
];

export default config;
