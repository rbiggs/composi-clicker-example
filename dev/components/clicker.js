import { h, Component } from 'composi';

class Clicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  incrementCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrementCount() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  resetCount() {
    this.setState(() => ({ count: 0 }));
  }

  render() {
    return (
      <div class="container">
        <div class="clicker border border-secondary rounded">
          <div class="clicker-display d-flex align-items-center bg-light text-secondary">            
            <div class="mx-auto display-1">{this.state.count}</div>
          </div>
          <div class="clicker-button-panel d-flex flex-row">
            <button class="btn btn-success w-100" onClick={this.incrementCount}>
              <i class="fa fa-plus fa-2x"></i>
            </button>
            <button class="btn btn-warning w-100" onClick={this.resetCount}>
              <i class="fa fa-refresh fa-2x"></i>
            </button>
            <button class="btn btn-danger w-100" onClick={this.decrementCount}>
              <i class="fa fa-minus fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Clicker;