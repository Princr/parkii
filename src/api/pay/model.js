import mongoose, { Schema } from 'mongoose'

const paySchema = new Schema({
  allowed_time: {
    type: String
  },
  paid: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

paySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      allowed_time: this.allowed_time,
      paid: this.paid,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Pay', paySchema)

export const schema = model.schema
export default model
