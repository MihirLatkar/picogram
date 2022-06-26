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
    profile_photo = db.Column(db.String(500))
    admin = db.Column(db.Boolean)

    def __init__(self, username, password ,profile_photo):
        self.username = username
        self.password = password
        self.profile_photo = profile_photo

class post(db.Model):
    postNo = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(50))
    image = db.Column(db.String(500))
    discription = db.Column(db.String(200))
    likes=db.Column(db.Integer)

    def __init__(self,username,image,discription,likes):
        self.username=username
        self.image=image
        self.discription=discription
        self.likes=likes

class followers(db.Model):
    follower_id=db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(50))
    following_username = db.Column(db.String[50])
     
    def __init__(self, username, following_username):
        self.username = username
        self.following_username = following_username
            
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
    profile_photo = '.\images\blank-profile-circle.png'

    user = User(username,hashed_password,profile_photo)
    
    db.session.add(user)
    db.session.commit()
    return{'res':'OK','username':username} 

@app.route('/api/login/new_following', methods=['POST'])
def new_following():
    username = request.get_json()['username']
    following_username = request.get_json()['following_username']
        
    new_following = followers(username,following_username)
    db.session.add(new_following)
    db.session.commit()
    return{'res':'OK'}

@app.route('/api/login/upload_post', methods=['POST'])
def upload_post():
    username = request.get_json()['username']
    image= request.get_json()['image']
    discription = request.get_json()['discription']
    likes =0
    
    new_post = post(username,image,discription,likes)
    db.session.add(new_post)
    db.session.commit()
    return{'res':'OK'}

#@app.route('/api/login/fetch_post', methods=['POST'])
#def fetch_post():
#    username = request.get_json()['username']
#    Followers = followers.query.filter_by(username = username).all()
#    for follower in Followers:
        #




#    return{'res':'OK'}

@app.route('/api/login/user_info',methods=['POST'] )
def user_info():
    username = request.get_json()['username']
    self_user = User.query.filter_by(username=username).first()
    
    self_followings= followers.query.filter(followers.username==username).all()
    following_list=[]
    for self_following in self_followings:
       following_list.append(self_following.following_username)

    self_followers = followers.query.filter(followers.following_username == username).all()
    follower_list=[]
    for self_follower in self_followers:
       follower_list.append(self_follower.username)
       
    
    self_posts = post.query.filter(post.username==username).all()
    post_list=[]
    for self_post in self_posts:
       post_list.append(self_post.image)
    
    return{'res':'OK','profile_photo':self_user.profile_photo, 'following-list':following_list,'post_list':post_list,'follower_list':follower_list} 

if __name__ == "__main__":
  app.run(debug=True,port=5000)
