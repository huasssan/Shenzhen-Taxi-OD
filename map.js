

const DATA_URL1 = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/delivery_OD_SZ.json'
const DATA_URL2 = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/vacancy_OD_SZ.json'

// const b = new deck.BrushingExtension();
// console.log(b);
const deckgl = new DeckGL({
    mapboxApiAccessToken: 'pk.eyJ1IjoibGlsZWlqb3JkYW4iLCJhIjoiY2luc2Z1a2UxMTEybnUya2pheDdwZjhxOSJ9._ENu7hjywKHQZMcj9S24vA',
    container: 'map',
    mapStyle: 'mapbox://styles/lvan/ckxrnjsmg8upv14mmw84e0d3o',
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
            data: DATA_URL1,
            brushingEnabled: true,
            brushingRadius: 2000,

            // // // Define extensions
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
            //         el.innerHTML = `<h1>Vehicle ID ${VehicleNum}</h1>`
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
            id: `pickup`,
            data: DATA_URL1,
            getPosition: d => d.gcoordinate,
            getColor: [0, 128, 255],
            gfp64: false,
            opacity: 0.6,
            radiusMinPixels: 2,
            radiusMaxPixels: 30,
            outline: true,
            strokeWidth: 2,

            pickable: true

        }),
        new ScatterplotLayer({
            id: `dropoff`,
            data: DATA_URL1,
            getPosition: d => d.tcoordinate,
            getColor: [255, 0, 128],
            fp64: false,
            opacity: 0.6,
            radiusMinPixels: 2,
            radiusMaxPixels: 30,
            outline: true,
            strokeWidth: 2,

            pickable: true,

        })
    ],
    getTooltip: ({ object }) => object && `${object.VehicleNum}
${object.tcoordinate}`,
})



