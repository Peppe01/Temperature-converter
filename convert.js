exports.CelsiusToFahr = function (celsius){
    var CelsiusToFahr;

    if (celsius >= 0 || celsius <= 100){
        CelsiusToFahr = Math.round((celsius * 9/5) + 32);
        return json = {result: CelsiusToFahr};
    }
    else if (celsius < 0 || celsius > 100){
        return json = {result: "undefined"};
    }
}
console.log(this.CelsiusToFahr(24));

exports.FahrToKelv = function (fahrenheit){
    var FahrToKelv;

    if (fahrenheit >= 32 || fahrenheit <= 212){
        FahrToKelv = Math.round(((fahrenheit-32) / 1.8) +273.15);
        return json = {result: FahrToKelv};
    }
    else if (fahrenheit < 32 || fahrenheit > 212){
        return json = {result: "undefined"};
    }
}
console.log(this.FahrToKelv(50));

exports.KelvToCelsius = function (kelvin){
    var KelvToCelsius;

    if (kelvin >= -273.15 || kelvin <= 0){
        KelvToCelsius = Math.round(kelvin - 273,15);
        return json = {result: KelvToCelsius};
    }
    else if (kelvin < -273.15 || kelvin > 0){
        return json = {result: "undefined"};
    }
}
console.log(this.KelvToCelsius(0));

//OPPOSITE VERSION
exports.CelsToKelv = function (celsius){
    var CelsToKelv;

    if (celsius >= 0 || celsius <= 100){
        CelsToKelv = Math.round(celsius + 273.15);
        return json = {result: CelsToKelv};
    }
    else if (celsius < 0 || celsius > 100){
        return json = {result: "undefined"};
    }
}
console.log(this.CelsToKelv(45));

exports.KelvToFahr = function (kelvin){
    var KelvToFahr;

    if (kelvin >= -273.15 || kelvin <= 0){
        KelvToFahr = Math.round((kelvin * 1.8) -459.67);
        return json = {result: KelvToFahr};
    }
    else if (kelvin < -273.15 || kelvin > 0){
        return json = {result: "undefined"};
    }
}
console.log(this.KelvToFahr(100));

exports.FahrToCels = function (fahrenheit){
    var FahrToCels;

    if (fahrenheit >= 32 || fahrenheit <= 212){
        FahrToCels = Math.round((fahrenheit - 32) / 1.8);
        return json = {result: FahrToCels};
    }
    else if (fahrenheit < 32 || fahrenheit > 212){
        return json = {result: "undefined"};
    }
}
console.log(this.FahrToCels(50));

