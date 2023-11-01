var celsius= document.getElementById("celsius");
        var fahrenheit= document.getElementById("fahrenheit");

        celsius.addEventListener('input',function(){
            let cels=this.value;
            let fehr=(cels*9/5)+32;
            if(!Number.isInteger(fehr)){
             fehr=fehr.toFixed(5);
            }
            fahrenheit.value=fehr;
        });

        fahrenheit.addEventListener('input',function(){
            let fehr=this.value;
            let cels=(fehr-32)*5/9;
            if(!Number.isInteger(cels)){
             cels=cels.toFixed(5);
            }
            celsius.value=cels;
        });