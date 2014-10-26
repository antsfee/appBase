__author__ = 'loadman'
#/usr/lib/python2.7
#-*- coding:utf-8 -*-
from flask import  Flask , request ,url_for , g,render_template
from src.views import app

if __name__ == '__main__':
    app.run()
