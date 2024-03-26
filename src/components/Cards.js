import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

const card = (data) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data?.heading}
        </Typography>
        <Typography variant="h5" sx={{ mb: 3.5 }} component="div">
          {data?.value}
        </Typography>
        {data?.profit > 0 && (
          <Typography sx={{ mb: 1.5, fontSize: 5 }} color="green">
            <p>{data?.profit} %</p>
          </Typography>
        )}
        {data?.loss > 0 && (
          <Typography sx={{ mb: 1.5, fontSize: 5 }} color="red">
            <p>{data?.loss} %</p>
          </Typography>
        )}
        {data?.info > 0 && (
          <Typography sx={{ mb: 1.5, fontSize: 5 }} color="text.secondary">
            <p>From {data?.info} %</p>
          </Typography>
        )}
      </CardContent>
    </React.Fragment>
  );
};

export default function Card() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",

        p: 5,
        m: 5,
        justifyContent: "space-around",

        minWidth: 275,
      }}
    >
      {Data.map((data) => {
        return <Card variant="outlined">{card(data)}</Card>;
      })}
    </Box>
  );
}
