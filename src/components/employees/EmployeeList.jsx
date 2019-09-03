import React from 'react'

export class EmployeeList extends React.Component {
  
    filteredEmployees = () =>{
        let result =this.props.employees
        if(this.props.filterBy&&this.props.filterBy.nationality) {
            result = result.filter(e=> e.nationality === this.props.filterBy.nationality)
            
        }
        return result
        // this.props.filterBy.nationality
    }

  render(){
    return !this.props.employees ? <h1>no items</h1> : <ol>
      { this.filteredEmployees().map(e =>
        <li key={e.id}>{ e.firstName } {e.lastName}, {e.title}</li>
      )}
    </ol>
  }
}