import React from 'react';

class SushiWallet extends React.Component {
    state = {deposit: ''}

    changeHandler = (e) => {
        this.setState({deposit: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        let value = parseInt(this.state.deposit, 10);
        if (value) {
            this.props.depositFn(value);
        } else {
            window.alert('Number not inputed')
        }
        this.setState({deposit: ''})
    }

    render(){
        return (
        <form onSubmit={this.submitHandler}>
            <input type='number' onChange={this.changeHandler} value={this.state.deposit} placeholder='' />
            <input type='submit' value='Deposit Money'/>
        </form>
        )
    }
}

export default SushiWallet;