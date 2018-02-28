import React from "react";
import List from './List';
import data from '../data/data';

class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            lists: [],
            title: '',
            amount: 0,
        };
        this.serchTitle = this.serchTitle.bind(this);
    }

    serchTitle(event){
        this.setState({ title: event.target.value });
        const lists = data.lists.filter(list => list.title.includes(this.state.title));
        this.setState({ amount: lists.length, lists: lists });
    }

    render(){
        return(
            <div>
                <form className='search'>
                    <input type="text" placeholder='Введите название чехла' onInput={this.serchTitle} />
                </form>
                <div className="result">
                    По вашему запросу найдено: {this.state.amount}
                    <ul className='collcetions'>
                        {
                            this.state.amount < 1 ?
                                <div>Ничего не найдено</div>
                                :
                                this.state.lists.map(list => (
                                    <List key={list.id} list={list} search='/collections/' />
                                ))
                        }
                    </ul>
                </div>
            </div>
        )
    }

}

export default Search;