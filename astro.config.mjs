// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Typescript Core",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Estructuras de datos",
          items: [
            { label: "Introduccion", slug: "data-structures/introduction" },
            { label: "Example Guide", slug: "data-structures/example" },
          ],
        },
        {
          label: "Algoritmos",
          items: [
            { label: "Introduccion", slug: "algorithms/introduction" },
            { label: "Example Guide", slug: "algorithms/example" },
          ],
        },

        {
          label: "Patrones de diseño",
          items: [
            { label: "Introduccion", slug: "design-patterns/introduction" },
            { label: "Example Guide", slug: "design-patterns/example" },
            { label: "Singleton", slug: "design-patterns/singleton" },
            { label: "Singleton", slug: "design-patterns/a" },
            { label: "Singleton", slug: "design-patterns/b" },
            { label: "Singleton", slug: "design-patterns/c" },
            { label: "Singleton", slug: "design-patterns/d" },
            { label: "Singleton", slug: "design-patterns/f" },
            { label: "Singleton", slug: "design-patterns/g" },
            { label: "Singleton", slug: "design-patterns/h" },
            { label: "Singleton", slug: "design-patterns/i" },
            { label: "Singleton", slug: "design-patterns/j" },
          ],
        },
        {
          label: "Arquitectura de software",
          items: [
            {
              label: "Introduccion",
              slug: "software-architecture/introduction",
            },
            { label: "Example Guide", slug: "software-architecture/example" },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
});
