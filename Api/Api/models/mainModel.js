var sqldb = require('../config/dbconnect');
var dbutil = require(appRoot + '/utils/dbutils');
var moment = require('moment');

//Secure start

exports.postVendorDataMdl = function (data, callback) {

	var cntxtDtls = "in postVendorDataMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");

	var QRY_TO_EXEC = `insert into  vendor (v_name,v_phno,v_email,v_address,i_ts)
	values('${data.v_name}','${data.v_phno}','${data.v_email}','${data.v_address}','${date}');`;
	console.log(date);
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getaVendorDataMdl = function (callback) {

	var cntxtDtls = "in getaVendorDataMdl";
	var QRY_TO_EXEC = `select * from vendor where d_in='0' order by id desc;`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// delete vendor data..
exports.getDeleteVendorDataMdl = function (id, callback) {
	console.log(id);

	var cntxtDtls = "in getDeleteVendorDataMdl";
	var QRY_TO_EXEC = `update vendor set d_in='1' where id ='${id}';`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// check phnumber
exports.CheckPhnumberMdl = function (v_phno, callback) {
	console.log(v_phno);

	var cntxtDtls = "in CheckPhnumberCtrl";
	var QRY_TO_EXEC = `select count(id) as i from vendor where v_phno ='${v_phno}';`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// vendor..

// madicine
exports.postMadicineDataMdl = function (data, callback) {

	var cntxtDtls = "in postMadicineDataMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");

	var QRY_TO_EXEC = `insert into  madicine (m_catg,m_name,m_bcode,m_cost,m_quantity,i_ts)
	values('${data.m_catg}','${data.m_name}','${data.m_bcode}','${data.m_cost}','${data.m_quantity}','${date}');`;
	console.log(date);
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getMadicineDataMdl = function (callback) {

	var cntxtDtls = "in getMadicineDataMdl";
	var QRY_TO_EXEC = `select * from madicine;`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// madicine baranch code
// exports.getMadicineBranchCodeDataMdl = function (id, callback) {

// 	var cntxtDtls = "in getMadicineBranchCodeDataMdl";
// 	var QRY_TO_EXEC = `select m_bcode from madicine where id ='${id}';`;

// 	console.log(QRY_TO_EXEC);
// 	if (callback && typeof callback == "function") {
// 		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
// 			callback(err, results);
// 			return;
// 		});
// 	}
// 	else
// 		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
// };
// madicine
// customer
exports.postCustomerDataMdl = function (data, callback) {

	var cntxtDtls = "in postMadicineDataMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");

	var QRY_TO_EXEC = `insert into  customer (c_name,c_phno,c_add,i_ts)
	values('${data.c_name}','${data.c_phno}','${data.c_add}','${date}');`;
	console.log(date);
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getCustomerDataMdl = function (callback) {

	var cntxtDtls = "in getCustomerDataMdl";
	var QRY_TO_EXEC = `select * from customer where d_in='0' order by id desc;`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.CheckCustomerNameMdl = function (c_name, callback) {

	var cntxtDtls = "in CheckCustomerNameMdl";
	var QRY_TO_EXEC = `select count(id) as j from customer where c_name='${c_name}';`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// get phnumber..
exports.getCustomerNumberDataMdl = function (id, callback) {

	var cntxtDtls = "in getCustomerNumberDataMdl";
	var QRY_TO_EXEC = `select c_phno from customer where id = '${id}';`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getDeleteCustomerDataMdl = function (id, callback) {
	console.log(id);

	var cntxtDtls = "in getDeleteCustomerDataMdl";
	var QRY_TO_EXEC = `update customer set d_in='1' where id ='${id}';`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

// customer..
// purches data start 
exports.postPurchesDataMdl = function (data, callback) {

	var cntxtDtls = "in postPurchesDataMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");

	var QRY_TO_EXEC = `insert into  purches (v_name,m_catg,m_name,m_bcode,exp_date,quantity,rate,i_ts)
	values('${data.v_name}','${data.m_catg}','${data.m_name}','${data.m_bcode}','${data.exp_date}','${data.quantity}','${data.rate}','${date}');`;
	console.log(date);
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.gePurchesDataMdl = function (callback) {

	var cntxtDtls = "in gePurchesDataMdl";
	var QRY_TO_EXEC = `select p.*,v.v_name,m.m_name,m_catg from purches as p join vendor as v on v.id = p.v_name join madicine as m on m.id = p.m_name;`;


	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// get madicine data....
exports.getMadicineDatanameMdl = function (id,callback) {
	console.log(id);

	var cntxtDtls = "in getMadicineDatanameMdl";
	var QRY_TO_EXEC = `select m_name as i from madicine where id ='${id}';`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

// search purches data
exports.SearchDataMdl = function (id, callback) {
	console.log('model');
	console.log(id);
	
	var cntxtDtls = "in SearchDataMdl";
	if(id=='undefined'){
		var QRY_TO_EXEC = `select p.*,v.v_name,m.m_name from purches as p join vendor as v on v.id = p.v_name join madicine as m on m.id = p.m_name;`;

	}else{
		var QRY_TO_EXEC = `select p.*,v.v_name,m.m_name from purches as p join vendor as v on v.id = p.v_name join madicine as m on m.id = p.m_name where p.id = '${id}';`;

	}
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

// purches data end
// sales start
exports.postSalesDataMdl = function (data, callback) {

	var cntxtDtls = "in postSalesDataMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");

	var QRY_TO_EXEC = `insert into   salesdetails (c_name,c_phno,m_name,s_quantity,rate,i_ts)
	values('${data.c_name}','${data.c_phno}','${data.m_name}','${data.s_quantity}','${data.rate}','${date}');`;
	console.log(date);
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getSalesDataMdl = function (callback) {

	var cntxtDtls = "in getSalesDataMdl";
	var QRY_TO_EXEC = `select s.*,c.c_name,m.m_name from salesdetails as s join customer as c on c.id = s.c_name join madicine as m on m.id=s.m_name ;`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

// sales end...
// bal qnty...


// expaire date start 
exports.postExpairDataMdl = function (data, callback) {

	var cntxtDtls = "in postExpairDataMdl";
	// var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");

	var QRY_TO_EXEC = `insert into   exapire_date (md_name,fromdate,enddate)
	values('${data.md_name}','${data.fromdate}','${data.enddate}');`;
	// console.log(date);
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getExpairDataMdl = function (callback) {

	var cntxtDtls = "in getExpairDataMdl";
	var QRY_TO_EXEC = `select * from exapire_date ;`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// expaire date end
// bal quantity
exports.getbalnceQty = function (cus, callback) {

	var cntxtDtls = "in getbalnceQty";
	var QRY_TO_EXEC = `select m_quantity from madicine where id= '${cus.m_name}' ;`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// update quantity
exports.updateQuantity = function (cus, balqty, callback) {
	console.log(cus);
	var cntxtDtls = "in updateQuantity";
	var qty = (cus.quantity * 1) + (balqty * 1);
	console.log(qty);
	var QRY_TO_EXEC = `update madicine set m_quantity = '${qty}' where id ='${cus.m_name}'`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getbalnceQty1 = function (sal, callback) {

	var cntxtDtls = "in getbalnceQty1";
	var QRY_TO_EXEC = `select m_quantity from madicine where id= '${sal.m_name}' ;`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// update quantity
exports.updateQuantity1 = function (sal, balqty, callback) {
	console.log(sal);
	var cntxtDtls = "in updateQuantity1";
	var qty = (balqty * 1) - (sal.s_quantity * 1);
	console.log(qty);
	var QRY_TO_EXEC = `update madicine set m_quantity = '${qty}' where id ='${sal.m_name}'`;

	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// exapire date
exports.postExpairDateDataMdl = function (expair, callback) {

	console.log(expair);

	var cntxtDtls = "in postExpairDataMdl";
	// var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");

	var QRY_TO_EXEC = `select * from  salesdetails as s join madicine as m on m.id = s.m_name  join customer as c on c.id =s.c_name where s.i_ts >= '${expair.f_date}' and s.i_ts <='${expair.todate}' ;`;



	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};