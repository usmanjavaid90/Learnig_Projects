const express = require('express');
const router = express.Router()

const {getAllUrls, getUrl, createUrl, updateUrl, deleteUrl } = require('../controllers/urls')

router.route('/').get(getAllUrls).post(createUrl);
router.route('/:id').get(getUrl).put(updateUrl).delete(deleteUrl);

module.exports = router