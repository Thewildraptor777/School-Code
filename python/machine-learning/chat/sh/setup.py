import subprocess
subdir = "/workspace/python/machine-learning/chat/sh/"


def shFile(pathname):
    sh_file_path = subdir+pathname

    # Execute the .sh file
    subprocess.call(["/bin/bash", sh_file_path])


shFile("setup.sh")
