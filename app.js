



let login = document.getElementById('login');
login.addEventListener('click',function() {
    let mainArea = document.getElementById('main_area');
    main_area.style.display = "none";
    
 let prement_arae = document.getElementById('prement_arae');
    prement_arae.style.display = "block";
    
})

            // Deposit btn handelar


let deposit = document.getElementById('deposit');
deposit.addEventListener('click', function () {
   let Deposit_Amount = document.getElementById('Deposit_Amount').value;
   let depositNum = parseFloat(Deposit_Amount);

   let depsitShow = document.getElementById('deposit_am').innerText;
   let depsitNum =  parseFloat(depsitShow);
   let total =  depsitNum+depositNum ;


   let belanceCreent = document.getElementById('blancesALL').innerText;
   let belanceNum = parseFloat(belanceCreent);
   let totalBlances = belanceNum + depositNum;
    document.getElementById('blancesALL').innerText=totalBlances;

  document.getElementById('deposit_am').innerText=total;
   document.getElementById('Deposit_Amount').value="";
})

            // Withdrow btn handelar

let Withdor = document.getElementById('Withdro');
Withdor.addEventListener('click', function () {
 
 let withAmount = document.getElementById('with_Amount').value;
   let WithNumer = parseFloat(withAmount);

 let withcrrenta = document.getElementById('withdroCREENT').innerText;
   let WithcNumer = parseFloat(withcrrenta);
   let withto = WithNumer + WithcNumer;


 let belanceCreent = document.getElementById('blancesALL').innerText;
   let belanceNum = parseFloat(belanceCreent);



   let totalBlances = belanceNum - WithNumer;
    document.getElementById('blancesALL').innerText=totalBlances;


   document.getElementById('withdroCREENT').innerText = withto;
    document.getElementById('with_Amount').value="";
})