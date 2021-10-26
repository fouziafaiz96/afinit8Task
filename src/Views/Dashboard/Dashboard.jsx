import {
  AppBar,
  Badge,
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { FlexColCenter, FlexRowCenter, GreenBox } from "../elements";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Barchart from "../../Common/Barchart/Barchart";
import Piechart from "../../Common/Piechart/Piechart";
function Dashboard(props) {
  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                marginRight: "36px",
              }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <IconButton color="inherit">
                <Badge color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </IconButton>
          </Toolbar>
        </AppBar>

        <FlexRowCenter
          mt={8}
          sx={{
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 5, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={4} lg={4}>
                <GreenBox>
                  <Typography color="common.white" variant="h5" gutterBottom>
                    Your Expense
                  </Typography>
                  <Typography color="common.white" variant="h5">
                    88250
                  </Typography>
                </GreenBox>
              </Grid>
              <Grid item xs={6} md={4} lg={4}>
                <GreenBox>
                  <Typography color="common.white" variant="h5" gutterBottom>
                    Your Revenue
                  </Typography>
                  <Typography color="common.white" variant="h5">
                    88250
                  </Typography>
                </GreenBox>
              </Grid>
              <Grid item xs={6} md={4} lg={4}>
                <GreenBox>
                  <Typography color="common.white" variant="h5" gutterBottom>
                    Your Profit
                  </Typography>
                  <Typography color="common.white" variant="h5">
                    88250
                  </Typography>
                </GreenBox>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </FlexRowCenter>
        <FlexRowCenter>
          <Container maxWidth="lg" sx={{ mt: 5, mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={9} lg={7}>
                <Box>
                  <Barchart />
                </Box>
              </Grid>
              <Grid item xs={6} md={3} lg={5}>
                <Box>
                  <Piechart />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </FlexRowCenter>
      </Box>
    </>
  );
}

export default Dashboard;
