var PluginFacebookSdk = require("nativescript-plugin-facebook-sdk").PluginFacebookSdk;
var pluginFacebookSdk = new PluginFacebookSdk();

describe("greet function", function() {
    it("exists", function() {
        expect(pluginFacebookSdk.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(pluginFacebookSdk.greet()).toEqual("Hello, NS");
    });
});