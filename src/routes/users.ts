import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req:Request, res:Response, next:NextFunction) {
  res.json({nama:"yaqin"})
});
// router.get('/about', function(req, res, next) {
//   res.send('Moh Ainul Yaqin');
// });


export default router;
