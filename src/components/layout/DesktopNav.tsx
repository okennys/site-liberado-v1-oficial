import Link from "next/link";
import type { NavGroup } from "@/data/nav";

type DesktopNavProps = {
  groups: NavGroup[];
  openMenu: string | null;
  onToggle: (title: string) => void;
  onClose: () => void;
};

export default function DesktopNav({ groups, openMenu, onToggle, onClose }: DesktopNavProps) {
  return (
    <nav aria-label="Navegação principal" className="hidden lg:flex lg:items-center lg:gap-1">
      {groups.map((group) => {
        if ("href" in group) {
          return group.external ? (
            <a
              key={group.title}
              href={group.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="rounded-full px-4 py-2 text-sm font-medium tracking-title text-navy-900 transition-colors hover:bg-navy-900/5"
            >
              {group.title}
            </a>
          ) : (
            <Link
              key={group.title}
              href={group.href}
              onClick={onClose}
              className="rounded-full px-4 py-2 text-sm font-medium tracking-title text-navy-900 transition-colors hover:bg-navy-900/5"
            >
              {group.title}
            </Link>
          );
        }

        const isOpen = openMenu === group.title;
        return (
          <div key={group.title} className="relative">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`panel-${group.title}`}
              onClick={() => onToggle(group.title)}
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium tracking-title text-navy-900 transition-colors hover:bg-navy-900/5"
            >
              {group.title}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 3 L5 7 L9 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            {isOpen && (
              <div
                id={`panel-${group.title}`}
                className="absolute left-0 top-full z-40 mt-2 flex gap-8 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-xl shadow-navy-900/10"
                style={{ minWidth: "22rem" }}
              >
                {group.columns.map((column, index) => (
                  <div key={column.heading ?? index} className="min-w-[12rem]">
                    {column.heading && (
                      <p className="mb-3 text-xs font-bold uppercase tracking-title text-slate-blue">
                        {column.heading}
                      </p>
                    )}
                    <ul className="flex flex-col gap-1">
                      {column.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="block rounded-lg px-2 py-1.5 text-sm text-navy-900/80 transition-colors hover:bg-tint hover:text-navy-900"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
