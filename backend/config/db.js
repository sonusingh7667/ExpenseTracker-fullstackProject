import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://techsonusingh99_db_user:%23Singh9573@cluster0.nirxi4k.mongodb.net/Expense").then(() => console.log("DB CONNECTED"));
}