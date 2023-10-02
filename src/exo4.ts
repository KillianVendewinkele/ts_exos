function celsiusToFahrenheit(celsius:number){
    let fahrenheit : number;
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}


console.log(celsiusToFahrenheit(24));