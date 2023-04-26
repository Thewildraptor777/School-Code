import subprocess
def shFile(pathname):
    sh_file_path = pathname

    # Execute the .sh file
    subprocess.call(["/bin/bash", sh_file_path])
shFile("start/start.sh")