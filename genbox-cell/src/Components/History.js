import { useEffect, useState } from 'react'
import BGenbox from '../Assets/BGenbox.png'

const History = () => {

    const [data, setData] = useState([])
    const [tanggal, setTanggal] = useState("")
    const [nomor, setNomor] = useState("")
    const [provider, setProvider] = useState("")
    const [nominal, setNominal] = useState("")
    
    useEffect(() => {
        fetch(`http://localhost:6287/genbox/get`)
            .then(res => res.json())
            .then(res => {
                // setTanggal(res.data[0].Tanggal)
                // setNomor(res.data[0].Nomor_HP)
                // setProvider(res.data[0].Provider)
                // setNominal(res.data[0].Nominal)
                console.log(res.data)
                setData(res.data)
                // console.log(res.data[0].Saldo)
            })
    }, [])

    return (
        <div className="container-form">
            <img className='BG-hs' src={BGenbox}/>
            <div className='container-table'>
                <div className='table'>
                    <table>
                        <tr>
                            <th>NO</th>
                            <th>TANGGAL</th>
                            <th>NOMOR HP</th>
                            <th>PROVIDER</th>
                            <th>NOMINAL</th>
                        </tr>
                        {
                            data.map((datas, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{datas.Tanggal}</td>
                                    <td>{datas.Nomor_HP}</td>
                                    <td>{datas.Provider}</td>
                                    <td>{datas.Nominal}</td>
                                </tr>
                            ))
                        }
                    </table> 
                </div>
            </div>
        </div>
    )
}

export default History