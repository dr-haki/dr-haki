"use client"

import { space_mono } from '../fonts/fonts';
import "./DrButton.scss";

type DrButtonVariant = "primary" | "secondary";

interface DrButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 variant: DrButtonVariant;
}

/**
 * Button component used across the site.
 *
 * @component
 * @example
 * ```tsx
 * <DrButton variant="primary">About</DrButton>
 * ```
 *
 * @description
 * Renders a styled button using the global `DrButton` SCSS modifier
 * and the project-wide monospace font. This component ensures consistent styling
 * and reduces repeated className declarations for each Button.
 *
 * @param {string} variant - Button variant to display.
 * @param {React.ReactNode} children - Button content (text or elements).
 * @param {onClick} onClick - Method triggered when button is clicked. 
 *
 * @remarks
 * - Internally wraps basic `<button />`.
 * - If you need a different visual variant, create a new modifier class
 *   or a separate component (e.g., `DrButtonMotion`).
 */
export function DrButton({ variant, children, ...rest }: DrButtonProps) {
  return (
    <button 
        type='button'
        className={`DrButton DrButton--${variant} ${space_mono.className}`}
        {...rest}
        >
        {children}
    </button>
  );
}