import { useState, useEffect } from "react"
import BGenbox from '../Assets/BGenbox.png'

const FormTopup = () => {
    const [Form, formUse] = useState(true);

    const [Tanggal, setTanggal] = useState("")
    const [Provider, setProvider] = useState("")
    const [Nomor_HP, setNomor] = useState("")
    const [Nominal, setNominal] = useState("")
    const [saldo, setSaldo] = useState("")

    useEffect(() => {
        fetch(`http://localhost:6287/genbox/getSaldo`)
        .then(res => res.json())
        .then(res => {
            setSaldo(res.data[0].Saldo)
            console.log(res.data[0].Saldo);
            console.log(saldo);
            console.log(Nominal);
        })
    }, [setSaldo])

    const UPDATETU = () => {
        const datas = new FormData(this)
        datas.append("Saldo", parseInt(saldo)+parseInt(Nominal))

        fetch(`http://localhost:6287/genbox/update2`, {
            method: 'PUT',
            body: datas
        })
        .then(res => res.json())
        .then(res => {
            console.log(saldo);
            window.location.reload()
        })
    }

    const UPDATE = () => {
        const datas = new FormData(this)
        datas.append("Tanggal", Tanggal)
        datas.append("Nomor_HP", Nomor_HP)
        datas.append("Provider", Provider)
        datas.append("Nominal", parseInt(Nominal))
        datas.append("Saldo", parseInt(saldo)-parseInt(Nominal))

        fetch(`http://localhost:6287/genbox/update2`, {
            method: 'PUT',
            body: datas
        })
        .then(res => res.json())
        .then(res => {
            window.location.reload()
        })
        .catch(error => console.log(error))

        fetch(`http://localhost:6287/genbox/post`, {
            method: 'POST',
            body: datas
        })
        .then(res => res.json())
        .then(res => {
            window.location.reload()
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="container-form">
            <img className='BG' src={BGenbox}/>
            <div className="btn-form">
                <input type="button" value="TOP-UP" onClick={() => formUse(true)}/>
                <input type="button" value="JUAL" onClick={() => formUse(false)}/>
            </div>
            <div className="container">
                {
                    Form ?
                    
                    <div className="form-section">
                    <h1>TOP - UP</h1>
                    <form>
                        <label>TANGGAL</label>
                        <input type="text" onInput={(e) => setTanggal(e.target.value)}/>
                        <label>NOMINAL</label>
                        <input type="text" onInput={(e) => setNominal(e.target.value)}/>
                        <button onClick={(e) => {e.preventDefault(); UPDATETU()}}>KIRIM</button>
                    </form>
                </div> :
                <div className="form-section">
                <h1>JUAL</h1>
                <form>
                    <label>TANGGAL</label>
                    <input type="text" onInput={(e) => setTanggal(e.target.value)}/>
                    <label>PROVIDER</label>
                    <select onChange={(e) => setProvider(e.target.value)}>
                        <option value="Telkomsel">TELKOMSEL</option>
                        <option value="Indosat" selected>INDOSAT</option>
                        <option value="Smartfren">SMARTFREN</option>
                        <option value="XL">XL</option>
                        <option value="Tri">TRI</option>
                        <option value="Axis">AXIS</option>
                    </select>
                    <label>NOMINAL</label>
                    <select onChange={(e) => setNominal(e.target.value)}>
                        <option value="5000" selected>5000</option>
                        <option value="10000">10000</option>
                        <option value="25000">25000</option>
                        <option value="50000">50000</option>
                        <option value="70000">70000</option>
                        <option value="100000">100000</option>
                    </select>
                    <label>NOMOR HANDPHONE</label>
                    <input type="text" onInput={(e) => setNomor(e.target.value)}/>
                    <button onClick={(e) => {e.preventDefault(); UPDATE()}}>KIRIM</button>
                </form>
            </div>
                }
            </div>
        </div>
    )
}

export default FormTopup