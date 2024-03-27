import * as React from "react";

const Data = [
  {
    heading: "Revenue",
    value: "$56,945",
    profit: 45,
    loss: 0,
    info: 4.6,
  },
  {
    heading: "Users",
    value: "76.8%",
    profit: 0,
    loss: -1.7,
    info: 4.6,
  },
  {
    heading: "New Signups",
    value: "116",
    profit: 0,
    loss: 0,
    info: 0,
  },
  {
    heading: "Retention",
    value: 12.67,
    profit: 0.6,
    loss: 0,
    info: 4.6,
  },
];

const SingleCard = ({ heading, value, profit, loss, info }) => {
  // const { user } = useContext(UserContext);
  return (
    <div className="w-64 h-40 m-20  p-15  shadow-lg bg-white">
      <h2 className="font-bold text-base text-gray-500">{heading}</h2>
      <h3 className="font-bold text-2xl pb-7">{value}</h3>
      <div className="flex flex-wrap">
        {profit > 0 && (
          <h4 className="bg-green-300 rounded-full font-red px-2 m-2">
            +{profit}%{" "}
          </h4>
        )}
        {loss < 0 && (
          <h4 className="bg-red-300 rounded-full font-red px-2 m-2">{loss}%</h4>
        )}
        {info > 0 && <h4 className="px-2 m-2">From {info}%</h4>}
      </div>
    </div>
  );
};

export default function Card() {
  return (
    <div className="flex flex-wrap">
      {Data.map((data) => {
        return <SingleCard {...data} key={data.heading} />;
      })}
    </div>
  );
}
