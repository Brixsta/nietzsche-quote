import React from 'react';

class Nietzsche extends React.Component {
    constructor() {
        super();

        this.state = {
            quotes: [
                "He who has a why to live can bear almost any how.", "When you stare into the abyss the abyss stares back at you.",
                "To live is to suffer, to survive is to find some meaning in the suffering.", "Without music, life would be a mistake.",
                "Love of one is a piece of barbarism: for it is practised at the expense of all others. Love of God likewise."
            ],
            currentQuote: ''
        }
    }

    generateRandomNum() {
        let randomNumber = Math.floor(Math.random()*this.state.quotes.length);
        return randomNumber;
    }

    render () {
        return (
            
            <div className="wrapper">
                <h1 className="app-title">Nietzsche</h1>
                <div className="container">
                    <div className="portrait-circle">
                        {/* <img 
                        height="100%"
                        width="100%"
                        src="./portrait.jpeg" alt="Nietzsche Portrait">
                        </img> */}
                    </div>
                </div>
                <div className={'quote-box'}>
                    <h1 className={"quote"}>{this.state.currentQuote}</h1>
                </div>
                
            </div>
        )
    }

    componentDidMount () {
        setInterval(()=>{
            this.setState({currentQuote:this.state.quotes[this.generateRandomNum()]})
        },4000)
    }
}

export default Nietzsche;