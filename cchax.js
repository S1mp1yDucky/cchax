// project by s1mp1y ducky
// This project is written in Node Js v16.10.0
//--------------------------------------------
// Libiraries
const axios = require('axios');
const readline = require("readline");
var figlet = require('figlet');
const { exit } = require('process');

// Clear the console
process.stdout.write('\033c')

// Start the CLI Program
start()

// Start Point
function start() {
    process.stdout.write('\033c')

// User Input Prompt
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Boot image
figlet.text('CC DUCK WORKS', {
    font: 'doom',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 120,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Error | Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    console.log("                                                                By S1mp1y Ducky")
    console.log(" ")
    console.log(" Please Select Your Prefered Option of Choice from the List: ")
    console.log(" ")
    console.log(" ------------------------ Options -------------------------- ")
    console.log(" ")
    console.log(" 1) Generate Credit Card")
    console.log(" 2) Verify Credit Card")
    console.log(" ")
    menu()
})

// Making user make the preferred choice and executing
function menu() {
    rl.question("What option would you like to choose:  ", function(option) {
        if (option == 1) {
            ccgenerator()
            console.log(" ")
        } else if (option ==2) {
            ccverify()
            console.log(" ")
        }
        else {
            process.stdout.write('\033c')
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log("               Error:  ")
            console.log("                       You have Selected an Invalid Option, You will now be returned back to our options.")
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log(" ")
            setTimeout(() => {
                start()
            }, 5000);
        }
    });
}

// functions
//------------
// Credit Card Generator
async function ccgenerator() {
    process.stdout.write('\033c')
        figlet.text('CC GENERATOR', {
            font: 'doom',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 120,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Error | Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            console.log("                                                                By S1mp1y Ducky")
        })
        console.log(" ")
        console.log(" 1) visa - Generate Number for VISA Card")
        console.log(" 2) mastercard - Generate Number for MasterCard")
        console.log(" 3) amex - Generate Number for American Express Card")
        console.log(" 4) jcb - Generate Number for JCB Card")
        console.log(" 5) diners - Generate Number for Diners Club Card")
        console.log(" 6) maestro - Generate Number for Maestro Card")
        console.log(" 7) [BIN] - Generate Number from 6 digits BIN number")
        console.log(" 8) ----   GO BACK TO MENU   ----")
        console.log(" ")
        rl.question("What Credit Card would you like to Generate:  ", function(option2) {
        if (option2 == 1) {
            visagen()
        } else if (option2 == 2) {
            mastercardgen()
        } else if (option2 == 3) {
            amexgen()
        } else if (option2 ==4) {
            jcbgen()
        } else if (option2 == 5) {
            dinersgen()
        } else if (option2 == 6) {
            mestrogen()
        } else if (option2 == 7) {
            bingen()
        } else if (option2 ==8) {
            start()
        } else {
            process.stdout.write('\033c')
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log("               Error:  ")
            console.log("                       You have Selected an Invalid Option, You will now be returned back to our options.")
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log(" ")
            console.log(" ")
            setTimeout(() => {
                start()
            }, 5000);
        }
    });
}

function visagen() {
    process.stdout.write('\033c')
        figlet.text('VISA GENERATOR', {
            font: 'doom',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 120,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Error | Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            console.log("                                                                By S1mp1y Ducky")
        })
        axios.get("https://api.bincodes.com/cc-gen/?format=json&api_key=e36641d95618424d962ba7c2a23ab6c9&input=visa")
        .then(response => {
          console.log(" ")
          console.log("Here is your generated Visa Credit Card")
          console.log(" ")
          console.log("Card Type: "+ response.data.card);
          console.log("Card Number: "+ response.data.number);
          console.log(" ")
          setTimeout(() => {
            return (start());
        }, 10000);
        })
}

function mastercardgen() {
    process.stdout.write('\033c')
        figlet.text('VISA GENERATOR', {
            font: 'doom',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 120,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Error | Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            console.log("                                                                By S1mp1y Ducky")
        })
        axios.get("https://api.bincodes.com/cc-gen/?format=json&api_key=e36641d95618424d962ba7c2a23ab6c9&input=mastercard")
        .then(response => {
          console.log(" ")
          console.log("Here is your generated Mastercard Credit Card")
          console.log(" ")
          console.log("Card Type: "+ response.data.card);
          console.log("Card Number: "+ response.data.number);
          console.log(" ")
          setTimeout(() => {
            return (start());
        }, 10000);
        })
}

function amexgen() {
    process.stdout.write('\033c')
        figlet.text('AMEX GENERATOR', {
            font: 'doom',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 120,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Error | Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            console.log("                                                                By S1mp1y Ducky")
        })
        axios.get("https://api.bincodes.com/cc-gen/?format=json&api_key=e36641d95618424d962ba7c2a23ab6c9&input=amex")
        .then(response => {
          console.log(" ")
          console.log("Here is your generated Visa Credit Card")
          console.log(" ")
          console.log("Card Type: "+ response.data.card);
          console.log("Card Number: "+ response.data.number);
          console.log(" ")
          setTimeout(() => {
            return (start());
        }, 10000);
        })
}

function jcbgen() {
    process.stdout.write('\033c')
        figlet.text('JCB GENERATOR', {
            font: 'doom',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 120,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Error | Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            console.log("                                                                By S1mp1y Ducky")
        })
        axios.get("https://api.bincodes.com/cc-gen/?format=json&api_key=e36641d95618424d962ba7c2a23ab6c9&input=jcb")
        .then(response => {
          console.log(" ")
          console.log("Here is your generated JCB Credit Card")
          console.log(" ")
          console.log("Card Type: "+ response.data.card);
          console.log("Card Number: "+ response.data.number);
          console.log(" ")
          setTimeout(() => {
            return (start());
        }, 10000);
        })
}

function dinersgen() {
    process.stdout.write('\033c')
        figlet.text('DINERS GENERATOR', {
            font: 'doom',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 120,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Error | Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            console.log("                                                                By S1mp1y Ducky")
        })
        axios.get("https://api.bincodes.com/cc-gen/?format=json&api_key=e36641d95618424d962ba7c2a23ab6c9&input=visa")
        .then(response => {
          console.log(" ")
          console.log("Here is your generated Diners Credit Card")
          console.log(" ")
          console.log("Card Type: "+ response.data.card);
          console.log("Card Number: "+ response.data.number);
          console.log(" ")
          setTimeout(() => {
            return (start());
        }, 10000);
        })
}

function bingen() {
    process.stdout.write('\033c')
        figlet.text('BIN CC GENERATOR', {
            font: 'doom',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 120,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Error | Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            console.log("                                                                By S1mp1y Ducky")
        })
        rl.question('Enter a Credit Card BIN: ', (bin) => {
        axios.get(`https://api.bincodes.com/cc-gen/?format=json&api_key=e36641d95618424d962ba7c2a23ab6c9&input=${bin}`)
        .then(response => {
          console.log(" ")
          console.log("Here is your generated BIN Credit Card")
          console.log(" ")
          console.log("Card Type: "+ response.data.card);
          console.log("Card Number: "+ response.data.number);
          console.log(" ")
          setTimeout(() => {
            return (start());
        }, 10000);
        })
    });
}


async function ccverify() {
    process.stdout.write('\033c')
    figlet.text('CC CHECKER', {
        font: 'doom',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 120,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Error | Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
        console.log("                                                                By S1mp1y Ducky")
    })
    rl.question('Enter a Credit Card Number: ', (ccnum) => {
    axios.get(`https://api.bincodes.com/cc/?format=json&api_key=e36641d95618424d962ba7c2a23ab6c9&cc=${ccnum}`)
    .then(response => {
      console.log(" ")
      console.log("Your Credit Card has been Checked!")
      console.log(" ")
      console.log("BIN Number: "+ response.data.bin);
      console.log("Bank Name: "+ response.data.bank);
      console.log("Card Detector: "+ response.data.card);
      console.log("Card Type: "+ response.data.type);
      console.log("Card Level: "+ response.data.level);
      console.log("Card Country: "+ response.data.country);
      console.log("Card Country Code: "+ response.data.countrycode);
      console.log("Issuer Website: "+ response.data.website);
      console.log("Issuer Phone Number: "+ response.data.phone);
      console.log("Is Card LIVE: "+ response.data.valid);
      console.log(" ")
      setTimeout(() => {
        return (start());
    }, 10000);
    })
})
}

}