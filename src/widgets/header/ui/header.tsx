import MapmyrunLogo from "@/shared/ui/logo";

import { navItems } from "../model/nav";

const Header = () => {
  return (
    <header className="z-header grid h-header-h w-full grid-cols-header-layout items-center border-b border-border-base bg-white px-5 max-desktop:h-auto max-desktop:grid-cols-1 max-desktop:gap-3 max-desktop:px-4 max-desktop:py-3">
      <div className="flex items-center justify-start max-desktop:justify-center">
        <MapmyrunLogo />
      </div>

      <nav className="flex h-full items-stretch justify-center gap-header-nav-gap max-desktop:justify-center max-desktop:min-h-header-nav-min-h-mobile" aria-label="메인 메뉴">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`relative inline-flex h-full cursor-pointer items-center justify-center bg-transparent px-2 text-header-nav font-bold tracking-header-nav-tight text-text-nav max-desktop:text-header-nav-mobile ${
              item.isActive
                ? "after:absolute after:bottom-0 after:left-header-underline-inset after:right-header-underline-inset after:h-1 after:bg-brand-accent after:content-[''] max-desktop:after:bottom-[2px]"
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
