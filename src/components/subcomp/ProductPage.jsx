import React from "react";
import { useParams } from "react-router";
import { data } from "../../util/data";

export default function ProductPage() {
  const info = useParams();
  console.log(info);
  let singlecard = data.filter((product) => {
    return product.id.includes(info.id);
  });
  console.log(singlecard);
  return (
    <div>
      <img src="" alt="" />
      <h2>{singlecard[0].name}</h2>
    </div>
  );
}
