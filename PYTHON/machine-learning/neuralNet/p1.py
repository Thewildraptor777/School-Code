import sys
import numpy as np
import matplotlib
import os
os.system('clear')
print("Python: ", sys.version)
print("Numpy: ", np.__version__)
print("Matplotlib", matplotlib.__version__)
print("")


inputs = [1, 2, 3, 2.5]


weights = [[0.2, 0.8, -0.5, 1],
           [0.5, -0.91, 0.26, -0.5],
           [-0.26, -0.27, 0.17, 0.87]]

biases = [2, 3, 0.5]
layer_outputs = []  # output of current layer
for neuron_weights, neuron_bias in zip(weights, biases):
    neuron_output = 0  # output of the given neuron
    for n_input, weight in zip(inputs, neuron_weights):
        neuron_output += n_input*weight
    neuron_output += neuron_bias
    layer_outputs.append(neuron_output)

output = np.dot(weights, inputs)+biases
print("output:\n"+str(output))
