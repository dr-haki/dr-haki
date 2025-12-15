interface TagProps {
  text: string;
  onClick?: () => void; // optional for future use
}

export function Tag({ text, onClick }: TagProps) {
  return (
    <button
      className="Tag"
      onClick={onClick}
      type="button"
    >
      #{text}
    </button>
  );
}
