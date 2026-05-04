# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**墨枢 (MoShu)** is a Kindle-compatible navigation site optimized for e-ink displays. It features resource aggregation, book recommendations, and integrated tools. The site is deployed at https://cons8.github.io/r

## Architecture

### Page Structure
- **`index.html`** - Main landing page with tab-based navigation
- **`pages/`** - Secondary pages (Clock, Timer, Games, Settings, Suggestion pages)
- **`pages/games/`** - Individual game pages (2048, Gomoku, Snake, Sudoku, Tic-Tac-Toe, LuckyGrid)

### JavaScript Modules
- **`script/index.js`** - Main page logic: welcome message, logo visibility, font settings, localStorage config
- **`script/index_tabs.js`** - Tab switching logic (`changeTab()` filters apps by category)
- **`script/common.js`** - Shared popup/modal utilities (`showLog()`, `hideLog()`)
- **`script/indexUserAppList.js`** - User-added app list from localStorage

### CSS Organization
- **`css/index.css`** - Main page styles (header, app-list, tabs, popup)
- **`css/style.css`** - Shared popup/modal styles
- **`css/font.css`** - Font definitions
- **`css/custom.css`** - Custom/additional styles

### App Categorization
Apps use CSS classes for filtering:
- `tool` - Utility apps (Clock, Timer, Pomodoro)
- `game` - Games (2048, Gomoku, Snake, Sudoku, etc.)
- `webside` - External website links
- `recommend` - Featured on recommend tab
- `display-none` - Hidden by default

### User Configuration
Stored in localStorage as JSON (`config` key):
```json
{
  "message": "welcome text with <br> for newlines",
  "logo": true,
  "font": "font-default"
}
```

User-added apps stored in localStorage (`userAppList` key) as array of `{name, href}` objects.

## Development

This is a **pure static site** - no build tools, npm, or bundlers required. Simply edit the HTML/CSS/JS files directly.

To test locally, open `index.html` in a browser or serve with any static server:
```bash
python -m http.server 8000
# or
npx serve .
```

## Browser Compatibility Constraint

**IMPORTANT**: This project targets older Kindle devices with outdated browsers. Newer JavaScript features (ES6+) and CSS properties may not be supported.

- Avoid using ES6+ features (const/let, arrow functions, template literals, for...of, etc.) - use `var` and traditional function syntax instead
- Avoid modern CSS (flex gap, CSS Grid with subgrid, etc.) - use older layout methods
- Avoid newer DOM APIs if not widely supported

**Before using any modern JavaScript or CSS features, you MUST confirm with the user first.**

## Design Principles
- Pure color backgrounds (optimized for e-ink)
- Inline SVG icons (no external icon dependencies)
- Compatible with low-refresh-rate displays
- Mobile-first responsive layout
