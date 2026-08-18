"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navGroups, ctaPrincipal } from "@/data/nav";
import LogoMark from "@/components/ui/LogoMark";
import Button from "@/components/ui/Button";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavOverlay from "./NavOverlay";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleGroup = (title: string) => {
    setOpenMenu((current) => (current === title ? null : title));
  };

  return (
    // NavOverlay e MobileNav ficam FORA do <header>: o header usa backdrop-blur
    // (backdrop-filter), e qualquer ancestral com backdrop-filter/transform/filter
    // se torna o containing block dos descendentes `position: fixed` — o que
    // colapsava o overlay e o drawer para a altura do próprio header em vez de
    // cobrirem a viewport inteira.
    <>
      {/* Nav em pílula flutuante (referência: lorolabs.ai) — o <header> é
       * `fixed` e sai do flow; cada página precisa reservar espaço próprio no
       * topo do primeiro bloco (ver `pt-28 sm:pt-36` no Hero/LandingTemplate)
       * em vez de depender de padding global, pra seções full-bleed poderem
       * continuar indo até y=0 por baixo da pílula. */}
      <header className="fixed inset-x-0 top-4 z-40 px-4 sm:top-6 sm:px-6">
        <div className="relative z-50 mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-navy-900/10 bg-white/90 px-4 py-2.5 shadow-lg shadow-navy-900/10 backdrop-blur-md sm:px-6">
          <Link href="/" onClick={closeAll} aria-label="Liberado — página inicial">
            <LogoMark />
          </Link>

          <DesktopNav
            groups={navGroups}
            openMenu={openMenu}
            onToggle={toggleGroup}
            onClose={closeAll}
          />

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button href={ctaPrincipal.href} external={ctaPrincipal.external}>{ctaPrincipal.title}</Button>
            </div>

            <button
              type="button"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="rounded-full p-2 text-navy-900 hover:bg-navy-900/5 lg:hidden"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                <path d="M2 5 H20 M2 11 H20 M2 17 H20" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <NavOverlay open={openMenu !== null || mobileOpen} onClose={closeAll} />
      <MobileNav groups={navGroups} cta={ctaPrincipal} open={mobileOpen} onClose={closeAll} />
    </>
  );
}
