(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
    $scope.inp="";
    $scope.msg="";
    $scope.DisplayMsg=function () {
      if($scope.inp==='')
        $scope.msg="Please enter data first";
      else {
        var words=$scope.inp.split(',');
        var count=0;
        for(var i in words)
          if(words[i]==='')
            continue;
          else
            count++;
        if(count===0)
          $scope.msg="Please enter data first";
        else if (count<=3)
          $scope.msg="Enjoy!";
        else
          $scope.msg="Too much!";
      }
    }
  }
}
)();
