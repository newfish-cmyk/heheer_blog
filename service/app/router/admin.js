module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth();
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);
  router.post('/admin/addArticle', controller.admin.main.addArticle);
  // router.post('/admin/addArticle', adminauth, controller.admin.main.addArticle);
  router.get('/admin/getArticleList', controller.admin.main.getArticleList);
  router.get('/admin/delArticle/:id', controller.admin.main.delArticle);
  router.get('/admin/getArticleById/:id', controller.admin.main.getArticleById);
};
