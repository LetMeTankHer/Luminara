import os

hero = "baxia"

skins = [
    "mystic_tortoise",
    "wild_totem",
    "badass_roller",
    "ba_tender",
    "black_tortoise",
    "dauntless_shield"
]

avatars_dir = "."

for i, skin in enumerate(skins, start=1):
    old_file = os.path.join(avatars_dir, f"a ({i}).png")
    new_file = os.path.join(avatars_dir, f"{hero}_{skin}_avatar_default.png")

    if os.path.exists(old_file):
        os.rename(old_file, new_file)
        print(f"✅ Renamed {old_file} -> {new_file}")
    else:
        print(f"⚠️ File not found: {old_file}")
