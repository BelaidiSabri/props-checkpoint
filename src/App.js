import './App.css';
import Profile from './profile/Profile';
import Saitama from './profile/photos/saitama.jpg'

function App() {
  const alertMe = (name) => {
    alert(`hello i'm ${name}`)
  }
  return (
    <div className="App">
      <Profile alertMe={alertMe} fullName='saitama' bio='25 years old bold man ' profession='hero for fun' > 
      <img src={Saitama} alt='saitama' width={'500px'} height={'auto'} border={'10px'} style={{borderColor:'aliceblue',marginTop:'60px'}}></img> 
      </Profile>
    </div>
  );
}

export default App;
