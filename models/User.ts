import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;