'use strict';

const authMiddleware = require('../middleware/authentication');
const files = require('../controllers/files');

module.exports = function(router) {
  router.post('/file', authMiddleware.isAuthenticated, files.create);
  router.put('/file/:id', authMiddleware.isAuthenticated, files.update);
  router.put('/file/shared/:id', authMiddleware.isAuthenticated, files.provideReader);
  router.delete('/files/:id', authMiddleware.isAuthenticated, files.remove);
};