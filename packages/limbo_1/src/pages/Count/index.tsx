import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Button } from '@mui/material'
import { Grid } from '@mui/material'

import { countState } from './store'

import { StyleButton } from './style'

const Count: React.FC = () => {
  const [count, setCount] = useRecoilState(countState)

  useEffect(
    () => {
      if (count >= 10) throw new Error('count is 10 throw error')
    },
    [count],
  )

  return (
    <Grid xs="auto" style={{ background: 'blue' }}>
      <h1>Count</h1>
      <StyleButton>
        count is {count}
      </StyleButton>
      <div className="card">
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
    </Grid>
  )
}

export default Count
