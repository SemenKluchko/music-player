import Button from 'react-bootstrap/Button';
import { useCallback, useState } from 'react';
import './MusicForm.css';

const MusicForm = (props) => {
    const [name, setName] = useState(props.name || '');
    const [status, setStatus] = useState(props.status || 'stop');

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if (props.id) {
            props.onUpdate(props.id, name, status)
        } else {
            props.onSave(name, status)
        }
    }, [props, name, status]);
    return (
        <form className="song-item-form">
            <div className='form-item'>
                <label className="form-label" htmlFor="state">State:</label>
                <select 
                    className="form-control" 
                    name="state" 
                    id="state"
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}>

                    <option value="play">Play</option>
                    <option value="stop">Stop</option>
                    <option value="pause">Pause</option>
                </select>
            </div>
            <div className="form-item">
            <label className="form-label" htmlFor="name">Name:</label>
            <input 
                className="form-control" 
                type="text" 
                name="name" 
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="centered">
            <Button onClick={handleSubmit}>Save</Button>
            </div>
        </form>
    )
};

export default MusicForm;