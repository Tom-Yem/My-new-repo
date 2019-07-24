import turtle,time
wn=turtle.Screen()
wn.bgcolor('sky blue')
wn.title("Tom's Turtile")
tom=turtle.Turtle()
v=['white','gray','white','purple','light green']
for i in range(5):
    tom.forward(150)
    tom.right(144)
    tom.color(v[i])
turtle.done()
