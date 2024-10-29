import React from 'react';
import {HeaderForNotDeletableRow, HeaderForDeletableRow} from '../content/productsLists/rows';
import {CollapsableBit} from './collapsableBit';
import '../headers.scss';
import { render } from '@testing-library/react';

  class TotalInNavbar extends React.Component{
    constructor(props){
      super(props);
    }
    static defaultProps = {
      totalInNavbar: true
    }
    render() {
      let className = 'TotalInNavbar';
      if (this.props.totalInNavbar === true){
        className += ' SelectedTotalInNavbar'
      }
      return(
        <div className={className}
          onClick = {this.props.onClick}
        >
          <p>13 produtos</p>
          <p>R$ 101,00</p>
        </div>
      );
    }
  };

  class TrolleyDiv extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
      let className = 'trolleyDiv';
      if (this.props.trolleyDiv === true){
        className += ' SelectedTrolleyDiv'
      }
      return(
        <div className={className}
          onClick = {this.props.onClick}
        >
          <img className="trolleyIcon" src={require('../../img/trolleyAzure.png')}/>
        </div>
      );
    }
    
  }

  TrolleyDiv.defaultProps = {
      trolleyDiv: false,
  }


  class ButtonsOnTheRight extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        nextBasketButton: props.state.nextBasketButton,

        totalInNavbar: props.state.totalInNavbar,
        trolleyDiv: props.state.trolleyDiv,
      }
    }

    handleTotalInNavbarClick(props){
      props.handleTotalInNavbarClick();
      if (!this.state.totalInNavbar){
        this.setState({
          totalInNavbar: true,
          trolleyDiv: false,
        })
      } else {
        return null;
      }
    }

    handleTrolleyDivClick(props){
      props.handleTrolleyDivClick();
      if(!this.state.trolleyDiv){
        this.setState({
          totalInNavbar: false,
          trolleyDiv: true,
        })
      } else {
        return null
      }
    }

    render(){
      if (this.props.state.nextBasketButton){
        return (
          <div className='buttonsOnTheRight'>
            <div className='currentBasket basketDate'>
              <span>
                03 Jan 2021
              </span>
            </div>
          </div>
        );
      } else if (!this.props.state.nextBasketButton){
        return(
          <div className="buttonsOnTheRight">
            <TotalInNavbar
              totalInNavbar={this.state.totalInNavbar}
              onClick = {() => this.handleTotalInNavbarClick(this.props)}
            />
            <TrolleyDiv
              trolleyDiv={this.state.trolleyDiv}
              onClick = {() => this.handleTrolleyDivClick(this.props)}
            />
          </div>
        );
        }
    }
    
  };

class DisplayItemRowHeader extends React.Component{
  constructor(props){
    super();
    this.state = {
      nextBasketButton: props.state.nextBasketButton,
      selectVariablesButton: props.state.selectVariablesButton,

      totalInNavbar: props.state.totalInNavbar,
      trolleyDiv: props.state.trolleyDiv,
    }
  }
  
  componentDidUpdate(prevProps){
    if (this.props.state !== prevProps.state) {
      this.setState({
        nextBasketButton: this.props.state.nextBasketButton,
        selectVariablesButton: this.props.state.selectVariablesButton,

        trolleyDiv: this.props.state.trolleyDiv,
      });
    }
  }

  render(){
    if (this.state.nextBasketButton){
      return(
        <div className='mainContainer'>
          <HeaderForNotDeletableRow/>
        </div>
      )
    } else if(this.state.selectVariablesButton && this.state.trolleyDiv) {
      return(
        <div className='mainContainer'>
          <HeaderForDeletableRow/>
        </div>
      )
    } else{
      return null
    }
  };
}

  class VariablesHeader extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        nextBasketButton: false,
        selectVariablesButton: true,

        totalInNavbar: true,
        trolleyDiv: false,
      }
    }

    handleNextBasketClick(){
      this.props.handleNextBasketClick();
      this.setState({
        nextBasketButton: true,
        selectVariablesButton: false,
      });
    }

    handleSelectVariablesClick(){
      this.props.handleSelectVariablesClick();
      this.setState({
        nextBasketButton: false,
        selectVariablesButton: true,
      });
    }

    handleTotalInNavbarClick(){
      this.props.handleTotalInNavbarClick();
      this.setState({
        totalInNavbar: true,
        trolleyDiv: false,
      })
    }
  
    handleTrolleyDivClick(){
      this.props.handleTrolleyDivClick();
      this.setState({
        totalInNavbar: false,
        trolleyDiv: true,
      })
    }

    componentDidMount(){
      this.setState({
        nextBasketButton: this.props.nextBasketButton,
        selectVariablesButton: this.props.selectVariablesButton,
      });
    }

    componentDidUpdate(prevProps){
      if(this.props.selectVariablesButton !== prevProps.selectVariablesButton){
        this.setState({
          nextBasketButton: this.props.nextBasketButton,
          selectVariablesButton: this.props.selectVariablesButton,
        });
      }
    }

    render() {
      return(
        <div className="header">
          <CollapsableBit
            nextBasketButton = {this.state.nextBasketButton}
            selectVariablesButton = {this.state.selectVariablesButton}
            handleNextBasketClick = {() => this.handleNextBasketClick()}
            handleSelectVariablesClick = {() => this.handleSelectVariablesClick()}
          />
          <div className='variablesSubMenu'>
            <div className='currentBasket'>
              <p>Todos os produtores</p>
              <p>Todos os produtos</p>
              <span></span>
            </div>
            <div>
              <ButtonsOnTheRight
                state={this.state}
                handleTotalInNavbarClick = {() => this.handleTotalInNavbarClick()}
                handleTrolleyDivClick = {() => this.handleTrolleyDivClick()}
              />
            </div>
          </div>
          <DisplayItemRowHeader
            state={this.state}
          />
        </div>
      );
    }
  };


export{
  VariablesHeader,
};