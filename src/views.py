#-*- coding:utf-8 -*-
__author__ = 'loadman'
from flask import  Flask , request ,url_for , g,render_template

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def goIndex():
    return render_template("index.html")

@app.route("/purchase")
def purchaseHome():
    print " 以及你敢"
    return render_template("purchase.html")