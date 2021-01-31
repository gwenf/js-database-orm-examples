const path = require('path')
const express = require('express')
const router = express.Router()

const User = require('@models/User')

router.route('/')
  .get(async function(req, res) {
    // pagination example
    // const page = parseInt(req.query.page)
    // const size = parseInt(req.query.size)
    // const offset = (page + 1) * size

    // const options = page && size ? { offset, limit: size } : {}
    return 'Success'
  })
  .post(async function(req, res) {
    const {
      username,
      first_name,
      email,
      is_admin
    } = req.body

    const user = new User({
      username: "gwen",
      email: "gwen@example.com",
      is_admin: true,
    });

    return user
  })

router.route('/:userId')
  .get(async function(req, res) {
  })
  .patch(async function(req, res) {
  })
  .delete(async function(req, res) {
  })

module.exports = router
