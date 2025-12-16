
import { Tag } from "./Tag";

interface TagsProps {
  tags: string[];
}

export function Tags({ tags }: TagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="Tags flex flex-wrap">
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </div>
  );
}