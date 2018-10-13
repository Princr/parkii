import mongoose, { Schema } from 'mongoose'

const checksSchema = new Schema({
  parkbayid: {
    type: String
  },
  car_reg: {
    type: String
  },
  cellphone: {
    type: String
  },
  name: {
    type: String
  },
  surname: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

checksSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      parkbayid: this.parkbayid,
      car_reg: this.car_reg,
      cellphone: this.cellphone,
      name: this.name,
      surname: this.surname,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Checks', checksSchema)

export const schema = model.schema
export default model
