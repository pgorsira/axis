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

  .controller('BrowseCtrl', function($scope, $ionicScrollDelegate, $timeout) {
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
        id: 1,
        company:"Photo & Video"
      },
      { title: 'Microsoft Office', id: 2,
        company:"Productivity"
      },
      { title: 'Final Cut Pro', id: 3,
        company:"Photo & Video"
      },
      { title: 'SolidWorks', id: 4,
        company:"Productivity"
      },
    ];

    $scope.row2_apps = [
      { title: 'Overwatch',
        id: 6,
        company:"macOS"
      },
      { title: 'League of Legends', id: 7,
        company:"Windows 10"
      },
      { title: 'Rocket League', id: 8,
        company:"macOS"
      },
    ];

    $scope.row3_apps = [
      { title: 'Overwatch',
        id: 9,
        company:"macOS"
      },
      { title: 'League of Legends', id: 10,
        company:"Windows 10"
      },
      { title: 'Rocket League', id: 11,
        company:"macOS"
      },
    ];


  })


  .controller('OrdersCtrl', function($scope, $stateParams) {
    $scope.orders = [
      {
        title: 'Photoshop CS4',
        os: 'macOS',
        version: '11.0',
        date: 'Oct 15, 2005',
        price: 231.76,
        license: "Personal",
        id: "cs4",
        company:"Adobe"
      },
      {
        title: 'Photoshop CS4',
        os: 'macOS',
        version: '11.0',
        date: 'Oct 15, 2005',
        price: 296.44,
        license: "Commercial",
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
        license: "Personal",
        id:"cs5",
        company:"Adobe"
      },


      {
        title: 'Photoshop CS6',
        os: 'macOS',
        version: '13.0',
        date: 'Oct 15, 2005',
        price: 656.23,
        license: "Personal",
        id:"cs6",
        company:"Adobe"
      }

    ];
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

  angular.module('ionicApp').directive('horizontalScrollFix', ['$timeout', '$ionicScrollDelegate', HorizontalScrollFix]);

}).call(this);
