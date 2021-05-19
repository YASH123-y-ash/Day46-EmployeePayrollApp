window.addEventListener('DOMCntentLoaded', (event) => {
    const name = document.querySelector('.tet-error');
    name.addEventListener('input', function() {
        if(name.nodeValue.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayRollData()).name = name.Value;;
            textError.textContent = "";
        }catch (e) {
            textError.textContent =e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.Value;
    salary.addEventListener('input', function(){
        output.textContent = salary.Value;
    });
});