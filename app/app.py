import sh.setup as setup
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def submit():
    name = request.form['name']
    # Do something with the name, such as print it to the console
    print(name)
    return '  <form method="POST" action="/"><label for="name">Enter your name:</label><input type="text" id="name" name="name"><button type="submit">Submit</button></form>Success '+name

if __name__ == '__main__':
    app.run(debug=True)