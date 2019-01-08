import * as AnalyzedController from '../controllers/analyzed.controller';
import { Router } from 'express';
const router = new Router();


/**
 * Example endpoint
 * /api/analyzed/?name=cmb.studio2018&limit=20
 */
router.route('/analyzed').get(AnalyzedController.getAnalyzedData);

module.exports = router;
