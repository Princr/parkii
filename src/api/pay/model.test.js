import { Pay } from '.'

let pay

beforeEach(async () => {
  pay = await Pay.create({ allowed_time: 'test', paid: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = pay.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(pay.id)
    expect(view.allowed_time).toBe(pay.allowed_time)
    expect(view.paid).toBe(pay.paid)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = pay.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(pay.id)
    expect(view.allowed_time).toBe(pay.allowed_time)
    expect(view.paid).toBe(pay.paid)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
