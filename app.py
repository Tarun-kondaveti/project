from flask import Flask,render_template,request,session,redirect,flash
from flask_session import Session
import sqlite3

app = Flask(__name__,static_folder='../project/src')



app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
@app.route("/",methods=["GET","POST"])
def login():
    session.clear()
    global count
    if request.method == "GET":
        return render_template("Login.js")
    else:
        connection = sqlite3.connect('code.db')
        cursor = connection.cursor()
        if not request.form.get("username"):
            flash("Username required")
            return render_template("Login.js")
        if not request.form.get("password"):
            flash("Password required")
            return render_template("Login.js") 
        count=0
        row=cursor.execute("SELECT * FROM users WHERE username=?",request.form.get("username"))
        if len(row)!=1 or row[0]["password"]!=request.form.get("password"):
            flash("Invalid username or password")
            return render_template("Login.js")
        session["user_id"]=row[0]["user_id"]
        return redirect("/")
if __name__ == '__main__':  
   app.run()