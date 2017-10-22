angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('InstalledCtrl', function($scope) {
  console.log("InstalledCtrl");
  $scope.installed_apps = [
    { title: 'Adobe Photoshop CS2', id: 1 },
    { title: 'Microsoft Office 2011', id: 2 },
    { title: 'Final Cut Pro', id: 3 },
  ];
})

  .controller('BrowseCtrl', function($scope) {
    $scope.row1_apps = [
      { title: 'Adobe Photoshop',
        id: 1,
        platform:"macOS"
      },
      { title: 'Microsoft Office 2011', id: 2,
        platform:"Windows 10"
      },
      { title: 'Final Cut Pro', id: 3,
        platform:"macOS"
      },
      { title: 'SolidWorks', id: 4,
        platform:"macOS"
      },
    ];

    $scope.row2_apps = [
      { title: 'Overwatch',
        id: 1,
        platform:"macOS"
      },
      { title: 'League of Legends', id: 2,
        platform:"Windows 10"
      },
      { title: 'Rocket League', id: 3,
        platform:"macOS"
      },
    ];

  })


  .controller('OrdersCtrl', function($scope, $stateParams) {
});
