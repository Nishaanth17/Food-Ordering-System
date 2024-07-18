const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://nishaanth999:Nishu999@cluster0.fabstly.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        
        // Fetch data from MongoDB collections
        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");

        // Fetch data and store in global variables
        const foodItems = await foodItemsCollection.find({}).toArray();
        const foodCategory = await foodCategoryCollection.find({}).toArray();

        global.food_items = foodItems;
        global.foodCategory = foodCategory;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;





