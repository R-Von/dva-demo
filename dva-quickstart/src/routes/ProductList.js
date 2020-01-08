import React from 'react'
import { Table , Popconfirm , Button } from 'antd'

const ProductList = ({ onDelete , products })=>{
  const columns = [{
    title:'Name',
    dataIndex:'name'
  },{
    title:'Actions',
    render:(text,record)=>{
      return (
        <Button>Delete</Button>
      )
    }
  }]
  return (
    <Table 
      dataSource={ products }  
      columns={columns}
    />
  )
}


export default ProductList