import { Checks } from '.'

let checks

beforeEach(async () => {
  checks = await Checks.create({ parkbayid: 'test', car_reg: 'test', cellphone: 'test', name: 'test', surname: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = checks.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(checks.id)
    expect(view.parkbayid).toBe(checks.parkbayid)
    expect(view.car_reg).toBe(checks.car_reg)
    expect(view.cellphone).toBe(checks.cellphone)
    expect(view.name).toBe(checks.name)
    expect(view.surname).toBe(checks.surname)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = checks.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(checks.id)
    expect(view.parkbayid).toBe(checks.parkbayid)
    expect(view.car_reg).toBe(checks.car_reg)
    expect(view.cellphone).toBe(checks.cellphone)
    expect(view.name).toBe(checks.name)
    expect(view.surname).toBe(checks.surname)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
