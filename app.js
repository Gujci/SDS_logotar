var imagesData = {
    "simonyi": {
        data: [
            {
                preview: "images/preview/simonyi.png",
                image: "images/highres/simonyi.ai"
            },
            {
                preview: "images/preview/ac.png",
                image: "images/highres/ac.ai"
            },
            {
                preview: "images/preview/bss.png",
                image: "images/highres/bss.ai"
            },
            {
                preview: "images/preview/lego.png",
                image: "images/highres/lego.ai"
            },
            {
                preview: "images/preview/radio.png",
                image: "images/highres/HA5KFU.ai"
            },
            {
                preview: "images/preview/kirdev.png",
                image: "images/highres/kirdev.ai"
            },
            {
                preview: "images/preview/sem.png",
                image: "images/highres/sem.ai"
            },
            {
                preview: "images/preview/sds.png",
                image: "images/highres/sds.ai"
            }
        ],
        title: "Simonyi",
        link: "simonyi"
    },

    "kulturreszort": {
        data: [
            {
                preview: "images/preview/bbk.png",
                image: "images/highres/bbk.ai"
            },
            {
                preview: "images/preview/impulzus.png",
                image: "images/highres/impulzus.ai"
            },
            {
                preview: "images/preview/jatszohaz.png",
                image: "images/highres/jatszohaz.ai"
            },
            {
                preview: "images/preview/laplace.png",
                image: "images/highres/laplace.ai"
            },
            {
                preview: "images/preview/mmmk.png",
                image: "images/highres/mmmk.ai"
            },
            {
                preview: "images/preview/silentio.png",
                image: "images/highres/silentio.ai"
            }
        ],
        title: "Kultúrreszort",
        link: "kulturreszort"
    },

    "sportreszort": {
        data: [
            {
                preview: "images/preview/dsk.png",
                image: "images/highres/dsk.ai"
            },
            {
                preview: "images/preview/csocso.png",
                image: "images/highres/csocso.ai"
            }
        ],
        title: "Sportreszort",
        link: "sportreszort"
    },

    "szolgaltatoreszort": {
        data: [
            {
                preview: "images/preview/americano.png",
                image: "images/highres/americano.ai"
            },
            {
                preview: "images/preview/pizzasch.png",
                image: "images/highres/pizzasch.ai"
            },
            {
                preview: "images/preview/foodex.png",
                image: "images/highres/foodex.ai"
            },
            {
                preview: "images/preview/palacsintazo.png",
                image: "images/highres/palacsintazo.ai"
            },
            {
                preview: "images/preview/pulcsi.png",
                image: "images/highres/pulcsi.ai"
            },
            {
                preview: "images/preview/szauna.png",
                image: "images/highres/szauna.ai"
            },
            {
                preview: "images/preview/vodor.png",
                image: "images/highres/vodor.ai"
            },
            {
                preview: "images/preview/wtf.png",
                image: "images/highres/wtf.ai"
            },
            {
                preview: "images/preview/kakas.png",
                image: "images/highres/kakas.ai"
            }
        ],
        title: "Szolgáltatóreszort",
        link: "szolgaltatoreszort"
    },

    "bulisreszort": {
        data: [
            {
                preview: "images/preview/cc.png",
                image: "images/highres/cc.ai"
            },
            {
                preview: "images/preview/lanosch.png",
                image: "images/highres/lanosch.ai"
            },
            {
                preview: "images/preview/parkett.png",
                image: "images/highres/parkett.ai"
            },
            {
                preview: "images/preview/szakest.png",
                image: "images/highres/szakest.ai"
            }
        ],
        title: "Bulisreszort",
        link: "bulisreszort"
    },

    "egyeb": {
        data: [
            {
                preview: "images/preview/sch.png",
                image: "images/highres/sch.ai"
            },
            {
                preview: "images/preview/iskolaszovetkezet.png",
                image: "images/highres/iskolaszovetkezet.ai"
            },
            {
                preview: "images/preview/bazis.png",
                image: "images/highres/bazis.ai"
            },
            {
                preview: "images/preview/kfb.png",
                image: "images/highres/kfb.ai"
            }
        ],
        title: "Egyéb",
        link: "egyeb"
    }
}

var titlesArray = [];
for (var key in imagesData) {
    titlesArray.push(imagesData[key])
}
var vm = {
    images: ko.observable(imagesData),
    titles: titlesArray
};


ko.applyBindings(vm);

function processHash() {
    elements = document.getElementsByClassName("menu");
    for (i = 0; i < elements.length; ++i) {
        elements[i].className = "menu";
    }

    var hash = window.location.hash.toString().replace('#', '') || "simonyi";
    document.getElementsByName(hash)[0].className = "active menu";
    vm.images(imagesData[hash].data);
}
$(window).on('hashchange', processHash);
processHash();