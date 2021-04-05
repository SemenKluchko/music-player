import { useCallback  } from 'react';
import './MusicPlayer.css'

function MusicPlayer(props) {
  const handleStatusChange = useCallback(() => {
    props.onChange(props.name, props.status, props.button);

  },[props])

  const handleDeleteSong = useCallback(() => {
    props.onDelete(props.id);
  },[props])

  const handleEditSong = useCallback(() => {
    props.onEdit(props.id);
  },[props])

  const handleStopSong = useCallback (() => {
    props.onStop(props.name)
  },[props])

    return (
      <div className="wrapper">
      <div className="song-item">
        <div className={`song-name is-${props.status}`}>
           {props.name}
        </div>
        <div className={`song-item-status is-${props.status}`}>
            {props.status}
        </div>
        <button onClick={handleStatusChange}>{props.pauseBtn}</button>
        <button onClick={handleStopSong}>{props.stopBtn}</button>
        <button onClick={handleDeleteSong}>Delete</button>
        <button onClick={handleEditSong}>Edit</button>
      </div>
      </div>
    )
  }

export default MusicPlayer;
