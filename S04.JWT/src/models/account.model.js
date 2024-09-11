import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const schema = mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        displayName: { type: String, required: true },
        uuid: { type: String, required: true, unique: true, default: uuidv4() },
        passwordHash: { type: String, required: true },
        roles: [String],
        isPublic: { type: Boolean, default: true },
        isBanned: { type: Boolean, default: false }
    },
    {
        collection: 'accounts',
        strict: 'throw',
        timestamps: true
    }
);

export default mongoose.model('Account', schema);
