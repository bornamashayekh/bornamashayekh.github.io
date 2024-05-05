
$(document).ready(function () {
    setTimeout(updateHistory, 100);
    //SETTING UNITS FOR THE SECOND INPUT
    const units = {
        'undefind': ['لطفا یک واحد معتبر انتخاب کنید'],
        'میلی متر (mm)': ['متر(m)', 'کیلومتر(km)', 'اینچ(inch)', 'فوت(ft)', 'یارد(yd)' ,'سانتی متر(cm)'],
        'سانتی متر(cm)': ['متر(m)', 'کیلومتر(km)', 'اینچ(inch)', 'فوت(ft)', 'یارد(yd)' ,'میلی متر (mm)'],
        'متر(m)': ['سانتی متر(cm)', 'کیلومتر(km)', 'اینچ(inch)', 'فوت(ft)', 'یارد(yd)' ,'میلی متر (mm)'],
        'کیلومتر(km)': ['سانتی متر(cm)', 'متر(m)', 'اینچ(inch)', 'فوت(ft)', 'یارد(yd)' ,'میلی متر (mm)'],
        'اینچ(inch)': ['سانتی متر(cm)', 'متر(m)', 'کیلومتر(km)', 'فوت(ft)', 'یارد(yd)' ,'میلی متر (mm)'],
        'فوت(ft)': ['سانتی متر(cm)', 'متر(m)', 'کیلومتر(km)', 'اینچ(inch)', 'یارد(yd)' ,'میلی متر (mm)'],
        'یارد(yd)': ['سانتی متر(cm)', 'متر(m)', 'کیلومتر(km)', 'اینچ(inch)', 'فوت(ft)' ,'میلی متر (mm)'],
        'گالن(gal)': ['لیتر(lit)'],
        'لیتر(lit)': [ 'گالن(gal)'],
        'اونس(oz)': [ 'پوند(lb)', 'کیلوگرم(kg)'],
        'پوند(lb)': [ 'اونس(oz)', 'کیلوگرم(kg)'],
        'کیلوگرم(kg)': [ 'اونس(oz)', 'پوند(lb)'],
        'سلسیوس(c)': ['فارنهایت(f)','کلوین(k)'],
        'فارنهایت(f)': ['سلسیوس(c)', 'کلوین(k)'],
        'کلوین(k)': ['فارنهایت(f)' ,'سلسیوس(c)']
    };
// SMART INPUT TO ONLY SHOW THE CONVERTABLE UNITS
    $('#input-unit').change(function () {
        const inputUnit = $(this).val();
        const outputUnitSelect = $('#output-unit');
        outputUnitSelect.empty();
        units[inputUnit].forEach(function (unit) {
            outputUnitSelect.append(`<option value="${unit}">${unit}</option>`);
        });
    });

    $('#conversion-form').submit(function (event) {
        event.preventDefault();
        //ELEMENT
        const inputValue = $('#input-value').val();
        const inputUnit = $('#input-unit').val();
        const outputUnit = $('#output-unit').val();
        let result;
//CALCULATIONS TO CONVERT THE SELECTED UNITS
        switch (inputUnit) {
            
            case 'میلی متر (mm)':
                
                switch (outputUnit) {
                    case 'سانتی متر(cm)':
                        result = inputValue / 10;
                        break;
                    case 'متر(m)':
                        result = inputValue / 1000;
                        break;
                    case 'کیلومتر(km)':
                        result = inputValue / 1000006;
                        break;
                    case 'اینچ(inch)':
                        result = inputValue / 25.4;
                        break;
                    case 'فوت(ft)':
                        result = inputValue / 304.8;
                        break;
                    case 'یارد(yd)':
                        result = inputValue / 914.4;
                        break;
                   
                }
                break;
            case 'سانتی متر(cm)':
                switch (outputUnit) {
                    case 'متر(m)':
                        result = inputValue / 100;
                        break;
                    case 'کیلومتر(km)':
                        result = inputValue / 100000;
                        break;
                    case 'اینچ(inch)':
                        result = inputValue / 2.54;
                        break;
                    case 'فوت(ft)':
                        result = inputValue / 30.48;
                        break;
                    case 'یارد(yd)':
                        result = inputValue / 91.44;
                        break;
                        case 'میلی متر (mm)':
                            result = inputValue * 10;
                            break;
                    
                }
                break;
            case 'متر(m)':
                switch (outputUnit) {
                    case 'سانتی متر(cm)':
                        result = inputValue * 100;
                        break;
                    case 'کیلومتر(km)':
                        result = inputValue / 1000;
                        break;
                    case 'اینچ(inch)':
                        result = inputValue * 39.3701;
                        break;
                    case 'فوت(ft)':
                        result = inputValue * 3.28084;
                        break;
                    case 'یارد(yd)':
                        result = inputValue * 1.09361;
                        break;
                        case 'میلی متر (mm)':
                            result = inputValue * 1000;
                            break;
                    
                }
                break;
            case 'کیلومتر(km)':
                switch (outputUnit) {
                    case 'سانتی متر(cm)':
                        result = inputValue * 100000;
                        break;
                    case 'متر(m)':
                        result = inputValue * 1000;
                        break;
                    case 'اینچ(inch)':
                        result = inputValue * 39370.1;
                        break;
                    case 'فوت(ft)':
                        result = inputValue * 3280.84;
                        break;
                    case 'یارد(yd)':
                        result = inputValue * 1093.61;
                        break;
                        case 'میلی متر (mm)':
                            result = inputValue * 1000000;
                            break;
                    
                }
                break;
            case 'اینچ(inch)':
                switch (outputUnit) {
                    case 'سانتی متر(cm)':
                        result = inputValue * 2.54;
                        break;
                    case 'متر(m)':
                        result = inputValue / 100;
                        break;
                    case 'کیلومتر(km)':
                        result = inputValue / 100000;
                        break;
                    case 'فوت(ft)':
                        result = inputValue / 12;
                        break;
                    case 'یارد(yd)':
                        result = inputValue / 36;
                        break;
                        case 'میلی متر (mm)':
                            result = inputValue * 25.4;
                            break;
                    
                }
                break;
            case 'فوت(ft)':
                switch (outputUnit) {
                    case 'سانتی متر(cm)':
                        result = inputValue * 30.48;
                        break;
                    case 'متر(m)':
                        result = inputValue / 3.28084;
                        break;
                    case 'کیلومتر(km)':
                        result = inputValue / 3280.84;
                        break;
                    case 'اینچ(inch)':
                        result = inputValue * 12;
                        break;
                    case 'یارد(yd)':
                        result = inputValue / 3;
                        break;
                        case 'میلی متر (mm)':
                            result = inputValue * 304.8;
                            break;
                    
                }
                break;
            case 'یارد(yd)':
                switch (outputUnit) {
                    case 'سانتی متر(cm)':
                        result = inputValue * 91.44;
                        break;
                    case 'متر(m)':
                        result = inputValue / 1.09361;
                        break;
                    case 'کیلومتر(km)':
                        result = inputValue / 1093.61;
                        break;
                    case 'اینچ(inch)':
                        result = inputValue * 36;
                        break;
                    case 'فوت(ft)':
                        result = inputValue * 3;
                        break;
                        case 'میلی متر (mm)':
                            result = inputValue * 914.4;
                            break;
                    
                }
                break;
            case 'گالن(gal)':
                switch (outputUnit) {
                   
                    case 'لیتر(lit)':
                        result = inputValue * 3.78541;
                        break;
                }
                break;
            case 'لیتر(lit)':
                switch (outputUnit) {
                 
                    case 'گالن(gal)':
                        result = inputValue / 3.78541;
                        break;
                  
                }
                break;
            case 'اونس(oz)':
                switch (outputUnit) {
                  
                    case 'پوند(lb)':
                        result = inputValue / 16;
                        break;
                    case 'کیلوگرم(kg)':
                        result = inputValue / 35.274;
                        break;
                }
                break;
            case 'پوند(lb)':
                switch (outputUnit) {
                  
                    case 'اونس(oz)':
                        result = inputValue * 16;
                        break;
                    case 'کیلوگرم(kg)':
                        result = inputValue / 2.20462;
                        break;
                }
                break;
            case 'کیلوگرم(kg)':
                switch (outputUnit) {
                  
                    case 'اونس(oz)':
                        result = inputValue * 35.274;
                        break;
                    case 'پوند(lb)':
                        result = inputValue * 2.20462;
                        break;
                }
                break;
            case 'سلسیوس(c)':
                switch (outputUnit) {
                    case 'فارنهایت(f)':
                        result = (inputValue * 9/5)+ 32;
                        break;
                        case 'کلوین(k)':
                            result = inputValue+ 273.15;
                            break;
                }
                break;
            case 'فارنهایت(f)':
                switch (outputUnit) {
                    case 'سلسیوس(c)':
                        result = (inputValue - 32) * 5/9;
                        break;
                        case 'کلوین(k)':
                            result = (inputValue - 32) * 5/9 + 273.15;
                            break;
                }
                break;
                case 'کلوین(k)':
                    switch (outputUnit) {
                        case 'سلسیوس(c)':
                            result = inputValue - 273.15;
                            break;
                            case 'فارنهایت(f)':
                                result = (inputValue - 273.15) * 9/5 + 32;
                                break;
                    }
                    break;
        }
//   TO DELETE ZEROS IN DICLEMA (اعشار)
        result = `${Number.parseFloat(result.toFixed(3))}`;
        // VALID THE INPUT AND SHOW RESULTS
        if (inputUnit != 'undefind') {
            $('.result').css('display', 'block');
            $('.result').html(`<h3>${inputValue} ${inputUnit} برابر است با ${result} ${outputUnit}</h3>`);
            // SAVING THE CONVERT HISTORY
            localStorage.setItem('unit', JSON.stringify(inputUnit));
            localStorage.setItem('convertedUnit', JSON.stringify(outputUnit));
            localStorage.setItem('value', JSON.parse(inputValue));
            localStorage.setItem('convertedValue', JSON.parse(result));
            
            // Limit the history to the last three conversions
            let history = JSON.parse(localStorage.getItem('history')) || [];
            history.unshift({
              unit: inputUnit,
              convertedUnit: outputUnit,
              value: inputValue,
              convertedValue: result
            });
            if (history.length > 3) {
              history.pop();
            }
            localStorage.setItem('history', JSON.stringify(history));
            updateHistory();
          } else {
            $('.result').css('display', 'block');
            $('.result').html(`<h3>واحد معتبر نیست</h3>`);
      
        }
      
    });
     //UPDATING THE LAST CONVERT EACH SECOND
     const interval = setInterval(updateHistory, 1000);
   
});

