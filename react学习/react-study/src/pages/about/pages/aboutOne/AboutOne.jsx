import { useNavigate } from "react-router-dom";
export const AboutOne = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/home");
  };
  return (
    <>
      <div>这是aboutOne</div>
      <div>
        <button onClick={() => toHome()}>点击</button>
      </div>
    </>
  );
};
