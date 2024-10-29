import React from 'react';
import ReactDOM from 'react';
import ReactstrapNavbar from '../../reactstrap/navbar';
import {HeaderForNotDeletableRow, HeaderForDeletableRow} from '../content/productsLists/rows';
import {SelectProducerDropdown, SelectProductTypeDropdown} from '../../reactstrap/dropDownMenu';
import {SelectDateDropdown} from '../../reactstrap/dropDownMenu';
import '../headers.scss';

class NextBasketButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nextBasket: false
        }
    }

    render(){
        let nextBasket = 'option';
        if(this.props.value.nextBasketButton){
            nextBasket = 'option selectedTab';
        } else if(!this.props.value.nextBasketButton){
            nextBasket = 'option';
        };

        return(
            <div className={nextBasket}
                onClick={() => this.props.onClick()}
            >
                <span>Próxima Cesta</span>
            </div>
        );
    };
};

class SelectVariablesButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nextBasket: false
        }
    }

    render(){
        let nextBasket = 'option';
        if(this.props.value.selectVariablesButton){
            nextBasket = 'option selectedTab';
        } else if(!this.props.value.selectVariablesButton){
            nextBasket = 'option';
        };

        return(
            <div className={nextBasket}
                onClick={() => this.props.onClick()}
            >
                <span>Variáveis</span>
            </div>
        );
    };
};

class NextBasketAndVariables extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nextBasketButton: this.props.collapsableBitState.nextBasketButton,
            selectVariablesButton: this.props.collapsableBitState.selectVariablesButton,
        }
    };

    handleNextBasketClick(){
        this.props.handleNextBasketClick();
        this.setState({
            nextBasketButton: true,
            selectVariablesButton: false,
        })
    }

    handleSelectVariablesClick(){
        this.props.handleSelectVariablesClick();
        this.setState({
            nextBasketButton: false,
            selectVariablesButton: true,
        })
    }


    render(){

        return(
            <div className ='mainContainer'>
                <ReactstrapNavbar/>
                <div className='navbarUnderlyingGap'></div>
                <div className='titleGap'>
                    <div className='title'>
                    <span>Variáveis</span>
                    </div>
                    <div className='variablesNavTabs'>
                        <NextBasketButton
                            value = {this.state}
                            onClick = {() => this.handleNextBasketClick(this.props)}
                        />
                        <SelectVariablesButton
                            value = {this.state}
                            onClick = {() => this.handleSelectVariablesClick(this.props)}
                        />
                    </div>
                </div>
            </div>
        )
    }
  };
  
  class Dropdowns extends React.Component{
    constructor(props){
      super(props);
    };
    render(){
        return(
          <div className='mainContainer'>
            <div className='producerDropdown'>
              <div className='drowDownContainer'>
                <SelectProducerDropdown/>
              </div>
            </div>
            <div className='producerDropdown'>
              <div className='drowDownContainer'>
                <SelectProductTypeDropdown/>
              </div>
            </div>
          </div>
        );
      }
    // }
  };
  
  
  const UpArrow = (props) =>{
  
    return(
      <button 
        className='upArrow'
        onClick={() => props.onClick()}
      >
          &#8963;
      </button>
    );
  };
  
  const DownArrow = (props) =>{
    return(
      <button
        className='downArrow'
        onClick={() => props.onClick()}>
        &#8964;
      </button>
    );
  };

  class ArrowsDiv extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        NextBasketAndVariables : this.props.collapsableBitState.NextBasketAndVariables,
        Dropdowns : this.props.collapsableBitState.Dropdowns,
        nextBasketButton: this.props.collapsableBitState.nextBasketButton,
        selectVariablesButton: this.props.collapsableBitState.selectVariablesButton,
      }
    }

    upArrowOnClick(){
      this.props.upArrowOnClick();
    }

    downArrowOnClick(){
      this.props.downArrowOnClick();
    }




    render(){
      if (this.props.collapsableBitState.NextBasketAndVariables && this.props.collapsableBitState.Dropdowns){
        return(
          <div className='collapseButton'>
            <UpArrow
              onClick={() => this.upArrowOnClick()}
            />
          </div>
        );
      }
      else if (!this.props.collapsableBitState.NextBasketAndVariables && this.props.collapsableBitState.Dropdowns){
        return(
          <div className='collapseButton'>
            <DownArrow
              onClick={() => this.downArrowOnClick()}
            />
            <UpArrow
              onClick={() => this.upArrowOnClick()}
            />
          </div>
        );
      }
      else if (!this.props.collapsableBitState.NextBasketAndVariables && !this.props.collapsableBitState.Dropdowns){
        return (
          <div className='collapseButton'>
            <DownArrow
            arrowsDivState={this.state}
            onClick={() => this.downArrowOnClick()}
            />
          </div>
        );
      }
    }
  }
  
  class CollapsableBit extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        NextBasketAndVariables : true,
        Dropdowns : true,
        nextBasketButton: this.props.nextBasketButton,
        selectVariablesButton: this.props.selectVariablesButton,
      };
    };

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
  
    handleNextBasketClick(){
      this.props.handleNextBasketClick();
    }

    handleSelectVariablesClick(){
      this.props.handleSelectVariablesClick();
    }
    
    upArrowOnClick(){
      if (this.state.NextBasketAndVariables && this.state.Dropdowns){
        this.setState({
          NextBasketAndVariables : false,
        })
      }
      else if (!this.state.NextBasketAndVariables && this.state.Dropdowns){
        this.setState({
          Dropdowns: false,
        });
      }
    };
    downArrowOnClick(){
      if (!this.state.NextBasketAndVariables && !this.state.Dropdowns){
        this.setState({
          Dropdowns:true,
        });
      }
      else if (!this.state.NextBasketAndVariables && this.state.Dropdowns){
        this.setState({
          NextBasketAndVariables:true,
        });
      }
    }
      
      render(){
        
        if (this.state.NextBasketAndVariables && this.state.Dropdowns){
          return(
            <div className='mainContainer'>
              <NextBasketAndVariables
                collapsableBitState = {this.state}
                handleNextBasketClick = {() => this.handleNextBasketClick()}
                handleSelectVariablesClick = {() => this.handleSelectVariablesClick()}
              />
              <Dropdowns
                collapsableBitState={this.state}
              />
              <ArrowsDiv
                collapsableBitState={this.state}
                headerState = {this.props.headerState}
                upArrowOnClick = {() => this.upArrowOnClick()}
                downArrowOnClick = {() => this.downArrowOnClick()}
              />
            </div>
          );
        }
        else if (!this.state.NextBasketAndVariables && this.state.Dropdowns){
          return(
            <div className='mainContainer'>
              <Dropdowns
                collapsableBitState = {this.state}
              />
              <ArrowsDiv
                collapsableBitState={this.state}
                headerState = {this.props.headerState}
                upArrowOnClick = {() => this.upArrowOnClick()}
                downArrowOnClick = {() => this.downArrowOnClick()}
              />
            </div>
          );
        }
        else if (!this.state.NextBasketAndVariables && !this.state.Dropdowns){
          return (
            <ArrowsDiv
              collapsableBitState={this.state}
              headerState = {this.props.headerState}
              upArrowOnClick = {() => this.upArrowOnClick()}
              downArrowOnClick = {() => this.downArrowOnClick()}
            />
          );
        }
      }
    };

export {
    CollapsableBit,
}