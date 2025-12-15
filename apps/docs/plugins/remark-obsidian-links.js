// remark-obsidian-links.js
import { visit } from "unist-util-visit";

export default function remarkObsidianLinks() {
  return (tree) => {
    visit(tree, "text", (node, index, parent) => {
      const text = node.value;

      // Match [[Page]] or [[Page|Alias]]
      const regex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
      const matches = [...text.matchAll(regex)];

      if (matches.length === 0) return;

      const newNodes = [];
      let lastIndex = 0;

      for (const match of matches) {
        const fullMatch = match[0];
        const target = match[1];
        const alias = match[2] || target;

        const start = match.index;

        // Add text before the link
        if (start > lastIndex) {
          newNodes.push({
            type: "text",
            value: text.slice(lastIndex, start),
          });
        }

        // Create slug (you can customize this)
        const slug = target
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-");

        // Add link node
        newNodes.push({
          type: "link",
          url: `/posts/${slug}`,
          children: [{ type: "text", value: alias }],
          data: {
            hProperties: {
              className: "obsidian-link",
            },
          },
        });

        lastIndex = start + fullMatch.length;
      }

      // Add text after last match
      if (lastIndex < text.length) {
        newNodes.push({
          type: "text",
          value: text.slice(lastIndex),
        });
      }

      parent.children.splice(index, 1, ...newNodes);
    });
  };
}
