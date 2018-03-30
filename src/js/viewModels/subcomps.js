/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * subcomps module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojbutton', 'ojs/ojrouter', 'jet-composites/my-sc-bar/loader'],
        function (oj, ko, $, app) {
            /**
             * The view model for the main content view template
             */
            function subcompsContentViewModel() {
                var self = this;
                // Header Config
                self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};

                self.scdata1 = ko.observableArray();
                self.scdata1.push({dataurl: 'js/data/caiwu/income/subcompanys/scdata_1.json', chartname: '各子公司年累计收款与年计划对比情况'});
                self.scdata2 = ko.observableArray();
                self.scdata2.push({dataurl: 'js/data/caiwu/income/subcompanys/scdata_2.json', chartname: '月累计收款与月计划对比情况'});
                self.scdata3 = ko.observableArray();
                self.scdata3.push({dataurl: 'js/data/caiwu/income/subcompanys/scdata_3.json', chartname: '当日收款情况'});
                self.backBtn = function () {
                    oj.Router.rootInstance.go('bankuai');
                }
            }

            return subcompsContentViewModel;
        });
