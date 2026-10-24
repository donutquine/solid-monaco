import { defineConfig } from "vite-plus";

import solid from "unplugin-solid/rolldown";

export default defineConfig({
    staged: { "*": "vp check --fix" },
    lint: {
        plugins: ["oxc", "typescript", "unicorn", "react"],
        jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
        rules: { "vite-plus/prefer-vite-plus-imports": "error" },
        options: { typeAware: true, typeCheck: true },
    },
    resolve: { tsconfigPaths: true },
    fmt: {
        printWidth: 120,
        semi: true,
        singleQuote: false,
        singleAttributePerLine: false,
        bracketSameLine: false,
        objectWrap: "collapse",
        proseWrap: "never",
        sortPackageJson: false,
        ignorePatterns: [],
    },
    pack: { tsconfig: "./tsconfig.json", entry: ["src/index.ts"], dts: true, format: ["es"], plugins: [solid()] },
    build: { sourcemap: true },
});
