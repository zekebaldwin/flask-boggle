from boggle import Boggle
from flask import Flask, render_template, request, session, jsonify

boggle_game = Boggle()

app = Flask(__name__)
app.config["SECRET_KEY"] = "asgasrgfsdfgsdf"


@app.route("/")
def board():
    board = boggle_game.make_board()
    session['board'] = board
    return render_template("home.html", board=board)

@app.route("/valid")
def valid():
    word = request.args["word"]
    board = session['board']
    res = boggle_game.check_valid_word(board, word)
    return jsonify({'results': res})

