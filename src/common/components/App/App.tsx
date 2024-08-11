import 'common/components/App/App.css'
import {AppTitle} from "common/components/App/AppTitle.tsx";
import {Rating} from "common/components/Rating/Rating.tsx";
import {Accordion} from "common/components/Accordion/Accordion.tsx";

function App() {
    console.log("App rendering")

    return (
        <>
            <AppTitle/>
            <Accordion/>
            <Rating/>
        </>
    )
}

export default App
