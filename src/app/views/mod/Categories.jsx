import { Fragment } from "react";
import { styled } from "@mui/material";
import CategoryTableComp from "./CategoryTable";

// STYLED COMPONENTS
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

export default function Analytics() {
  return (
    <Fragment>
      <ContentBox className="analytics">
            <CategoryTableComp />
      </ContentBox>
    </Fragment>
  );
}
