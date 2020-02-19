import React from 'react'
import { useParams } from 'react-router-dom'

import { Typography, Button, Grid, TextField, InputAdornment } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import ShoppingIcon from '@material-ui/icons/AddShoppingCart'
import ScheduleIcon from '@material-ui/icons/Schedule'
import MoneyOffIcon from '@material-ui/icons/MoneyOff'
import { makeStyles } from '@material-ui/core/styles'

import { Winner } from '../../components/Winner'

import { getRate } from '../../helpers/rates'
import { getStandingBid, bidOnArticle, getMoneyBack } from '../../data'

const useStyles = makeStyles(theme => ({
  img: {
    width: '100%',
  },
  button: {
    marginTop: 8,
    borderRadius: 0,
  },
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
}))

export const Article = ({ article, accounts }) => {
  const classes = useStyles()
  const { id } = useParams()
  const user = accounts[0]

  const [isLoading, setIsLoading] = React.useState(false)
  const [status, setStatus] = React.useState(null)
  const [userBid, setUserBid] = React.useState(0)
  const [rate, setRate] = React.useState(1)

  const [standingBid, setStandingBid] = React.useState({
    user: null,
    value: 0,
  })

  React.useEffect(() => {
    getRate().then(r => setRate(r))
    getStandingBid(id).then(bid => {
      if (bid) {
        setStandingBid(bid)
        setUserBid(bid.value)
      }
    })
  }, [id])

  const onBid = async () => {
    setIsLoading(true)
    setStatus(null)
    try {
      const result = await bidOnArticle(id, userBid, user)
      if (result.transactionHash) {
        setStatus({
          status: 'success',
          message: 'Bid success: ' + result.transactionHash,
        })
      }
    } catch (err) {
      setStatus({ status: 'error', message: err.message })
    }
    setIsLoading(false)
  }

  const onRefund = async () => {
    setStatus(null)
    const result = await getMoneyBack(id, user)
    if (result.transactionHash) {
      setStatus({
        status: 'success',
        message: 'You got your money back: ' + result.transactionHash,
      })
    }
  }

  if (!article) return <div>Loading</div>

  const isClosed = article.end <= new Date()
  const isWinner = user && user === standingBid.user

  return (
    <div>
      {!!status && <Alert severity={status.status}>{status.message}</Alert>}
      <Grid container spacing={3}>
        <Grid item md={8}>
          <img alt={article.title} className={classes.img} src={article.img} />
        </Grid>
        <Grid item container direction="column" justify="flex-end" alignItems="stretch" md={3}>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}{' '}
            <Typography gutterBottom variant="h6" component="span" color="textSecondary">
              <small>
                {standingBid.value} ETH / {standingBid.value * rate} €
              </small>
            </Typography>
          </Typography>

          <Typography
            gutterBottom
            color={isClosed ? 'error' : 'textSecondary'}
            className={classes.wrapIcon}
          >
            <ScheduleIcon />
            {article.end.toLocaleString('en-UK')}
          </Typography>

          {isWinner && <Winner />}

          <Typography variant="body2" color="textSecondary" component="p">
            {article.description}
          </Typography>
          <TextField
            label="Bid"
            type="number"
            value={userBid}
            onChange={e => setUserBid(e.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="end">ETH</InputAdornment>,
            }}
            variant="filled"
            disabled={isLoading}
          />

          <Typography variant="body1" color="textSecondary">
            <small>{userBid * rate} €</small>
          </Typography>

          <Button
            className={classes.button}
            startIcon={<ShoppingIcon />}
            variant="contained"
            color="primary"
            fullWidth
            disableElevation
            onClick={onBid}
            disabled={isLoading || isClosed}
          >
            Bid
          </Button>

          <Button
            className={classes.button}
            startIcon={<MoneyOffIcon />}
            variant="contained"
            color="primary"
            fullWidth
            disableElevation
            onClick={onRefund}
            disabled={!isClosed || isWinner}
          >
            Get money back
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
