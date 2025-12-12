import Link from "next/link";
import { space_mono } from '../fonts/fonts';

/**
 * Navigation link used across the site.
 *
 * @component
 * @example
 * ```tsx
 * <NavLink href="/about">About</NavLink>
 * ```
 *
 * @description
 * Renders a styled navigation anchor using the global `Link--nav` SCSS modifier
 * and the project-wide monospace font. This component ensures consistent styling
 * and reduces repeated className declarations in the Navbar.
 *
 * @param {string} href - Destination URL the link navigates to.
 * @param {React.ReactNode} children - Link content (text or elements).
 *
 * @remarks
 * - Internally wraps Next.js `<Link />`.
 * - Intended for use in navigation bars and menus.
 * - If you need a different visual variant, create a new modifier class
 *   or a separate component (e.g., `SideNavLink`).
 */
export function DrNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={`Link Link--nav ${space_mono.className}`}>
      {children}
    </Link>
  );
}
