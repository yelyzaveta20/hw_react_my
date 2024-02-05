import RickMorti from "./components/RickAndMorti/RickMorti";

function App() {
  return (
    <div>
      <RickMorti id={'1'} name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={'Male'}
                 img={'https://rickandmortyapi.com/api/character/avatar/328.jpeg'}/>
      <RickMorti id={'2'} name={'Morty Smith'} status={'Alive'} species={'Human'} gender={'Male'}
                 img={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
      <RickMorti id={'3'} name={'Summer Smith'} status={'Alive'} species={'Human'} gender={'Female'}
                 img={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
      <RickMorti id={'4'} name={'Beth Smith'} status={'Alive'} species={'Human'} gender={'Female'}
                 img={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
      <RickMorti id={'5'} name={'Jerry Smith'} status={'Alive'} species={'Human'} gender={'Male'}
                 img={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
      <RickMorti id={'6'} name={'Abadango Cluster Princess'} status={'Alive'} species={'Alien'} gender={'Female'}
                 img={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
    </div>
  );
}

export default App;
