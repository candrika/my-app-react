import React from "react";
import { Table, Checkbox, Button } from 'flowbite-react';
import { Link } from "react-router-dom";
// import {useSelector, useDispatch} from "react-redux";
import { connect } from "react-redux";
import {del} from '../../store/actions/crudAction'

const delRecord = (id)=>{
    console.log(id)
    //del()
}

function Home({cruds}){
    return(
    <div className="container mx-auto mt-[51px] mb-20">
        <div className="mt-20 font-bold text-end text-orange-600" style={{marginTop:"20xp"}}>
            <br/>
           <Button gradientMonochrome="cyan" size="sm">
                <Link to="/add">
                    Tambah
                </Link>
            </Button>
            <br/>
            <div className="overflow-x-auto">
                <Table className="w-52">
                    <Table.Head>
                        <Table.HeadCell className="p-4">
                            <Checkbox />
                        </Table.HeadCell>
                        <Table.HeadCell>Product Name</Table.HeadCell>
                        <Table.HeadCell>Color</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {cruds.map(crud=>
                            <Table.Row className="bg-white border-gray-900" key={crud.id}>
                                 <Table.Cell className="p-4">
                                     <Checkbox/>
                                 </Table.Cell>
                                 <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                                 {crud.product_name}
                                 </Table.Cell>
                                 <Table.Cell>{crud.color}</Table.Cell>
                                 <Table.Cell>{crud.category}</Table.Cell>
                                 <Table.Cell>{`$ ${crud.price}`}</Table.Cell>
                                 <Table.Cell>
                                     <Link to={`/edit/${crud.id}`} className="font-medium text-cyan-600 hover:underline mr-3">
                                         Edit
                                     </Link>
                                     <button className="font-medium text-red-600 hover:underline" onClick={()=>delRecord(`${crud.id}`)}>
                                         Delete
                                     </button>
                                 </Table.Cell>
                             </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </div>
        </div>
        
    </div>
    )
}

const mapStateToProps = state => (
    {
   
        cruds: state.crudReducer.crud
    }
)

export default connect(mapStateToProps)(Home)