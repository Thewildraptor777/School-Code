# simple chat bot
import os
import random
import time
# var
botName="Bot: "
USER = os.getenv('USER')
PASSWORD = os.environ.get('PASSWORD')
clear=False
# functions
def write():
    print("")
    print(keywords)
    print(responses)
    print("")
    f=open("data/bot.runs", "r")
    file=f.read()
    print(int(file))
    f.close()



# greetings and goodbyes
greetings = ["Hi", "Nice to meet you", "greetings"]
goodbyes = ["Bye", "See you later", "See you soon"]
# keywords
keywords = []
f = open("data/keywords.txt", "a")
f = open("data/keywords.txt", "r")
file = f.read()
start = 0
for index in range(len(file)):
    char1 = file[index-1]
    char2 = file[index]
    if (char1 == "|" and char2 == "|"):
        end = index-1
        object = file[start:end:1]
        start = end+2
        keywords.append(object)


# responses
responses = []
f = open("data/responses.txt", "a")
f = open("data/responses.txt", "r")
file = f.read()
start = 0
for index in range(len(file)):
    char1 = file[index-1]
    char2 = file[index]
    if (char1 == "|" and char2 == "|"):
        end = index-1
        object = file[start:end:1]
        start = end+2
        responses.append(object)
# chat
os.system("clear")
print("")
print("Type bye to save your entries")
print("")
print(botName+random.choice(greetings))
print("")
turnoff = False
print(botName+"How can I help you? ")
userInput = input()
userInput = userInput.lower()

while (userInput != "bye" and turnoff == False):
    if (userInput == ""):
        print(botName+"please enter a word")
    elif (userInput == "clear"):
        os.system('clear')
        prompt = input("username: ")
        if (prompt == USER):
            prompt = input("password: ")
            if (prompt == PASSWORD):
                os.system('clear')
                clear = True
                turnoff = True
                print("")
                print(botName+"Cleared")
                os.system('clear')
            else:
                print(botName+"wrong")
        else:
            print(botName+"wrong")
    elif (userInput == "dev"):
        os.system('clear')
        prompt = input("username: ")
        if (prompt == USER):
            prompt = input("password: ")
            if (prompt == PASSWORD):
                os.system('clear')
                dev = True
                if (dev == True):
                    write()
            else:
                print(botName+"wrong")
        else:
            print(botName+"wrong")
    else:
        dev = False
        clear = False
        keyword_found = False

        for index in range(len(keywords)):
            if (keywords[index] in userInput):
                print(botName+responses[index])
                keyword_found = True
        if (keyword_found == False):
            print(botName+"i don't know that word")
            new_keyword = userInput
            keywords.append(new_keyword)
            print(botName+"how should i respond?")
            new_response = input()
            if (new_response == ""):
                print(botName+"please enter a word")
            else:
                responses.append(new_response)
                print(botName+"adding "+userInput+" to keywords")        


    if (turnoff == False):
        print(botName+"How can I help you?")
        userInput = input()
        userInput = userInput.lower()   
         
if (turnoff != True):
    os.system('clear')
    print("")
    print(random.choice(goodbyes))
    print("")
    time.sleep(2)
    os.system('clear')
if os.path.exists("data/keywords.txt"):
    os.remove("data/keywords.txt")
else:
    print("The file does not exist")
if os.path.exists("data/responses.txt"):
    os.remove("data/responses.txt")
else:
    print("The file does not exist")
# add to keyword.txt
f = open("data/keywords.txt", "a")
for index in range(len(keywords)):
    f.write(keywords[index]+"||")
f.write("$")
f.close()
# add to responses.txt
f = open("data/responses.txt", "a")
for index in range(len(responses)):
    f.write(responses[index]+"||")
f.write("$")
f.close()
if (clear == True):
    # add to keyword.txt
    f = open("data/keywords.txt", "w")
    f.write("")
    f.close()
    # add to responses.txt
    f = open("data/responses.txt", "w")
    f.write("")
    f.close()
f=open("data/bot.runs", "r")
file=f.read()
file=(int(file[0])+1)
f=open("data/bot.runs", "w")
f.write(str(file))
f.close()