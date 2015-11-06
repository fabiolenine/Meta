// js/servidorCore.js

google.load('visualization', '1', {
  packages: ['corechart']
});

angular.module('metaCore',['servidorController','servidorService','servidorDirective']);