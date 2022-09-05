import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className='body'>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="fr">Ludwig</Greetings>
      <Random min={1} max={1090} />
      <BoxColor r={0} g={0} b={255} />
    </div>
  );
}

export default App;
