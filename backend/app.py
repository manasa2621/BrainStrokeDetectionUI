from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
from sqlalchemy import text
from bcrypt import hashpw, gensalt

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/artist'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'mysecretkey'  # Change this to a secure random key in production

jwt = JWTManager(app)
db = SQLAlchemy(app)

class UserRegistration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    artist_id = db.Column(db.Integer)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

def get_artists():
    query = text("SELECT id, email, name, password FROM artists")

    connection = db.engine.connect()

    result = connection.execute(query)

    artists = [dict(row._mapping) for row in result.fetchall()]

    result.close()

    connection.close()

    return artists

@app.route('/artists')
def artists():
    artists_data = get_artists()
    return jsonify(artists_data)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json

    artist_id = data.get('artist_id')
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not artist_id or not username or not email or not password:
        return jsonify({'message': 'Missing required fields'}), 400

    # Encrypt the password before storing
    hashed_password = hashpw(password.encode('utf-8'), gensalt()).decode('utf-8')

    user = UserRegistration(artist_id=artist_id, username=username, email=email, password=hashed_password)

    try:
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'User registered successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Failed to register user', 'error': str(e)}), 500
@app.route('/login', methods=['POST'])
def login():
    data = request.json

    artist_id = data.get('artist_id')
    password = data.get('password')

    if not artist_id or not password:
        return jsonify({'message': 'Missing artist ID or password'}), 400

    user = UserRegistration.query.filter_by(artist_id=artist_id).first()

    if not user:
        return jsonify({'message': 'User not found'}), 404

    if not hashpw(password.encode('utf-8'), user.password.encode('utf-8')) == user.password.encode('utf-8'):
        return jsonify({'message': 'Invalid credentials'}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 200


if __name__ == '__main__':
    app.run(debug=True)
