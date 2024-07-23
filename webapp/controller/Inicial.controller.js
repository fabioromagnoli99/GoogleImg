sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("googleimage.controller.Inicial", {
        onInit: function () {
            let ImageList = {
                Imagens: [
                    {
                        url: "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
                        thumbnail_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqcK9kNQsjsrZx5At8TNLw21v6fIYc032KV72ECXMgBtChunb&s",
                        title: "Science of Summer: Where Does Beach Sand Come From? | Live ...",
                        source: "Live Science"
                    },
                    {
                        url: "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
                        thumbnail_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqcK9kNQsjsrZx5At8TNLw21v6fIYc032KV72ECXMgBtChunb&s",
                        title: "Science of Summer: Where Does Beach Sand Come From? | Live ...",
                        source: "Live Science"
                    },
                ]
            }

            let ImageModel = new JSONModel(ImageList);
            let view = this.getView();
            view.setModel(ImageModel, "ModeloImagem")

        },
        onPressBuscar: function() {
            let inputBusca = this.byId("inpBusca")
            let query = inputBusca.getValue()
            //alert(query)

            const settings = {
                async: true,
                crossDomain: true,

                url: "https://real-time-image-search.p.rapidapi.com/search?query="
                + query
                + "&size=any&color=any&type=any&time=any&usage_rights=any&file_type=any&aspect_ratio=any&safe_search=off&region=us",
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '310deb8769mshd4841f6f405aa21p173e44jsn97839c1f6ff8',
                    'x-rapidapi-host': 'real-time-image-search.p.rapidapi.com'
                }
            };
            
            $.ajax(settings).done(function (response) {
                

                let oImageModel = this.getView().getModel("ModeloImagem")
                let oDadosImage = oImageModel.getData()

                oDadosImage.Imagens = []

                let listaResultados = response.data;
                let newItem = ""

                for (let i = 0; i < listaResultados.length; i++) {
                    newItem = listaResultados[i];
                    

                    oDadosImage.Imagens.push(newItem);
                }

                oImageModel.refresh();

            }.bind(this)
        );



        }
    });
});
