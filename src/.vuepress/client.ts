import {
  type CatalogInfo,
  defineCatalogInfoGetter,
} from "@vuepress/plugin-catalog/client";

defineCatalogInfoGetter((meta) =>
  meta.title ? ({ title: meta.title } as CatalogInfo) : null
);
