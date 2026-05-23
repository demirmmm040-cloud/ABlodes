/// <reference types="vite/client" />

declare module '*.png' {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
