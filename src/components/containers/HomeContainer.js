import { connect } from 'react-redux'
import * as Actions from '../../actions'
import Home from '../presentations/Home'

const mapStateToProps = (state, ownProps) => ({
  register_form: state.reducers.register_form,
})

const mapDispatchToProps = dispatch => ({
})

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
