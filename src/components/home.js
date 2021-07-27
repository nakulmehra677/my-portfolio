import React from 'react'
import ImageNakul from "../images/nakul.jpg"


export default function Home() {

    return (
        <section class="block--home section--home">
            <div class="heading">
                <h2 class="h2--home">Hi,</h2>
                <h1>I am Nakul</h1>
            </div>
            <img class="image-nakul" alt="Remy Sharp" src={ImageNakul} />
        </section>
    )
}
