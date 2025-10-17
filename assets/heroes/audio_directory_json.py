import os
import json

# Root folder where your audio folders are located
root_folder = os.path.dirname(os.path.abspath(__file__))

# Base asset path to prepend for JSON file paths
ASSET_BASE_PATH = "/assets/heroes/miya/miya_modena_butterfly/audio"

def scan_mp3_folder(folder_path, asset_subpath):
    """Scan a folder for mp3 files and create entries with full asset paths and subtitles."""
    entries = []
    if not os.path.isdir(folder_path):
        print(f"Warning: folder not found -> {folder_path}")
        return entries

    for f in os.listdir(folder_path):
        if f.lower().endswith(".mp3"):
            base_name = os.path.splitext(f)[0]  # "ggg.mp3" -> "ggg"

            # Generate subtitle from filename
            parts = base_name.split("_")
            name_parts = [p.capitalize() for p in parts if p.lower() not in [
                "line", "standard", "ingame", "miya", "ar", "jp", "eng"
            ]]
            subtitle = " ".join(name_parts) or base_name

            entries.append({
                "name": base_name,
                "file": f"{ASSET_BASE_PATH}/{asset_subpath}/{f}",
                "translation": "",   # placeholder for English translation
                "subtitle": subtitle
            })

    print(f"Found {len(entries)} mp3 files in {folder_path}")
    return entries

audio_json = {}

# 1. Hero Selection
hero_selection_path = os.path.join(root_folder, "hero_selection")

# Background
bg_path = os.path.join(hero_selection_path, "background")
audio_json["hero_selection"] = {
    "background": scan_mp3_folder(bg_path, "hero_selection/background"),
    "dialog": {}
}

# Dialog (by language)
dialog_path = os.path.join(hero_selection_path, "dialog")
if os.path.isdir(dialog_path):
    for lang in os.listdir(dialog_path):
        lang_path = os.path.join(dialog_path, lang)
        if os.path.isdir(lang_path):
            audio_json["hero_selection"]["dialog"][lang] = scan_mp3_folder(
                lang_path, f"hero_selection/dialog/{lang}"
            )

# 2. In-Game Dialog
in_game_path = os.path.join(root_folder, "in_game_dialog")
audio_json["in_game_dialog"] = {}
if os.path.isdir(in_game_path):
    for lang in os.listdir(in_game_path):
        lang_path = os.path.join(in_game_path, lang)
        if os.path.isdir(lang_path):
            audio_json["in_game_dialog"][lang] = scan_mp3_folder(
                lang_path, f"in_game_dialog/{lang}"
            )

# 3. Main Interface Dialog
main_interface_path = os.path.join(root_folder, "main_interface_dialog")
audio_json["main_interface_dialog"] = {}
if os.path.isdir(main_interface_path):
    for lang in os.listdir(main_interface_path):
        lang_path = os.path.join(main_interface_path, lang)
        if os.path.isdir(lang_path):
            audio_json["main_interface_dialog"][lang] = scan_mp3_folder(
                lang_path, f"main_interface_dialog/{lang}"
            )

# Write JSON file
json_file = os.path.join(root_folder, "audio_files_full.json")
with open(json_file, "w", encoding="utf-8") as f:
    json.dump(audio_json, f, indent=4, ensure_ascii=False)

print(f"\nJSON file created: {json_file}")
