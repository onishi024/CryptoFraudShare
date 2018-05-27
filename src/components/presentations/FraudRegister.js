import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MaskedInput from 'react-text-mask';
import {TextField, Input, InputLabel, FormControl, Button, Typography, Paper} from '@material-ui/core'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
})

class FraudRegister extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      tid: '     -   -   ',
      amount: '',
      register_datetime: '',
    }
  }

  TextMaskCustom = props => {
    const { inputRef, ...other } = props;
    return (
      <MaskedInput
        {...other}
        ref={inputRef}
        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { tid, amount, register_datetime } = this.state
    const { classes } = this.props

    return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h1">
          不正取引情報登録
        </Typography>
        <br/>
        <FormControl className="formControl">
          <InputLabel htmlFor="formatted-text-mask-input">端末識別番号(TID)</InputLabel>
          <Input
            value={tid}
            onChange={this.handleChange('tid')}
            id="formatted-text-mask-input"
            inputComponent={this.TextMaskCustom}
            />
        </FormControl>
        <br/>
        <TextField
          id="number"
          label="利用金額"
          value={amount}
          onChange={this.handleChange('amount')}
          type="number"
          className="textField"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          />
        <br />
        <TextField
          id="datetime-local"
          label="利用日時"
          type="datetime-local"
          value={register_datetime}
          onChange={this.handleChange('register_datetime')}
          className="textField"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <br/>
        <Button variant="raised" color="primary" className="button">
          登録
        </Button>
      </Paper>
    )
  }
}

FraudRegister.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FraudRegister)
