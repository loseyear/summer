import React, {
  Suspense,
} from 'react'
import * as locales from '@mui/material/locale'
import { Global } from '@emotion/react'
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles'
import {
  Box,
  Grid,
} from '@mui/material'
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Nav from '@/components/Nav'
import ErrorPage from '@/components/Error'
import navConfig from '@/config/nav'

import muiTheme from '@/theme/mTheme'
import globalTheme from '@/theme/global'

function App () {
  const themeWithLocale = createTheme(
    muiTheme,
    locales.zhCN,
  )

  return (
    <ThemeProvider theme={themeWithLocale}>
      <Global styles={globalTheme} />
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          alignItems: 'stretch',
        }}
      >
        <Grid container spacing={0}>
          <Nav />
          <Grid xs={6}>
            <Suspense
              fallback={<div>loading...</div>}
            >
              <Routes>
                <Route
                  path="/"
                  element={(<Navigate to='/home' />)}
                />
                {
                  navConfig.map(
                    (v) => (
                      <Route
                        key={v.name}
                        path={`/${v.name}`}
                        element={(<v.component />)}
                      />
                    ),
                  )
                }
                <Route
                  path="*"
                  element={<ErrorPage />}
                />
              </Routes>
            </Suspense>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App
