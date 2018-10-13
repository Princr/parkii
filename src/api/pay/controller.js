import { success, notFound } from '../../services/response/'
import { Pay } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Pay.create(body)
    .then((pay) => pay.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Pay.find(query, select, cursor)
    .then((pays) => pays.map((pay) => pay.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Pay.findById(params.id)
    .then(notFound(res))
    .then((pay) => pay ? pay.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Pay.findById(params.id)
    .then(notFound(res))
    .then((pay) => pay ? Object.assign(pay, body).save() : null)
    .then((pay) => pay ? pay.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Pay.findById(params.id)
    .then(notFound(res))
    .then((pay) => pay ? pay.remove() : null)
    .then(success(res, 204))
    .catch(next)
