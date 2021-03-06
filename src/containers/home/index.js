import React from 'react'
import { push } from "react-router-redux"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, incrementAsync, decrement, decrementAsync } from '../../modules/counters'

const Home = props => (
    <div>
        <h1>Home</h1>
        <p>Count:{props.count}</p>
        <p>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
        </p>
        <p>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
        </p>
        <button onClick={() => props.changePage()}>Go to about page via redux</button>
    </div>
)

const mapStateToProps = ({ counter }) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: () => push('/about-us')
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)