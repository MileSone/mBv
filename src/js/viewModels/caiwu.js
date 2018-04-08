/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * caiwu module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'jet-composites/my-littlePie/loader', 'jet-composites/my-botPie/loader','ojs/ojaccordion', 'ojs/ojradioset', 'ojs/ojlabel'],
        function (oj, ko, $, app) {
            /**
             * The view model for the main content view template
             */
            function caiwuContentViewModel() {
                var self = this;
                self.pieSeriesValue = ko.observableArray();
                self.innerRadius = ko.observable(0);
                self.serToolValue = ko.observable("");
                self.valToolValue = ko.observable("");
                self.groupToolValue = ko.observable("");
                self.payment3 = ko.observable("");
                self.caldata = ko.observable("");
                // Header Config
                //self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};
                self.toggleDrawer = app.toggleDrawer;
                self.pageTitle = ko.observable('财务收支分析');
                self.dateValue = ko.observable(CURDATE);

                self.incomeArr1 = ko.observableArray();
                self.incomeArr2 = ko.observableArray();
                self.incomeArr3 = ko.observableArray();
                self.incomeArr4 = ko.observableArray();
                self.incomeArr5 = ko.observableArray();
                self.incomeArr6 = ko.observableArray();
                self.incomeArr7 = ko.observableArray();
                self.incomeArr8 = ko.observableArray();
                self.incomeArr9 = ko.observableArray();
                self.incomeArr10 = ko.observableArray();
                self.incomeArr11 = ko.observableArray();
                self.incomeArr12 = ko.observableArray();
                self.incomeArr13 = ko.observableArray();

                self.init = function () {
                    self.incomeArr1.removeAll();
                    self.incomeArr2.removeAll();
                    self.incomeArr3.removeAll();
                    self.incomeArr4.removeAll();
                    self.incomeArr5.removeAll();
                    self.incomeArr6.removeAll();
                    self.incomeArr7.removeAll();
                    self.incomeArr8.removeAll();
                    self.incomeArr9.removeAll();
                    self.incomeArr10.removeAll();
                    self.incomeArr11.removeAll();
                    self.incomeArr12.removeAll();
                    self.incomeArr13.removeAll();
                    
                    self.incomeArr1.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_1.json', chartname: '公司年累计收款占公司年收款计划百分比'});
                    self.incomeArr2.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_2.json', chartname: ' 公司当月累计收款占公司月收款计划百分比'});
                    $.getJSON('js/data/d' + DATAFLAG + '/caiwu/cw_3.json', function (data) {
                        self.serToolValue(data.seriesTooltip);
                        self.valToolValue(data.valueTooltip);
                        self.groupToolValue(data.groupTooltip);
                        self.pieSeriesValue(data.dataArr);
                        self.payment3(self.caldata() + "付款总金额" + data.datapayment);
                    });
                    self.incomeArr4.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_4.json', chartname: ' 当日现金'});
                    self.incomeArr5.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_5.json', chartname: ' 承兑'});
                    self.incomeArr6.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_6.json', chartname: ' 外币金额占比'});
                    self.incomeArr7.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_7.json', chartname: ' 金额'});
                    self.incomeArr8.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_8.json', chartname: ' 总金额'});

                    self.incomeArr9.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_9.json', chartname: ' 当日现款理财'});
                    self.incomeArr10.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_10.json', chartname: ' 募集理财'});
                    self.incomeArr11.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_11.json', chartname: ' 外币理财占比'});
                    self.incomeArr12.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_12.json', chartname: ' 金额'});
                    self.incomeArr13.push({dataurl: 'js/data/d' + DATAFLAG + '/caiwu/cw_13.json', chartname: ' 总金额'});
                }

                self.singecomplistener = function () {
                    oj.Router.rootInstance.go('singlecomp');
                }
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

            return caiwuContentViewModel;
        });
