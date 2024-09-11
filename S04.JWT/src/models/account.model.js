import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        displayName: { type: String, required: true }
    },
    {
        collection: 'accounts',
        strict: 'throw'
    }
);

export default mongoose.model('Account', schema);
