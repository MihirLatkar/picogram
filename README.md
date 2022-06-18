# picogram

## Clone 
```bash
git clone git@github.com:MihirLatkar/picogram.git
cd picogram
```

## Install dependencies

### React
```bash
npm install
```

### Flask
```bash
python3 -m venv venv # use "py -m venv venv" for windows
./venv/Scripts/activate
pip install -r requirements.txt
```

## Start Servers

### React
```bash
npm start
```

### Flask
Open new terminal
```bash
cd api
flask run
```

## Updating requirements.txt
```bash
pip freeze > requirements.txt
```