$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature.feature");
formatter.feature({
  "name": "TestingGitAction",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify site navigation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I navigate to the site \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "https://www.google.co.uk"
      ]
    },
    {
      "cells": [
        "*****://**ogle.co.uk"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify site navigation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I navigate to the site \"https://www.google.co.uk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.i_navigate_to_the_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify site navigation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I navigate to the site \"*****://**ogle.co.uk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.i_navigate_to_the_site(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unhandled inspector error: {\"code\":-32000,\"message\":\"Cannot navigate to invalid URL\"}\n  (Session info: chrome\u003d84.0.4147.135)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MIC-LAP225\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\RAVI~1.AHU\\AppData...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51089}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 84.0.4147.135, webStorageEnabled: true}\nSession ID: 2ec74ffe26db7fb2bf510f40096ed6a9\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat prototype.stepDefs.i_navigate_to_the_site(stepDefs.java:14)\r\n\tat ✽.I navigate to the site \"*****://**ogle.co.uk\"(src/test/resources/feature.feature:4)\r\n",
  "status": "failed"
});
});