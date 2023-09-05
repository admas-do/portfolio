from flask import Flask
from views import view

app=Flask(__name__,template_folder='templets')
app.register_blueprint(view,url_prefix='/')


if __name__ == '__main__':
    app.run(debug=True)