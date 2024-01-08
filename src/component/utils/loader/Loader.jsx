import React from 'react'
import './loader.css'
const Loader = () => {
    return (
        <section className="min-h-[70vh] w-full flex justify-center items-center">
            <div className="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
            </div>
        </section>

    )
}

export default Loader