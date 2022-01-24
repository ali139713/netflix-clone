import ReactLoader from 'react-loader';
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import { LoaderProvider, useLoader } from './Context/context';
import requests from './requests';

function App() {
  const { loading } = useLoader();

  var options = {
    lines: 13,
    length: 20,
    width: 10,
    radius: 30,
    scale: 1.0,
    corners: 1,
    color: 'red',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: false,
    hwaccel: false,
    position: 'absolute',
  };

  return (
    <LoaderProvider>
      <div className="App">
        {loading && <ReactLoader loaded={false} options={options} className="loader" />}
        <Nav />
        <Banner />
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
      </div>
    </LoaderProvider>
  );
}

export default App;
