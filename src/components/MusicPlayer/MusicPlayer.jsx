import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
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
      <Card className="song-item">
        <Card.Body>
        <Card.Title className={`song-name is-${props.status}`}>
           {props.name}
        </Card.Title>
        <Card.Text className={`song-item-status is-${props.status}`}>
        <Badge variant="secondary">{props.status}</Badge>
        </Card.Text>
        <Button variant="outline-dark"onClick={handleStatusChange}>{props.pauseBtn}</Button>
        <Button variant="outline-dark"onClick={handleStopSong}>{props.stopBtn}</Button>
        <Button variant="danger" onClick={handleDeleteSong}>Delete</Button>
        <Button variant="info" onClick={handleEditSong}>Edit</Button>
      </Card.Body>
      </Card>
    )
  }

export default MusicPlayer;
