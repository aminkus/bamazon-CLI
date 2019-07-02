var mysql = require("mysql");
var inquirer = require("inquirer")
var Table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_DB"
});

connection.connect();

function readData() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        console.log("");
        console.log("****************************************************************************");
        console.log("");
        console.log("                            Welcome to Bamazon");
        console.log("");
        console.log("                          Find Your Product Below");
        console.log("");

    var table = new Table({
        head: ['Product ID', 'Item', 'Price']
      , colWidths: [12, 50, 8],
      colAligns: ["left", "center"," right"],
      style: {
          head: ["aqua"],
          compact: true
      }
    });
    for(var i = 0; i < res.length; i++) {
        table.push([res[i].id, res[i].product_name, res[i].price]);
    }
    console.log(table.toString());
    console.log("");
    customerOrder();
});
};

function customerOrder() {
    inquirer.prompt({
        name:"item",
        type:"input",
        message:"Please choose an item from the list above"
    }).then(function(answer) {
        var selection = answer.item;
        connection.query("SELECT * FROM products WHERE id = ? ", selection, function(err, res) {
            if(err) throw err;
            // console.log(res)
            if(res.length===0) {
                console.log("We're sorry, that product does not exist. Please choose a product from the list above");
                customerOrder();
            } else {
                inquirer.prompt({
                    name:"quantity",
                    type:"input",
                    message:"How many would you like to purchase?"
                }).then(function(howMany) {
                    var quantity = howMany.quantity;
                    if(quantity > res[0].stock_quantity) {
                        console.log(`We're sorry. We only have ${res[0].stock_quantity} items left`)
                    }
                    customerOrder();
                    connection.query("SELECT * FROM products WHERE stock_quantity = ?", quantity, function(err, res) {
                        if(err) throw error;

                    })
                })
            }
        });
    });
};



readData();




// function userOrder() {
//     var order = [];

//     inquirer.prompt([
//         {
//             name: "order",
//             type: "input",
//             message: "Choose the id of the product you would like to order?"
//         },
//         {
//             name: "quantity",
//             type: "input",
//             message: "How many units of this products would you like to order?"
//         }
//     ]).then(function(answer) {
//         connection.query("Select stock_quantity FROM products WHERE ?",
//         {

//         } 
//         )
    
//     })

// }

// function displayOrder() {
// }

// function updateInventory() {
// }

