function generate() { 
    let dictionary = ""; 
    if (document.getElementById("lowercaseCb").checked) { 
        dictionary += "qwertyuiopasdfghjklzxcvbnm"; 
    } 
    if (document.getElementById("uppercaseCb").checked) { 
        dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM"; 
    } 
    if (document.getElementById("digitsCb").checked) { 
        dictionary += "1234567890"; 
    } 
    if (document.getElementById("specialsCb").checked) { 
        dictionary += "!@#$%^&*()_+-={}[];<>:"; 
    } 
    const length = document.querySelector( 
        'input[type="number"]').value; 
  
    if (length < 1 || dictionary.length === 0) { 
        return; 
    } 
  
    let password = ""; 
    for (let i = 0; i < length; i++) { 
        const pos = Math.floor(Math.random() * dictionary.length); 
        password += dictionary[pos]; 
    } 
  
    document.querySelector( 
        'input[type="text"]').value = password; 
} 
  
[ 
    ...document.querySelectorAll( 
        'input[type="checkbox"], div.generate'), 
].forEach((elem) => { 
    elem.addEventListener("click", generate); 
}); 
  
document.querySelector('input[type="number"]').addEventListener( 
    "input", (e) => { 
        document.querySelector( 
            'input[type="number"]').innerHTML = e.target.value; 
        generate(); 
    }); 
  
document.querySelector("div.Copy").addEventListener( 
    "click", () => { 
        const pass = document.querySelector('input[type="text"]').value; 
        navigator.clipboard.writeText(pass).then(() => { 
            document.querySelector( 
                "div.Copy").innerHTML = "copied!"; 
            setTimeout(() => { 
                document.querySelector( 
                    "div.Copy").innerHTML = "copy"; 
            }, 1000); 
        }); 
    }); 
  
generate();