import React from "react";
import './tabela.css'

function Tabela(){
    return(
        <table className="tabela">
            <tr>
                <th>Nome</th>
                <th>idade</th>
            </tr>
            <tr>
                <td>Jailson</td>
                <td>39</td>
            </tr>
            <tr>
                <td>Gabriel</td>
                <td>36</td>
            </tr>
            <tr>
                <td>Aurora</td>
                <td>40</td>
            </tr>
        </table>
    )
}

