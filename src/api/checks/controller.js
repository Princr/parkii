import { success, notFound } from '../../services/response/'
import { Checks } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Checks.create(body)
    .then((checks) => checks.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Checks.find(query, select, cursor)
    .then((checks) => checks.map((checks) => checks.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Checks.findById(params.id)
    .then(notFound(res))
    .then((checks) => checks ? checks.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Checks.findById(params.id)
    .then(notFound(res))
    .then((checks) => checks ? Object.assign(checks, body).save() : null)
    .then((checks) => checks ? checks.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Checks.findById(params.id)
    .then(notFound(res))
    .then((checks) => checks ? checks.remove() : null)
    .then(success(res, 204))
    .catch(next)
