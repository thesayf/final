app.config(function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider

        .when('/', {
            templateUrl : 'app/components/home/home-view.html',
            controller  : 'HomeCtrl'
        })

        .when('/dash', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashHomeCtrl',
            action      : 'dash-home',
            type        : 'dash'
        })

        .when('/instant', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashInstantCtrl',
            action      : 'dash-instant',
            type        : 'dash'
        })

        .when('/schedule', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashScheduleCtrl',
            action      : 'dash-schedule',
            type        : 'dash'
        })

        .when('/recurring', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashRecurringCtrl',
            action      : 'dash-recurring',
            type        : 'dash'
        })

        .when('/project', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashProjectCtrl',
            action      : 'dash-project',
            type        : 'dash'
        })

        .when('/address-book', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddressBookCtrl',
            action      : 'dash-addressbook',
            type        : 'dash'
        })

        .when('/add-address', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action      : 'dash-addaddress',
            type        : 'dash'
        })

        .when('/job-complete', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action      : 'dash-jobcomplete',
            type        : 'dash'
        })

        .when('/payment-details', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action      : 'dash-paymentdetails',
            type        : 'dash'
        })

        .when('/profile', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action      : 'dash-profile',
            type        : 'dash'
        })

        .when('/project-job', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action      : 'dash-projectjob',
            type        : 'dash'
        })

        .when('/saved-quotes', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action      : 'dash-savedquotes',
            type        : 'dash'
        })

        .when('/pending-jobs', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action      : 'dash-pendingjobs',
            type        : 'dash'
        })

        .when('/all-messages', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action      : 'dash-allmessages',
            type        : 'dash'
        })

        .when('/signup', {
            templateUrl : 'app/components/home/signup.html',
            controller  : 'DashSignupCtrl',
            //action    : 'dash-allmessages',
            //type        : 'dash'
        })

        .when('/login', {
            templateUrl : 'app/components/home/login.html',
            controller  : 'DashLoginCtrl',
            //action    : 'dash-allmessages',
            type        : 'dash'
        })

        .when('/viewallmessages', {
            templateUrl : 'app/components/home/dash-allmessages.html',
            controller  : 'DashMessagesCtrl',
            action      : 'dash-allmessages',
            type        : 'dash'
        })

        .when('/ticket-chain', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashTicketCtrl',
            action      : 'dash-ticketchain',
            type        : 'dash'
        })

        .when('/my-drivers', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashDriversCtrl',
            action      : 'dash-mydrivers'
        })

        .when('/driver-profile', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashDriverProfileCtrl',
            action      : 'dash-driverprofile'
        })

        .when('/live-view', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashLiveViewCtrl',
            action      : 'dash-liveview'
        })

        .when('/notifications', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashNotificationsCtrl',
            action      : 'dash-notifications'
        })

        .when('/admin', {
            templateUrl : 'app/components/admin/admin-view.html',
            controller  : 'AdminHomeCtrl',
            action      : 'admin-home',
            type        : 'admin'
        })

        .when('/users', {
            templateUrl : 'app/components/admin/admin-view.html',
            controller  : 'DashUsersCtrl',
            action      : 'admin-users'
        })

        .when('/drivers', {
            templateUrl : 'app/components/admin/admin-view.html',
            controller  : 'DashDriversCtrl',
            action      : 'admin-drivers'
        })

        .when('/earnings', {
            templateUrl : 'app/components/admin/admin-view.html',
            controller  : 'DashDriversEarningsCtrl',
            action      : 'admin-earnings'
        })

        .when('/staff-login', {
            templateUrl : 'app/components/home/staff-login.html',
            controller  : 'StaffSigninCtrl',
            //action    : 'dash-allmessages'
            type        : 'admin'
        })

        .when('/contractor-signup', {
            templateUrl : 'app/components/home/contractor-signup.html',
            controller  : 'ContractorSignupCtrl'
            //action    : 'dash-allmessages'
        })

        .when('/staff', {
            templateUrl : 'app/components/admin/admin-view.html',
            controller  : 'DashStaffCtrl',
            action      : 'admin-staff'
        })

        .otherwise({
            redirectTo: '/'
        });

        //$httpProvider.interceptors.push("authInter");
        $locationProvider.html5Mode(true);

});
