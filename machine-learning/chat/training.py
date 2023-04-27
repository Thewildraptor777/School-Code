import sh.setup as setup
from tensorflow.keras.layers import Dense, Activation, Dropout
from tensorflow.keras.optimizers import SGD
from tensorflow.keras.models import Sequential
from nltk.stem import WordNetLemmatizer
import nltk
import numpy as np
import pickle
import json
import random

setup.shFile("clear.sh")
###
lemmitizer = WordNetLemmatizer()
intents = json.loads(
    open("machine-learning/chat/intents.json").read())
words = []
classes = []
documents = []
ignore_letters = ['?', '.', ',', '!']
for intent in intents['intents']:
    for pattern in intent['patterns']:
        wordList = nltk.word_tokenize(pattern)
        words.extend(wordList)
        documents.append((wordList, intent['tag']))
        if intent['tag'] not in classes:
            classes.append(intent['tag'])
words = [lemmitizer.lemmatize(word)
         for word in words if word not in ignore_letters]
words = sorted(set(words))
classes = sorted(classes)
pickle.dump(words, open(
    'machine-learning/chat/data/words.pkl', 'wb'))
pickle.dump(classes, open(
    'machine-learning/chat/data/classes.pkl', 'wb'))

setup.shFile("clear.sh")
print(words)
