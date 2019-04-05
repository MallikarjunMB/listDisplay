import React, { Component } from 'react'
import { connect } from 'react-redux';
import { activityList } from '../redux/actions/updateAction'
import activity from '../jsons/activity.json'
import { Table } from 'reactstrap';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class List extends Component {
  componentWillMount(){
    this.props.activityList(activity);
  }
  render() {
    const columns = [{
      Header: 'Sl.no',
      accessor: 'id' // String-based value accessors!
    }, {
      Header: 'Activity',
      accessor: 'act',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }]
    // const activityItems = this.props.activityDetails.activity.map(activities => (
    //   <tr>
    //         <td>{activities.id}</td>
    //         <td>{activities.act}</td>
    //       </tr>

    // ));
    return <ReactTable
    data={activity}
    columns={columns}
  />
    
    // return (
    //   <div>
    //     List Component
    //     <Table bordered>
    //     <thead>
    //       <tr>
    //         <th>Sl.no</th>
    //         <th>Activity</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {activityItems}
    //     </tbody>
    //     </Table>
    //   </div>
    // )
  }
}
const mapStateToProps = (reduxState) => {
  console.log('mapstate', reduxState)
  return { activityDetails: reduxState }
}

export default connect (mapStateToProps, {activityList}) (List);

