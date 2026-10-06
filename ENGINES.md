# Engine cheat sheet

The engine decides almost everything about a mod: which loader to use, where
content lives, and what breaks after an update. This is the quick version for
the three families most first projects land in. The full interactive versions
(with copy-paste starter prompts) live on
[canyoumod.com/engines](https://canyoumod.com/engines), and upstream ships all
twelve playbooks in
[`skills/mod-any-game/references/engines`](https://github.com/rehan-remade/universal-modder/tree/main/skills/mod-any-game/references/engines).

---

## .NET / XNA / FNA

> Terraria, Stardew Valley, and Celeste have established loaders. Start with
> the one built for your game.

**How to recognize it:** `FNA.dll`, `MonoGame.Framework.dll`, `Content/*.xnb`

**Route:** existing loader → one small content mod → in-game test

1. **Choose the game's loader** — tModLoader for Terraria, SMAPI for Stardew
   Valley, Everest for Celeste. For Stardew dialogue/texture changes, start
   with a Content Patcher pack.
2. **Isolate one experiment** — back up saves, make a test world, add one item
   with placeholder art before expanding.
3. **Build, launch, inspect** — use the loader's build workflow and logs
   (tModLoader: Workshop → Develop Mods → Build + Reload).

**Pitfalls:** match game + loader + .NET + architecture versions *together*;
keep decompiled reference material local and distribute only your own code.

**Games in this list:** Terraria · Stardew Valley · Celeste

[Full guide](https://canyoumod.com/engines/dotnet-xna) ·
[Upstream playbook](https://github.com/rehan-remade/universal-modder/blob/main/skills/mod-any-game/references/engines/dotnet-xna.md)

---

## Unity

> Find out whether your game uses Mono or IL2CPP before choosing a loader.
> The backend changes the route.

**How to recognize it:** `UnityPlayer.dll`, `<Game>_Data/`,
`Assembly-CSharp.dll` (Mono) or `GameAssembly.dll` + `global-metadata.dat`
(IL2CPP)

**Route:** identify backend → compatible community loader → minimal plugin

1. **Identify Mono or IL2CPP** — record the game and Unity versions while
   you're at it.
2. **Use the community's route** — look for the game's supported API first;
   BepInEx and MelonLoader builds must match the backend. A Mono plugin will
   not work on IL2CPP.
3. **Confirm a clean plugin load** — small offline change, then read
   `Player.log` and the loader log (`BepInEx/LogOutput.log`).

**Pitfalls:** IL2CPP stripping can remove methods a mod expects; an engine
match is **not** a compatibility guarantee — anti-cheat clients are out of
scope.

**Games in this list:** RimWorld · Subnautica · Hollow Knight · Valheim ·
Risk of Rain 2

[Full guide](https://canyoumod.com/engines/unity) ·
[Upstream playbook](https://github.com/rehan-remade/universal-modder/blob/main/skills/mod-any-game/references/engines/unity.md)

---

## Creation Engine / Gamebryo

> For Bethesda single-player games, begin with records and a separate mod
> profile. Native plugins come later.

**How to recognize it:** `Data/*.esm`, `*.bsa`/`*.ba2` archives,
`SkyrimSE.exe` / `Fallout4.exe`

**Route:** separate profile → record or asset edit → conflict check

1. **Create an isolated profile** — Mod Organizer 2, new profile, backed-up
   saves, recorded edition/runtime.
2. **Choose the smallest tool** — xEdit for record changes, Creation Kit for
   world/quest editing; script extenders only when the idea requires them.
3. **Inspect conflicts and test** — check load order and conflicting records
   on a disposable save.

**Pitfalls:** runtime updates break script-extender plugins (verify the exact
supported version); removing scripted mods mid-save can damage the save.
Online clients (Fallout 76) are excluded.

**Games in this list:** Skyrim · Fallout 4 · Fallout: New Vegas · Starfield

[Full guide](https://canyoumod.com/engines/creation-engine) ·
[Upstream playbook](https://github.com/rehan-remade/universal-modder/blob/main/skills/mod-any-game/references/engines/bethesda.md)

---

## All engines in the current list

| Engine family | Games |
| --- | --- |
| Unity / C# (+ Unity) | RimWorld, Subnautica, Hollow Knight, Valheim, Risk of Rain 2, Rust, Genshin Impact, Fall Guys |
| Unreal Engine (+ UE5) | Palworld, Hogwarts Legacy, Fortnite, VALORANT, Black Myth: Wukong |
| .NET / XNA / FNA / MonoGame | Terraria, Stardew Valley, Celeste |
| Creation Engine / Gamebryo (+ CE2) | Skyrim, Fallout 4, Fallout: New Vegas, Starfield |
| Proprietary | Call of Duty: Warzone, Destiny 2, League of Legends |
| Java | Minecraft: Java Edition |
| Everything else (one each) | Factorio (Lua API) · Baldur's Gate 3 (Divinity) · Cyberpunk 2077 (REDengine) · AoE2 DE (Genie) · Darkest Dungeon (data files) · Dragon's Dogma 2 (RE Engine) · GTA V (RAGE) · Elden Ring (FromSoftware) · Hades II (The Forge) · Balatro (LÖVE) · Apex Legends (Source) · Counter-Strike 2 (Source 2) |

Upstream covers twelve families in total — the remaining ones
(Minecraft, Source 1/2, RE Engine, native C++, decompilation-era games…)
each have their own playbook in
[the engines directory](https://github.com/rehan-remade/universal-modder/tree/main/skills/mod-any-game/references/engines).
