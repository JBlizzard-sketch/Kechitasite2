#!/usr/bin/env bash
set -euo pipefail
mkdir -p public/images
echo "Downloading curated images (Unsplash) into public/images/ ..."
curl -L -o public/images/hero.jpg "https://images.unsplash.com/photo-1520975910725-a6b2ee4f6ecf?auto=format&fit=crop&w=1600&q=80"
curl -L -o public/images/market.jpg "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
curl -L -o public/images/testimonial1.jpg "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
curl -L -o public/images/testimonial2.jpg "https://images.unsplash.com/photo-1545996124-31c5569d7f44?auto=format&fit=crop&w=400&q=80"
curl -L -o public/images/product.jpg "https://images.unsplash.com/photo-1515165562835-c9d1d6d0b2e8?auto=format&fit=crop&w=1200&q=80"
# icons (feather)
mkdir -p public/icons
curl -L -o public/icons/dollar-sign.svg "https://raw.githubusercontent.com/feathericons/feather/master/icons/dollar-sign.svg" || true
curl -L -o public/icons/smartphone.svg "https://raw.githubusercontent.com/feathericons/feather/master/icons/smartphone.svg" || true
curl -L -o public/icons/trending-up.svg "https://raw.githubusercontent.com/feathericons/feather/master/icons/trending-up.svg" || true
echo "Done."
