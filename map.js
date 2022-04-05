var DATA_URL = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/delivery_OD_SZ.json'
const DATA_URL2 = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/vacancy_OD_SZ.json'

// const DATA_URL1 = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/delivery_OD_SZ.json'
// const DATA_URL2 = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/vacancy_OD_SZ.json'

// const b = new deck.BrushingExtension();
// console.log(b);

// var vacant = document.getElementsByClassName('vacant');
// var carrying = document.getElementsByClassName('carrying');

// window.onload = function () {
var btns = document.querySelectorAll('button');
// btns[0].onclick = function setMapURL() {
//     DATA_URL = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/delivery_OD_SZ.json'
//     return DATA_URL.loadData()

// }
btns[0].addEventListener('click', function () {
    DATA_URL = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/delivery_OD_SZ.json'
    deckgl = new DeckGL({
        mapboxApiAccessToken: 'pk.eyJ1IjoibGlsZWlqb3JkYW4iLCJhIjoiY2luc2Z1a2UxMTEybnUya2pheDdwZjhxOSJ9._ENu7hjywKHQZMcj9S24vA',
        container: 'map',
        mapStyle: 'mapbox://styles/lvan/ckxrnjsmg8upv14mmw84e0d3o',
        NavigationControl: true,
        initialViewState: {
            longitude: 113.99855,
            latitude: 22.6524,
            zoom: 9.5,
            bearing: 24,
            pitch: 50,
            dragRotate: true,
            scrollZoom: false,
            interactive: false,
            touchZoomRotate: false,
            dragPan: false,
        },

        layers: [


            new ArcLayer({
                id: 'arclayer',
                data: DATA_URL,
                brushingEnabled: true,
                brushingRadius: 2000,

                extensions: [new BrushingExtension()],
                getSourcePosition: d => d.gcoordinate,
                getTargetPosition: d => d.tcoordinate,
                getSourceColor: d => [106, 198, 91],
                getTargetColor: d => [255, 255, 255],

                getWidth: 0.5,
                opacity: 0.3,
                pickable: true,
                // onHover: ({ object, x, y }) => {
                //     const el = document.getElementById('tooltip');
                //     if (object) {
                //         const { VehicleNum } = object;
                //         el.innerHTML = `< h1 > Vehicle ID ${ VehicleNum }</> `
                //         el.style.display = 'block';
                //         el.style.opacity = 0.9;
                //         el.style.left = x + 'px';
                //         el.style.top = y + 'px';
                //     } else {
                //         el.style.opacity = 0.0;
                //     }
                // },


            }),
            new ScatterplotLayer({
                id: 'pickup',
                data: DATA_URL,
                getPosition: d => d.gcoordinate,
                getFillColor: [112, 192, 78],
                opacity: 0.8,
                radiusMinPixels: 2,
                radiusMaxPixels: 30,
                getLineWidth: 2,
                stroked: false,
                filled: true,
                radiusScale: 6,
                radiusMinPixels: 1,
                radiusMaxPixels: 100,
                lineWidthMinPixels: 1,
                pickable: true

            }),
            new ScatterplotLayer({
                id: 'dropoff',
                data: DATA_URL,
                getPosition: d => d.tcoordinate,
                getFillColor: [174, 183, 243,],
                opacity: 0.8,
                radiusMinPixels: 2,
                radiusMaxPixels: 30,
                getLineWidth: 2,
                stroked: false,
                filled: true,
                radiusScale: 6,
                radiusMinPixels: 1,
                radiusMaxPixels: 100,
                lineWidthMinPixels: 1,
                pickable: true,
                // parameters: {
                //     depthTest: true
                // },

            })
        ],

    })
    console.log(DATA_URL)
})

