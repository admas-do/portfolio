from flask import Flask,Blueprint,render_template

view=Blueprint(__name__,'views')

@view.route('/')
def portfolio():

    return render_template('index.html')