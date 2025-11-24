const redis = require('redis');
const client = redis.createClient({
    host : 'localhost',
    port : 6379
});

async function testConnection(){
    try {
        await client.connect();
        console.log("Redis Database is connecte successfully");

        // String use the method of the GET , SET ,MGET ,MSET
        await client.mSet(['user:name' ,'Girish' , 'user:email' , 'thoratgirish286@gmail.com' , 'user:country' ,'India']);
        const [name ,email ,country] = await client.mGet(['user:name' ,'user:email' , 'user:country']);
        // console.log(name ,email ,country);

        // List has the methods like ->LPUSH , RPUSH , LPOP , RPOP ,LRANGE
        // await client.lPush('notes' ,['notes1', 'notes2', 'notes3']);
        const extractElements = await client.lRange('notes' , 0 ,-1);
        // console.log(extractElements);

        const LeftNotes = await client.lPop('notes');
        // console.log(LeftNotes);

        
        const newUpdatedItems = await client.lRange('notes' , 0 , -1);
        // console.log(newUpdatedItems);
        
        const RightPop = await client.rPop('notes');
        // console.log(RightPop);
        
        const newUpdatedRightItems = await client.lRange('notes' , 0 , -1);
        // console.log(newUpdatedRightItems);
        

        // Set -> SADD , SMEMBERSS, SISMEMBER , SREM

        await client.sAdd('user:Nickname', ['abc' , 'girish' , 'tony']);
        const nameMembers = await client.sMembers('user:Nickname');
        // console.log(nameMembers)

        const IsUserPresent = await client.sIsMember('user:Nickname' , 'girish');
        // console.log(IsUserPresent);

        await client.sRem('user:Nickname' , 'abc');
        const updatedSetUsers = await client.sMembers('user:Nickname');
        // console.log(updatedSetUsers);
        
        // Sorted sets 
            await client.zAdd('cart' , [
                {
                    score : 100,
                    value : 'Cart1',
                },
                {
                    score : 234,
                    value : 'Cart2',
                },
                {
                    score : 30,
                    value : 'Cart3',
                }
            ])

        const cartValues = await client.zRange('cart' , 0 ,-1);
        // console.log(cartValues);

        const cartWithScore = await client.zRangeWithScores('cart' , 0 , -1)
        // console.log(cartWithScore);

        const cartRank = await client.zRank('cart' , 'Cart2');
        // console.log(cartRank);

        // Hash -> HGET , HSET , HDEL , HGETALL
        await client.hSet('products' , {
            productName : 'Asus Gaming Laptop',
            productCategory  : 'Gaming',
            productPrice : '54000'
        });

        const productCost = await client.hGet('products' , 'productPrice');
        console.log(productCost);
        
        await client.hDel('products' , 'productCategory');

        const updatedProductDetails  = await client.hGetAll('products');
        console.log(updatedProductDetails)

    } catch (error) {
        console.error(error);
        
    }finally{
        await client.quit();
    }
}

testConnection();