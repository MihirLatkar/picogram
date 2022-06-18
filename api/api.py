from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from functools import wraps

app = Flask(__name__)

app.config['SECRET_KEY'] = 'thisissecret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    username = db.Column(db.String(50))
    password = db.Column(db.String(80))
    admin = db.Column(db.Boolean)

    def __init__(self, username, password):
        self.username = username
        self.password = password

@app.route('/api/login', methods=['POST'])
def login():
    username = request.get_json()['username']
    password = request.get_json()['password']
    user = User.query.filter_by(username=username).first()

    if user:
        if check_password_hash(user.password, password):
           return {'res':'OK','username':username}

    return {'res':'NOT_OK'}

@app.route('/api/signup', methods=['POST'])
def signup():
    username = request.get_json()['username']
    known_user=User.query.filter_by(username=username).first()
    if known_user:
        return {'res':'NOT_OK'}
    
    password = request.get_json()['password']
    hashed_password = generate_password_hash(password, method='sha256')
    user = User(username,hashed_password)
    
    db.session.add(user)
    db.session.commit()
    return{'res':'OK','username':username} 

    

if __name__ == "__main__":
  app.run(debug=True,port=5000)
