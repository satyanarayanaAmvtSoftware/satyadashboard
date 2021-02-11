/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var appmdl = require('../models/mainModel');

// frist task
exports.postVendorDataCtrl = function (req, res) {
    var vendord = req.body;
    appmdl.postVendorDataMdl(vendord, function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
exports.getaVendorDataCtrl = function (req, res) {    
    appmdl.getaVendorDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
// delete vendor data
exports.getDeleteVendorDataCtrl = function (req, res) { 
    var id = req.params.id;   
    appmdl.getDeleteVendorDataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
// check phnumber..
exports.CheckPhnumberCtrl = function (req, res) { 
    console.log(req.params)
    var phnumber = req.params.phnumnder;  
    console.log('phnumber') 
    console.log(phnumber)
    appmdl.CheckPhnumberMdl(phnumber, function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
// vendor end..
// madicine  data
exports.postMadicineDataCtrl = function (req, res) {
    var madicine = req.body;
    appmdl.postMadicineDataMdl(madicine, function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
exports.getMadicineDataCtrl = function (req, res) {    
    appmdl.getMadicineDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
// expaire data
exports.postExpairDateDataCtrl = function (req, res) {
    var expair = req.body;
    appmdl.postExpairDateDataMdl(expair, function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}

// get branchcode
// exports.getMadicineBranchCodeDataCtrl = function (req, res) {
//     var branch =req.params.id;    
//     appmdl.getMadicineBranchCodeDataMdl(branch, function (err, results) {
//         if (err) {
//             res.send({ 'status': 500 ,'data':results});
//             return;
//         }
//         res.send({ 'status': 200 , 'data':results});
//     });
// }

// madicine end
// customer  data
exports.postCustomerDataCtrl = function (req, res) {
    var cus = req.body;
    appmdl.postCustomerDataMdl(cus, function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
exports.getCustomerDataCtrl = function (req, res) {    
    appmdl.getCustomerDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
exports.CheckCustomerNameCtrl = function (req, res) {   
    var name = req.params.name; 
    console.log(name);
    appmdl.CheckCustomerNameMdl(name, function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
// get phnumber 
exports.getCustomerNumberDataCtrl = function (req, res) {  
    var ph = req.params.id;  
    appmdl.getCustomerNumberDataMdl(ph ,function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
// delete  data
exports.getDeleteCustomerDataCtrl = function (req, res) { 
    var cusid = req.params.id;   
    appmdl.getDeleteCustomerDataMdl(cusid, function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}


// customer end
// purches data start
exports.postPurchesDataCtrl = function (req, res) {
    var cus = req.body;
    console.log(cus);
    appmdl.postPurchesDataMdl(cus, function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        // res.send({ 'status': 200 , 'data':results});
        appmdl.getbalnceQty(cus, function (err, balresults) {
            if (err) {
                res.send({ 'status': 500 ,'data':balresults});
                return;
            }
            var balqty = balresults[0].m_quantity;
            console.log('balqty');
            console.log(balqty);
            appmdl.updateQuantity(cus,balqty, function (err, updateresults) {
                if (err) {
                    res.send({ 'status': 500 ,'data':updateresults});
                    return;
                }
                res.send({ 'status': 200 , 'data':updateresults});
                
            });
        });
        
    });
}
exports.gePurchesDataCtrl = function (req, res) {    
    appmdl.gePurchesDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
// get madicineName......
exports.getMadicineDatanameCtrl = function (req, res) {  
    var id = req.params.id;  
    appmdl.getMadicineDatanameMdl(id,function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
// search data
exports.SearchDataCtrl = function (req, res) { 
    var id = req.params.id;   
    console.log(id);
    appmdl.SearchDataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
// purches data end..

// sales start
exports.postSalesDataCtrl = function (req, res) {
    var sal = req.body;
    appmdl.postSalesDataMdl(sal, function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        // res.send({ 'status': 200 , 'data':results});
        appmdl.getbalnceQty1(sal, function (err, balresults) {
            if (err) {
                res.send({ 'status': 500 ,'data':balresults});
                return;
            }
            var balqty = balresults[0].m_quantity;
            console.log('balqty');
            console.log(balqty);
            appmdl.updateQuantity1(sal,balqty, function (err, updateresults) {
                if (err) {
                    res.send({ 'status': 500 ,'data':updateresults});
                    return;
                }
                res.send({ 'status': 200 , 'data':updateresults});
                
            });
        });
        
    });
}
exports.getSalesDataCtrl = function (req, res) {    
    appmdl.getSalesDataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500 ,'data':results});
            return;
        }
        res.send({ 'status': 200 , 'data':results});
    });
}
// sales end
// quantity bal

// quantity