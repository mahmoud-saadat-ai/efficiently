"""
Rebuild logo PNGs from assets/logo-clean.png:
- Single solid brand green (#00a693) for all non-background pixels
- White / near-white treated as transparent (works on dark site + letter counters)
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "logo-clean.png"
OUT_WORDMARK = ROOT / "assets" / "logo-crisp.png"
OUT_ICON = ROOT / "assets" / "favicon-192.png"

BRAND = (0, 166, 147)


def flatten_logo(im: Image.Image) -> Image.Image:
    im = im.convert("RGBA")
    w, h = im.size
    out = Image.new("RGBA", (w, h))
    src = im.load()
    dst = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = src[x, y]
            if a < 35:
                dst[x, y] = (0, 0, 0, 0)
                continue
            # Letter counters and stray white
            if r > 245 and g > 245 and b > 245:
                dst[x, y] = (0, 0, 0, 0)
                continue
            # Background-ish light pixels (anti-alias to white)
            if r + g + b > 720 and g < 200:
                dst[x, y] = (0, 0, 0, 0)
                continue
            dst[x, y] = (*BRAND, 255)
    return out


def crop_icon_region(im: Image.Image) -> Image.Image:
    """Left gear/globe mark only — split from wordmark using a horizontal gap in alpha."""
    w, h = im.size
    col_sum = [sum(im.getpixel((x, y))[3] for y in range(h)) for x in range(w)]
    # Long run of near-empty columns separates icon from "EFFICIENTLY"
    run = 0
    split = None
    for x in range(w):
        if col_sum[x] < 80:
            run += 1
            if run >= 20 and x > 40:
                split = x - run + 1
                break
        else:
            run = 0
    if split is None:
        split = int(w * 0.22)
    sub = im.crop((0, 0, max(split, 1), h))
    bbox = sub.getbbox()
    if not bbox:
        return im
    return im.crop(bbox)


def main() -> None:
    src = Image.open(SRC)
    flat = flatten_logo(src)
    flat.save(OUT_WORDMARK, optimize=True)

    icon = crop_icon_region(flat)
    # Square canvas, centered vertically
    iw, ih = icon.size
    side = max(iw, ih)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    ox = (side - iw) // 2
    oy = (side - ih) // 2
    square.paste(icon, (ox, oy))
    square.resize((192, 192), Image.Resampling.LANCZOS).save(OUT_ICON, optimize=True)
    print("Wrote", OUT_WORDMARK)
    print("Wrote", OUT_ICON)


if __name__ == "__main__":
    main()
