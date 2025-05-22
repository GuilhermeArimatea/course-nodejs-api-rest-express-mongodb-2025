import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.DB_URI).then(() => {
    console.log("Database connected!");
}
).catch((err) => {
    console.error("Database connection error:", err);
});

const db = mongoose.connection;

export default db;