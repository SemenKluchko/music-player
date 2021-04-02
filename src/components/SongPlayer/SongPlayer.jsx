import { useCallback  } from 'react';
import './SongPlayer.css'

function SongPlayer(props) {
    const handleStatusChange = useCallback(() => {
        props.onChange(props.name, props.status, props.button);

    },[props.name, props.status, props.button])

    return (
      <div className="wrapper">
      <div className="song-item">
        <div className={`song-name is-${props.status}`}>
           {props.name}
        </div>
        <div className={`song-item-status is-${props.status}`}>
            {props.status}
        </div>
        <button onClick={handleStatusChange}>{props.button}</button>
      </div>
      </div>
    );
  }

export default SongPlayer;