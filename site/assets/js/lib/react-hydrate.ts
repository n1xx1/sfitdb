import { createElement } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

interface Group {
  id: string;
  scripts: {
    id: string;
    binding: (...args: any[]) => any;
    instances: {
      id: string;
      params: any;
    }[];
  }[];
}

export default function (group: Group) {
  for (const script of group.scripts) {
    for (const instance of script.instances) {
      const elementId = `react-${script.id}-${instance.id}`;
      const element = document.getElementById(elementId)!;
      const reactEl = createElement(script.binding, instance.params);
      hydrateRoot(element, reactEl, {});
    }
  }
}
