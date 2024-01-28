// This causes thw following unresolved issue:
// https://github.com/Swatinem/rollup-plugin-dts/issues/162

declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
