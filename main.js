//Create Express Framework and joi
const Express = require('express'); //   for create server in Noje.jS
const joi = require('joi'); //   for validate object and input
const app = Express();
app.use(Express.json());

const customer = [
    { id: 1, customerName: 'Siemens' },
    { id: 2, customerName: 'BENZ' },
    { id: 3, customerName: 'BMW' },
    { id: 4, customerName: 'VOLKSWAGON' },
    { id: 5, customerName: 'AUDI' }
]

//Read Request handler
app.get('/', (req, res) => {
    res.send("Welcome To LeafTech REST API ");
});

//---- Get All Data
app.get('/LeafTech/api/customer', (req, res) => {
    res.send(customer);
})

//---- Get by Id
app.get('/LeafTech/api/customer/:id', (req, res) => {
    const cust = customer.find(c => c.id === parseInt(req.params.id));
    if (!cust) res.status(404).send('<h2 style ="font-family : Malgun Gothic; color:darked;"> Oops cant fin your request customer</h2>');
    res.send(cust);
});

//---- Create Request handler
app.post('/LeafTech/api/customer', (req, res) => {
    // Check Body data
    // const error = req.body;
    // if (error) {
    //     res.status(400).send(error.detail[0].message);
    //     return;
    // };
    // Create object

    const cust = {
            id: customer.length + 1,
            customerName: req.body
        }
        // Insert object in Database
    customer.push(cust);
    res.send(cust);
});


//---- Run Server and Attach
const port = process.env.port || 8080;
app.listen(port, () => console.log(`listening to port ${port}`));