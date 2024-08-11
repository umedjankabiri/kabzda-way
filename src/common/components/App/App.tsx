import 'common/components/App/App.css'
import {Rating} from "common/components/Rating/Rating.tsx";
import {Accordion} from "common/components/Accordion/Accordion.tsx";
import {PageTitle} from "common/components/App/PageTitle.tsx";

function App() {
    console.log("App rendering")

    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating/>
            <Accordion/>
            Article 2
            <Rating/>
        </div>
    )
}

export default App
