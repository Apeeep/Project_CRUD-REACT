import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import genby from '../Assets/genby.png'

const Header = () => {
    const [saldo, setSaldo] = useState("")

    useEffect(() => {
        fetch(`http://localhost:6287/genbox/getSaldo`)
        .then(res => res.json())
        .then(res => {
            setSaldo(res.data[0].Saldo)
        })
    }, [setSaldo])

    return (
        <div className="header">
            <header>
                <div className='logo'>
                    <img src={genby}/>
                    <h1>Genbox CELL</h1>
                </div>
                <h2>Saldo : Rp. {saldo}</h2>
                <ul>
                    <li><Link to="/"><i class="fa-solid fa-pen"></i><span> INPUT</span></Link></li>
                    <li><Link to="/riwayat"><i class="fa-solid fa-folder-open"></i><span> RIWAYAT</span></Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header