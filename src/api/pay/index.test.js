import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Pay } from '.'

const app = () => express(apiRoot, routes)

let pay

beforeEach(async () => {
  pay = await Pay.create({})
})

test('POST /pays 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ allowed_time: 'test', paid: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.allowed_time).toEqual('test')
  expect(body.paid).toEqual('test')
})

test('GET /pays 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /pays/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${pay.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(pay.id)
})

test('GET /pays/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /pays/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${pay.id}`)
    .send({ allowed_time: 'test', paid: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(pay.id)
  expect(body.allowed_time).toEqual('test')
  expect(body.paid).toEqual('test')
})

test('PUT /pays/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ allowed_time: 'test', paid: 'test' })
  expect(status).toBe(404)
})

test('DELETE /pays/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${pay.id}`)
  expect(status).toBe(204)
})

test('DELETE /pays/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
