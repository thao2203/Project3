﻿var app = angular.module("myApp", []);
//console.clear();
app.controller("hotPost", function ($scope, $http) {

    $http({
        method: 'get',
        url: '/baiViet/getbaiviethot'
    }).then(function successCallback(res) {

        $scope.listbaiviethot = res.data;//lưu dữ liệu vào biến $scope.listbaivietmoinhat 
        console.log($scope.listbaiviethot);

    })
}).filter("filterdate", function () {
    var re = /\/Date\(([0-9]*)\)\//;
    return function (x) {
        var m = x.match(re);
        if (m) return new Date(parseInt(m[1]));
        else return null;
    };
});
app.controller("newpost", function ($scope, $http) {

    $http({
        method: 'get',
        url: '/baiViet/getbaivietmoinhat'
    }).then(function successCallback(res) {

        $scope.listbaivietmoi = res.data;//lưu dữ liệu vào biến $scope.listbaivietmoinhat 
        console.log($scope.listbaivietmoi);

    })
}).filter("filterdate", function () {
    var re = /\/Date\(([0-9]*)\)\//;
    return function (x) {
        var m = x.match(re);
        if (m) return new Date(parseInt(m[1]));
        else return null;
    };
});

app.controller("cakepost", function ($scope, $http) {

    $http({
        method: 'get',
        url: '/baiViet/getbaivietBanhNgot'
    }).then(function successCallback(res) {

        $scope.listbaivietBanhNgot = res.data;//lưu dữ liệu vào biến $scope.listbaivietmoinhat 
        console.log($scope.listbaivietBanhNgot);

    })
}).filter("filterdate", function () {
    var re = /\/Date\(([0-9]*)\)\//;
    return function (x) {
        var m = x.match(re);
        if (m) return new Date(parseInt(m[1]));
        else return null;
    };
});

app.controller("HaNoipost", function ($scope, $http) {

    $http({
        method: 'get',
        url: '/baiViet/getbaivietHaNoi'
    }).then(function successCallback(res) {

        $scope.listbaivietHaNoi = res.data;//lưu dữ liệu vào biến $scope.listbaivietmoinhat 
        console.log($scope.listbaivietHaNoi);

    })
}).filter("filterdate", function () {
    var re = /\/Date\(([0-9]*)\)\//;
    return function (x) {
        var m = x.match(re);
        if (m) return new Date(parseInt(m[1]));
        else return null;
    };
});



app.controller("bvTheoLoai", function ($scope, $http, $location) {
    var maDMC = $location.search().maLoai;
    $http({
        method: 'get',
        url: '/baiViet/getbaiviettheoloai?maLoai=' + maDMC,

    }).then(function successCallback(res) {

        $scope.listbaivietHaNoi = res.data;//lưu dữ liệu vào biến $scope.listbaivietmoinhat 
        console.log($scope.listbaivietHaNoi);

    })
}).filter("filterdate", function () {
    var re = /\/Date\(([0-9]*)\)\//;
    return function (x) {
        var m = x.match(re);
        if (m) return new Date(parseInt(m[1]));
        else return null;
    };
});


//BV theo loại Bánh NGọt
//app.controller("LoaiBanhNgotPost", function ($scope, $http, $location) {
//    var maDMC = $location.search().maLoai;
//    $http({
//        method: 'get',
//        url: '/baiViet/getbaiviettheoloai?maLoai=' + maDMC,

//    }).then(function successCallback(res) {

//        $scope.listdsBNgot = res.data;//lưu dữ liệu vào biến $scope.listbaivietmoinhat 
//        console.log($scope.listdsBNgot);

//    })
//}).filter("filterdate", function () {
//    var re = /\/Date\(([0-9]*)\)\//;
//    return function (x) {
//        var m = x.match(re);
//        if (m) return new Date(parseInt(m[1]));
//        else return null;
//    };
//});

//-----------------------------------

app.controller("LoaiBanhNgotPost", function ($scope, $http) {
    $scope.pagesize = 5;
    $http({
        method: 'get',
        url: '/baiViet/getPhanTrangBV?maLoai=dmc14&&pagesize=' + $scope.pagesize,
    }).then(function successCallback(res) {

        $scope.listdsBNgot = res.data;//lưu dữ liệu vào biến $scope.listbaivietmoinhat 
        console.log($scope.listdsBNgot);

    })
    $scope.load = function () {
        alert("d")
        $scope.pagesize += 5;
        $http({
            method: 'get',
            url: '/baiViet/getPhanTrangBV?maLoai=dmc14&&pagesize=' + $scope.pagesize,
        }).then(function successCallback(res) {

            $scope.listdsBNgot = res.data;//lưu dữ liệu vào biến $scope.listbaivietmoinhat 
            console.log($scope.listdsBNgot);

        })
    }
});

//----------------------------
//navigator

//app.controller('menuController', ['$scope', '$http', function ($scope, $http) {
//    $scope.SiteMenu = [];
//    $http.get('/baiViet/GetMainMenu').then(function (data) {
//        $scope.SiteMenu = data.data;
//    }, function (error) {
//        alert('Error');
//    })
//}])   

app.controller("getMenu", function ($scope, $http) {
    $http.get('/danhmuc/getdanhmuc').then(function (data) {
        $scope.menus = [];
        $scope.danhmuc = data.data;
        $http.get('/DanhMucCon/GetDanhMucCon').then(function (data) {
            $scope.danhmuccon = data.data;
            console.log($scope.danhmuc);
            console.log($scope.danhmuccon);
            for (let i = 0; i < $scope.danhmuc.length; i++) {
                const node = $scope.danhmuc[i];
                node.children = [];
                for (let j = 0; j < $scope.danhmuccon.length; j++) {
                    const node_con = $scope.danhmuccon[j];
                    if (node_con.madm == node.MaDM) {
                        node.children.push(node_con);
                    }
                }
                $scope.menus.push(node);
            }
        })
        console.log($scope.menus);
    })
})