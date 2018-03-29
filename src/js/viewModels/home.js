/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * home module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojrouter'],
        function (oj, ko, $, app) {
            /**
             * The view model for the main content view template
             */
            function homeContentViewModel() {
                var self = this;
                // Header Config
                self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};


                self.dashAction = function (jumper) {
                    console.log("clicking");
//                  if(jumper === 1){
//                      oj.Router.rootInstance.go('caiwu');
//                  }else if (jumper === 2){
//                      oj.Router.rootInstance.go('yingxiao');
//                  }

                };

                self.dashAction_One = function () {
                    oj.Router.rootInstance.go('caiwu');
                };

                self.dashAction_Two = function () {
                    oj.Router.rootInstance.go('yingxiao');
                };

            }

            return homeContentViewModel;
        });
