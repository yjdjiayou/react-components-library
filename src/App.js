import React from 'react';
import './App.css';
import Drag from "./components/drag/Drag";
import FormSubmitAntd from "./components/form-builder/FormSubmitAntd";


const tabMaps = [
    {
        name: 'Drag',
        comp: Drag
    },
    {
        name: 'FormSubmitAntd',
        comp: FormSubmitAntd

    }
];

export default class App extends React.Component {
    state = {
        activeComp: null
    };

    render() {
        const ActiveComp = this.state.activeComp;
        return (
            <div className="App">
                <ul className="tab-container">
                    {
                        tabMaps.map((it, i) => {
                            const {name, comp} = it;
                            return (<li key={i} onClick={() => {
                                this.setState({
                                    activeComp: comp
                                })
                            }}>{name}</li>)
                        })
                    }
                </ul>
                <div className="content-container">
                    {
                        ActiveComp && <ActiveComp/>
                    }
                </div>
            </div>);
    }
}
