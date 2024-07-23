sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("googleimage.controller.Inicial", {
        onInit: function () {

        },
        onPressBuscar: function() {
            let inputBusca = this.byId("inpBusca")
            let query = inputBusca.getValue()
            alert(query)
        }
    });
});
