"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavGroup, NavLink } from "@/data/nav";
import Button from "@/components/ui/Button";

type MobileNavProps = {
  groups: NavGroup[];
  cta: NavLink;
  open: boolean;
  onClose: () => void;
};

export default function MobileNav({ groups, cta, open, onClose }: MobileNavProps) {
  // Acordeão independente do estado do menu desktop — cada grupo já existe no
  // DOM (h4 + ul), só a altura visível muda.
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleGroup = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm overflow-y-auto bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between border-b border-navy-900/10 px-6 py-4">
        <span className="text-subtitle text-navy-900">Menu</span>
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={onClose}
          className="rounded-full p-2 text-navy-900 hover:bg-navy-900/5"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 2 L16 16 M16 2 L2 16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <nav aria-label="Navegação mobile" className="flex flex-col gap-2 px-4 py-4">
        {groups.map((group) => {
          if ("href" in group) {
            return group.external ? (
              <a
                key={group.title}
                href={group.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="border-b border-navy-900/10 px-2 py-3 text-subtitle text-navy-900"
              >
                {group.title}
              </a>
            ) : (
              <Link
                key={group.title}
                href={group.href}
                onClick={onClose}
                className="border-b border-navy-900/10 px-2 py-3 text-subtitle text-navy-900"
              >
                {group.title}
              </Link>
            );
          }

          const isExpanded = Boolean(expanded[group.title]);
          return (
            <div key={group.title} className="border-b border-navy-900/10 pb-2">
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={`mobile-panel-${group.title}`}
                onClick={() => toggleGroup(group.title)}
                className="flex w-full items-center justify-between px-2 py-3 text-left text-subtitle text-navy-900"
              >
                {group.title}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                >
                  <path d="M1 3 L5 7 L9 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>

              <div
                id={`mobile-panel-${group.title}`}
                className={`grid overflow-hidden transition-all duration-200 ${
                  isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  {group.columns.map((column, index) => (
                    <div key={column.heading ?? index} className="px-2 pb-2">
                      {column.heading && (
                        <h4 className="mb-1 mt-2 text-xs font-bold uppercase tracking-title text-slate-blue">
                          {column.heading}
                        </h4>
                      )}
                      <ul>
                        {column.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="block rounded-lg px-2 py-2 text-sm text-navy-900/80 hover:bg-tint"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      <div className="px-6 py-4">
        <Button href={cta.href} className="w-full">
          {cta.title}
        </Button>
      </div>
    </div>
  );
}
