import os
import shutil

# Current directory
current_dir = os.getcwd()

# Loop through all items in the current directory
for item in os.listdir(current_dir):
    folder_path = os.path.join(current_dir, item)
    
    # Check if it's a directory
    if os.path.isdir(folder_path):
        portraits_path = os.path.join(folder_path, 'portraits')
        
        # Check if the 'portraits' folder exists
        if os.path.exists(portraits_path) and os.path.isdir(portraits_path):
            # Loop through all files in the portraits folder
            for file_name in os.listdir(portraits_path):
                file_path = os.path.join(portraits_path, file_name)
                
                # Only copy files (ignore subfolders)
                if os.path.isfile(file_path):
                    shutil.copy(file_path, current_dir)
                    print(f"Copied {file_name} to {current_dir}")

print("All portraits copied successfully!")
