import random

# Open the input file
with open('TENSORFLOW/data.txt', 'r') as f:
    lines = f.readlines()

# Scramble the words in each line
scrambled_lines = []
for line in lines:
    words = line.strip().split()
    scrambled_words = []
    for word in words:
        # Scramble the letters of the word
        scrambled_word = ''.join(random.sample(word, len(word)))
        scrambled_words.append(scrambled_word)
    scrambled_lines.append(' '.join(scrambled_words))

# Write the scrambled lines to a new file
with open('TENSORFLOW/scrambled_data.txt', 'w') as f:
    f.write('\n'.join(scrambled_lines))