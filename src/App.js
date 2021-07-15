import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import requests from './request'
import Row from './Row';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>

    </div>
  );
}

export default App;
//36752ce2264bcca0572b0851ff418544