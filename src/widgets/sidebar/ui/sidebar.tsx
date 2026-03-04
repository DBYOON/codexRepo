import { activityOptions, toggleOptions } from "../model/panel-options";

const Sidebar = () => {
  return (
    <aside className="flex h-full min-w-[340px] w-[340px] flex-col border-r border-border-panel bg-surface-panel max-desktop:w-full max-desktop:min-w-0 max-desktop:border-r-0 max-desktop:border-b">
      <section className="border-b border-border-section px-4 py-[22px]">
        <h2 className="text-[16px] font-extrabold tracking-[0.2px] text-text-primary">INCHEON ROUTE</h2>
        <div className="mt-[22px]">
          <p className="text-[18px] font-bold text-brand-metric">거리</p>
          <p className="mt-2 text-[24px] font-extrabold text-text-body">0.60 마일</p>
        </div>
      </section>

      <section className="border-b border-border-section px-4 py-[22px]">
        <h3 className="text-[24px] font-extrabold text-text-primary">컨트롤</h3>

        <div className="mt-5 flex h-[36px] overflow-hidden rounded border border-border-input bg-white">
          <input
            type="text"
            value=""
            readOnly
            placeholder="위치 검색"
            className="flex-1 border-0 bg-transparent px-3 text-[13px] outline-none"
          />
          <button
            type="button"
            aria-label="위치 찾기"
            className="h-full w-14 cursor-pointer border-0 border-l border-border-input bg-white text-[10px]"
          >
            ○
          </button>
        </div>

        <p className="mt-6 text-[18px] font-bold text-brand-sub">사용자 지정</p>
        <div className="mt-[14px] grid grid-cols-3 overflow-hidden rounded border border-border-subtle">
          {activityOptions.map((option, index) => (
            <button
              key={option}
              type="button"
              className={`h-[36px] cursor-pointer border-0 border-r border-border-subtle text-[7px] last:border-r-0 ${
                index === 0 ? "bg-surface-muted" : "bg-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-[14px]">
          {toggleOptions.map((toggle) => (
            <div key={toggle.key} className="flex items-center justify-between text-[18px] text-text-primary">
              <span>{toggle.label}</span>
              <button
                type="button"
                className={`h-[30px] w-[52px] cursor-pointer rounded-full border-0 p-[3px] transition ${
                  toggle.enabled ? "bg-control-on" : "bg-control-off"
                }`}
                aria-label={`${toggle.label} 토글`}
              >
                <span
                  className={`block h-6 w-6 rounded-full bg-white transition ${
                    toggle.enabled ? "translate-x-[22px]" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-[18px] h-[46px] w-full cursor-pointer border-0 bg-transparent text-left text-[12px] text-text-primary"
        >
          아트파운드맵
        </button>
      </section>

      <section className="border-b border-border-section px-4 py-[22px]">
        <h3 className="text-[24px] font-extrabold text-text-primary">노선</h3>
      </section>

      <button
        type="button"
        className="mt-auto h-[82px] cursor-pointer border-0 bg-surface-strong text-[30px] font-extrabold tracking-[0.3px] text-white"
      >
        루트 저장
      </button>
    </aside>
  );
};

export default Sidebar;
