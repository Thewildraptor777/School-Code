import tensorflow as tf
import string

# Load the dataset
with open('TENSORFLOW/data.txt', 'r') as f:
    data = f.read().splitlines()

# Preprocess the dataset
correct_words = set(data[::2])
incorrect_words = set(data[1::2])
all_words = correct_words.union(incorrect_words)

# Create a dictionary to map words to indices
word_to_idx = {word: i for i, word in enumerate(all_words)}

# Convert the words to numerical features
X = []
y = []
for word in correct_words:
    X.append([1 if i == word_to_idx[word] else 0 for i in range(len(all_words))])
    y.append(1)
for word in incorrect_words:
    X.append([1 if i == word_to_idx[word] else 0 for i in range(len(all_words))])
    y.append(0)

# Convert the data to NumPy arrays
X = tf.convert_to_tensor(X, dtype=tf.float32)
y = tf.convert_to_tensor(y, dtype=tf.float32)

# Split the data into training and testing sets
X_train, X_test = X[:800], X[800:]
y_train, y_test = y[:800], y[800:]

# Define the neural network model
model = tf.keras.models.Sequential([
  tf.keras.layers.Dense(64, activation='relu', input_shape=(len(all_words),)),
  tf.keras.layers.Dense(32, activation='relu'),
  tf.keras.layers.Dense(1, activation='sigmoid')
])

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))

# Evaluate the model
model.evaluate(X_test, y_test)

# Save the model
model.save('spellcheck_model')