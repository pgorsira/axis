angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('InstalledCtrl', function($scope, AppService, $timeout, $ionicLoading, $ionicPopup, $http) {
  console.log("InstalledCtrl");
  $scope.installed_apps = [
    { title: 'QuickBooks', id: "QuickBooks-Icon", company: "Intuit, Inc." },
    { title: 'Hearthstone', id: "hearthstone", company: "Blizzard, Inc." },
    { title: 'TurboTax Professional', id: "TurboTax_Logo", company:"Intuit, Inc." },
  ];

  $scope.new_app = {
    title:'Photoshop CS4',
    id: "cs4",
    company: "Adobe, Inc."
  };

  $timeout(function(){
    $scope.showNewApp = true;
  }, 1500);

  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Success',
      template: 'The transaction was processed successfully:<br><br>761f2f64c352ee279481d570310cb214ec30eae251ea65252ac4d740cffb6cd3.'
    });

    alertPopup.then(function(res) {
      $scope.installed_apps = [
        { title: 'QuickBooks', id: "QuickBooks-Icon", company: "Intuit, Inc." },
        { title: 'TurboTax Professional', id: "TurboTax_Logo", company:"Intuit, Inc." },
      ];
      console.log('Thank you for not eating my delicious ice cream cone');
    });
  };


  // A confirm dialog
  $scope.showConfirm = function(software, cost) {

    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirm Sell',
      template: 'Are you sure you want to sell a ' + software + ' license for $' + cost + '?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
        $ionicLoading.show({
          noBackdrop: true,
          //template: '<i class="icon ion-loading-c" style="color:white; font-size: 2em"></i>',
        });

        var request = $http.post('http://10.101.2.193/',
          {
            from: 'GB1111111111',
            to: 'ES123123123123',
            amount: cost
          });
        request.success(function (data, status, headers, config) {
          console.log("INFO", "OK");
        }).error(function (data, status, headers, config) {
          console.log("ERROR");
        });

        $timeout(function(){
          AppService.showNewApp = true;
          $ionicLoading.hide();
          $scope.showAlert();
        }, 1000);

      } else {
        console.log('You are not sure');
      }
    });
  };


})

  .controller('BrowseCtrl', function($scope, $ionicScrollDelegate, $timeout, $state) {
    $timeout(function(){
      //return false; // <--- comment this to "fix" the problem
      var sv = $ionicScrollDelegate.$getByHandle('horizontal').getScrollView();

      var container = sv.__container;

      var originaltouchStart = sv.touchStart;
      var originalmouseDown = sv.mouseDown;
      var originaltouchMove = sv.touchMove;
      var originalmouseMove = sv.mouseMove;

      container.removeEventListener('touchstart', sv.touchStart);
      container.removeEventListener('mousedown', sv.mouseDown);
      document.removeEventListener('touchmove', sv.touchMove);
      document.removeEventListener('mousemove', sv.mousemove);


      sv.touchStart = function(e) {
        e.preventDefault = function(){}
        originaltouchStart.apply(sv, [e]);
      }

      sv.touchMove = function(e) {
        e.preventDefault = function(){}
        originaltouchMove.apply(sv, [e]);
      }

      sv.mouseDown = function(e) {
        e.preventDefault = function(){}
        originalmouseDown.apply(sv, [e]);
      }

      sv.mouseMove = function(e) {
        e.preventDefault = function(){}
        originalmouseMove.apply(sv, [e]);
      }

      container.addEventListener("touchstart", sv.touchStart, false);
      container.addEventListener("mousedown", sv.mouseDown, false);
      document.addEventListener("touchmove", sv.touchMove, false);
      document.addEventListener("mousemove", sv.mouseMove, false);
    });
    $timeout(function(){
      //return false; // <--- comment this to "fix" the problem
      var sv = $ionicScrollDelegate.$getByHandle('horizontal2').getScrollView();

      var container = sv.__container;

      var originaltouchStart = sv.touchStart;
      var originalmouseDown = sv.mouseDown;
      var originaltouchMove = sv.touchMove;
      var originalmouseMove = sv.mouseMove;

      container.removeEventListener('touchstart', sv.touchStart);
      container.removeEventListener('mousedown', sv.mouseDown);
      document.removeEventListener('touchmove', sv.touchMove);
      document.removeEventListener('mousemove', sv.mousemove);


      sv.touchStart = function(e) {
        e.preventDefault = function(){}
        originaltouchStart.apply(sv, [e]);
      }

      sv.touchMove = function(e) {
        e.preventDefault = function(){}
        originaltouchMove.apply(sv, [e]);
      }

      sv.mouseDown = function(e) {
        e.preventDefault = function(){}
        originalmouseDown.apply(sv, [e]);
      }

      sv.mouseMove = function(e) {
        e.preventDefault = function(){}
        originalmouseMove.apply(sv, [e]);
      }

      container.addEventListener("touchstart", sv.touchStart, false);
      container.addEventListener("mousedown", sv.mouseDown, false);
      document.addEventListener("touchmove", sv.touchMove, false);
      document.addEventListener("mousemove", sv.mouseMove, false);
    });
    $timeout(function(){
      //return false; // <--- comment this to "fix" the problem
      var sv = $ionicScrollDelegate.$getByHandle('horizontal3').getScrollView();

      var container = sv.__container;

      var originaltouchStart = sv.touchStart;
      var originalmouseDown = sv.mouseDown;
      var originaltouchMove = sv.touchMove;
      var originalmouseMove = sv.mouseMove;

      container.removeEventListener('touchstart', sv.touchStart);
      container.removeEventListener('mousedown', sv.mouseDown);
      document.removeEventListener('touchmove', sv.touchMove);
      document.removeEventListener('mousemove', sv.mousemove);


      sv.touchStart = function(e) {
        e.preventDefault = function(){}
        originaltouchStart.apply(sv, [e]);
      }

      sv.touchMove = function(e) {
        e.preventDefault = function(){}
        originaltouchMove.apply(sv, [e]);
      }

      sv.mouseDown = function(e) {
        e.preventDefault = function(){}
        originalmouseDown.apply(sv, [e]);
      }

      sv.mouseMove = function(e) {
        e.preventDefault = function(){}
        originalmouseMove.apply(sv, [e]);
      }

      container.addEventListener("touchstart", sv.touchStart, false);
      container.addEventListener("mousedown", sv.mouseDown, false);
      document.addEventListener("touchmove", sv.touchMove, false);
      document.addEventListener("mousemove", sv.mouseMove, false);
    });
    $timeout(function(){
      //return false; // <--- comment this to "fix" the problem
      var sv = $ionicScrollDelegate.$getByHandle('horizontal4').getScrollView();

      var container = sv.__container;

      var originaltouchStart = sv.touchStart;
      var originalmouseDown = sv.mouseDown;
      var originaltouchMove = sv.touchMove;
      var originalmouseMove = sv.mouseMove;

      container.removeEventListener('touchstart', sv.touchStart);
      container.removeEventListener('mousedown', sv.mouseDown);
      document.removeEventListener('touchmove', sv.touchMove);
      document.removeEventListener('mousemove', sv.mousemove);


      sv.touchStart = function(e) {
        e.preventDefault = function(){}
        originaltouchStart.apply(sv, [e]);
      }

      sv.touchMove = function(e) {
        e.preventDefault = function(){}
        originaltouchMove.apply(sv, [e]);
      }

      sv.mouseDown = function(e) {
        e.preventDefault = function(){}
        originalmouseDown.apply(sv, [e]);
      }

      sv.mouseMove = function(e) {
        e.preventDefault = function(){}
        originalmouseMove.apply(sv, [e]);
      }

      container.addEventListener("touchstart", sv.touchStart, false);
      container.addEventListener("mousedown", sv.mouseDown, false);
      document.addEventListener("touchmove", sv.touchMove, false);
      document.addEventListener("mousemove", sv.mouseMove, false);
    });

    $scope.row1_apps = [
      { title: 'Adobe Photoshop',
        id: 3,
        company:"Photo & Video"
      },
      { title: 'Adobe Illustrator', id: 14,
        company:"Photo & Video"
      },
      { title: 'Quicken', id: 11,
        company:"Finance"
      },
      { title: 'Acrobat Pro',
        id: 1,
        company:"Productivity"
      },

      { title: 'Adobe After Effects', id: 15,
        company:"Photo & Video"
      },

    ];

    $scope.row2_apps = [
      { title: 'World of Warcraft',
        id: 5,
        company:"Games"
      },
      { title: 'StarCraft II', id: 13,
        company:"Games"
      },
      { title: 'Diablo II', id: 4,
        company:"Games"
      },
      { title: 'SolidWorks', id: 12,
        company:"Productivity"
      },


    ];

    $scope.row3_apps = [
      { title: 'Microsoft Word',
        id: 10,
        company:"Productivity"
      },
      { title: 'Microsoft PowerPoint', id: 9,
        company:"Productivity"
      },
      { title: 'Microsoft Excel', id: 8,
        company:"Productivity"
      },
      { title: 'Microsoft OneNote', id: 17,
        company:"Productivity"
      },

    ];

    $scope.goToOrders = function(){
      $state.go('app.orders');
    }

  })


  .controller('OrdersCtrl', function($scope, $stateParams, $ionicPopup, $state, $ionicLoading, $timeout, $http, AppService, $ionicHistory) {
    $scope.orders = [
      {
        title: 'Photoshop CS4',
        os: 'macOS',
        version: '11.0',
        date: 'Oct 15, 2005',
        price: 231.76,
        license: "2008",
        id: "cs4",
        company:"Adobe"
      },
      {
        title: 'Photoshop CS4',
        os: 'macOS',
        version: '11.0',
        date: 'Oct 15, 2005',
        price: 296.44,
        license: "2008",
        id: "cs4",
        company:"Adobe"
      }
,
      {
        title: 'Photoshop CS5',
        os: 'macOS',
        version: '12.1',
        date: 'Oct 15, 2005',
        price: 412.09,
        license: "2010",
        id:"cs5",
        company:"Adobe"
      },


      {
        title: 'Photoshop CS6',
        os: 'macOS',
        version: '13.0',
        date: 'Oct 15, 2005',
        price: 656.23,
        license: "2012",
        id:"cs6",
        company:"Adobe"
      },
      {
        title: 'Photoshop CS6',
        os: 'macOS',
        version: '13.0',
        date: 'Oct 15, 2005',
        price: 702.96,
        license: "2012",
        id:"cs6",
        company:"Adobe"
      }


    ];

    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Success',
        template: 'The transaction was processed successfully:<br><br>e9629ec5800743732f3d01e3b5fc36f773dbc64ddca5b226a3e48b61bd53565e.'
      });

      alertPopup.then(function(res) {
        $ionicHistory.nextViewOptions({
          historyRoot: true,
          disableBack: true
        });
        $state.go('app.installed');
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    };


    // A confirm dialog
    $scope.showConfirm = function(software, cost) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Confirm Purchase',
        template: 'Are you sure you want to purchase a ' + software + ' license for $' + cost + '?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
          $ionicLoading.show({
            noBackdrop: true,
            //template: '<i class="icon ion-loading-c" style="color:white; font-size: 2em"></i>',
          });

          var request = $http.post('http://10.101.2.193/',
            {
              from: 'GB1111111111',
              to: 'ES123123123123',
              amount: cost
            });
          request.success(function (data, status, headers, config) {
            console.log("INFO", "OK");
          }).error(function (data, status, headers, config) {
            console.log("ERROR");
          });

          $timeout(function(){
            AppService.showNewApp = true;
            $ionicLoading.hide();
            $scope.showAlert();
          }, 1000);

        } else {
          console.log('You are not sure');
        }
      });
    };

  })

  .service('AppService', function(){
    var self = this;

    self.showNewApp = false;
  });




