// Khai bao module "mongodb"
const {MongoClient, ObjectId} = require("mongodb");

// Khai bao thong so cua MongoDB Server
const url = "mongodb://127.0.0.1";
const dbName = "SE1760_Test";

// Khoi tao doi tuong MongoDB driver
const client = new MongoClient(url);

// Dinh nghia ham de: Ket noi CSDL, CRUD
async function main(){
    // Ket noi CSDL
    await client.connect();
    console.log("Connect to MongoDB success");

    // Chi dinh CSDL, collection can lam viec
    const myDb = client.db(dbName);
    const myCollection = myDb.collection("departments");

    // CRUD basic
    // Chen 1 document moi vao collection dat ten "department"
    const newDepart = {name: "Human Resource", location: 1, phone: "099999999"};
    await myCollection.insertOne(newDepart).then(newDoc => console.log(newDoc));

    // Chen dong thoi 2 documents moi vao "departments"
    // const arrayDepartments = [
    //     {name: "Marketing", location: {floor: 2, room: "201"}},
    //     {name: "Sale", location: {floor: 2, room: "301"}},
    // ];
    // await myCollection.insertMany(arrayDepartments).then(newDocs => console.log(newDocs));

    // Cap nhat document dau tien nhung gia tri: name = "Information Technology", room = 110
    // await myCollection.updateOne(
    //     {_id: new ObjectId("66ffb3bf7671f3a85c4a2bab")},
    //     {$set: {name: "Information Technology", "location.room": "101"}}
    // );

    // Liet ke cac departments tu tang 2 tro len
    // const arrResult = await myCollection.find({"location.floor": {$gte: 2}}).toArray();
    
    // if(arrResult){
    //     arrResult.map(({_id:code, name:fullname, location: address}) => {
    //         console.log({code, fullname, address});
    //     });
    // }

    // Xoa cacs departments o tang 2

    return "done!";
}

// Thuc thi action
main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());