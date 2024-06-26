import {MongoClient, ObjectId} from 'mongodb';

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

    }else if(req.method === 'PATCH') {
        
      if (req.method === 'PATCH') {
        const { id, isComplete } = req.body;
    
        const client = await MongoClient.connect(
          'mongodb+srv://kunalk200:aRKDhhPdiQFpJdkU@cluster0.4vczsp6.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0'
        );
    
        const db = client.db();
        const todosCollection = db.collection('todos');
    
        const result = await todosCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { isComplete } }
        );
    
        client.close();
    
        if (result.modifiedCount === 0) {
          res.status(500).json({ message: 'Failed to update todo status' });
        } else {
          res.status(200).json({ message: 'Todo status updated!' });
        }
      }
      }
    
}

export default handler;
