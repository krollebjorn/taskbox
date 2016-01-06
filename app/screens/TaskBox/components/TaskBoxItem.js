import React  from 'react'
import moment from 'moment'
import nav    from '../../shared/utils/nav'

export default class TaskBoxItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x : 0
        }
    }
    render() {
        var classes = 'TaskBoxItem'
        if (this.props.selected) classes += ' selected'
        let date = moment(this.props.task.date).format('MMM Do')
//        let style = {}
        let x = this.state.x == 0 ? 'none' : this.state.x+'px'
        let style = { 'transform' : 'translateX('+x+')' }
        return (
            <div className={classes} ref="node"
                onTouchStart={this.onTouchStart.bind(this)}
                onTouchEnd={this.onTouchEnd.bind(this)}
                onTouchMove={this.onTouchMove.bind(this)}
                onClick={nav.navigate.bind(undefined, `/taskbox/${this.props.task.id}`)}>
                    <div style={style}>
                        <div className="date">{date}</div>
                        <div className="name">{this.props.task.name}</div>
                        <div className="summary">{this.props.task.summary}</div>
                    </div>
            </div>
        )
    }
    onTouchMove(e) {
        let touch = e.targetTouches[0]
        let offset = touch.clientX - this.startX
        this.setState({ x : offset })
    }
    onTouchStart(e) {
        let touch = e.targetTouches[0]
        this.startX = touch.clientX
    }
    onTouchEnd(e) {
        if (this.state.x < -130) this.props.handleSwipeLeft(this.props.task, this.props.index)
        this.startX = 0
        this.setState({ x : 0 })
    }
}
