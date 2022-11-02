import BGenbox404 from '../Assets/NotFound.png'

const NotFound = () => {
    return (
        <div className="container-form">
            <div className='container'>
                <div className='NF404'>
                    <h1>ERROR 404</h1>
                    <h1>PAGE NOT FOUND</h1>
                    <img className='BG-404' src={BGenbox404}/>
                </div>
            </div>
        </div>
    )
}

export default NotFound