document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element); 
    })
})

function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan komputer secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        setTimeout(()=>alert("DRAW"), 500)
    }

    // jika pilihan komputer menang
    if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        setTimeout(()=>alert("Komputer WIN"), 500)
    }else if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        setTimeout(()=>alert("Komputer WINN"), 500)
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        setTimeout(()=>alert("Komputer WINNN"), 500)
    }

    // jika pilihan user menang
    if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        setTimeout(()=>alert("User WIN"), 500)
    }else if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){   
        setTimeout(()=>alert("User WINN"), 500)
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){  
        setTimeout(()=>alert("User WINNN"), 500)
    }
}