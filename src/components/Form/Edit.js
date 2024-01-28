import React from "react";
import { Link } from "react-router-dom";
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

import { useState,useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useParams } from "react-router-dom";

const Edit =()=>{

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const cruds = useSelector(state => state.crudReducer.crud)
    const { id } = useParams();
    console.log(id)
    const data = cruds.filter(crud=>crud.id==id)

    useEffect(()=>{

        setName(data[0].product_name)
        setColor(data[0].color)
        setCategory(data[0].category)
        setPrice(data[0].price)

        console.log(cruds, data)
    },[])

    return(
        <div className="container mx-auto mt-32">
            <br/>
            <Card className="max-w-md">
                <h5 class="divide-x-2 text-2xl font-bold tracing-tight text-gray-500 border-b-2">Form Edit</h5>
                <div className="mt-2">
                    <form className="flex max-w-md flex-col gap-3">
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="productname">Product Name</Label>
                            </div>
                            <TextInput id="productname" type="text" placeholder="Product Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="color">Color</Label>
                            </div>
                            <div className="flex item-center gap-2">
                                <div>
                                <Radio id="color" name="color" value="silver" checked={color=="silver" ? "checked":null} onChange={(e)=>setColor(e.target.value)}/>&nbsp;&nbsp;
                                <Label htmlFor="silver">silver</Label>
                                </div>
                                <div>
                                <Radio id="color" name="color" value="black" checked={color=="black" ? "checked":null} onChange={(e)=>setColor(e.target.value)}/>&nbsp;&nbsp;
                                <Label htmlFor="black">Black</Label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="category">Category</Label>
                            </div>
                            <Textarea id="category" placeholder="Category" row={2} value={category} onChange={(e)=>setCategory(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="price">Price</Label>
                            </div>
                            <TextInput id="price" type="text" placeholder="$ 1999" required value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="mb-4 flex justify-end gap-3">
                            <div className="mr-3">
                                <Button type="button" size="md" gradientMonochrome="failure" value="back" as={Link} to="/">Back</Button>{  }
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

export  default Edit;