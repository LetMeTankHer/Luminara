import os

hero = "layla"
skins = [
    "energy_gunner",
    "green_flash",
    "bunny_babe",
    "cannon_and_roses",
    "blue_spectre",
    "classic_malefic_gunner",
    "saber_breacher",
    "blazing_gun",
    "miss_hikari",
    "twilight_waltz",
    "midnight_waltz",
    "sunset_waltz",
    "paranormal_operative"
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
