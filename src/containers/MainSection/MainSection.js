import React from 'react';
import axios from "axios";
import UserList from '../../components/UserList/UserList';
import {Alert} from 'react-bootstrap';

class MainSection extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            users: [],
            per: 8,
            page: 1,
            totalPages: null,
            scrolling: false,
            endOfRecords: false
        }
        this.loadMore = this.loadMore.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
  
    componentWillMount() {
        this.loadUsers();
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e)
        })
    }
  
    loadUsers(){
        this.setState({
            loading: true
        });
        const {per,page,users} = this.state;
        const url = `https://reqres.in/api/users?per_page=${per}&page=${page}`
        axios
            .get(url)
            .then(response => {
            this.successShow(response,users);
            })
            .catch(error => {
            this.successShow(error,users);
            });
    }

    successShow(response,users) {
        this.setState({
            loading: false,
            scrolling: false,
            totalPages: response.data.total_pages,
            users: [...users, response.data.data]
        });
    }
  
    loadMore(){
        this.setState(prevState => ({
            page: prevState.page + 1,
            scrolling: true,
        }),this.loadUsers)
    }

    handleScroll(e){
        const {scrolling,totalPages,page} = this.state;
        if(scrolling) return
        if(totalPages <= page) {
            this.setState({
                endOfRecords: true
            })
            return
        }
        const lastLi = document.querySelector('.user_list > li:last-child');
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        let bottomOffset = 20;
        if(pageOffset > lastLiOffset - bottomOffset) this.loadMore();
    }


  render(){
    return (
        <section>
            <h2>User List</h2>
            {
                (this.state.loading) ? <p>Loading...</p>
                : <UserList users={this.state.users} />
            }
            {
                (this.state.endOfRecords) ? 
                    <Alert variant={"info"}>
                        <h6 className='text-center'>Nothing to display.</h6>
                    </Alert>
                : null
            }

        </section>
    );
  }
}

export default MainSection;
