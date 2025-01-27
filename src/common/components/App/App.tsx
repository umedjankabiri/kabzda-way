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
import {
    UncontrolledAccordionWithReducer
} from "common/components/UncontrolledAccordionWithReducer/UncontrolledAccordionWithReducer.tsx";

function App() {
    console.log("App rendering")
    const [ratingValue, setRatingValue] = useState<RatingValueProps>(0)
    const [accordionMenu, setAccordionMenu] = useState<boolean>(false)
    const [accordionUsers, setAccordionUsers] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

    const items = [{title: "Umedjan", value: 1}, {title: "Leyla", value: 2}, {title: "Muhammad", value: 3}]

    return (
        <div className={"App"}>
            <h1>Controlled components</h1>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            <span>Article 1</span>
            <Accordion title={'Menu'} collapsed={accordionMenu} onClick={setAccordionMenu} items={items}/>
            <Accordion title={'Users'} collapsed={accordionUsers} onClick={setAccordionUsers} items={items}/>
            <span>Article 2</span>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff toggle={on} onClick={setOn}/>

            <h1>Uncontrolled components</h1>
            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledRating/>
            <UncontrolledOnOff/>
            <UncontrolledAccordionWithReducer title={"Reducer Menu"}/>
        </div>
    )
}

export default App