interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      <span className="icon">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
