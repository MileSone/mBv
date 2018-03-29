/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * caiwu module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'jet-composites/my-littlePie/loader', 'jet-composites/my-Pie/loader'],
        function (oj, ko, $, app) {
            /**
             * The view model for the main content view template
             */
            function caiwuContentViewModel() {
                var self = this;

                // Header Config
                self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};

                self.incomeArr1 = ko.observableArray();
                self.incomeArr1.push({dataurl: 'js/data/caiwu/cw_1.json', chartname: '公司年累计收款占公司年收款计划百分比'});

                self.incomeArr2 = ko.observableArray();
                self.incomeArr2.push({dataurl: 'js/data/caiwu/cw_2.json', chartname: ' 公司当月累计收款占公司月收款计划百分比'});

                self.incomeArr3 = ko.observableArray();
                self.incomeArr3.push({dataurl: 'js/data/caiwu/cw_3.json', chartname: ' 标题显示公司当日付款总金额'});

                self.incomeArr4 = ko.observableArray();
                self.incomeArr4.push({dataurl: 'js/data/caiwu/cw_4.json', chartname: ' 标题显示公司当日付款总金额'});



    
                // Below are a subset of the ViewModel methods invoked by the ojModule binding
                // Please reference the ojModule jsDoc for additional available methods.

                /**
                 * Optional ViewModel method invoked when this ViewModel is about to be
                 * used for the View transition.  The application can put data fetch logic
                 * here that can return a Promise which will delay the handleAttached function
                 * call below until the Promise is resolved.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
                 * the promise is resolved
                 */
                self.handleActivated = function (info) {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
                 */
                self.handleAttached = function (info) {
                    // Implement if needed
                };


                /**
                 * Optional ViewModel method invoked after the bindings are applied on this View. 
                 * If the current View is retrieved from cache, the bindings will not be re-applied
                 * and this callback will not be invoked.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 */
                self.handleBindingsApplied = function (info) {
                    // Implement if needed
                };

                /*
                 * Optional ViewModel method invoked after the View is removed from the
                 * document DOM.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
                 */
                self.handleDetached = function (info) {
                    // Implement if needed
                };
            }

            return caiwuContentViewModel;
        });
