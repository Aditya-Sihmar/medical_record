# -*- coding: utf-8 -*-
"""
Created on Sun Nov  8 21:59:55 2020

@author: amanm
"""

from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
        return "Hello World!"

if __name__ == "__main__":
    app.run()