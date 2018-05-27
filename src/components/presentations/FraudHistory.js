import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography,Table, TableHead, TableCell, TableRow, TableBody} from '@material-ui/core'
import merchants from '../../demo/demodata'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
})

const FraudHistory = props => {
  const { classes } = props

  return (
    <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h1">
          不正取引情報履歴
        </Typography>
        <br/>
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell numeric>端末識別番号(TID)</TableCell>
              <TableCell numeric>CPPスコア</TableCell>
              <TableCell numeric>最終更新日時</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {merchants.map(merchant => {
              return (
                <TableRow hover key={merchant.tid}>
                  <TableCell numeric>{merchant.tid}</TableCell>
                  <TableCell numeric>{merchant.cpp}</TableCell>
                  <TableCell numeric>{merchant.last_update}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
    </Paper>
  )
}

FraudHistory.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FraudHistory)
