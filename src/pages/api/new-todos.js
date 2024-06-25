import {MongoClient} from 'mongodb';

async function handler(req, res){

    if(req.method === 'POST'){
        const data = req.body
 

        const client = await MongoClient.connect(
            'mongodb+srv://kunalk200:aRKDhhPdiQFpJdkU@cluster0.4vczsp6.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0'
        )

        const db = client.db()

        const todosCollections = db.collection('todos');

        const result = await todosCollections.insertOne(data)
        console.log(result)
        client.close()

        res.status(201).json({message:'Todos inserted! '})
    }
}

export default handler;