btns[1].addEventListener('click', function () {
    DATA_URL = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/vacancy_OD_SZ.json'
    deckgl = new DeckGL({
        mapboxApiAccessToken: 'pk.eyJ1IjoibGlsZWlqb3JkYW4iLCJhIjoiY2luc2Z1a2UxMTEybnUya2pheDdwZjhxOSJ9._ENu7hjywKHQZMcj9S24vA',
        container: 'map',
        mapStyle: 'mapbox://styles/lvan/ckxrnjsmg8upv14mmw84e0d3o',
        NavigationControl: true,
        initialViewState: {
            longitude: 113.99855,
            latitude: 22.6524,
            zoom: 9.5,
            bearing: 24,
            pitch: 50,
            dragRotate: true,
            scrollZoom: false,
            interactive: false,
            touchZoomRotate: false,
            dragPan: false,
        },

        layers: [


            new ArcLayer({
                id: 'arclayer',
                data: DATA_URL,
                brushingEnabled: true,
                brushingRadius: 2000,

                extensions: [new BrushingExtension()],
                getSourcePosition: d => d.gcoordinate,
                getTargetPosition: d => d.tcoordinate,
                getSourceColor: d => [106, 198, 91],
                getTargetColor: d => [255, 255, 255],

                getWidth: 0.5,
                opacity: 0.3,
                pickable: true,
                // onHover: ({ object, x, y }) => {
                //     const el = document.getElementById('tooltip');
                //     if (object) {
                //         const { VehicleNum } = object;
                //         el.innerHTML = `< h1 > Vehicle ID ${ VehicleNum }</> `
                //         el.style.display = 'block';
                //         el.style.opacity = 0.9;
                //         el.style.left = x + 'px';
                //         el.style.top = y + 'px';
                //     } else {
                //         el.style.opacity = 0.0;
                //     }
                // },


            }),
            new ScatterplotLayer({
                id: 'pickup',
                data: DATA_URL,
                getPosition: d => d.gcoordinate,
                getFillColor: [112, 192, 78],
                opacity: 0.8,
                radiusMinPixels: 2,
                radiusMaxPixels: 30,
                getLineWidth: 2,
                stroked: false,
                filled: true,
                radiusScale: 6,
                radiusMinPixels: 1,
                radiusMaxPixels: 100,
                lineWidthMinPixels: 1,
                pickable: true

            }),
            new ScatterplotLayer({
                id: 'dropoff',
                data: DATA_URL,
                getPosition: d => d.tcoordinate,
                getFillColor: [174, 183, 243,],
                opacity: 0.8,
                radiusMinPixels: 2,
                radiusMaxPixels: 30,
                getLineWidth: 2,
                stroked: false,
                filled: true,
                radiusScale: 6,
                radiusMinPixels: 1,
                radiusMaxPixels: 100,
                lineWidthMinPixels: 1,
                pickable: true,
                // parameters: {
                //     depthTest: true
                // },

            })
        ],

    })
    console.log(deckgl)
})
// }


// var DATA_URL = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/delivery_OD_SZ.json'

// vacant.onclick = function changeUrl() {

//     DATA_URL = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/vacancy_OD_SZ.json'

// }

// carrying.onclick = function changeUrl() {

//     DATA_URL
// }

// arrying.onclick = function () {
//     DATA_URL = DATA_URL2
// }

const deckgl = new DeckGL({
    mapboxApiAccessToken: 'pk.eyJ1IjoibGlsZWlqb3JkYW4iLCJhIjoiY2luc2Z1a2UxMTEybnUya2pheDdwZjhxOSJ9._ENu7hjywKHQZMcj9S24vA',
    container: 'map',
    mapStyle: 'mapbox://styles/lvan/ckxrnjsmg8upv14mmw84e0d3o',
    NavigationControl: true,
    initialViewState: {
        longitude: 113.99855,
        latitude: 22.6524,
        zoom: 9.5,
        bearing: 24,
        pitch: 50,
        dragRotate: true,
        scrollZoom: false,
        interactive: false,
        touchZoomRotate: false,
        dragPan: false,
    },

    layers: [


        new ArcLayer({
            id: 'arclayer',
            data: DATA_URL,
            brushingEnabled: true,
            brushingRadius: 2000,

            extensions: [new BrushingExtension()],
            getSourcePosition: d => d.gcoordinate,
            getTargetPosition: d => d.tcoordinate,
            getSourceColor: d => [106, 198, 91],
            getTargetColor: d => [255, 255, 255],

            getWidth: 0.5,
            opacity: 0.3,
            pickable: true,
            // onHover: ({ object, x, y }) => {
            //     const el = document.getElementById('tooltip');
            //     if (object) {
            //         const { VehicleNum } = object;
            //         el.innerHTML = `< h1 > Vehicle ID ${ VehicleNum }</> `
            //         el.style.display = 'block';
            //         el.style.opacity = 0.9;
            //         el.style.left = x + 'px';
            //         el.style.top = y + 'px';
            //     } else {
            //         el.style.opacity = 0.0;
            //     }
            // },


        }),
        new ScatterplotLayer({
            id: 'pickup',
            data: DATA_URL,
            getPosition: d => d.gcoordinate,
            getFillColor: [112, 192, 78],
            opacity: 0.8,
            radiusMinPixels: 2,
            radiusMaxPixels: 30,
            getLineWidth: 2,
            stroked: false,
            filled: true,
            radiusScale: 6,
            radiusMinPixels: 1,
            radiusMaxPixels: 100,
            lineWidthMinPixels: 1,
            pickable: true

        }),
        new ScatterplotLayer({
            id: 'dropoff',
            data: DATA_URL,
            getPosition: d => d.tcoordinate,
            getFillColor: [174, 183, 243,],
            opacity: 0.8,
            radiusMinPixels: 2,
            radiusMaxPixels: 30,
            getLineWidth: 2,
            stroked: false,
            filled: true,
            radiusScale: 6,
            radiusMinPixels: 1,
            radiusMaxPixels: 100,
            lineWidthMinPixels: 1,
            pickable: true,
            // parameters: {
            //     depthTest: true
            // },

        })
    ],
    getTooltip: ({ object }) => object && `${object.VehicleNum}
${object.tcoordinate} `,

})




