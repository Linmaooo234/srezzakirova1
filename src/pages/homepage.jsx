import { Catalogg } from "../components/catalog";
import { Headerzz } from "../components/header";
import { SliderCarousel } from "../components/slider";

export function HomePage(){
    return(
        <section className="main">
            <Headerzz/>
            <SliderCarousel/>
            <Catalogg/>
        </section>
    )
}