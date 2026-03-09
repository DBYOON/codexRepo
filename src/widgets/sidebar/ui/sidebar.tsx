"use client";

import { useState } from "react";

import { ToggleSidebarButton } from "@/features/toggle-sidebar";

import { activityOptions, toggleOptions } from "../model/panel-options";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="relative z-sidebar h-full">
      <aside
        className={`flex h-full flex-col overflow-hidden bg-surface-panel transition-[width,min-width] duration-200 ${
          isCollapsed ? "min-w-0 w-0 border-r-0" : "min-w-sidebar w-sidebar border-r border-border-panel"
        }`}
      >
        {!isCollapsed && (
          <>
            <section className="border-b border-border-section px-4 py-section-y">
              <h2 className="text-sidebar-title font-extrabold tracking-sidebar-tight text-text-primary">INCHEON ROUTE</h2>
              <div className="mt-section-y">
                <p className="text-sidebar-body font-bold text-brand-metric">거리</p>
                <p className="mt-2 text-sidebar-heading font-extrabold text-text-body">0.60 마일</p>
              </div>
            </section>

            <section className="border-b border-border-section px-4 py-section-y">
              <h3 className="text-sidebar-heading font-extrabold text-text-primary">컨트롤</h3>

              <div className="mt-5 flex h-field-h overflow-hidden rounded border border-border-input bg-white">
                <input
                  type="text"
                  placeholder="위치 검색"
                  className="flex-1 border-0 bg-transparent px-3 text-sidebar-input outline-none"
                />
                <button
                  type="button"
                  aria-label="위치 찾기"
                  className="h-full w-14 cursor-pointer border-0 border-l border-border-input bg-white text-sidebar-xs"
                >
                  ○
                </button>
              </div>

              <p className="mt-6 text-sidebar-body font-bold text-brand-sub">사용자 지정</p>
              <div className="mt-group-gap grid grid-cols-3 overflow-hidden rounded border border-border-subtle">
                {activityOptions.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    className={`h-field-h cursor-pointer border-0 border-r border-border-subtle text-sidebar-xxs last:border-r-0 ${
                      index === 0 ? "bg-surface-muted" : "bg-white"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-group-gap">
                {toggleOptions.map((toggle) => (
                  <div key={toggle.key} className="flex items-center justify-between text-sidebar-body text-text-primary">
                    <span>{toggle.label}</span>
                    <button
                      type="button"
                      className={`h-switch-h w-switch-w cursor-pointer rounded-full border-0 p-switch-pad transition ${
                        toggle.enabled ? "bg-control-on" : "bg-control-off"
                      }`}
                      aria-label={`${toggle.label} 토글`}
                    >
                      <span
                        className={`block h-6 w-6 rounded-full bg-white transition ${
                          toggle.enabled ? "translate-x-section-y" : ""
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-sidebar-body h-action-h w-full cursor-pointer border-0 bg-transparent text-left text-sidebar-sm text-text-primary"
              >
                아트파운드맵
              </button>
            </section>

            <section className="border-b border-border-section px-4 py-section-y">
              <h3 className="text-sidebar-heading font-extrabold text-text-primary">노선</h3>
            </section>

            <button
              type="button"
              className="mt-auto h-save-h cursor-pointer border-0 bg-surface-strong text-sidebar-cta font-extrabold tracking-sidebar-wide text-white"
            >
              루트 저장
            </button>
          </>
        )}
      </aside>

      <ToggleSidebarButton
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed((prev) => !prev)}
        className="absolute left-full top-[88px] z-sidebar"
      />
    </div>
  );
};

export default Sidebar;
