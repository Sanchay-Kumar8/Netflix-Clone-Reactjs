import './Content.css';
import RowData from '../../constants/URLS'
import Row from '../row/Row';

export default function Content() {

    return (<div className='content-wrapper'>
        { 
        RowData.map((el) => {
        return <Row title = {el.title} url = {el.url} />
    })}
    </div>
    );
}

// d7e78b919063842ef4a0a78ae62a424d

