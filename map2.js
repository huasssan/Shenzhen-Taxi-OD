
// Set your mapbox token here
// const MAPBOX_TOKEN = process.env.MapboxAccessToken; // eslint-disable-line
const MAPBOX_TOKEN = 'pk.eyJ1IjoibGlsZWlqb3JkYW4iLCJhIjoiY2luc2Z1a2UxMTEybnUya2pheDdwZjhxOSJ9._ENu7hjywKHQZMcj9S24vA'
// Source data GeoJSON
const DATA_URL = 'https://raw.githubusercontent.com/huasssan/Shenzhen-Taxi-OD/main/data/delivery_OD_SZ.json' // eslint-disable-line

const mapStyle = 'mapbox://styles/lvan/ckxrnjsmg8upv14mmw84e0d3o'

const INITIAL_VIEW_STATE = {
    longitude: 113.99855,
    latitude: 22.6524,
    zoom: 9.5,
    bearing: 24,
    pitch: 50,
};

// export default class App extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             viewState: INITIAL_VIEW_STATE
//         }
//     }
export default function App() {

    const layers = [
        new ArcLayer({
            id: 'arclayer',
            data: DATA_URL,
            brushingEnabled: true,
            brushingRadius: 2000,


            extensions: [new BrushingExtension()],
            getSourcePosition: d => d.gcoordinate,
            getTargetPosition: d => d.tcoordinate,
            getSourceColor: [106, 198, 91],
            getTargetColor: [255, 255, 255],

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
            getFillColor: [0, 128, 255],
            gfp64: false,
            opacity: 0.6,
            radiusMinPixels: 2,
            radiusMaxPixels: 30,
            stroked: true,
            getLineWidth: 2,

            pickable: true

        }),
        new ScatterplotLayer({
            id: 'dropoff',
            data: DATA_URL,
            getPosition: d => d.tcoordinate,
            getFillColor: [255, 0, 128],
            fp64: false,
            opacity: 0.6,
            radiusMinPixels: 2,
            radiusMaxPixels: 30,
            stroked: true,
            getLineWidth: 2,

            pickable: true,

        })
    ];





    return (
        <DeckGL
            layers={layers}
            controller={true}
            initialViewState={INITIAL_VIEW_STATE}


        >

            <StaticMap
                reuseMaps
                mapStyle={mapStyle}
                preventStyleDiffing={true}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            />
            <div style={{ position: "absolute", right: 30, top: 120, zIndex: 1 }}>
                <NavigationControl />
            </div>



        </DeckGL>

    );

}
export function renderToDOM(container) {
    render(<App />, container);
}