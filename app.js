
 let login = document.getElementById('login');
      login.addEventListener('click',function() {
            let mainArea = document.getElementById('main_area');
            main_area.style.display = "none";
            
            let prement_arae = document.getElementById('prement_arae');
            prement_arae.style.display = "block";
      
          })

//-------------- Deposit btn handelar
      let deposit = document.getElementById('deposit');
         deposit.addEventListener('click', function () {
          
           let depositNum =inputNumber('Deposit_Amount')
           
          depositfun('deposit_am', depositNum);
          depositfun('blancesALL', depositNum);
          document.getElementById('Deposit_Amount').value="";
  })
//-------------- Withdrow btn handelar
  let Withdor = document.getElementById('Withdro');
Withdor.addEventListener('click', function () {
  let dNum = inputNumber('with_Amount');
        withfunc('blancesALL',dNum)
        withfunc('withdroCREENT',-1 * dNum)
        document.getElementById('with_Amount').value="";
})
     
function withfunc(id, dNum) {
   let belanceCreent = document.getElementById(id).innerText;
    let belanceNum = parseFloat(belanceCreent);
    let totalBlances = belanceNum - dNum;
    document.getElementById(id).innerText=totalBlances;
}
 function depositfun(id, dNum) {
        let depsitShow = document.getElementById(id).innerText;
        let depsitNum =  parseFloat(depsitShow);
        let total =  depsitNum+dNum ;
        document.getElementById(id).innerText=total;
}
function inputNumber(id) {
     let Deposit_Amount = document.getElementById(id).value;
     let dNum = parseFloat(Deposit_Amount);
  return dNum;
  }