// BURGER MENU
$(document).ready(function() {
    $('.hamburger-menu').click(function () {
        $('body').toggleClass('active');
        $('.menu-content').toggleClass('visible');
        $('#icon').toggleClass('fa-bars');
        $('#icon').toggleClass('fa-x');
    // IF YOU CLICK ON THE BACKGROUND WHEN THE BURGER MENU IS ACTIVE IT WILL BE CLOSED
        if ($('body').hasClass('active')) {
            $('.menu-content').click(function () {
                $('.menu-content').removeClass('visible');
                $('#icon').addClass('fa-bars');
                $('#icon').removeClass('fa-x');
            
            }
    )};
    })

});
 //UPDATING THE LAST CONVERT EACH SECOND
//  const interval = setInterval(updateHistory,1000);
 function updateHistory() {
     // CLEAR THE TABLE BEFORE ADDING NEW ROWS
     $('table tbody').empty();
    
     let history = JSON.parse(localStorage.getItem('history')) || [];
    
     history.slice(-3).forEach((item, index) => {
         $('table tbody').append(
             `<tr><td>${item.value}</td><td>${item.unit}</td><td>${item.convertedUnit}</td><td>${item.convertedValue}</td></tr>`
         );
     });
   
}
// convertBtn.click(updateHistory);