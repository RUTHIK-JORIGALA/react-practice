
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavBar(props){
    const inside = document.getElementById('box');
    

    const orange = () =>{
        console.log("Show theme is clicked")
        document.body.style.background='orange';
        inside.style.background='orange';
        
    }
    const lightblue = () =>{
        console.log("light blue theme is clicked")
        document.body.style.background='lightblue';
        inside.style.background='lightblue';
    }
    const blue = () =>{
        console.log("Show theme is clicked")
        document.body.style.background='blue';
        inside.style.background='blue';
    }
    const red = () =>{
        console.log("Show theme is clicked")
        document.body.style.background='red';
        inside.style.background='red';
    }
    const green = () =>{
        console.log("Show theme is clicked")
        document.body.style.background='green';
        inside.style.background='green';
    }
    return(
        <div>  
            <nav className={`navbar navbar-expand-lg bg-${props.mode ==='light'?'dark':'light'}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand text-${props.mode} `} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className={`nav-link text-${props.mode} `} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item "><Link className={`nav-link text-${props.mode} `} to="/about" >{props.about}</Link></li>
                    </ul>

                        <button className="btn btn-warning mx-1 text-white" type="button" onClick={orange}>Orange</button>
                        <button className="btn btn-danger mx-1" type="button" onClick={red}>Red</button>
                        <button className="btn btn-primary mx-1" type="button" onClick={blue} >Blue</button>
                        <button className="btn btn-success mx-1" type="submit" onClick={green}>Green</button>
                        <button className="btn btn-info mx-1 text-white" type="submit" onClick={lightblue}>lightblue</button>



                        <div className="form-check form-switch mx-2">
                        <input className="form-check-input " onClick={props.toggle} type="checkbox" role="switch" />
                        <label className={`form-check-label text-${props.mode} mx-4`} htmlFor="flexSwitchCheckChecked">Enable {props.mode} Mode </label>
                        </div>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    </div>
                </div>
                </nav>
        </div>
    )
}

NavBar.defaultProps={
    title:"Sunny",
    about:"Give something"
}

NavBar.propTypes={
    title: PropTypes.string,
    about : PropTypes.string
}

export default NavBar