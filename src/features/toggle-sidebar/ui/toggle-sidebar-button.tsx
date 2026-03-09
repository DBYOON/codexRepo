type ToggleSidebarButtonProps = {
  isCollapsed: boolean;
  onToggle: () => void;
  className?: string;
};

const ToggleSidebarButton = ({ isCollapsed, onToggle, className = "" }: ToggleSidebarButtonProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isCollapsed ? "사이드바 펼치기" : "사이드바 접기"}
      aria-expanded={!isCollapsed}
      className={`inline-flex h-9 w-6 items-center justify-center rounded-r border border-border-panel bg-white text-text-primary ${className}`.trim()}
    >
      <span aria-hidden>{isCollapsed ? ">" : "<"}</span>
    </button>
  );
};

export default ToggleSidebarButton;
