




var Menu = React.createClass({

    // get initial state of UL and the items

    getInitialState:function(){
        return({visibility:"hidden",items:[]});
    },


    // function which adds the close class and updates close button status
    toggleClose: function(og){

        if(this.state.visibility === "visible")
        {
            this.setState({visibility:"hidden"});
            og.updateStatus("open");
        }

        else {
            this.setState({visibility: "visible"});
            og.updateStatus("close");

        }

    },


        componentDidMount:function(){

        var list=[];

        if(typeof(this.props.List) !== 'undefined')
        {

            // loop through the data
            Object.keys(this.props.List).forEach(function(key){

             // if no child entries are found add as normal entry
            if(this.props.List[key].children === null || typeof(this.props.List[key].children) == 'undefined')
            {
                list.push(<li key={Math.random()} >{this.props.List[key].Name}</li>);
            }
            else // if it has child entries, do a recursive call
            {
                var rg = null; // holds the Ul component's instance
                var og = null; // holds the close button's instance
                list.push(

                        <li key={Math.random()}>
                        {<Close name={this.props.List[key].Name} key={Math.random()}  ref={instance => {og = instance}} onClick={()=>rg.toggleClose(og)}   />}
                        <div style={{clear:"both"}}></div>
                        {<Menu key={Math.random()} ref={inst => {rg=inst}} List={this.props.List[key].children}  />}
                        <div style={{clear:"both"}}></div>
                        </li>
                );
                }

        }.bind(this));
        }
        this.setState({items:list}); // set items on state

    },
    render:function(){

        return(<ul key={Math.random()} className={this.state.visibility}>{this.state.items}</ul>);

    },



});


var Close = React.createClass({

getInitialState:function(){

    // set Initial Label
    return({status:"Open",class:""});

},

updateStatus:function(status)
{
    // set active class according to status
    if(status === "open")
    {
        this.setState({class:""})
    }
    else if(status === "close")
    {
        this.setState({class:"active"})
    }
    this.setState({status:status});
},
    render:function(){

        return(<div className={"head "+this.state.class} onClick={this.props.onClick}><a>{this.props.name}</a><strong>{this.state.status}</strong><div style={{clear:"both"}}></div> </div> )
    }

})