// Scroll fix directive
(function() {
  var HorizontalScrollFix = (function() {
    function HorizontalScrollFix($timeout, $ionicScrollDelegate) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var mainScrollID = attrs.horizontalScrollFix,
            scrollID = attrs.delegateHandle;

          var getEventTouches = function(e) {
            return e.touches && (e.touches.length ? e.touches : [
              {
                pageX: e.pageX,
                pageY: e.pageY
              }
            ]);
          };

          var fixHorizontalAndVerticalScroll = function() {
            var mainScroll, scroll;
            mainScroll = $ionicScrollDelegate.$getByHandle(mainScrollID).getScrollView();
            scroll = $ionicScrollDelegate.$getByHandle(scrollID).getScrollView();

            // patch touchstart
            scroll.__container.removeEventListener('touchstart', scroll.touchStart);
            scroll.touchStart = function(e) {
              var startY;
              scroll.startCoordinates = ionic.tap.pointerCoord(e);
              if (ionic.tap.ignoreScrollStart(e)) {
                return;
              }
              scroll.__isDown = true;
              if (ionic.tap.containsOrIsTextInput(e.target) || e.target.tagName === 'SELECT') {
                scroll.__hasStarted = false;
                return;
              }
              scroll.__isSelectable = true;
              scroll.__enableScrollY = true;
              scroll.__hasStarted = true;
              scroll.doTouchStart(getEventTouches(e), e.timeStamp);
              startY = mainScroll.__scrollTop;

              // below is our changes to this method
              // e.preventDefault();

              // lock main scroll if scrolling horizontal
              $timeout((function() {
                var animate, yMovement;
                yMovement = startY - mainScroll.__scrollTop;
                if (scroll.__isDragging && yMovement < 2.0 && yMovement > -2.0) {
                  mainScroll.__isTracking = false;
                  mainScroll.doTouchEnd();
                  animate = false;
                  return mainScroll.scrollTo(0, startY, animate);
                } else {
                  return scroll.doTouchEnd();
                }
              }), 100);
            };
            scroll.__container.addEventListener('touchstart', scroll.touchStart);
          };
          $timeout(function() { fixHorizontalAndVerticalScroll(); });
        }
      };
    }

    return HorizontalScrollFix;

  })();

  angular.module('starter').directive('horizontalScrollFix', ['$timeout', '$ionicScrollDelegate', HorizontalScrollFix]);

}).call(this);
