# Awesome universal-modder Games

> Can you mod **your** game with [universal-modder](https://github.com/rehan-remade/universal-modder) + Claude Code?
> A community compatibility list — because the project ships 12 engine playbooks, but no list of which games actually work.

![games](https://img.shields.io/badge/games_indexed-36-a4d780?style=flat-square) ![verdicts](https://img.shields.io/badge/moddable-experimental-banned-e4bc69?style=flat-square) ![license](https://img.shields.io/badge/license-MIT-939c8d?style=flat-square)

**[universal-modder](https://github.com/rehan-remade/universal-modder)** is an open-source, MIT-licensed plugin by [`rehan-remade`](https://github.com/rehan-remade) that teaches coding agents (Claude Code, Codex, Gemini CLI, Cursor…) how to mod PC games. Since late September 2026 it has exploded on X, Reddit and YouTube — and the single most common question in every thread is:

> *"will this work on MY game?"*

This list answers it for **36 popular PC games**, with an engine note, the reason for the verdict, and the recommended route for each. Every entry links to a [canyoumod.com](https://canyoumod.com) page with prerequisites, safety notes and a **copy-paste starter prompt** for Claude Code.

## The list

### ✅ Moddable (17)

A documented, community-supported offline route exists (official editor, Steam Workshop, or an established loader like tModLoader, SMAPI, MO2). Good first projects.

| Game | Engine | Why | Recommended route |
| --- | --- | --- | --- |
| ✅ [Terraria](https://canyoumod.com/games/terraria) | .NET / XNA / FNA | tModLoader provides a documented content API. | Start with a small tModLoader item mod in a new single-player world. |
| ✅ [Stardew Valley](https://canyoumod.com/games/stardew-valley) | .NET / MonoGame | SMAPI is a maintained, game-specific mod framework. | Use SMAPI; choose a content pack for data changes and C# only when needed. |
| ✅ [Minecraft: Java Edition](https://canyoumod.com/games/minecraft) | Java / Minecraft | Fabric exposes documented hooks for Java Edition. | Choose Fabric or NeoForge for your exact Java Edition version; do not mix loaders. |
| ✅ [Celeste](https://canyoumod.com/games/celeste) | .NET / XNA / FNA | Everest provides a dedicated modding API. | Use Everest and its recommended level editor for a small original map. |
| ✅ [The Elder Scrolls V: Skyrim](https://canyoumod.com/games/skyrim) | Creation Engine | Creation Engine plugins offer a documented content route. | Start with a small Creation Kit plugin; add SKSE only when your feature needs it. |
| ✅ [Fallout 4](https://canyoumod.com/games/fallout-4) | Creation Engine | Creation Kit plugins cover many content changes. | Use a small Creation Kit plugin first; keep F4SE optional. |
| ✅ [Fallout: New Vegas](https://canyoumod.com/games/fallout-new-vegas) | Gamebryo | xNVSE provides a game-specific scripting extension. | Prefer a small GECK plugin; use xNVSE only for unsupported scripting needs. |
| ✅ [Starfield](https://canyoumod.com/games/starfield) | Creation Engine 2 | A Creation Engine content route exists. | Begin with Creation Kit content; use a compatible SFSE build only if needed. |
| ✅ [RimWorld](https://canyoumod.com/games/rimworld) | Unity / C# | XML supports a small data-first mod. | Start with XML Defs in a separate mod folder and a disposable colony. |
| ✅ [Factorio](https://canyoumod.com/games/factorio) | Custom C++ / Lua API | The developer exposes a documented Lua mod API. | Build a small Lua data mod and test it in a fresh local map. |
| ✅ [Baldur's Gate 3](https://canyoumod.com/games/baldurs-gate-3) | Divinity Engine | An official toolkit supports custom content. | Use the official Baldur's Gate 3 Toolkit for a local equipment mod. |
| ✅ [Cyberpunk 2077](https://canyoumod.com/games/cyberpunk-2077) | REDengine 4 | CD PROJEKT RED publishes modding resources. | Start with a REDmod content change; add community frameworks only for a clear requirement. |
| ✅ [Subnautica](https://canyoumod.com/games/subnautica) | Unity / C# | Nautilus provides Subnautica modding APIs. | Use the current Nautilus installation guide and a new local save. |
| ✅ [Hollow Knight](https://canyoumod.com/games/hollow-knight) | Unity / C# | A dedicated community modding API exists. | Use the Hollow Knight Modding API for a small local gameplay or UI change. |
| ✅ [Age of Empires II: Definitive Edition](https://canyoumod.com/games/age-of-empires-ii) | Genie Engine | Upstream documents a working civilization data mod. | Start with a local scenario or small data mod before attempting a full civilization. |
| ✅ [Darkest Dungeon](https://canyoumod.com/games/darkest-dungeon) | Custom engine / data files | Upstream records a working data randomizer. | Use a small standalone data mod with an isolated campaign. |
| ✅ [Hogwarts Legacy](https://canyoumod.com/games/hogwarts-legacy) | Unreal Engine | WB Games provides an official Creator Kit. | Use the official Creator Kit and in-game mod manager for supported content. |

### 🟡 Experimental (8)

A route exists but depends on version-matched loaders, reverse engineering, or tools that break after patches. Expect log-reading and pinning game versions.

| Game | Engine | Why | Recommended route |
| --- | --- | --- | --- |
| 🟡 [Valheim](https://canyoumod.com/games/valheim) | Unity / C# | Jotunn documents a Valheim-specific mod API. | Confirm Jotunn and its dependencies for your build before a small solo test. |
| 🟡 [Risk of Rain 2](https://canyoumod.com/games/risk-of-rain-2) | Unity / C# | R2API offers APIs for community mods. | Use R2API in an isolated profile after checking current compatibility. |
| 🟡 [Palworld](https://canyoumod.com/games/palworld) | Unreal Engine | UE4SS documentation points to Palworld examples. | First assess the current local single-player build and documented modding entry point. |
| 🟡 [Black Myth: Wukong](https://canyoumod.com/games/black-myth-wukong) | Unreal Engine 5 | The upstream experiment is explicitly in progress. | Read the negative field note, then assess a much smaller supported local change. |
| 🟡 [Dragon's Dogma 2](https://canyoumod.com/games/dragons-dogma-2) | RE Engine | A game-specific REFramework field note exists. | Assess REFramework support, then test a small change in an isolated offline save. |
| 🟡 [Grand Theft Auto V](https://canyoumod.com/games/gta-v) | RAGE | The upstream example is explicitly Story Mode only. | Review Story Mode compatibility only. Stop if a supported offline setup cannot be confirmed. |
| 🟡 [Hades II](https://canyoumod.com/games/hades-ii) | Custom / The Forge | A dedicated community loader exists. | Check Hell2Modding compatibility before planning a small local Lua extension. |
| 🟡 [Balatro](https://canyoumod.com/games/balatro) | LÖVE / Lua | Steamodded exposes APIs for custom content. | Use the current Steamodded documentation to scope one original Joker. |

### 🚫 Not recommended (11)

Built around online play, anti-cheat, or live-service rules. Changing files risks bans and breaks terms of service — no route is suggested.

| Game | Engine | Why | Recommended route |
| --- | --- | --- | --- |
| 🚫 [Elden Ring](https://canyoumod.com/games/elden-ring) | FromSoftware engine | The standard PC game includes anti-cheat and online features. | Do not inject into the standard client. Choose an offline title with an established supported modding route. |
| 🚫 [Fortnite](https://canyoumod.com/games/fortnite) | Unreal Engine | The live client requires anti-cheat. | Use Fortnite Creative or UEFN through Epic's supported workflow. |
| 🚫 [VALORANT](https://canyoumod.com/games/valorant) | Unreal Engine | Vanguard enforces the competitive client boundary. | Keep the client unmodified; use built-in settings and official practice modes. |
| 🚫 [Apex Legends](https://canyoumod.com/games/apex-legends) | Modified Source engine | EA prohibits third-party software that creates an unfair advantage. | Use official practice features and built-in customization. |
| 🚫 [Rust](https://canyoumod.com/games/rust) | Unity | Normal client play uses Easy Anti-Cheat. | Keep the client unchanged; consult publisher-supported server administration documentation separately. |
| 🚫 [Counter-Strike 2](https://canyoumod.com/games/counter-strike-2) | Source 2 | Valve warns that deliberate injection can lead to a VAC ban. | Use official Workshop Tools for maps; keep the competitive client unmodified. |
| 🚫 [Call of Duty: Warzone](https://canyoumod.com/games/warzone) | Proprietary engine | RICOCHET is part of the supported PC experience. | Use built-in settings and official modes only. |
| 🚫 [Genshin Impact](https://canyoumod.com/games/genshin-impact) | Unity | HoYoverse restricts unauthorized software and derivative client changes. | Keep the client unchanged; use built-in appearance and accessibility options. |
| 🚫 [Destiny 2](https://canyoumod.com/games/destiny-2) | Proprietary engine | The PC game requires BattlEye. | Use official in-game systems and supported companion services. |
| 🚫 [League of Legends](https://canyoumod.com/games/league-of-legends) | Proprietary engine | Vanguard is required for the Windows client. | Use in-game customization; avoid third-party client injectors. |
| 🚫 [Fall Guys](https://canyoumod.com/games/fall-guys) | Unity | Epic requires Easy Anti-Cheat on PC. | Use the in-game Creative tools for original levels. |

## Your game isn't listed?

Three steps before installing anything:

1. **Check the game's own documentation** — official editor, modding guide, or Steam Workshop. Confirm your exact PC edition (Steam / GOG / Game Pass builds can differ).
2. **Look for engine clues** — a `GameName_Data` folder suggests Unity; `Engine` and `.pak` files suggest Unreal. Clues, not proof.
3. **Check the safety boundary** — if it needs online play, anti-cheat, or a DRM bypass: stop. Start with an offline copy and a backup instead.

Want a game added? [Open an issue](../../issues) or [send a PR](CONTRIBUTING.md) — or [request it on canyoumod.com](https://canyoumod.com/games).

## Install universal-modder (Claude Code, 30 seconds)

```
/plugin marketplace add rehan-remade/universal-modder
/plugin install universal-modder@universal-modder
```

Using Codex, Gemini CLI, VS Code + Copilot, Cursor, skills-only or a plain git clone? All seven paths are covered in the [install guide](https://canyoumod.com/install).

## Safety ground rules

Offline, single-player work only. No anti-cheat or DRM bypasses, and no cheats against other players — the same red lines the upstream project enforces. Back up your saves before touching anything.

## Going further

- **[canyoumod.com](https://canyoumod.com)** — type any game name, get the verdict + starter prompt, free, no sign-up.
- **[Recipe Pack](https://canyoumod.com/pack)** — the step after the starter prompt: pre-flight checklists, full prompt chains, log locations, failure modes and rollback for 7 engine families ($9.9, one-time).

## Contributing

Verdicts are source-based assessments, not hands-on tests — corrections and new games are very welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). Data lives in [`data/games.json`](data/games.json).

## Credits & license

- **Unofficial.** This list and [canyoumod.com](https://canyoumod.com) are not affiliated with `rehan-remade`, Anthropic, or any game developer.
- [`universal-modder`](https://github.com/rehan-remade/universal-modder) by rehan-remade, MIT — the playbooks this list summarizes.
- Data in this repo: [MIT](LICENSE), same as upstream.
