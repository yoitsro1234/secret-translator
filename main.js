text = "";

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
    word = text;
    for(i = 0; i < text.length; i++) {
        check=text.charAt(i);

        if(check == "a"){
            word.replace("a", a);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "b"){
            word.replace("b", b);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "c"){
            word.replace("c", c);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "d"){
            word.replace("d", d);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "e"){
            word.replace("e", e);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "f"){
            word.replace("f", f);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "g"){
            word.replace("g", g);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "h"){
            word.replace("h", h);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "i"){
            word.replace("i", i);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "j"){
            word.replace("j", j);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "k"){
            word.replace("k", k);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }
        
        if(check == "l"){
            word.replace("l", l);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "m"){
            word.replace("m", m);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "n"){
            word.replace("n", n);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "o"){
            word.replace("o", o);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "p"){
            word.replace("p", p);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "q"){
            word.replace("q", q);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "r"){
            word.replace("r", r);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "s"){
            word.replace("s", s);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "t"){
            word.replace("t", t);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "u"){
            word.replace("u", u);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "v"){
            word.replace("v", v);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "w"){
            word.replace("w", w);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "x"){
            word.replace("x", x);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "y"){
            word.replace("y", y);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }

        if(check == "z"){
            word.replace("z", z);
            //document.getElementById("output1").innerHTML = word[i] + a;
        }
        document.getElementById("output1").innerHTML=word;
    }

}