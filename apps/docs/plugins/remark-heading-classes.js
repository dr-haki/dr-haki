import { visit } from "unist-util-visit";

export default function remarkHeadingClasses({
  levels = {} // e.g. {1: "title", 2: "subtitle"}
} = {}) {
  return (tree) => {
    visit(tree, "heading", (node) => {
      const level = node.depth; // 1–6
      const className = levels[level];

      if (!className) return; // skip if no class for this level

      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};

      const existing = node.data.hProperties.className;
      node.data.hProperties.className = existing
        ? Array.isArray(existing)
          ? [...existing, className]
          : [existing, className]
        : className;
    });
  };
}