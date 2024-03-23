// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const degensouls: CustomThemeConfig = {
	name: 'degensouls',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "var(--color-secondary-900)",
		"--theme-font-color-dark": "var(--color-secondary-500)",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ff00ff 
		"--color-primary-50": "255 217 255", // #ffd9ff
		"--color-primary-100": "255 204 255", // #ffccff
		"--color-primary-200": "255 191 255", // #ffbfff
		"--color-primary-300": "255 153 255", // #ff99ff
		"--color-primary-400": "255 77 255", // #ff4dff
		"--color-primary-500": "255 0 255", // #ff00ff
		"--color-primary-600": "230 0 230", // #e600e6
		"--color-primary-700": "191 0 191", // #bf00bf
		"--color-primary-800": "153 0 153", // #990099
		"--color-primary-900": "125 0 125", // #7d007d
		// secondary | #15eeff 
		"--color-secondary-50": "220 252 255", // #dcfcff
		"--color-secondary-100": "208 252 255", // #d0fcff
		"--color-secondary-200": "197 251 255", // #c5fbff
		"--color-secondary-300": "161 248 255", // #a1f8ff
		"--color-secondary-400": "91 243 255", // #5bf3ff
		"--color-secondary-500": "21 238 255", // #15eeff
		"--color-secondary-600": "19 214 230", // #13d6e6
		"--color-secondary-700": "16 179 191", // #10b3bf
		"--color-secondary-800": "13 143 153", // #0d8f99
		"--color-secondary-900": "10 117 125", // #0a757d
		// tertiary | #8102bb 
		"--color-tertiary-50": "236 217 245", // #ecd9f5
		"--color-tertiary-100": "230 204 241", // #e6ccf1
		"--color-tertiary-200": "224 192 238", // #e0c0ee
		"--color-tertiary-300": "205 154 228", // #cd9ae4
		"--color-tertiary-400": "167 78 207", // #a74ecf
		"--color-tertiary-500": "129 2 187", // #8102bb
		"--color-tertiary-600": "116 2 168", // #7402a8
		"--color-tertiary-700": "97 2 140", // #61028c
		"--color-tertiary-800": "77 1 112", // #4d0170
		"--color-tertiary-900": "63 1 92", // #3f015c
		// success | #1b6933 
		"--color-success-50": "221 233 224", // #dde9e0
		"--color-success-100": "209 225 214", // #d1e1d6
		"--color-success-200": "198 218 204", // #c6dacc
		"--color-success-300": "164 195 173", // #a4c3ad
		"--color-success-400": "95 150 112", // #5f9670
		"--color-success-500": "27 105 51", // #1b6933
		"--color-success-600": "24 95 46", // #185f2e
		"--color-success-700": "20 79 38", // #144f26
		"--color-success-800": "16 63 31", // #103f1f
		"--color-success-900": "13 51 25", // #0d3319
		// warning | #a04718 
		"--color-warning-50": "241 227 220", // #f1e3dc
		"--color-warning-100": "236 218 209", // #ecdad1
		"--color-warning-200": "231 209 197", // #e7d1c5
		"--color-warning-300": "217 181 163", // #d9b5a3
		"--color-warning-400": "189 126 93", // #bd7e5d
		"--color-warning-500": "160 71 24", // #a04718
		"--color-warning-600": "144 64 22", // #904016
		"--color-warning-700": "120 53 18", // #783512
		"--color-warning-800": "96 43 14", // #602b0e
		"--color-warning-900": "78 35 12", // #4e230c
		// error | #a01818 
		"--color-error-50": "241 220 220", // #f1dcdc
		"--color-error-100": "236 209 209", // #ecd1d1
		"--color-error-200": "231 197 197", // #e7c5c5
		"--color-error-300": "217 163 163", // #d9a3a3
		"--color-error-400": "189 93 93", // #bd5d5d
		"--color-error-500": "160 24 24", // #a01818
		"--color-error-600": "144 22 22", // #901616
		"--color-error-700": "120 18 18", // #781212
		"--color-error-800": "96 14 14", // #600e0e
		"--color-error-900": "78 12 12", // #4e0c0c
		// surface | #2d283e 
		"--color-surface-50": "224 223 226", // #e0dfe2
		"--color-surface-100": "213 212 216", // #d5d4d8
		"--color-surface-200": "203 201 207", // #cbc9cf
		"--color-surface-300": "171 169 178", // #aba9b2
		"--color-surface-400": "108 105 120", // #6c6978
		"--color-surface-500": "45 40 62", // #2d283e
		"--color-surface-600": "41 36 56", // #292438
		"--color-surface-700": "34 30 47", // #221e2f
		"--color-surface-800": "27 24 37", // #1b1825
		"--color-surface-900": "22 20 30", // #16141e
		
	}
}