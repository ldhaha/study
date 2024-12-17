import { Route,Routes} from 'react-router-dom'
function Home(){
    return <><div>这是home组件</div></>
}

function About(){
    return <><div>这是about组件</div></>
}

export const ReactRouter = () => {
    return (
        <>
        <div>112313</div>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </>
    )
}