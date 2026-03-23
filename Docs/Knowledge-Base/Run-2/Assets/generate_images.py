#!/usr/bin/env python3
"""
DeltaX Website V2 — Atmospheric Image Generator
Uses Higgsfield API (Seedream 5.0 / Flux Pro) for premium dark visuals.
"""

import os
import sys
import shutil
from pathlib import Path

# Load Higgsfield credentials
ENV_PATH = os.path.expanduser("~/Desktop/DAVE/13-Khayāl/Tools/Brush/_Tools/Higgsfield/.env")
with open(ENV_PATH) as f:
    for line in f:
        if "=" in line and not line.startswith("#"):
            key, val = line.strip().split("=", 1)
            os.environ[key] = val

os.environ["HF_KEY"] = f"{os.environ['HIGGSFIELD_API_KEY']}:{os.environ['HIGGSFIELD_API_SECRET']}"

from higgsfield_client import SyncClient

client = SyncClient()

# Output paths
ASSETS_BASE = Path(__file__).parent
WEB_BASE = Path(os.path.expanduser(
    "~/Desktop/DAVE/09-Muscles/DeltaX/Website/Codebase/public/images"
))
WEB_BASE.mkdir(parents=True, exist_ok=True)

# Image definitions
IMAGES = [
    {
        "name": "hero-atmosphere",
        "subfolder": "hero",
        "prompt": (
            "Abstract dark atmospheric background, near-black #0A0A0B base color, "
            "with a subtle navy blue and teal light emanating from the center-top area. "
            "Deep space feeling with a single distant soft light source creating a gentle radial glow. "
            "Subtle film grain texture throughout. No objects, no text, no stars — pure atmospheric gradient. "
            "Premium, quiet, cinematic luxury aesthetic. Think Linear.dev or Vercel dark backgrounds. "
            "Ultra minimal, mostly darkness with barely perceptible light."
        ),
        "width": 1920,
        "height": 1080,
    },
    {
        "name": "system-core",
        "subfolder": "system",
        "prompt": (
            "Abstract geometric composition on near-black background (#0A0A0B). "
            "Teal/cyan accent color (#1A9BBF) at very low opacity (10-15%). "
            "Minimal geometric shapes — thin lines, circles, rectangles arranged like "
            "an abstract data visualization or constellation map. Represents strategy and intelligence. "
            "Clean, precise, mathematical. No text. Dark, premium, editorial aesthetic. "
            "Shapes should feel like they're emerging from darkness."
        ),
        "width": 800,
        "height": 800,
    },
    {
        "name": "system-code",
        "subfolder": "system",
        "prompt": (
            "Abstract geometric composition on near-black background (#0A0A0B). "
            "Gray/silver accent (#8A8A8A) at very low opacity (10-15%). "
            "Circuit-board-like patterns — thin perpendicular lines, small nodes, "
            "connection points arranged in a grid-like pattern. Represents engineering and building. "
            "Precise, structured, machine-like. No text. Dark, premium, minimal aesthetic. "
            "The gray shapes barely emerge from the darkness — subtle, not loud."
        ),
        "width": 800,
        "height": 800,
    },
    {
        "name": "system-scale",
        "subfolder": "system",
        "prompt": (
            "Abstract geometric composition on near-black background (#0A0A0B). "
            "Red accent (#D94040) at very low opacity (10-15%). "
            "Upward-pointing angular shapes — diagonal lines, ascending bars, arrow-like forms "
            "suggesting growth and upward momentum. Represents marketing and growth. "
            "Dynamic but restrained. No text. Dark, premium, editorial aesthetic. "
            "Red shapes barely visible against the darkness — ember-like glow."
        ),
        "width": 800,
        "height": 800,
    },
    {
        "name": "system-style",
        "subfolder": "system",
        "prompt": (
            "Abstract geometric composition on near-black background (#0A0A0B). "
            "Blue/violet accent (#6E75FF) at very low opacity (10-15%). "
            "Fluid, organic curved shapes — bezier curves, flowing arcs, soft rounded forms "
            "suggesting creativity and artistic expression. Represents design and brand. "
            "Elegant, artistic, fluid. No text. Dark, premium, editorial aesthetic. "
            "Blue-violet shapes flow softly through the darkness like aurora."
        ),
        "width": 800,
        "height": 800,
    },
    {
        "name": "proof-gold-dust",
        "subfolder": "proof",
        "prompt": (
            "Extremely subtle gold particle dust effect on near-black background (#0A0A0B). "
            "Gold color #f0b429 at very low opacity. Tiny floating particles of gold dust "
            "scattered sparsely across the frame, like gold flakes suspended in darkness. "
            "Minimal, barely visible — this is an overlay texture, not a focal point. "
            "No objects, no shapes — just floating gold micro-particles. "
            "Premium, quiet luxury. Think gold leaf fragments caught in dark water."
        ),
        "width": 1920,
        "height": 600,
    },
    {
        "name": "about-atmosphere",
        "subfolder": "about",
        "prompt": (
            "Abstract atmospheric background on near-black (#0A0A0B). "
            "Four very subtle colored lights positioned in four corners: "
            "teal (#1A9BBF) top-left, gray (#8A8A8A) top-right, "
            "red (#D94040) bottom-left, blue (#6E75FF) bottom-right. "
            "Each light is extremely soft, blurred, and barely visible (5-8% opacity). "
            "Like distant stage lights from far away. The center is pure darkness. "
            "No objects, no text — pure atmospheric color wash. Cinematic, premium."
        ),
        "width": 1920,
        "height": 800,
    },
    {
        "name": "404-mood",
        "subfolder": "four-oh-four",
        "prompt": (
            "Dark moody atmospheric background on near-black (#0A0A0B). "
            "Subtle red (#D94040) fog or mist emanating from the center, "
            "fading to complete darkness at the edges. Mysterious, slightly ominous "
            "but beautiful — like looking into a distant red nebula or ember cloud. "
            "Very low opacity (8-12%). No objects, no stars, no text. "
            "Pure atmospheric red haze on darkness. Cinematic, premium."
        ),
        "width": 1920,
        "height": 1080,
    },
    {
        "name": "cta-atmosphere",
        "subfolder": "cta",
        "prompt": (
            "Abstract atmospheric background on near-black (#0A0A0B). "
            "Subtle navy blue (#15339A) light emanating from the center, "
            "even more subdued than the hero — this is the 'piano' version. "
            "Soft, quiet, barely there. A whisper of blue light fading to black edges. "
            "No objects, no text — pure atmospheric navy gradient. "
            "Even more minimal than the hero background. Cinematic, premium."
        ),
        "width": 1920,
        "height": 600,
    },
    {
        "name": "og-social",
        "subfolder": "og",
        "prompt": (
            "Premium social media preview card design on near-black background (#0A0A0B). "
            "A white geometric triangle mark (like a delta/play button shape) centered, "
            "approximately 120px. Below it, the text 'Four engines. One system.' in clean "
            "white sans-serif font. At the bottom, 'thesx.co' in gold (#f0b429) small text. "
            "Subtle navy radial glow behind the triangle mark. "
            "Clean, minimal, premium tech company card. No other elements."
        ),
        "width": 1200,
        "height": 630,
    },
]

