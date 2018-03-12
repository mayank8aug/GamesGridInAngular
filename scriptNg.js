angular.module('gameApp', [])
    .controller('mainController', function($scope) {
        $scope.sortType     = 'name';
        $scope.sortReverse  = false;
        $scope.searchGame = '';
        $.ajax({
            method: 'GET',
            url: 'http://starlord.hackerearth.com/gamesarena',
            success: function(resp) {
                $scope.games = resp;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }
        });

    });