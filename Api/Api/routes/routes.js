var express = require('express');
router = express.Router();
var sampleRoutes = require('../controllers/mainCtrl');

//first  start
router.post('/postVendorData', sampleRoutes.postVendorDataCtrl);
router.get('/getaVendorData', sampleRoutes.getaVendorDataCtrl);
router.get('/CheckPhnumber/:phnumnder', sampleRoutes.CheckPhnumberCtrl);
router.get('/getDeleteVendorData/:id', sampleRoutes.getDeleteVendorDataCtrl);
// router.get('/CheckVendorPhNumber/phnumber', sampleRoutes.CheckVendorPhNumberCtrl);

//first  End
// madicine 
router.post('/postMadicineData', sampleRoutes.postMadicineDataCtrl);
router.get('/getMadicineData', sampleRoutes.getMadicineDataCtrl);
// madicine
// customer 
router.post('/postCustomerData', sampleRoutes.postCustomerDataCtrl);
router.get('/getCustomerData', sampleRoutes.getCustomerDataCtrl);
router.get('/CheckCustomerName/:name', sampleRoutes.CheckCustomerNameCtrl);
router.get('/getDeleteCustomerData/:id', sampleRoutes.getDeleteCustomerDataCtrl);
// cutomer

// purches data
router.post('/postPurchesData', sampleRoutes.postPurchesDataCtrl);
router.get('/gePurchesData', sampleRoutes.gePurchesDataCtrl);
router.get('/SearchData/:id', sampleRoutes.SearchDataCtrl);
router.get('/getMadicineDataname/:id', sampleRoutes.getMadicineDatanameCtrl); // thorgh the madicine data table.

// purches end

// sales start
router.post('/postSalesData', sampleRoutes.postSalesDataCtrl);
router.get('/getSalesData', sampleRoutes.getSalesDataCtrl);
router.get('/getCustomerNumberData/:id', sampleRoutes.getCustomerNumberDataCtrl);
// sales end..

// expaire date ....
router.post('/postExpairDateData', sampleRoutes.postExpairDateDataCtrl);
// router.get('/getExpairData', sampleRoutes.getExpairDataCtrl);
// // expaire date end..





module.exports = router;
