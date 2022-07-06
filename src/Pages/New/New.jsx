import './New.css';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import NewComponent from '../../Components/NewComponent/NewComponent';

const New = ({title, inputs}) => {

    return (
        <section className="new">
                <Sidebar />
                <div className="right-part">
                    <Navbar />
                    <NewComponent title= {title} inputs= {inputs} />
                </div>
        </section>
    )
}

export default New;