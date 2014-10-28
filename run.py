#-*- coding:utf-8 -*-
__author__ = 'loadman'

from flask import  Flask , request ,url_for , g,render_template
from src.views import app

if __name__ == '__main__':
    app.run()
