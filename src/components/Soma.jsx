import React from "react";
import Card from "./Card";
import {connect} from "react-redux";

const Soma = props => {
    const { min, max } = props
    return (
        <Card title="Soma de Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{ max + min }</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Soma)
