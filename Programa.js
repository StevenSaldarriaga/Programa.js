const readlineSync = require(`readline-sync`);

let esEdadInvalida = false;

do
{
    let edad = readlineSync.question(`Ingrese la edad de la persona: `);

    edad = parseFloat(edad, 10);

    if(isNaN(edad)){
        console.error(`La eda ingresada no es un valor numeerico`);
        esEdadInvalida = true;
    }
    else{
        if(edad <= 0){
            console.error(`La edad no puede ser negtiva`);
            esEdadInvalida = true;
        }
        else
        {
            esEdadInvalida = false;

            if(edad >= 18){
                console.info(`La persona puede ingresar`);
            }
            else
            {
                console.info(`La persona no puede ingresar`);
            }
        }
    }
}while (esEdadInvalida == true);

console.info(`Fin del programa`);