var app = angular.module('app', ['ngTouch', 'ui.grid']);

app.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.gridOptions = {
    columnDefs: [
    	{
        name:'firstCol',
        headerCellTemplate: "<div class='ui-grid-spilt-header-main'><div class='ui-grid-split-merge-header' style='width:500%'><table class='ui-grid-header-table'><tbody><tr><td colspan='3'></td></tr><tr><td width='20%''></td><td width='40%''>MTD</td><td>YTD</td></tr</tbody></table></div >Details Hours</div>"
      },
      {
      name:'secondCol',
      headerCellTemplate: "<div class='ui-grid-spilt-header-main'>Value</div>"
      },
      {name:'thirdCol',
      headerCellTemplate: "<div class='ui-grid-spilt-header-main'>%</div>",
      },
      {name:'fourthCol',
      headerCellTemplate: "<div class='ui-grid-spilt-header-main'>Value</div>"
      },
      {name:'fifthCol',
      headerCellTemplate: "<div class='ui-grid-spilt-header-main'>%</div>"
      }
    ],
			data: [
    {
        "firstCol": "Tot. Productive Hours",
        "secondCol": "354,155.98",
        "thirdCol": "1.21",
        "fourthCol": 'Radha',
        "fifthCol": true
    },
    {
        "firstCol": "Tot.Expense",
        "secondCol": "383,654.02",
        "thirdCol": "1.34",
        "fourthCol": 'Jassi',
        "fifthCol": false
    },
    {
        "firstCol": "Tot.Hours",
        "secondCol": "787,808.00",
        "thirdCol": "0.0",
        "fourthCol": 'Lusi',
        "fifthCol": false
    },
    {
        "firstCol": "Tot.Overtime",
        "secondCol": "135,220.57",
        "thirdCol": "0.47",
        "fourthCol": 'Lusi',
        "fifthCol": false
    }
]
}
}]);
