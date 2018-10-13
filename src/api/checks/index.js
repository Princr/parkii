import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Checks, { schema } from './model'

const router = new Router()
const { parkbayid, car_reg, cellphone, name, surname } = schema.tree

/**
 * @api {post} /checks Create checks
 * @apiName CreateChecks
 * @apiGroup Checks
 * @apiParam parkbayid Checks's parkbayid.
 * @apiParam car_reg Checks's car_reg.
 * @apiParam cellphone Checks's cellphone.
 * @apiParam name Checks's name.
 * @apiParam surname Checks's surname.
 * @apiSuccess {Object} checks Checks's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Checks not found.
 */
router.post('/',
  body({ parkbayid, car_reg, cellphone, name, surname }),
  create)

/**
 * @api {get} /checks Retrieve checks
 * @apiName RetrieveChecks
 * @apiGroup Checks
 * @apiUse listParams
 * @apiSuccess {Object[]} checks List of checks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /checks/:id Retrieve checks
 * @apiName RetrieveChecks
 * @apiGroup Checks
 * @apiSuccess {Object} checks Checks's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Checks not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /checks/:id Update checks
 * @apiName UpdateChecks
 * @apiGroup Checks
 * @apiParam parkbayid Checks's parkbayid.
 * @apiParam car_reg Checks's car_reg.
 * @apiParam cellphone Checks's cellphone.
 * @apiParam name Checks's name.
 * @apiParam surname Checks's surname.
 * @apiSuccess {Object} checks Checks's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Checks not found.
 */
router.put('/:id',
  body({ parkbayid, car_reg, cellphone, name, surname }),
  update)

/**
 * @api {delete} /checks/:id Delete checks
 * @apiName DeleteChecks
 * @apiGroup Checks
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Checks not found.
 */
router.delete('/:id',
  destroy)

export default router
