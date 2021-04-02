import { useState, useCallback} from 'react';
import SongPlayer from './SongPlayer/SongPlayer';
import './App.css';

function changeStatus(currentStatus) {
  if (currentStatus === 'play') {
    return 'stop';
  } else if (currentStatus === 'stop') {
    return 'play';
  } 
}


function changeBtn(currentStatus) {
  if (currentStatus === 'stop') {
    return 'Stop';
  } else if (currentStatus === 'play'){
    return 'Play';
  } else {
    return 'Play';
  }
}

function App() {
 const [list, changeList] = useState([
     {status: 'stop', name: 'Sting - Shape of My Heart', btn: 'Play',},
     {status: 'stop', name: 'Eminem - My name is', btn: 'Play',},
     {status: 'stop', name: 'Rage - The Seige', btn: 'Play',},
     {status: 'stop', name: 'Arctics Monkeys - When the Sun Going Down', btn: 'Play',},
  ]);



  const handleChange =  useCallback((name, status) => {
      changeList((prevState) => {
      const newState = prevState.map((song) => {
        if (song.name === name) {
          return {
            btn: changeBtn(status),
            status: changeStatus(status),
            name: name,
          };
        } 
        return song;  
      });
      return newState;
      
    });
}, []);

  return (
    <section>
      {list.map((songItem) => {
        return (
                <SongPlayer 
                key={songItem.id} 
                name={songItem.name} 
                status={songItem.status} 
                button={songItem.btn}
                onChange={(handleChange)}
               />
              );
        })};
    </section>
      )}

export default App;
