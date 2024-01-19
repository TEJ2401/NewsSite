import math
M=int(input("Enter the number of lines"))
i=0
a=[]
x=0
y=0
while(True):
    j=0
    b=input()
    if(b==""):
        break
    else:  
        arr=b.split(" ")

        if(arr[0]=="UP"):
            y+=int(arr[1])
        elif(arr[0]=="DOWN"):
            y-=int(arr[1])
        elif(arr[0]=="LEFT"):
            x-=int(arr[1])
        elif(arr[0]=="RIGHT"):
            x+=int(arr[1])
    i+=1

dist=math.sqrt(math.pow(x,2) + math.pow(y,2))
print(round(dist))




    




