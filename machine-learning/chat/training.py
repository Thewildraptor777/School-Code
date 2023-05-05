import os

# Define directory path as a variable
chatbot_dir = os.path.join("machine-learning", "chat")

# Import modules
import sh.setup as setup
import time
import sh
import tensorflow as tf
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
    open(os.path.join(chatbot_dir, "intents.json")).read())
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
pickle.dump(words, open(os.path.join(chatbot_dir, "data", "words.pkl"), 'wb'))
pickle.dump(classes, open(os.path.join(chatbot_dir, "data", "classes.pkl"), 'wb'))

training = []
output_empty = [0]*len(classes)
for document in documents:
    bag = []
    word_patterns = document[0]
    word_patterns = [lemmitizer.lemmatize(
        word.lower()) for word in word_patterns]
    for word in words:
        bag.append(1) if word in word_patterns else bag.append(0)

    output_row = list(output_empty)
    output_row[classes.index(document[1])] = 1
training.append([bag, output_row])
random.shuffle(training)
training = np.array(training, dtype=object)
train_x = list(training[:, 0])
train_y = list(training[:, 1])