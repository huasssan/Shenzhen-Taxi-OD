fetch('final_dt35 - Copie.json')
    .then(res => res.json())
    .then(data => {

        const inFlowColors = [
            [255, 255, 0],
            [255, 255, 0],
            [255, 255, 0],
            [255, 255, 0],
            [255, 255, 0],
            [255, 255, 0]
        ];

        const outFlowColors = [
            [255, 255, 178],
            [254, 217, 118],
            [254, 178, 76],
            [253, 141, 60],
            [252, 78, 42],
            [227, 26, 28],
            [177, 0, 38]
        ];


        const countyLayer = new deck.GeoJsonLayer({
            id: 'geojson',
            data,
            stroked: false,
            filled: true,
            autoHighlight: true,
            getFillColor: () => [0, 0, 0, 0],
            onClick: info => updateLayers(info.object),
            pickable: true

        });


        const deckgl = new deck.DeckGL({
            mapboxApiAccessToken: 'YOUR_TOKEN',
            mapStyle: 'mapbox://styles/mapbox/dark-v9',
            longitude: -1.68333,
            latitude: 48.083328,
            zoom: 9,
            maxZoom: 15,
            pitch: 60,
            onHover: info => console.log(info),
            layers: [countyLayer],
            container: 'map'
        });

        var comm = document.getElementById('quartier');
        comm.addEventListener('change', function () {
            console.log(comm.value)
            updateLayers(data.features.find(f => f.properties.nom == comm.value))
            return comm.value
        });


        updateLayers(
            data.features.find(f => f.properties.nom == comm.value)
        );


        function updateLayers(selectedFeature) {
            const { liste, centroid } = selectedFeature.properties;

            const arcs = liste.map(toId => {
                const f = data.features.find(f => f.properties.code_insee === toId);
                return {
                    source: centroid,
                    target: f.properties.centroid,
                    value: 1
                };
            });

            const scale = d3.scaleQuantile()
                .domain(arcs.map(a => Math.abs(a.value)))
                .range(inFlowColors.map((c, i) => i));

            arcs.forEach(a => {
                a.gain = Math.sign(a.value);
                a.quantile = scale(Math.abs(a.value));
            });

            const arcLayer = new deck.ArcLayer({
                id: 'arc',
                data: arcs,
                getSourcePosition: d => d.source,
                getTargetPosition: d => d.target,
                getSourceColor: d => (d.gain > 0 ? inFlowColors : outFlowColors)[d.quantile],
                getTargetColor: d => (d.gain > 0 ? outFlowColors : inFlowColors)[d.quantile],
                strokeWidth: 2.5,
                opacity: 1

            });


            deckgl.setProps({
                layers: [countyLayer, arcLayer]
            });
        }
    });