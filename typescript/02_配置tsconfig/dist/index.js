System.register("hello", [], function (exports_1, context_1) {
    "use strict";
    var hello;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("hello", hello = 'my name is hello');
        }
    };
});
System.register("hallo", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            console.log('hello');
        }
    };
});
