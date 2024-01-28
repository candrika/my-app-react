import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    Card,
    Button,
    Checkbox,
    FileInput,
    Label,
    Radio,
    RangeSlider,
    Select,
    Textarea,
    TextInput,
    ToggleSwitch,
} from 'flowbite-react';

import {add} from '../../store/actions/crudAction'

const Add = () =>{
    
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const dispatch = useDispatch()

    const addProduct = (e)=>{
        e.preventDefault();

        const data={
            id:2,
            product_name:name,
            color:color,
            category:category,
            price:price
        }

        console.log(data)
        
        dispatch(add(data))
    }

    return(
        <div className="container mx-auto mt-32" onSubmit={addProduct}>
            <br/>
            <Card className="max-w-md">
                <h5 class="divide-x-2 text-2xl font-bold tracing-tight text-gray-500 border-b-2">Form Input</h5>
                <div className="mt-2">
                    <form className="flex max-w-md flex-col gap-3">
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="productname">Product Name</Label>
                            </div>
                            <TextInput id="productname" type="text" placeholder="Product Name" required onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="color">Color</Label>
                            </div>
                            <div className="flex item-center gap-2">
                                <div>
                                <Radio id="color" name="color" value="silver" onClick={(e)=>setColor(e.target.value)}/>&nbsp;&nbsp;
                                <Label htmlFor="silver">silver</Label>
                                </div>
                                <div>
                                <Radio id="color" name="color" value="black" onClick={(e)=>setColor(e.target.value)}/>&nbsp;&nbsp;
                                <Label htmlFor="black">Black</Label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="category">Category</Label>
                            </div>
                            <Textarea id="category" placeholder="Category" row={2} onChange={(e)=>setCategory(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="price">Price</Label>
                            </div>
                            <TextInput id="price" type="text" placeholder="$ 1999" required onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="mb-4 flex justify-end gap-3">
                            <div className="mr-3">
                                <Button  as={Link} to="/" type="button" size="md" gradientMonochrome="failure" value="back">Back</Button>{  }
                            </div>
                            <div>
                                <Button type="submit" size="md" gradientMonochrome="cyan" value="save">Save</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default Add