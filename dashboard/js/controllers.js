angular.module('adminbag')

    .controller('loginCtrl', function ($http, $scope, $rootScope, $state) {
        $scope.getLoggedIn = function () {
            var user_data = {
                "usr_name": $scope.username,
                "password": $scope.password,
            }
            if (user_data.usr_name == 'rotary' && user_data.password == 'rotary@123') {
                $state.go('dashboard');
            } else if (user_data.usr_name == 'amvt' && user_data.password == 'amvt@123') {
                $state.go('dashboard');
            } else {

            }
        }
    })
    .controller('MainCtrl', function ($http, $scope, $state, $filter, $rootScope) {
        var club_id = localStorage.getItem("club_id");
        ////console.log(club_id);
        if (club_id == null) {
            club_id = 0;
        }
        if (club_id) {
            $rootScope.checkusr = true;
            ////console.log($rootScope.checkusr)
        } else {
            $rootScope.checkusr = false;
            ////console.log($rootScope.checkusr)
        }

        $scope.logout = function () {
            ////console.log("fdfdfsdf");
            localStorage.removeItem('club_id');
            $state.go('login')

        }
    })
    // ******************************************** Pharmaesy Dashboard start *******************************************  

    // vendor data start
    .controller('vendorCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        //code start
        //vendor insert start
        $scope.recall = function () {

            $http.get('http://localhost:3344/nodeapp/getaVendorData/')
                .success(function (resdata, status) {
                    $scope.data = resdata.data;


                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }
        $scope.recall();



        $scope.submitvendor = function (V) {


            console.log(V);
            console.log(V.v_phno);
            var phnumnder = V.v_phno;
            console.log(phnumnder);
            // checking method 
            $http.get('http://localhost:3344/nodeapp/CheckPhnumber/' + phnumnder)
                .success(function (resdata, status) {
                    $scope.datacount = resdata.data[0].i;
                    console.log($scope.datacount);
                    if ($scope.datacount == 0) {
                        $http.post('http://localhost:3344/nodeapp/postVendorData', V)
                            .success(function (resdata, status) {

                                if (resdata.status == 200) {
                                    alert('sucess..');
                                    $scope.V = {};
                                    $scope.recall();
                                } else {
                                    alert('failed..')
                                    $scope.V = {};
                                }
                            })
                            .error(function (data, status, headers, config) {
                                if (status == 500) { }
                            })


                    } else {
                        alert("alredy this number added..")
                    }

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
            // checking method  end

            // 


        }

        $scope.updatevendor = function (ms) {
            console.log(ms);
            $scope.Edittm = ms;
        }
        $scope.updatevendorDetails = function (Edittm) {
            $http.post('http://localhost:3344/nodeapp/postVendorData', Edittm)
                .success(function (resdata, status) {

                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.Edittm = {};
                        //   $scope.recall();
                    } else {
                        alert('failed..')
                        $scope.Edittm = {};
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })


        }

        $scope.Deletevendor = function (id) {
            console.log(id);

            $http.get('http://localhost:3344/nodeapp/getDeleteVendorData/' + id)
                .success(function (resdata, status) {
                    if (status == '200') {
                        alert("Deleted Succefully...")
                        $scope.recall();
                    } else {
                        alert('fail...')

                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })



        }


        //report start

        //report end

        //code end
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    //vendor end...
    // madicine data start
    .controller('madicineCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        //code start
        //madicine insert start
        $scope.recall = function () {
            $http.get('http://localhost:3344/nodeapp/getMadicineData/')
                .success(function (resdata, status) {
                    $scope.data = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.recall();

        $scope.submitMadicine = function (M) {
            console.log(M);
            $http.post('http://localhost:3344/nodeapp/postMadicineData', M)
                .success(function (resdata, status) {

                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.M = {};
                        $scope.recall();
                    } else {
                        alert('failed..')
                        $scope.M = {};
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }



        //report start

        //report end

        //code end
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    //madicineCtrl end...
    // customer data start
    .controller('customerCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        //code start

        $scope.recall = function () {
            $http.get('http://localhost:3344/nodeapp/getCustomerData/')
                .success(function (resdata, status) {
                    $scope.customer = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })


        }
        $scope.recall();

        $scope.submitCustomer = function (C) {
            console.log(C);
            console.log(C.c_name);
            $http.get('http://localhost:3344/nodeapp/CheckCustomerName/' + C.c_name)
            .success(function (resdata, status) {
                $scope.customercount = resdata.data[0].j;
                console.log( $scope.customercount);
                if($scope.customercount == 0){
                    $http.post('http://localhost:3344/nodeapp/postCustomerData', C)
                .success(function (resdata, status) {
                    $scope.customer = resdata.data;
                    console.log($scope.customer);

                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.C = {};
                        $scope.recall();
                    } else {
                        alert('failed..')
                        $scope.C = {};
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

                }else
                {
                    alert("this name is Already added...!")
                }
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })

            
        }
        $scope.updateCstmer = function (ms) {
            console.log(ms);
            $scope.Edittm = ms
        }
        $scope.updateCustomer = function (Edittm) {
            $http.post('http://localhost:3344/nodeapp/postCustomerData', Edittm)
                .success(function (resdata, status) {
                    $scope.customer = resdata.data;
                    console.log($scope.customer);

                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.Edittm = {};
                        $scope.recall();
                    } else {
                        alert('failed..')
                        $scope.Edittm = {};
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })


        }

        $scope.deletecustomer = function (id) {
            console.log(id);
            $http.get('http://localhost:3344/nodeapp/getDeleteCustomerData/' + id)
                .success(function (resdata, status) {
                    if (status == '200') {
                        alert("Deleted Succefully..")
                        $scope.recall();
                    } else {
                        alert('failed..')
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }


        //report start

        //report end

        //code end
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    //customer end...

    // purches 
    .controller('purchesCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        //code start
        //purchess  start
        $scope.recall = function () {
            $http.get('http://localhost:3344/nodeapp/gePurchesData/')
                .success(function (resdata, status) {
                    $scope.purches = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })


        }
        $scope.recall();
        $scope.submitPurches = function (p) {

            console.log(p);
            $http.post('http://localhost:3344/nodeapp/postPurchesData', p)
                .success(function (resdata, status) {

                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.p = {};
                        $scope.recall();
                    } else {
                        alert('failed..')
                        $scope.p = {};
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }


        // get vendor dataa..

        $http.get('http://localhost:3344/nodeapp/getaVendorData/')
            .success(function (resdata, status) {
                $scope.data = resdata.data;
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })

        // get madicine dataa
        $http.get('http://localhost:3344/nodeapp/getMadicineData/')
            .success(function (resdata, status) {
                $scope.madicinedataa = resdata.data;
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })
        //          // getbranch code....
        // $scope.getbracncode = function (id) {
        //     console.log(id);

        //     $http.get('http://localhost:3344/nodeapp/getMadicineBranchCodeData/' + id)
        //         .success(function (resdata, status) {
        //             $scope.p.m_bcode = resdata.data[0].m_bcode;
        //             console.log($scope.p.m_bcode);
        //         })
        //         .error(function (data, status, headers, config) {
        //             if (status == 500) { }
        //         })

        // }
        $scope.getmadicinename=function(id){
            console.log(id);
            $http.get('http://localhost:3344/nodeapp/getMadicineDataname/' + id)
            .success(function (resdata, status) {
                $scope.p.m_name = resdata.data[0].i;
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })

        }

        $scope.search = function(id){    
            console.log(id);

            $http.get('http://localhost:3344/nodeapp/SearchData/' + id)
            .success(function (resdata, status) {
                $scope.purches = resdata.data;
                console.log($scope.purches);
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })
             // .success(function (resdata, status) {
            //     $scope.madicinedata = resdata.data;
            // })
            // .error(function (data, status, headers, config) {
            //     if (status == 500) { }
            // })// $http.get('http://localhost:3344/nodeapp/getMadicineData/')
           


                
        }
        $scope.search();




        //report start

        //report end

        //code end
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    // purches end

    // sales 
    .controller('salesDCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {

        //code start
        $http.get('http://localhost:3344/nodeapp/getCustomerData/')
            .success(function (resdata, status) {
                $scope.customer = resdata.data;
                console.log($scope.customer);
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })

        // get phnumber 
        $scope.getphnumber = function (id) {
            console.log(id);
            $http.get('http://localhost:3344/nodeapp/getCustomerNumberData/' + id)
                .success(function (resdata, status) {
                    $scope.s.c_phno = resdata.data[0].c_phno;
                    console.log($scope.s.c_phno);
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }
        $http.get('http://localhost:3344/nodeapp/getMadicineData/')
            .success(function (resdata, status) {
                $scope.data = resdata.data;
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })
        $scope.submitSales = function (s) {
            console.log(s);
            $http.post('http://localhost:3344/nodeapp/postSalesData', s)
                .success(function (resdata, status) {
                    $scope.sales = resdata.data;
                    console.log($scope.sales);

                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.C = {};
                        $scope.recall();
                    } else {
                        alert('failed..')
                        $scope.C = {};
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }
        $http.get('http://localhost:3344/nodeapp/getSalesData/')
            .success(function (resdata, status) {
                $scope.sales = resdata.data;
                console.log($scope.sales);
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })
           

        //code end
        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })
    // sales end
    .controller('dateCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder,$filter) {

        //code start
        $scope.submitExpairdate = function (f) {
            console.log(f);

            $scope.f_date = $filter('date')(f.fromdate, "yyyy-MM-dd");
            $scope.todate = $filter('date')(f.todate, "yyyy-MM-dd");
            console.log( $scope.f_date );
            console.log( $scope.todate );


            var data={
                'f_date': $scope.f_date,
                'todate': $scope.todate
               
            }

            $http.post('http://localhost:3344/nodeapp/postExpairDateData', data)
                .success(function (resdata, status) {
                    $scope.data = resdata.data;
                    console.log($scope.date);

                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.date = {};
                        // $scope.recall();
                    } else {
                        alert('failed..')
                        $scope.date = {};
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }

        // $http.get('http://localhost:3344/nodeapp/gePurchesData/')
        // .success(function (resdata, status) {
        //     $scope.purches = resdata.data;
        // })
        // .error(function (data, status, headers, config) {
        //     if (status == 500) { }
        // })
        // $scope.recall=function(){
        //     $http.get('http://localhost:3344/nodeapp/getExpairData/')
        //     .success(function (resdata, status) {
        //         $scope.expair = resdata.data;
        //         console.log($scope.sales);
        //     })
        //     .error(function (data, status, headers, config) {
        //         if (status == 500) { }
        //     })

        // }
        // $scope.recall();

        // $scope.submitExpairdate = function (d) {
        //     console.log(d);
        //     $http.post('http://localhost:3344/nodeapp/postExpairData', d)
        //         .success(function (resdata, status) {
        //             $scope.date = resdata.data;
        //             console.log($scope.date);

        //             if (resdata.status == 200) {
        //                 alert('sucess..');
        //                 $scope.date = {};
        //                 $scope.recall();
        //             } else {
        //                 alert('failed..')
        //                 $scope.date = {};
        //             }
        //         })
        //         .error(function (data, status, headers, config) {
        //             if (status == 500) { }
        //         })
        // }




        //code end
        //dt options start

        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })

    // ******************************************** Pharmaesy Dashboard end *******************************************  



