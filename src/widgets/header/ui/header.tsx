import MapmyrunLogo from "@/shared/ui/logo";

import { navItems } from "../model/nav";

const Header = () => {
  return (
    <header className="z-header grid h-header-h w-full grid-cols-header-layout items-center border-b border-border-base bg-white px-5">
      <div className="flex items-center justify-start">
        <MapmyrunLogo />
      </div>

      <nav className="flex h-full items-stretch justify-center gap-header-nav-gap" aria-label="메인 메뉴">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`relative inline-flex h-full cursor-pointer items-center justify-center bg-transparent px-2 text-header-nav font-bold tracking-header-nav-tight text-text-nav ${
              item.isActive
                ? "after:absolute after:bottom-0 after:left-header-underline-inset after:right-header-underline-inset after:h-1 after:bg-brand-accent after:content-['']"
                : ""
            }`}
            aria-current={item.isActive ? "page" : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex justify-end">
        <button
          type="button"
          className="inline-flex h-header-profile-size w-header-profile-size cursor-pointer items-center justify-center rounded-full border-0 bg-surface-panel"
          aria-label="프로필"
        >
          <span className="h-8 w-8 rounded-full border-4 border-border-avatar border-t-transparent" />
        </button>
      </div>
    </header>
  );
};

export default Header;
