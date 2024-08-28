import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISchool extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'competitor' | 'moderator' | 'admin';
}

const UserSchema: Schema<ISchool> = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['competitor', 'moderator', 'admin'], default: 'competitor' },
});

const User: Model<ISchool> = mongoose.models.User || mongoose.model('school', UserSchema);

export default User;