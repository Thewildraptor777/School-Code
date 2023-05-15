import tensorflow as tf
import string

# Load the pre-trained model
model = tf.keras.models.load_model('./spellcheck_model')

# Define a function to preprocess the input text


def preprocess_text(text):
    # Convert the text to lowercase
    text = text.lower()

    # Remove any punctuation
    text = text.translate(str.maketrans('', '', string.punctuation))

    # Split the text into individual words
    words = text.split()

    return words

# Define a function to predict if a word is spelled correctly


def is_word_spelled_correctly(word):
    # Preprocess the word
    words = preprocess_text(word)

    # Convert the words to a tensor
    tensor = tf.constant(words)

    # Get the predicted probabilities for each word
    probabilities = model.predict(tensor)

    # Get the index of the word with the highest probability
    max_index = tf.argmax(probabilities, axis=1)

    # Get the predicted class (1 = spelled correctly, 0 = spelled incorrectly)
    predicted_class = max_index.numpy()[0]

    return predicted_class == 1


# Example usage
word = "Hello"
if is_word_spelled_correctly(word):
    print(word, "is spelled correctly!")
else:
    print(word, "is not spelled correctly.")
