import React from "react";
import './ClassificadorFruta.css'
import axios from "axios";


export class ClassificadorFruta extends React.Component{
    constructor(props){
        super(props)
    }

    sendData(){
        var response;
        var response_status_code;
        var response_message;
        var form = document.getElementById("classificationForm")

        var new_massa = document.getElementById("formMassa").value
        if (new_massa === ""){
            return 1
        }

        var new_largura = document.getElementById("formLargura").value
        if (new_largura === ""){
            return 1
        }

        var new_altura = document.getElementById("formAltura").value
        if (new_altura === ""){
            return 1
        }

        var new_pontuacao_cor = document.getElementById("formPontuacaoCor").value
        if (new_pontuacao_cor === ""){
            return 1
        }

        form.addEventListener('submit', (event) => {event.preventDefault()})
        
        response = axios.post("http://localhost:5000/api/v1/classificar_fruta", {
            fruta_massa: ""+new_massa+"",
            fruta_largura: ""+new_largura+"",
            fruta_altura: ""+new_altura+"",
            fruta_pontuacao_cor: ""+new_pontuacao_cor+""
        }).then( function (response){
            response_status_code = response.status
            response_message = response.data
            
            if (response_status_code === 200){
                window.alert("A fruta que você tentou classificar é " + response_message + "")
            } else {
                window.alert("Não foi possível classificar a fruta neste momento.")
            }

            document.getElementById("formMassa").value = ''
            document.getElementById("formLargura").value = ''
            document.getElementById("formAltura").value = ''
            document.getElementById("formPontuacaoCor").value = ''

        })
        
    }

    render(){

        return(
            <div className="divFormulario">
                 <h2>Preencha as informações abaixo para descobrir!
                    </h2>
                <form id="classificationForm">
                    Massa da Fruta: <input id="formMassa" required></input>
                    <br></br>
                    Largura da Fruta: <input id="formLargura" required></input>
                    <br></br>
                    Altura da Fruta: <input id="formAltura" required></input>
                    <br></br>
                    Pontuação de cor: <input id="formPontuacaoCor" required></input>
                    <br></br>
                    <input className="submitButton" type="submit" onClick={this.sendData.bind(this)} value='Classificar'></input>
                </form>
            </div>
        )

    }
}