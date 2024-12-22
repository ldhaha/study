import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
export default function HomeRecommend() {
  const params = useParams(); // 获取动态路由的参数  /:id
  console.log(params);
  console.log(useLocation());
  const [searchParams, setSearchParams] = useSearchParams(); // ?name=lindong
  console.log(searchParams.get("name"));
  return <div>HomeRecommend</div>;
}
