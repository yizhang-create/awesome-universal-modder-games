# Contributing

Verdicts here are **source-based assessments** — we read official docs, loader
documentation and the upstream
[universal-modder field notes](https://github.com/rehan-remade/universal-modder),
we don't hands-on test every game. That means corrections are always welcome.

## Adding or updating a game

The easiest path is the generator: add your game on
[canyoumod.com/games](https://canyoumod.com/games) (every entry gets a
starter prompt and safety notes there), then PR the verdict here.

To PR directly, edit [`data/games.json`](data/games.json) with:

| Field | Required | Notes |
| --- | --- | --- |
| `game` | ✅ | Display name, e.g. `Terraria` |
| `slug` | ✅ | Lowercase URL slug, e.g. `terraria` |
| `engine.name` | ✅ | e.g. `Unity / C#`, with a `notes` line if you have one |
| `verdict` | ✅ | `moddable` \| `experimental` \| `not_recommended` |
| `reasons` | ✅ | 1–3 short, factual reasons. Cite a loader/doc when possible |
| `route` | ✅ | One sentence: the recommended starting route |
| `aliases` | ➖ | Alternate names / spellings |
| `field_note` | ➖ | Link to the upstream field note if one exists |
| `sources` | ➖ | Links backing the verdict |

## Verdict criteria

- **`moddable`** — a documented, community-supported *offline* route exists:
  official editor, Steam Workshop, or an established loader.
- **`experimental`** — a route exists but depends on version-matched loaders,
  reverse engineering, or tools that break after patches. Say what's shaky.
- **`not_recommended`** — online play, anti-cheat, or live-service rules make
  file changes risky. We list these so people don't get banned, not as a
  challenge to work around.

## Hard rules (same as upstream)

- Offline, single-player work only.
- No anti-cheat or DRM bypasses, no cheats against other players.
- Never mark an anti-cheat game as `moddable`. When public sources disagree,
  classify conservatively and note the uncertainty.

When in doubt, open an issue with your sources and we'll classify it
together.
