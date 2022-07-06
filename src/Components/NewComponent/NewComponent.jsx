import { useState} from 'react';
import './New.css';
import OutboxIcon from '@mui/icons-material/Outbox';

const NewComponent = ({title, inputs}) => {


    const [file, setFile] = useState('https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg')

    return (
        <section className='New-component'>
            <div className='top'>Add New {title}</div>
            <div >
                <div className='bottom'>
                    <div className='image-container'>
                        <img src={file} alt="phot"/>
                    </div>
                    <form>
                        <div className='send-image'>
                            <label>Image:</label>
                            <input onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))} type="file" name='image-file' accept="image/png, image/jpeg" />
                            <OutboxIcon className='icon'/>
                        </div>
                        {inputs.map(input =><div key={input.id}>
                            <label>{input.title}</label>
                            <input type={input.type} placeholder={input.placeHolder}/>
                        </div>)}
                    </form>
                </div>
                <div className='send-btn'>
                    Send
                </div>
            </div>
        </section>
    )
}

export default NewComponent;