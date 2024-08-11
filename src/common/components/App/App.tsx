import 'common/components/App/App.css'
import {Rating} from "common/components/Rating/Rating.tsx";
import {Accordion} from "common/components/Accordion/Accordion.tsx";
import {PageTitle} from "common/components/App/PageTitle.tsx";
import {OnOff} from "common/components/OnOff/OnOff.tsx";
import {UncontrolledAccordion} from "common/components/UncontrolledAccordion/UncontrolledAccordion.tsx";
import {UncontrolledRating} from "common/components/UncontrolledRating/UncontrolledRating.tsx";
import {UncontrolledOnOff} from "common/components/UncontrolledOnOff/UncontrolledOnOff.tsx";
import {useState} from "react";
import {RatingValueProps} from "common/types/Rating/RatingValueProps.ts";

function App() {
    console.log("App rendering")
    const [ratingValue, setRatingValue] = useState<RatingValueProps>(0)

    return (
        <div className={"App"}>
            <h1>Controlled components</h1>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            <span>Article 1</span>
            <Rating value={3}/>
            <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Menu"} collapsed={false}/>
            <span>Article 2</span>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff toggle={true}/>

            <h1>Uncontrolled components</h1>
            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledRating/>
            <UncontrolledOnOff/>
        </div>
    )
}

export default App