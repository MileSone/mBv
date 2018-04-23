/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'mbe/mbe', 'mcs_config', 'ojs/ojlabel',
    'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojrouter', 'data/globVar'],
        function (oj, ko, $, app, mbe) {

            function LoginViewModel() {
                var self = this;
                self.username = ko.observable("18576614980");
                self.password = ko.observable("123");
                self.checkSMS = ko.observable("获取验证码");
                self.smsinput = ko.observable("");
                self.isLoggedIn = ko.pureComputed(function () {
                    return app.isLoggedIn()
                });
                var remState = localStorage.getItem("rem");
                var remUsername = localStorage.getItem("savedUsername");
                var remPass = localStorage.getItem("savedPassword");

                if (remState === true && remUsername != "" && remPass != "") {
                    self.username(remUsername);
                    self.password(remPass);
                    $("#remeberMe").attr("checked", true);
                } else {
                    $("#remeberMe").attr("checked", false);
                }


                self.baiduAPIKey = ko.observable("opciWAuRm9DmiFMLcfNGvwtF"); //Baidu Push API Key

                self.isLoggedIn = ko.observable(false);
                self.isLoadingfinished = ko.observable(false);
//                self.username_MCS = ko.observable("mingyao.zhu@oracle.com");
//                self.password_MCS = ko.observable("zaq1!QAZ");
                self.registrationId = ko.observable("");

                self.handleAttached = function (info) {
                };


                self.login = function (data, event) {
                    self.isLoadingfinished(true);
//                    mbe.authenticate(self.username(), self.password().then(self.loginSuccess, self.loginFailure));
                    return true;
                };

                self.loginSuccess = function (response, data) {
                    console.log(response);

                    mbe.isLoggedIn = true;
                    self.isLoggedIn(true);
                    loginCustomerID = self.username();
                    oj.Router.rootInstance.go('home');
                    self.baiduPushStart();
                    app.isLoggedIn(true);
                    userName = self.username();
                    userCheck = data;
                };

                self.loginFailure = function (statusCode, data) {
                    mbe.isLoggedIn = false;
                    self.isLoggedIn(mbe.isLoggedIn);
                    alert("Login failed! statusCode:" + statusCode + " Message: " + data);
                };

                self.logout = function () {
                    mbe.logout();
                    mbe.isLoggedIn = false;
                    self.isLoggedIn(false);
                    //    oj.Router.rootInstance.go('dashboard');
                    window.location.reload(true);
                };

                var api_key = 'opciWAuRm9DmiFMLcfNGvwtF' //Baidu Push API Key

//                document.addEventListener("deviceready", function () {
                self.baiduPushStart = function () {
                    window.baiduPush.onMessage(function (result) {
                        console.log('onMessage success', result);
                    }, function (error) {
                        console.error('onMessage fail', error);
                    })

                    window.baiduPush.onNotificationClicked(function (result) {
                        console.log('onNotificationClicked success', result);
                        var tempData = result.data.description;
                        try {
                            console.log(tempData);
                        } catch (e) {
                            console.log("no ID in notification");
                        }
                    }, function (error) {
                        console.error('onNotificationClicked fail', error);
                    })

                    window.baiduPush.onNotificationArrived(function (result) {
                        console.log('onNotificationArrived success', result);

                    }, function (error) {
                        console.error('onNotificationArrived fail', error);
                    })

                    window.baiduPush.startWork(api_key, function (result) {
                        console.log('startWork success', result);
                        if (result.data.channelId) {
                            console.log("ChannelID:" + result.data.channelId);
                        }
                    }, function (error) {
                        console.error('startWork fail', error);
                    })
                };
//                }, false);


//
//                self.baiduPushStart = function () {
//                    //Start work, bind the ids
//                    window.baidupush.startWork(self.baiduAPIKey(), function (info) {
//                        //success callback
//                        //your code here
//                        if (info.data.channelId) {
//                            console.log(info.data.channelId);
////                            self.baiduChannelId(info.data.channelId);
//                            self.registrationId(info.data.channelId);
//
//                            var sendData = {
//                                "username": loginCustomerID,
//                                "channelId": info.data.channelId + ""
//                            };
//
//                            var r = confirm("send channelID!");
//                            if (r == true) {
//                                mbe.invokeCustomAPI("mynotification/channelid", "POST", sendData, function (statusCode, data) {
//                                    if (data) {
//                                        alert(JSON.stringify(data));
//                                    }
//                                }, self.errorCallback);
//                            } else {
//
//                            }
//                        }
//                    });
//
//                    //Set tags
//                    window.baidupush.setTags(["testDrve"], function (info) {
//                        //your code here
//                    });
//
//                    //Listen notification arrived event, when a notification arrived, the callback function will be called
//                    window.baidupush.listenNotificationArrived(function (info) {
//                        //your code here
//                        self.notiMessage(data.message);
//                        var tempData = data.message;
//                        try {
////                            var tempArr = new Array();
////                            tempArr = tempData.split("-");
//                            console.log(tempData);
////                            var getID = parseInt(tempArr[1].trim());
////                            oj.Router.rootInstance.go('offers');
////                            offers.notiOfferPage(getID);
//                        } catch (e) {
//                            console.log("no ID in notification");
//                        }
//                    });
//
//
//                    //Listen notification clicked event, when a notification is clicked, the callback function will be called
//                    window.baidupush.listenNotificationClicked(function (info) {
//                        //your code here
//                    });
//
//                    //Only for android
//                    //Listen message arrived event, when a message arrived, the callback function will be called	
//                    window.baidupush.listenMessage(function (info) {
//                        //your code here
//                    });
//                };
//
//                self.baiduPushStop = function () {
//                    //Stop work, unbind the ids
//                    self.baiduChannelId("");
//                    window.baidupush.stopWork(function (info) {
//                        //your code here
//                        alert(JSON.stringify(info));
//                    });
//                };



                $("#remeberMe").click(function () {
                    var checkbool = $("input[name='rememberme']").attr("checked");
                    if (checkbool === true) {
                        localStorage.setItem("savedUsername", self.username());
                        localStorage.setItem("savedPassword", self.password());
                        localStorage.setItem("rem", true);
                    } else {
                        localStorage.setItem("savedUsername", "");
                        localStorage.setItem("savedPassword", "");
                        localStorage.setItem("rem", false);
                    }
                });

                self.buttonClick = function (event) {
                    console.log(self.username(), self.password());
//                    self.login();
                    if (self.username().toUpperCase() === "18576614980" && self.password() === "123") {
                        self.loginSuccess(true);
                    } else if (self.username().toUpperCase() === "EMPLOYEE" && self.password() === "123") {
                        self.loginSuccess(false);
                    } else {
                        alert("请输入正确的用户名或密码");
                    }

                    return true;
                }


                self.sendSMSNum = function (event) {

                    smsBtn.disabled = true;
                    self.smsCountDown(60);
//                    self.sendSMSAction();
                    return true;
                }

                self.sendSMSAction = function (phone) {
                    var randomNum = Math.floor(Math.random() * 90000) + 10000;
                    var sendData = {
                        "mobile": phone,
                        "smsContent": "测试验证码：" + randomNum,
                    }
                    $.ajax({
                        type: "GET",
                        url: "http://10.17.23.94:8081/citicsms/cloudmasService?wsdl",
                        contentType: "JSONP",
                        data: sendData,
                        success: function (data) {
                            console.log(data);
                        },
                        error: function (data) {
                            console.log('Data' + JSON.stringify(data));
                        }
                    });
                }

                self.smsCountDown = function (time) {
                    setTimeout(function () {
                        time = time - 1;
                        self.checkSMS("获取验证码(" + time + ")");

                        if (time === 0) {
                            smsBtn.disabled = false;
                            self.checkSMS("获取验证码");
                            return false;
                        } else {
                            self.smsCountDown(time);
                        }
                    }, 1000);
                }

//                self.loginSuccess = function (data) {
//
//                    app.isLoggedIn(true);
//                    oj.Router.rootInstance.go('home');
//                    userName = self.username();
//                    userCheck = data;
//                };
//
//                self.loginFailure = function (statusCode, data) {
//                    alert("登陆失败");
//                };

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

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constructed
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new LoginViewModel();
        }
);
