import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Pay, { schema } from './model'

const router = new Router()
const { allowed_time, paid } = schema.tree

/**
 * @api {post} /pays Create pay
 * @apiName CreatePay
 * @apiGroup Pay
 * @apiParam allowed_time Pay's allowed_time.
 * @apiParam paid Pay's paid.
 * @apiSuccess {Object} pay Pay's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pay not found.
 */
router.post('/',
  body({ allowed_time, paid }),
  create)

/**
 * @api {get} /pays Retrieve pays
 * @apiName RetrievePays
 * @apiGroup Pay
 * @apiUse listParams
 * @apiSuccess {Object[]} pays List of pays.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /pays/:id Retrieve pay
 * @apiName RetrievePay
 * @apiGroup Pay
 * @apiSuccess {Object} pay Pay's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pay not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /pays/:id Update pay
 * @apiName UpdatePay
 * @apiGroup Pay
 * @apiParam allowed_time Pay's allowed_time.
 * @apiParam paid Pay's paid.
 * @apiSuccess {Object} pay Pay's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Pay not found.
 */
router.put('/:id',
  body({ allowed_time, paid }),
  update)

/**
 * @api {delete} /pays/:id Delete pay
 * @apiName DeletePay
 * @apiGroup Pay
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Pay not found.
 */
router.delete('/:id',
  destroy)

export default router
