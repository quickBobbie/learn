const homeList = angular.module('homeList', []);

homeList.controller('homeListController', $scope => {
    $scope.home = new Home(data);

    $scope.homes = $scope.home.findAll();

    $scope.homeItem = $scope.homes[0];

    $scope.homeName = $scope.homeItem.homeName;

    $scope.errorClass = '';

    $scope.onSubmit = event => {
        $scope.errorClass = '';
        if ($scope.homeName == $scope.homeItem.homeName) return;

        let value = $scope.homeName.replace(/<[^>]+>/g,'').trim();

        if (value.length == 0) {
            $scope.errorClass = 'has-error';
            $scope.homeName = $scope.homeItem.homeName;

            return;
        }

        $scope.home.updateHome(event.homeItem._id, value);
        $scope.homeName = $scope.homeItem.homeName;
    }

    $scope.onFocus = () => {
        $scope.errorClass = '';
    }

    $scope.action = event => {
        $scope.homeItem = event.homeItem;
        $scope.homeName = $scope.homeItem.homeName;
    }

    $scope.onChange = event => {
        console.log(event);
    }
});
