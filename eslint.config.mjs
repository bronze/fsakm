import {defineConfig, globalIgnores} from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const compat=new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
  "**/fixtures/**/*",
  "**/node_modules/",
  "**/target/",
  "**/.next/",
  "**/build/",
  "**/dist/",
  "templates/",
  "fixtures/",
]), {
  extends: compat.extends("next/core-web-vitals", "prettier"),

  plugins: {
  },

  settings: {
    tailwindcss: {
      callees: ["cn", "cva"],
      config: "tailwind.config.cjs",
    },

    next: {
      rootDir: ["src/*/"],
    },
  },

  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
}, {
  files: ["**/*.ts", "**/*.tsx"],

  languageOptions: {
    parser: tsParser,
  },
}]);