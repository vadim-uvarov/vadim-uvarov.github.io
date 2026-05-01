#!/usr/bin/env bash
# Local dev deploy: install deps if needed, then start the Vite dev server on port 8080.
# Usage:
#   ./scripts/dev.sh           # start dev server (HMR)
#   ./scripts/dev.sh preview   # build for production and serve dist/ via vite preview

set -euo pipefail

cd "$(dirname "$0")/.."

if [ ! -d node_modules ]; then
  echo "[dev.sh] Installing dependencies..."
  npm install
fi

mode="${1:-dev}"

case "$mode" in
  dev)
    echo "[dev.sh] Starting Vite dev server on http://localhost:8080"
    exec npm run dev
    ;;
  preview)
    echo "[dev.sh] Building production bundle..."
    npm run build
    echo "[dev.sh] Serving dist/ via vite preview"
    exec npx vite preview --port 8080
    ;;
  *)
    echo "Unknown mode: $mode" >&2
    echo "Usage: $0 [dev|preview]" >&2
    exit 1
    ;;
esac
