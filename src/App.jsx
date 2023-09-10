import {useEffect} from "react";
import VanillaTilt from "vanilla-tilt";

import './App.css'

function App() {
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 12.5,
            speed: 300,
            glare: true,
            "max-glare": 0.5,
            "scale": 1.1,
            reverse: true,
            perspective: 1000
        });
    }, []);


    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="content">
                        <h2>I</h2>
                        <h3>Card One</h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Phasellus ac vulputate nunc.
                            In elit felis, rutrum quis ipsum a,
                            dapibus porta tellus.
                        </p>
                        <a className="glass-button" href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>II</h2>
                        <h3>Card Two</h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Phasellus ac vulputate nunc.
                            In elit felis, rutrum quis ipsum a,
                            dapibus porta tellus.
                        </p>
                        <a className="glass-button" href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>III</h2>
                        <h3>Card Three</h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Phasellus ac vulputate nunc.
                            In elit felis, rutrum quis ipsum a,
                            dapibus porta tellus.
                        </p>
                        <a className="glass-button" href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>IV</h2>
                        <h3>Card Four</h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Phasellus ac vulputate nunc.
                            In elit felis, rutrum quis ipsum a,
                            dapibus porta tellus.
                        </p>
                        <a className="glass-button" href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>V</h2>
                        <h3>Card Five</h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Phasellus ac vulputate nunc.
                            In elit felis, rutrum quis ipsum a,
                            dapibus porta tellus.
                        </p>
                        <a className="glass-button" href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>VI</h2>
                        <h3>Card Six</h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Phasellus ac vulputate nunc.
                            In elit felis, rutrum quis ipsum a,
                            dapibus porta tellus.
                        </p>
                        <a className="glass-button" href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>VII</h2>
                        <h3>Card Seven</h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Phasellus ac vulputate nunc.
                            In elit felis, rutrum quis ipsum a,
                            dapibus porta tellus.
                        </p>
                        <a className="glass-button" href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>VIII</h2>
                        <h3>Card Eight</h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Phasellus ac vulputate nunc.
                            In elit felis, rutrum quis ipsum a,
                            dapibus porta tellus.
                        </p>
                        <a className="glass-button" href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>IX</h2>
                        <h3>Card Nine</h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Phasellus ac vulputate nunc.
                            In elit felis, rutrum quis ipsum a,
                            dapibus porta tellus.
                        </p>
                        <a className="glass-button" href="#">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h2>X</h2>
                        <h3>Card Ten</h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Phasellus ac vulputate nunc.
                            In elit felis, rutrum quis ipsum a,
                            dapibus porta tellus.
                        </p>
                        <a className="glass-button" href="#">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