MODEL = "bytedance/seedream/v4/text-to-image"
FALLBACK_MODEL = "higgsfield-ai/soul/standard"


def generate_image(img_def):
    """Generate a single image and save to both locations."""
    import urllib.request

    name = img_def["name"]
    subfolder = img_def["subfolder"]
    prompt = img_def["prompt"]

    # Create output dirs
    asset_dir = ASSETS_BASE / "images" / subfolder
    asset_dir.mkdir(parents=True, exist_ok=True)

    asset_path = asset_dir / f"{name}.png"
    web_path = WEB_BASE / f"{name}.png"

    # Skip if already exists
    if asset_path.exists() and asset_path.stat().st_size > 0:
        print(f"  SKIP {name} (already exists)")
        return True

    print(f"  GENERATING {name}...")

    # Map aspect ratio from dimensions
    w, h = img_def["width"], img_def["height"]
    if w == 1920 and h == 1080:
        aspect = "16:9"
        res = "2K"
    elif w == 1200 and h == 630:
        aspect = "16:9"
        res = "1080p"
    elif w == 800 and h == 800:
        aspect = "1:1"
        res = "1080p"
    elif w == 1920 and h == 600:
        aspect = "16:9"
        res = "2K"
    elif w == 1920 and h == 800:
        aspect = "16:9"
        res = "2K"
    else:
        aspect = "16:9"
        res = "1080p"

    for model in [MODEL, FALLBACK_MODEL]:
        try:
            print(f"    Model: {model}")
            if "seedream" in model:
                result = client.subscribe(model, arguments={
                    "prompt": prompt, "resolution": res, "aspect_ratio": aspect
                })
            else:
                result = client.subscribe(model, arguments={
                    "prompt": prompt, "aspect_ratio": aspect, "resolution": res
                })

            # Result is a dict with images[0]['url']
            if isinstance(result, dict) and "images" in result:
                url = result["images"][0]["url"]
                urllib.request.urlretrieve(url, str(asset_path))
                shutil.copy2(str(asset_path), str(web_path))
                size_kb = asset_path.stat().st_size / 1024
                print(f"    SAVED {name} ({size_kb:.0f} KB) via {model}")
                return True
            else:
                print(f"    Unexpected result: {result}")

        except Exception as e:
            print(f"    {model} ERROR: {e}")
            continue

    return False


def main():
    print("=" * 60)
    print("  DeltaX Website V2 — Image Generation")
    print(f"  Model: {MODEL}")
    print(f"  Images: {len(IMAGES)}")
    print("=" * 60)
    print()

    results = {"success": [], "failed": []}

    for i, img in enumerate(IMAGES, 1):
        print(f"[{i}/{len(IMAGES)}] {img['name']}")
        if generate_image(img):
            results["success"].append(img["name"])
        else:
            results["failed"].append(img["name"])
        print()

    print("=" * 60)
    print(f"  DONE: {len(results['success'])} success, {len(results['failed'])} failed")
    if results["failed"]:
        print(f"  FAILED: {', '.join(results['failed'])}")
    print("=" * 60)


if __name__ == "__main__":
    main()
