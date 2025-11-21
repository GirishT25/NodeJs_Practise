const redis = require('redis');

const client = redis.createClient({
    host : 'localhost',
    port : 6379,
});

// 
client.on('error' ,(error)=> console.log('Error occured while creating the connection',error));


async function testRedisConnection(){
    try {
        await client.connect();
        console.log("Database is connected");
        await client.set("Key" , "Girish");
        const extractValue = await client.get('Key');
        console.log(extractValue);

        const deleteKey = await client.del('Key');
        console.log(deleteKey);

        const extractUpdatedValue = await client.get('Key');
        console.log(extractUpdatedValue);

        await client.set('count' , '100');
        const incrementValue = await client.incr('count');
        console.log(incrementValue);

        const decrementValue =  await client.decr('count');
        console.log(decrementValue);
        await client.decr('count');
        await client.decr('count');
        await client.decr('count');
        await client.decr('count');
        await client.decr('count');
        console.log(await client.get('count'));
        
        
    } catch (error) {
        console.log("Some error occured" ,error)
    }finally{
        await client.quit();
    }
}

testRedisConnection();
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;  

const server = http.createServer(app);


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
