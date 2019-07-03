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
//displays inventory table to user
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
        //creates pretty table
        var table = new Table({
            head: ['Product ID', 'Item', 'Price']
            , colWidths: [12, 50, 8],
            colAligns: ["left", "center", " right"],
            style: {
                head: ["aqua"],
                compact: true
            }
        });
        //puts appropriate columns into table
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].id, res[i].product_name, res[i].price]);
        }
        console.log(table.toString());
        console.log("");

        //function that runs the inquirer prompt
        customerOrder();
    });
    // readData();
};
//create function to ask user questions
function customerOrder() {
    inquirer.prompt({
        name: "item",
        type: "input",
        message: "Please choose an item from the list above"
    }).then(function (answer) {
        var selection = answer.item;
        connection.query("SELECT * FROM products WHERE id = ? ", selection, function (err, res) {
            if (err) throw err;
            // console.log(res)
            if (res.length === 0) {
                console.log("We're sorry, that product does not exist. Please choose a product from the list above");

                customerOrder();
            } else {
                inquirer.prompt({
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to purchase?"
                }).then(function (answer2) {
                    var quantity = answer2.quantity;
                    if (quantity > res[0].stock_quantity) {
                        console.log("We're sorry. We only have " + res[0].stock_quantity + " items left");

                        customerOrder();
                    } else {
                        console.log("");
                        console.log(res[0].product_name + ' has been purchased \n');
                        console.log('quantity ' + quantity + ' @ $' + res[0].price);

                        var newQuantity = res[0].stock_quantity - quantity;

                        connection.query("UPDATE products SET stock_quantity = " + newQuantity + " WHERE id = " + res[0].id, function (err, resUpdate) {
                            if (err) throw error;
                            console.log("");
                            console.log("You're order has been processed \n");
                            console.log("Thank you for shopping with us! \n")
                            console.log("**************************************************")

                            connection.end();

                        });
                    }
                });
            }
        })
    })
}
readData();
