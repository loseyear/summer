import React, {
  Fragment,
} from 'react'
import {
  useNavigate,
} from 'react-router-dom'
import {
  Grid,
} from '@mui/material'

import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import navConfig from '@/config/nav'
import {
  StyleNav,
} from './style'

const Nav: React.FC = () => {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState('')

  const handleClick = (v) => {
    if (v.children) {
      setOpen(v.name === open ? '' : v.name)
    } else {
      navigate(v.name)
    }
  }

  return (
    <Grid xs="auto">
      <StyleNav>
        <List
          sx={{ width: '100%' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
            >
              Limbo
            </ListSubheader>
          }
        >
          {
            navConfig.map(
              (v) => (
                <Fragment
                  key={v.name}
                >
                  <ListItemButton
                    onClick={() => handleClick(v)}
                  >
                    <ListItemIcon>
                      {
                        v.icon
                          ? <v.icon />
                          : null
                      }
                    </ListItemIcon>
                    <ListItemText
                      primary={v.name}
                    />
                    {
                      v.children
                        ? (
                          open === v.name
                            ? <ExpandLess />
                            : <ExpandMore />
                        )
                        : null
                    }
                  </ListItemButton>
                  {
                    v?.children
                      ? (
                        <Collapse
                          in={Boolean(open == v.name)}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List
                            component="div"
                            disablePadding
                          >
                            {
                              v.children.map(
                                (c) => (
                                  <ListItemButton
                                    key={`${v.name}-${c.name}`}
                                    sx={{ pl: 4 }}
                                    onClick={() => handleClick(c)}
                                  >
                                    <ListItemIcon>
                                      <c.icon />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={c.name}
                                    />
                                  </ListItemButton>
                                )
                              )
                            }
                          </List>
                        </Collapse>
                      )
                      : null
                  }
                </Fragment>
              ),
            )
          }
        </List>
      </StyleNav>
    </Grid>
  )
}

export default Nav
