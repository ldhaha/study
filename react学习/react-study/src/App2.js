import {
  useState,
  useCallback,
  createContext,
  useEffect,
  useMemo,
} from "react";
import { routes } from "./router";
import { App2Child } from "./reviewComponent/app2Child/App2Child";
// import { Index } from "./pages/index/Index";
// import { About } from "./pages/about/About";
// import { NotFound } from "./pages/notFound/NotFound";
import {
  useLocation,
  useParams,
  // Routes,
  // Route,
  // Navigate,
  useSearchParams,
  useRoutes,
} from "react-router-dom";
export const ThemeContext = createContext("light");
export const UserContext = createContext(null);
export const App = () => {
  /** 如果使用useMemo，则不会重新渲染 ，children还没改  */
  const topElement = useMemo(() => <div>top</div>, []);
  const bottomElement = useMemo(() => <div>bottom</div>, []);
  const childrenElement = useMemo(() => <div>children</div>, []);

  /** setCount传给子组件不会导致重新渲染 */
  const [count, setCount] = useState(0);

  const [theme, setTheme] = useState("light");

  function createUser() {
    return { name: "chenlei", age: 28 };
  }

  const [user] = useState(createUser);

  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  console.log(useParams());
  const [searchParams] = useSearchParams(); // ?name=lindong
  console.log(searchParams.get("name"));

  /** 如果没有useCallback App2Child会重新渲染 */
  const handleClick = useCallback(() => {
    console.log("hahdad");
  }, []);
  return (
    <>
      <div onClick={() => setCount(count + 1)}>加加加</div>
      <input onChange={(e) => setTheme(e.target.value)} />
      <div>{count}</div>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <App2Child
            handleClick={handleClick}
            top={topElement}
            bottom={bottomElement}
            setCount={setCount}
          >
            {childrenElement}
            {/* <div>第二个children</div> */}
          </App2Child>
          <div>-----------------------------------------</div>
          {/* <Routes>
                        <Route path="/" element={<Navigate to="/home" />}></Route>
                        <Route path="/home" element={<Index />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes> */}
          {useRoutes(routes)}
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};
