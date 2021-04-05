import Button from 'react-bootstrap/Button';
import { useState, useCallback} from 'react';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import MusicForm from '../MusicForm/MusicForm';
import './App.css';

function changeStatus(currentStatus) {
  if (currentStatus === 'stop') {
    return 'play';
  } else if (currentStatus === 'play') {
    return 'pause';
  } else if (currentStatus === 'pause') {
    return 'play';
  } 
}

function changeBtn(currentStatus) {
  if (currentStatus === 'stop') {
    return 'Pause';
  } else if (currentStatus === 'play'){
    return 'Play';
  } else if (currentStatus === 'pause'){
    return 'Pause';
  }
}


function generateId() {
  return `song=${Math.random().toString(36).substr(2,9)}`
}

function App() {
  const [isFormVisible, changeFormVisibility] = useState(false);
  const [editableSong, setEditable] = useState(null);
  const [list, changeList] = useState([
     {id: '001', status: 'stop', name: 'Sting - Shape of My Heart', pauser: 'Play', stoper: 'Stop',},
     {id: '002', status: 'stop', name: 'Eminem - My name is', pauser: 'Play', stoper: 'Stop',},
     {id: '003', status: 'stop', name: 'Rage - The Seige', pauser: 'Play', stoper: 'Stop',},
     {id: '004', status: 'stop', name: 'Arctics Monkeys - When the Sun Going Down', pauser: 'Play', stoper: 'Stop',},
  ]);



  const handleChange =  useCallback((name, status) => {
      changeList((prevState) => {
      const newState = prevState.map((song) => {
        if (song.name === name) {
          return {
            id: song.id,
            pauser: changeBtn(status),
            status: changeStatus(status),
            name: name,
            stoper: song.stoper,
          };
        } 
        return song;
      });
      return newState;
    });
}, []);

const handleStop =  useCallback((name) => {
  changeList((prevState) => {
  const newState = prevState.map((song) => {
    if (song.name === name) {
      return {
        id: song.id,
        status: 'stop',
        name: name,
        pauser: 'Play',
        stoper: 'Stop',
      };
    } 
    return song;
  });
  return newState;
  
});
}, []);

const handleCreateSong = useCallback(() => {
  changeFormVisibility(true);
}, []);

const createNewSongItem = useCallback((name, status) => {
  changeList((prevState) => {
    const newState = prevState.concat([{ id: generateId(), name, status, pauser: 'Play', stoper: 'Stop' } ]);
    return newState;
  })
  changeFormVisibility(false);
}, []);

const updateSongItem = useCallback((updatedSongID, updatedSongName, updatedSongStatus) => {
   changeList((prevState) => {
   const newState = prevState.map((songItem) => {
    if (songItem.id === updatedSongID) {
      return {
         id: songItem.id,
         name: updatedSongName,
         status: updatedSongStatus,
         pauser: songItem.pauser,
         stoper:  songItem.stoper,
      } 
    } else {
      return songItem;
    }
   });
   return newState;
 })
  setEditable(null);
}, []);

const handleDelete = useCallback((id) => {
changeList((prevState) => {
  const newState = prevState.filter((songItem) => {
    return songItem.id !== id;
  });
  return newState;
})
}, []);

const handleEdit = useCallback((id) => {
const songFromList = list.find((songItem) => {
  return songItem.id === id;
});
setEditable(songFromList);
}, [list]);


  return (
    <section>
      {list.map((songItem) => {
        return (
                <MusicPlayer 
                key={songItem.id} 
                id={songItem.id}
                name={songItem.name} 
                status={songItem.status} 
                pauseBtn={songItem.pauser}
                stopBtn={songItem.stoper}
                onChange={handleChange}
                onStop={handleStop}
                onDelete={handleDelete}
                onEdit={handleEdit}
               />
              );
        })};
        <div className="centered">
            <Button onClick={handleCreateSong}>Create Song</Button>
        </div>
        {isFormVisible ? (<MusicForm onSave={createNewSongItem}/>) : null}
        {editableSong ? (<MusicForm 
                            id={editableSong.id} 
                            name={editableSong.name} 
                            status={editableSong.status} 
                            onUpdate={updateSongItem}/>) : null}
    </section>
      )}

export default App;
