function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
const history = [];
// var history = [];
let x = "";
let string = "";
let buttons = document.querySelectorAll('.button');
var count =1;
let toPrint;
console.log(history)
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    x = x+e.target.innerHTML;
    x = x.replace('<span>','');
    x = x.replace('</span>','');
    console.log(x);
    if (x == '='){
        history.push("[")
        const date = new Date().toLocaleDateString();
        history.push(date)
        history.push("] ")
        history.push("[")
        const time = new Date().toLocaleTimeString();
        history.push(time)
        history.push("]    -->      ")
        
        history.push(string);
        history.push(" = ")
        string = eval(string);
        document.querySelector('input').value = string;
        x = '';
        history.push(string);
        history.push("\n");
        
    }
    else if (x == 'C'){
        string = "";
        document.querySelector('input').value = string;
        x = '';
    }
    else if (x == 'X'){
        string += x;
        string = string.replace('X','*');
        console.log(string);
        document.querySelector('input').value = string;
        x = '';
    }
    else if (x == '+/-'){
        string = string *-1;
        console.log(string);
        document.querySelector('input').value = string;
        x='';
    }
    else if(x == '÷'){
        string += x;
        string = string.replace('÷','/');
        console.log(string);
        document.querySelector('input').value = string;
        x = '';
    }
    else if(x == '%'){
        let y = string;
        string = '';
        string += (y/100);
        string +='*';
        console.log(string);
        document.querySelector('input').value = string;
        x ='';
    }
    else if (x == 'log'){
        history.push("[")
        const date = new Date().toLocaleDateString();
        history.push(date)
        history.push("] [")
        
        const time = new Date().toLocaleTimeString();
        history.push(time)
        history.push("]    -->      ")
        history.push("log("+string)
        history.push(")")
        string = Math.log10(string);
        history.push(" = ")
        history.push(string)
        document.querySelector('input').value = string;
        x='';
        history.push("\n");
    }
    else{
        // console.log(e.target)
        string = string + e.target.innerHTML;
        string = string.replace('<span>','');
        string = string.replace('</span>','');
        document.querySelector('input').value = string;
        x = ''
    }
})
})
function myFunction(){
    var st = document.getElementById("basic");
    var st1 = document.getElementById("advanced");
    var con = document.getElementById("i1");
    var con1 = document.getElementById("i2");
    if (count == 0){
        st.style.display = 'flex';
        // st.style.visibility = 'visible';
        st1.style.display = 'none';
        st.style.justifyContent = 'center';
        con.style.display = 'flex';
        con1.style.display = 'none';
        count = 1;
    }
    else{
        // st.style.visibility = 'hidden';
        if (string == ''){
            st.style.display = 'none';
            st1.style.display = 'flex';
            st1.style.justifyContent = 'center';
            con.style.display = 'none';
            con1.style.display = 'flex';
            count = 0;
        }
        else{
            document.getElementById('1').value = eval(string);
            st.style.display = 'none';
            st1.style.display = 'flex';
            st1.style.justifyContent = 'center';
            con.style.display = 'none';
            con1.style.display = 'flex';
            count = 0;
        }
        
    }
}
let x1 = '';
let string1 = '';
let buttons1 = document.querySelectorAll('.button1');
// var count =1;
Array.from(buttons1).forEach((button1)=>{
    button1.addEventListener('click', (e1)=>{
        x1 = x1+e1.target.innerHTML;
        x1 = x1.replace('<span>','');
        x1 = x1.replace('</span>','');
    console.log(x1);
    if (x1 == '='){
        string1 = eval(string1);
        document.getElementById('1').value = string1;
        x1 = '';
    }
    else if (x1 == 'C'){
        string1 = "";
        document.getElementById('1').value = string1;
        x1 = '';
    }
    else if (x1 == 'X'){
        string1 += x1;
        string1 = string1.replace('X','*');
        console.log(string1);
        document.getElementById('1').value = string1;
        x1 = '';
    }
    else if(x1 == '÷'){
        string1 += x1;
        string1 = string1.replace('÷','/');
        console.log(string1);
        document.getElementById('1').value = string1;
        x1 = '';
    }
    else if(x1 == '%'){
        let y1 = string1;
        string1 = '';
        string1 += (y1/100);
        string1 +='*';
        console.log(string1);
        document.getElementById('1').value = string1;
        x1 ='';
    }
    else if (x1 == '+/-'){
        string1 = string1 *-1;
        console.log(string1);
        // document.querySelector('input').value = string1;
        document.getElementById('1').value = string1;
        x1='';
    }
    else if (x1 == 'LCM'){
        history.push("[")
        const date = new Date().toLocaleDateString();
        history.push(date)
        history.push("] ")
        history.push("[")
        const time = new Date().toLocaleTimeString();
        history.push(time)
        history.push("]    -->      ")
        let i = string1.split(',');
        
        let a1 = i[0];
        let a2 = i[1];
        string1 = lcm(a1,a2);
        history.push("LCM("+a1+","+a2+") = "+string1)
        document.getElementById('1').value = string1;
        x1='';
        history.push("\n")
    }
    else if (x1 == 'HCF'){
        history.push("[")
        const date = new Date().toLocaleDateString();
        history.push(date)
        history.push("] ")
        history.push("[")
        const time = new Date().toLocaleTimeString();
        history.push(time)
        history.push("]    -->      ")
        let i = string1.split(',');
        
        let a1 = i[0];
        let a2 = i[1];
        string1 = gcd(a1,a2);
        history.push("HCF("+a1+","+a2+") = "+string1)
        document.getElementById('1').value = string1;
        x1='';
        history.push("\n")
    }
    else if(x1 == 'sin'){
        history.push("[")
        const date = new Date().toLocaleDateString();
        history.push(date)
        history.push("] ")
        history.push("[")
        const time = new Date().toLocaleTimeString();
        history.push(time)
        history.push("]    -->      ")
        history.push("sin(")
        history.push(string1)
        string1 = Math.sin(string1);
        history.push(') = ')
        history.push(string1)
        document.getElementById('1').value = string1;
        x1='';
        history.push("\n");
    }
    else if(x1 == 'cos'){
        history.push("[")
        const date = new Date().toLocaleDateString();
        history.push(date)
        history.push("] ")
        history.push("[")
        const time = new Date().toLocaleTimeString();
        history.push(time)
        history.push("]    -->      ")
        history.push("cos(")
        history.push(string1)
        string1 = Math.cos(string1);
        history.push(') = ')
        history.push(string1)
        document.getElementById('1').value = string1;
        x1='';
        history.push("\n");
    }
    else if(x1 == 'tan'){
        history.push("[")
        const date = new Date().toLocaleDateString();
        history.push(date)
        history.push("] ")
        history.push("[")
        const time = new Date().toLocaleTimeString();
        history.push(time)
        history.push("]    -->      ")
        history.push("tan(")
        history.push(string1)
        string1 = Math.tan(string1);
        history.push(') = ')
        history.push(string1)
        document.getElementById('1').value = string1;
        x1='';
        history.push("\n");
    }
    else if(x1 == 'Rad'){
        history.push("[")
        const date = new Date().toLocaleDateString();
        history.push(date)
        history.push("] ")
        history.push("[")
        const time = new Date().toLocaleTimeString();
        history.push(time)
        history.push("]    -->      ")
        history.push("rad(")
        string1 = toradian(string1);
        history.push(') = ')
        history.push(string1)
        document.getElementById('1').value = string1;
        x1='';
        history.push("\n");
    }
    else if(x1 == 'Deg'){
        history.push("[")
        const date = new Date().toLocaleDateString();
        history.push(date)
        history.push("] ")
        history.push("[")
        const time = new Date().toLocaleTimeString();
        history.push(time)
        history.push("]    -->      ")
        history.push("deg(")
        string1 = todegrees(string1);
        history.push(') = ')
        history.push(string1)
        document.getElementById('1').value = string1;
        x1='';
        history.push("\n");
    }
    else{
        // console.log(e.target)
        string1 = string1 + e1.target.innerHTML;
        string1 = string1.replace('<span>','');
        string1 = string1.replace('</span>','');
        // document.querySelector('#1').value = string1;
        document.getElementById('1').value = string1;
        x1 = '';
    }
  })
})
function lcm(num1, num2) {
    let min = (num1 > num2) ? num1 : num2;
  
    // while loop
    while (true) {
      if (min % num1 == 0 && min % num2 == 0) {
        break;
      }
      min++;
    }
    return min
}
function gcd(num1, num2) {
    let hcf;
    for (let i = 1; i <= num1 && i <= num2; i++) {
  
      // check if is factor of both integers
      if (num1 % i == 0 && num2 % i == 0) {
        hcf = i;
      }
    } return hcf
}
function toradian(num1){
    return ((num1*Math.PI)/180);
}
function todegrees(num1){
    return ((180*num1)/Math.PI);
}
function myFunction1(){
    toPrint = ("\t\t\t\t\t\t\t\t\t\t Calculation History\n");
    toPrint = toPrint + "\n";
    toPrint = toPrint + history.join("")
    download("data.txt",toPrint)
}