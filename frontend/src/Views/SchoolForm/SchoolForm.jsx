import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { findAllByTestId } from "@testing-library/react";
import React, { useState } from "react";
import { FlexColCenter } from "../elements";
import { sendData } from "../../Services/formService";
function SchoolForm({ toggleComp }) {
  const [state, setState] = useState({
    noOfStudents: null,
    totalClasses: null,
    expense: null,
    revenue: null,
    profit: null,
    expenseError: false,
    revenueError: false,
  });
  const [expenseError, setExpenseError] = useState(false);
  const [revenueError, setRevenueError] = useState(false);

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onFocus = () => {
    setState({ ...state, revenueError: false, expenseError: false });
  };
  const handleSubmit = () => {
    if (!state.expense) setState({ ...state, expenseError: true });
    else if (!state.revenue) setState({ ...state, revenueError: true });
    else {
      let calProfit = state.revenue - state.expense;
      setState({ ...state, profit: calProfit });
      sendData(
        state.noOfStudents,
        state.totalClasses,
        state.expense,
        state.revenue,
        calProfit
      );
      toggleComp();
    }
  };
  return (
    <>
      <Container maxWidth="sm">
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 5, md: 3 } }}
        >
          <FlexColCenter>
            <Typography variant="h4" color="primary">
              Profit Calculator
            </Typography>
          </FlexColCenter>
          <Box mt={3}>
            <TextField
              id="outlined-basic"
              type="number"
              label="No. Of Students"
              variant="outlined"
              fullWidth
              required
              name="noOfStudents"
              value={state.noOfStudents}
              onChange={onChange}
            />
          </Box>
          <Box mt={3}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              label="Total Classes"
              required
              type="number"
              name="totalClasses"
              value={state.totalClasses}
              onChange={onChange}
            ></TextField>
          </Box>
          <Box mt={3}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              label="Expense "
              required
              name="expense"
              type="number"
              value={state.expense}
              onChange={onChange}
              error={state.expenseError}
              onFocus={onFocus}
            ></TextField>
          </Box>
          <Box mt={3}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              label="Revenue"
              required
              name="revenue"
              type="number"
              value={state.revenue}
              onChange={onChange}
              error={state.revenueError}
              onFocus={onFocus}
            ></TextField>
          </Box>
          <FlexColCenter mt={3}>
            <Button variant="contained" onClick={handleSubmit}>
              Calculate
            </Button>
          </FlexColCenter>
          {state.profit && (
            <FlexColCenter mt={3}>
              <Typography color="secondary" variant="p">
                Calculated Profit is:
                <span style={{ color: "grey" }}>
                  <strong>{state.profit}</strong>
                </span>
              </Typography>
            </FlexColCenter>
          )}
        </Paper>
      </Container>
    </>
  );
}

export default SchoolForm;
