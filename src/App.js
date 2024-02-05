import SimpsonsFamily from "./components/Simpsons/SimpsonsFamily";

function App() {
  return (
      <div>
          <SimpsonsFamily name={'Homer'} img={'https://upload.wikimedia.org/wikipedia/ru/b/bd/Homer_Simpson.png'}/>
          <SimpsonsFamily name={'Margery'} img={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
          <SimpsonsFamily name={'Bartholomew'} img={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}/>
          <SimpsonsFamily name={'Lisa-Marie'} img={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
          <SimpsonsFamily name={'Margaret-Evelyn "Maggie"'} img={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>

      </div>
  );
}
export default App;
