import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Signature OnCRE brand pattern - rendered as inline SVG so it:
 *  - adds zero network requests
 *  - never triggers layout shift (container reserves space)
 *  - stays crisp at any DPR / zoom
 *
 * Variants:
 *  - "band"    : full-bleed decorative strip (bold blue on white)
 *  - "overlay" : subtle repeating background inside a dark section
 *  - "corner"  : soft accent tucked into a corner of a card/section
 */

type Variant = "band" | "overlay" | "corner";

function PatternSvg({
  id,
  tile,
  color,
  bg,
  className,
  style,
}: {
  id: string;
  tile: number;
  color: string;
  bg?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  // A single "C" glyph built from a thick ring with a wedge cut out.
  // Drawn once inside a <pattern> and tiled by the browser - cheap to paint.
  const r = tile * 0.34;
  const cx = tile / 2;
  const cy = tile / 2;
  const stroke = tile * 0.18;

  return (
    <svg
      aria-hidden
      className={className}
      style={style}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width={tile}
          height={tile}
          patternUnits="userSpaceOnUse"
        >
          {bg ? <rect width={tile} height={tile} fill={bg} /> : null}
          <path
            d={`
              M ${cx + r} ${cy}
              A ${r} ${r} 0 1 0 ${cx + r * Math.cos(Math.PI / 4)} ${cy + r * Math.sin(Math.PI / 4)}
            `}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function BrandPattern({
  variant = "band",
  className,
  height,
}: {
  variant?: Variant;
  className?: string;
  height?: number;
}) {
  const id = useId().replace(/:/g, "");

  if (variant === "band") {
    const h = height ?? 72;
    return (
      <div
        aria-hidden
        className={cn("w-full overflow-hidden bg-white", className)}
        style={{ height: h, contain: "strict" }}
      >
        <PatternSvg
          id={`bp-band-${id}`}
          tile={Math.max(48, Math.round(h * 0.85))}
          color="hsl(var(--primary))"
        />
      </div>
    );
  }

  if (variant === "corner") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 h-56 w-56 overflow-hidden opacity-[0.10]",
          className,
        )}
        style={{ contain: "strict" }}
      >
        <PatternSvg
          id={`bp-corner-${id}`}
          tile={90}
          color="currentColor"
        />
      </div>
    );
  }

  // overlay
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-[0.08]",
        className,
      )}
      style={{ contain: "strict" }}
    >
      <PatternSvg
        id={`bp-overlay-${id}`}
        tile={110}
        color="currentColor"
      />
    </div>
  );
}
