import { Button, Box, Container } from "@mui/material";
import styled from "styled-components";

export const FlexColCenter = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const FlexColEnd = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const FlexRowCenter = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GreenBox = styled(Box)`
  background-color: #00b07b;
  border-radius: 25px;
  padding: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 20vh;
`;
