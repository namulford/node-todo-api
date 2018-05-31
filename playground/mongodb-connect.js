// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    let obj = new ObjectId();
    console.log(obj);
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false,
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     } 
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

        // db.collection('Users').insertOne({
        //     name: 'Natty Mulf',
        //     age: 'Awesome',
        //     location: 'NOVA',

        // }, (err, result) => {
        //     if (err) {
        //         return console.log('You suck so try again, err');
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });
    client.close();
})

