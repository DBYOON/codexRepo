import MapmyrunLogo from "@/shared/ui/logo";

import { navItems } from "../model/nav";

const Header = () => {
  return (
    <header className="grid h-[82px] w-full grid-cols-[360px_1fr_360px] items-center border-b border-border-base bg-white px-5 max-desktop:h-auto max-desktop:grid-cols-1 max-desktop:gap-3 max-desktop:px-4 max-desktop:py-3">
      <div className="flex items-center justify-start max-desktop:justify-center">
        <MapmyrunLogo />
      </div>

      <nav className="flex h-full items-stretch justify-center gap-[18px] max-desktop:justify-center max-desktop:min-h-[50px]" aria-label="메인 메뉴">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`relative inline-flex h-full cursor-pointer items-center justify-center bg-transparent px-2 text-[27px] font-bold tracking-[-0.4px] text-text-nav max-desktop:text-[15px] ${
              item.isActive
                ? "after:absolute after:bottom-0 after:left-[7px] after:right-[7px] after:h-1 after:bg-brand-accent after:content-[''] max-desktop:after:bottom-[2px]"
                : ""
            }`}
            aria-current={item.isActive ? "page" : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex justify-end max-desktop:justify-center">
        <button
          type="button"
          className="inline-flex h-[54px] w-[54px] cursor-pointer items-center justify-center rounded-full border-0 bg-surface-panel"
          aria-label="프로필"
        >
          <span className="h-8 w-8 rounded-full border-4 border-border-avatar border-t-transparent" />
        </button>
      </div>
    </header>
  );
};

export default Header;
