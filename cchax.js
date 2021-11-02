// project by s1mp1y ducky
// This project is written in Node Js v16.10.0
//--------------------------------------------
// Libiraries
const axios = require('axios');
const prompt = require('prompt-sync')({sigint: true});
var figlet = require('figlet');
const { exit } = require('process');

//await Key press thing
const keypress = async () => {
    process.stdin.setRawMode(true)
    return new Promise(resolve => process.stdin.once('data', () => {
      process.stdin.setRawMode(false)
      resolve()
    }))
  }

// Clear the console
process.stdout.write('\033c')

// Start the CLI Program
start()

// Start Point
function start() {
    process.stdout.write('\033c')

// Boot image
figlet.text('CC  DUCK  WORKS', {
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
    console.log(" ----------------------------------------------------------------------------------- ")
    console.log(" [ NOTICE ] Update the program next week for working credit cards updated every week!")
    console.log(" ----------------------------------------------------------------------------------- ")
    console.log(" ")
    console.log(" ------------------------ Options -------------------------- ")
    console.log(" ")
    console.log(" 0) Guide me Sesi Ducky :)")
    console.log(" ")
    console.log(" 1) Generate Credit Card")
    console.log(" 2) Verify Credit Card")
    console.log(" 3) BIN Number Checker")
    console.log(" 4) Generate my FAKE ID (Ready to card)")
    console.log(" ")
    menu()
})

// Making user make the preferred choice and executing
function menu() {
    const option = prompt("Choose an option: ");
    if (option == 1) {
            ccgenerator()
            console.log(" ")
        }
    else if (option == 2) {
            ccverify()
            console.log(" ")
        }
    else if (option == 0) {
            uraskid()
            console.log(" ")
        }
    else if (option == 4){
            fakeid()
            console.log(" ")
        }
    else if (option == 3) {
        binchk()
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
}

// functions
//------------
// The guide for the skids you know
async function uraskid() {
    process.stdout.write('\033c')
        figlet.text('SKIDS AREA', {
            font: 'doom',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 120,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Error | Something went wrong...')
                console.dir(err);
                return;
            }
            console.log(data);
            console.log("                                                                By S1mp1y Ducky")
        })
        console.log(" -----------------------------  BIN METHOD (MOST EFFECTIVE) -------------------------------------")
        console.log(" ")
        console.log(" 1) Find a bin from a bank from USA or your country")
        console.log(" 2) Use our Bin Code checker to verify details and confirm your bin code")
        console.log(" 3) Generate a credit card using your 6 digit Bin code")
        console.log(" 4) Copy the generated credit card")
        console.log(" 5) Use our Credit card checker to verify the card one last time")
        console.log(" 6) Finally, Use our Fake ID generator to complete so you can fill in the details")
        console.log(" ")
        console.log(" ------------------------------------- HAPPY CARDING ----------------------------------------------")
        console.log(" ")
        console.log(" ")
        console.log(" --------------------------- GENERATOR METHOD (LESS EFFECTIVE) ---------------------------------")
        console.log(" ")
        console.log(" 1) Select the generate a credit card option")
        console.log(" 2) Select the type of credit card you want to generate")
        console.log(" 3) Copy the generated credit card")
        console.log(" 4) Use our Credit card checker to verify the card one last time")
        console.log(" 5) Finally, Use our Fake ID generator to complete so you can fill in the details")
        console.log(" ")
        console.log(" ------------------------------------- HAPPY CARDING -----------------------------------------------")
        console.log(" ")
        console.log(" Press Any Key To Continue")
        await keypress()
        start()

}
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
                console.log('Error | Something went wrong...')
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
        const option2 = prompt("What Credit Card would you like to Generate:  ");
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
}

async function visagen() {
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
          console.log(" Press Any Key To Continue")
        })
        await keypress()
        ccgenerator()
}

async function mastercardgen() {
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
          console.log(" Press Any Key To Continue")
        })
        await keypress()
        ccgenerator()
}

async function amexgen() {
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
          console.log(" Press Any Key To Continue")
        })
        await keypress()
        ccgenerator()
}

async function jcbgen() {
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
          console.log(" Press Any Key To Continue")
        })
        await keypress()
        ccgenerator()
}

async function dinersgen() {
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
          console.log(" Press Any Key To Continue")
        })
        await keypress()
        ccgenerator()
}

async function bingen() {
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
        console.log(" ")
        console.log(" [INFO] | If you want to return to the menu, Type 0")
        console.log(" ")
        const bin = prompt('Enter a Credit Card BIN: ');
        if (bin == 0) {
            ccgenerator()
            console.log()
        } else {
        axios.get(`https://api.bincodes.com/cc-gen/?format=json&api_key=e36641d95618424d962ba7c2a23ab6c9&input=${bin}`)
        .then(response => {
          console.log(" ")
          console.log("Here is your generated BIN Credit Card")
          console.log(" ")
          console.log("Card Type: "+ response.data.card);
          console.log("Card Number: "+ response.data.number);
          console.log(" ")
          console.log(" Press Any Key To Continue")
        })
    await keypress()
    ccgenerator()
    }
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
    console.log(" ")
    console.log(" [INFO] | If you want to return to the menu, Type 0")
    console.log(" ")
    const ccnum = prompt('Enter a Credit Card Number: ');
    if (ccnum == 0){
        start()
        console.log()
    } else {
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
     console.log(" Press Any Key To Continue")
    })
await keypress()
start()
}
}
async function binchk() {
    process.stdout.write('\033c')
    figlet.text('BIN CHECKER', {
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
    console.log(" [INFO] | If you want to return to the menu, Type 0")
    console.log(" ")
    const binnum = prompt('Enter a BIN Number: ');
    if (binnum == 0){
        start()
        console.log()
    } else {
    axios.get(`https://api.bincodes.com/bin/?format=json&api_key=e36641d95618424d962ba7c2a23ab6c9&bin=${binnum}`)
    .then(response => {
      console.log(" ")
      console.log("Your BIN Number has been Checked!")
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
     console.log(" Press Any Key To Continue")
    })
await keypress()
start()
}
}
async function fakeid() {
    process.stdout.write('\033c')
    figlet.text('FAKE  ID', {
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
    console.log("        COMING SOOON          ")
}
}
