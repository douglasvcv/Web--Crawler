


export async function findMongoData(collection, {name}) {
 const response = await collection.find({"location.name":name}).toArray()
 return response
}

export async function InsertMongoData(collection, data){
    const forecastData = {
        data
    }
    if(forecastData){
        collection.insertOne(forecastData)
    }
}