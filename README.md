# RageByters

A bite-sized arcade of single-player web games built by friends.  
Play in the browser, contribute easily, and ship new mini-games fast.

## Play
- Main portal: https://ragebyters.github.io

## How it works
- This repo (`ragebyters.github.io`) is the **hub** (home page + game list).
- Each game lives in its **own repository** and is published with GitHub Pages.
- Games are linked from the hub and load on their own Pages URL.

Example game URL pattern:
- `https://ragebyters.github.io/<repo-name>/`

## Add a new game (quick checklist)
1. Create a new repo in the org: `game-<name>` (example: `game-snake`).
2. Add an `index.html` (and any `css/`, `js/`, `assets/` you need).
3. Enable GitHub Pages: **Settings → Pages → Deploy from branch → main / (root)**.
4. Add the game link to this repo’s `index.html` so it appears on the portal.

## Contributing
- Pick any open issue or propose a new mini-game idea in Discussions/Issues.
- Keep games small and self-contained (single-player, web-first).
- PRs welcome: bug fixes, new games, UI improvements, tools, docs.

## Repo conventions
Recommended repo names:
- `game-<name>` for games (e.g., `game-2048`, `game-breakout`)
- `tools-<name>` for tools (e.g., `tools-asset-packer`)
- `shared-<name>` for shared code (optional later)

## License
MIT
