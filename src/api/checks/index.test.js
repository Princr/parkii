import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Checks } from '.'

const app = () => express(apiRoot, routes)

let checks

beforeEach(async () => {
  checks = await Checks.create({})
})

test('POST /checks 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ parkbayid: 'test', car_reg: 'test', cellphone: 'test', name: 'test', surname: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.parkbayid).toEqual('test')
  expect(body.car_reg).toEqual('test')
  expect(body.cellphone).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.surname).toEqual('test')
})

test('GET /checks 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /checks/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${checks.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(checks.id)
})

test('GET /checks/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /checks/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${checks.id}`)
    .send({ parkbayid: 'test', car_reg: 'test', cellphone: 'test', name: 'test', surname: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(checks.id)
  expect(body.parkbayid).toEqual('test')
  expect(body.car_reg).toEqual('test')
  expect(body.cellphone).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.surname).toEqual('test')
})

test('PUT /checks/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ parkbayid: 'test', car_reg: 'test', cellphone: 'test', name: 'test', surname: 'test' })
  expect(status).toBe(404)
})

test('DELETE /checks/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${checks.id}`)
  expect(status).toBe(204)
})

test('DELETE /checks/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
