import importlib.util
import subprocess
import time
subdir = "machine-learning/chat/sh/"


def shFile(pathname):
    sh_file_path = subdir + pathname
    subprocess.call(["/bin/bash", sh_file_path])


def ask():
    valid_input = False
    while not valid_input:
        user_input = input(
            "Do you want to install the dependencies? (y/n)").lower()
        if user_input == 'y':
            shFile("setup.sh")
            print("Dependencies installed successfully!")
            time.sleep(1)
            shFile("clear.sh")
            valid_input = True
        elif user_input == 'n':
            print("Dependencies will not be installed.")
            time.sleep(1)
            shFile("clear.sh")
            valid_input = True
        else:
            print("Invalid input. Please enter 'y' or 'n'.")


dependencies = {
    "sh": ["sh"],
    "tensorflow": ["tensorflow"],
    "nltk": ["nltk"],
    "numpy": ["numpy"],
    "pickle": ["pickle"],
    "json": ["json"],
    "random": ["random"],
}

# Check if dependencies are installed
missing_deps = []
for dep in dependencies:
    if importlib.util.find_spec(dependencies[dep][0]) is None:
        missing_deps.append(dep)

# Install missing dependencies if any
if missing_deps:
    print("The following dependencies are missing: ", ", ".join(missing_deps))
    ask()
    time.sleep(2)
    shFile("clear.sh")
else:
    print("All dependencies are installed")
    time.sleep(2)
    shFile("clear.sh")
