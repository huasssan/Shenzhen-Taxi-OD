

const DATA_URI = 'https://raw.githubusercontent.com/huasssan/OD/main/3OD_SZ.json'

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
            data: DATA_URI,
            // brushingRadius: 10000,
            // brushingEnabled: true,
            // extensions: [new BrushingExtension()],
            getSourcePosition: d => d.gcoordinate,
            getTargetPosition: d => d.tcoordinate,
            getSourceColor: d => [106, 198, 91],
            getTargetColor: d => [255, 255, 255],

            getWidth: 0.5,
            opacity: 0.3,
            pickable: true,
            onHover: ({ object, x, y }) => {
                const el = document.getElementById('tooltip');
                if (object) {
                    const { VehicleNum } = object;
                    el.innerHTML = `<h1>Vehicle ID ${VehicleNum}</h1>`
                    el.style.display = 'block';
                    el.style.opacity = 0.9;
                    el.style.left = x + 'px';
                    el.style.top = y + 'px';
                } else {
                    el.style.opacity = 0.0;
                }
            },


        }),
        new ScatterplotLayer({
            id: `pickup`,
            data: DATA_URI,
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
            data: DATA_URI,
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



