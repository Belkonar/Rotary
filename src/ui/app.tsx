import {createRoot} from 'react-dom/client';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  PaletteMode,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme, MenuItem, Select, FormControl, InputLabel, ListSubheader
} from '@mui/material';
import React, {useMemo, useState} from 'react';
import {
  Outlet,
  RouterProvider,
  createMemoryRouter, useNavigate,
} from 'react-router-dom';
import {AlertsComponent} from './components/alerts';
import ActionsMenu from './components/menus/actions-menu';

import {getRoutes} from './routes';
import {Provider} from "react-redux";
import {store} from "./main-store";
import {SimpleTreeView, TreeItem, TreeItem2} from "@mui/x-tree-view";

export function Root() {
  const nav = useNavigate();
  const drawerWidth = 300;

  const [state, setState] = useState<{ mode: PaletteMode }>({
    mode: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
  });

  const theme = useMemo(() => createTheme({
    palette: {
      mode: state.mode,
    },
    components: {
      MuiListItemIcon: {
        defaultProps: {
          sx: {
            minWidth: 32,
          }
        }
      }
    }
  }), [state.mode]);

  const setTheme = (theme: PaletteMode) => {
    setState({mode: theme});
    localStorage.setItem('theme', theme);
  }

  const toggleTheme = () => {
    const newMode = state.mode === 'light' ? 'dark' : 'light';
    setTheme(newMode);
  }

  return <ThemeProvider theme={theme}>
    <CssBaseline/>

    <Box sx={{display: 'flex'}}>
      <AppBar
        position='fixed'
        sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}
      >
        <Toolbar variant='dense'>
          <Typography style={{cursor: 'pointer'}} onClick={() => nav('/')} variant="h6" component="div" sx={{flexGrow: 1}}>
            Rotary
          </Typography>
          <Box>
            <IconButton sx={{ml: 1}} onClick={toggleTheme} color="inherit">
              {state.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
            </IconButton>

            <IconButton onClick={() => nav('/settings')} sx={{ml: 1}} color="inherit">
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar variant='dense'/>
        <FormControl  variant="standard"  sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Environment</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl  variant="standard"  sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Application</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <ListSubheader component="div" id="nested-list-subheader">
          Requests
        </ListSubheader>
        <SimpleTreeView
          aria-label="file system navigator"
          sx={{ height: 200, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
          <TreeItem2 itemId={"1"} label="Applications" />
          <TreeItem2 itemId={"2"} label="Documents" />
        </SimpleTreeView>
      </Drawer>
      <Box
        component="main"
        sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
      >
        <Toolbar variant='dense'/>
        <Outlet/>
      </Box>

    </Box>
    <AlertsComponent/>
  </ThemeProvider>
}

function AppRoot() {
  const router = useMemo(() => createMemoryRouter(getRoutes(), {
    initialEntries: ['/'],
  }), []);

  return <RouterProvider router={router}/>
}

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoot/>
    </Provider>
  </React.StrictMode>
);
