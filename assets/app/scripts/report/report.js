'use strict';
var report = angular.module('miningApp.report', [])
  .run(['$rootScope', function($rootScope){
    $rootScope.operators = [
      {key: 'gte', value: 'Greater than or equal to'},
      {key: 'lte', value: 'Less than or equal to'},
      {key: 'is', value: 'Equal to'},
      {key: 'in', value: 'In a given list'},
      {key: 'between', value: 'Range'},
      {key: 'like', value: 'Like'},
      {key: 'regex', value: 'Regex'}
    ];
    $rootScope.geo_operators = [];
    if(window.has_geo) {
      $rootScope.geo_operators = [
        {key: 'geo_almost_equals', value: '(Spatial) Almost Equals'},
        {key: 'geo_contains', value: '(Spatial) Contains'},
        {key: 'geo_crosses', value: '(Spatial) Crosses'},
        {key: 'geo_disjoint', value: '(Spatial) Disjoint'},
        {key: 'geo_equals', value: '(Spatial) Equals'},
        {key: 'geo_touches', value: '(Spatial) Touches'},
        {key: 'geo_within', value: '(Spatial) Within'},
        {key: 'geo_intersects', value: '(Spatial) Intersects'}
      ];
    }
    $rootScope.types = [
      {key: 'date', value: 'Date'},
      {key: 'datetime', value: 'DateTime'},
      {key: 'int', value: 'Integer'},
      {key: 'str', value: 'String'}
    ];
  }]);
