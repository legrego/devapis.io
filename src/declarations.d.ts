// package.json
declare module "*/package.json" {
  export const version: string;
  export const author: string;
}

declare const graphql: (query: TemplateStringsArray) => void;

declare module "swagger-ui";

declare module "gatsby-image";
