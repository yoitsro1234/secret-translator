text = "";
word = [];

a = "q";
b = "g";
c = "d";
d = "e";
e = "-";
f = "r";
g = "t";
h = "y";
i = "_";
j = "u";
k = "i";
l = "o";
m = "n";
n = "h";
o = "+";
p = "=";
q = "{";
r = "}";
s = "w";
t = "[";
u = "]";
v = "f";
w = "|";
x = "s";
y = "/";
z = "a";

function execute(){
    text = document.getElementById("input").value;
    for(i = 0; i < text.length; i++) {
        check=text.charAt(i);

        if(check == "a"){
            word[i]=a;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "b"){
            word[i]=b;;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "c"){
            word[i]=c;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "d"){
            word[i]=d;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "e"){
            word[i]=e;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "f"){
            word[i]=f;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "g"){
            word[i]=g;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "h"){
            word[i]=h;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "i"){
            word[i]=i;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "j"){
            word[i]=j;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "k"){
            word[i]=k;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }
        
        if(check == "l"){
            word[i]=l;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "m"){
            word[i]=m;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "n"){
            word[i]=n;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "o"){
            word[i]=o;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "p"){
            word[i]=p;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "q"){
            word[i]=q;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "r"){
            word[i]=r;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "s"){
            word[i]=s;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "t"){
            word[i]=t;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "u"){
            word[i]=u;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "v"){
            word[i]=v;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "w"){
            word[i]=w;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "x"){
            word[i]=x;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "y"){
            word[i]=y;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "z"){
            word[i]=z;
            //document.getElementById("output1").innerHTML = word[i] + a;
        }
        rohan=word.join("");
    }
    document.getElementById("output1").innerHTML=rohan;
    word ="";
}
