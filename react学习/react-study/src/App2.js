import { useState, useCallback, createContext, useEffect } from 'react';
import { App2Child } from './reviewComponent/app2Child/App2Child';
import { Index } from './pages/index/Index';
import { About } from './pages/about/About';
import { NotFound } from './pages/notFound/NotFound';
import { useLocation, useParams, Routes, Route, Navigate, useSearchParams } from 'react-router-dom'
export const ThemeContext = createContext('light');
export const UserContext = createContext(null);
export const App = () => {
    const [count, setCount] = useState(0);

    const [theme, setTheme] = useState('light');

    function createUser() {
        return { name: 'chenlei', age: 28 }
    }

    const [user] = useState(createUser)

    const location = useLocation();

    useEffect(() => {
        console.log(location)
    }, [location])

    console.log(useParams());
    const [searchParams] = useSearchParams(); // ?name=lindong
    console.log(searchParams.get("name"));

    /** 如果没有useCallback App2Child会重新渲染 */
    const handleClick = useCallback(() => {
        console.log('hahdad')
    }, []);
    return <>

        <div onClick={() => setCount(count + 1)}>加加加</div>
        <input onChange={e => setTheme(e.target.value)} />
        <div>{count}</div>
        <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={user}>
                <App2Child handleClick={handleClick} top={<div>这事top</div>} bottom={<div>这事bottom</div>}>
                    <div>第一个children</div>
                    <div>第二个children</div>
                </App2Child>
                <div>-----------------------------------------</div>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />}></Route>
                    <Route path="/home" element={<Index />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </UserContext.Provider>
        </ThemeContext.Provider >
    </>
}