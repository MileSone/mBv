/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * singlecomp module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojbutton', 'ojs/ojrouter', 'jet-composites/my-pie/loader'],
        function (oj, ko, $, app) {
            /**
             * The view model for the main content view template
             */
            function singlecompContentViewModel() {
                var self = this;
                // Header Config
                self.toggleDrawer = app.toggleDrawer;
                self.pageTitle = ko.observable('单个子公司每日收款分类明细');
                self.dateValue = ko.observable(CURDATE);

                self.scdata1 = ko.observableArray();
                self.scdata2 = ko.observableArray();
                self.scdata3 = ko.observableArray();

                self.backBtn = function () {
                    oj.Router.rootInstance.go('subcomps');
                }

                self.init = function () {
                    self.scdata1.removeAll();
                    self.scdata2.removeAll();
                    self.scdata3.removeAll();
                    self.scdata1.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/income/singlecompany/sincdata_1.json', chartname: '当日分类收款比例'});
                    self.scdata2.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/income/singlecompany/sincdata_2.json', chartname: '当月分类收款比例'});
                    self.scdata3.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/income/singlecompany/sincdata_3.json', chartname: '当年分类收款比例'});
                };

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
                    self.init();
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
                    self.init();
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
                    app.adjustContentPadding();
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

                self.dateChangeHandler = function (event) {
                    CURDATE = event.detail.value;
                    DATAFLAG = (DATAFLAG == "1") ? "2" : "1";
                    self.init();
                }
            }

            return singlecompContentViewModel;
        });
