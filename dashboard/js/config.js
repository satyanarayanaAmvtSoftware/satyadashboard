function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/login");
    $ocLazyLoadProvider.config({
        debug: false
    });
    $stateProvider
       
        .state('forgotpassword', {
            url: "/forgotpassword",
            templateUrl: "views/Amvt/forgotpassword.html",
            data: {
                pageTitle: 'forgotpassword',
                specialClass: 'page-header-fixed'
            }
        })
// rotary club dashboard start
.state('dashboard', {
    url: "/dashboard",
    templateUrl: "views/Amvt/dashboard.html",
    data: {
        pageTitle: 'dashboard',
        specialClass: 'page-header-fixed'
    }
})

//vendor state start
.state('vendor', {
    url: "/vendor",
    templateUrl: "views/Amvt/vendor.html",
    data: {
        pageTitle: 'vendor',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//vendor state end
//madicine state start
.state('madicine', {
    url: "/madicine",
    templateUrl: "views/Amvt/madicine.html",
    data: {
        pageTitle: 'madicine',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//madicine state end
//customer state start
.state('customer', {
    url: "/customer",
    templateUrl: "views/Amvt/customer.html",
    data: {
        pageTitle: 'customer',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//customer state end
// purches start 
.state('purchesDetails', {
    url: "/purchesDetails",
    templateUrl: "views/Amvt/purchesDetails.html",
    data: {
        pageTitle: 'purchesDetails',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
// purches end..
// sales 
.state('salesDetails', {
    url: "/salesDetails",
    templateUrl: "views/Amvt/salesDetails.html",
    data: {
        pageTitle: 'salesDetails',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
// sales  end..
.state('phrydates', {
    url: "/phrydates",
    templateUrl: "views/Amvt/phrydates.html",
    data: {
        pageTitle: 'phrydates',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})


.state('login', {
    url: "/login",
    templateUrl: "views/Amvt/login.html",
    data: {
        pageTitle: 'login',
        specialClass: 'header-none sidebar-none footer-none green-bg  login'
    }
})


        


}
angular
    .module('adminbag')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });