import { List, ListSubheader, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function ActionsMenu() {
  const nav = useNavigate();

  return <List
    sx={{ backgroundColor: 'background.paper' }}
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Manage
      </ListSubheader>
    }
  >
    <ListItem disablePadding>
      <ListItemButton onClick={() => nav('/')}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText>
          Home
        </ListItemText>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText>
          Environments
        </ListItemText>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText>
          Authorizers
        </ListItemText>
      </ListItemButton>
    </ListItem>
  </List>
}
