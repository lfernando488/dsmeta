import NotificationButton from '../NotificationButton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();
    
    const [minDate, setMinDate] = useState(min);
    const [maxDate ,setMaxDate] = useState(max);

    useEffect(()=>{
        axios.get("http://localhost:8080/sales")
        .then(response => { console.log(response)})
        .catch(error => console.log(error));
    },[]);
    
    return (
        <div className="dsmeta-card">

            <h2 className="dsmeta-sales-title">Vendas</h2>

            <div className="dsmeta-form-control-container">
                <div>
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => {setMinDate(date)}}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div>
                <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => {setMaxDate(date)}}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">12/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#342</td>
                            <td className="show576">12/07/2022</td>
                            <td>Luke</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 120300,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#343</td>
                            <td className="show576">12/07/2022</td>
                            <td>Han Solo</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 250000,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SalesCard;