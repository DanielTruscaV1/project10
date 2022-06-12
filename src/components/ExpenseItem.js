import React from "react";
import {TiDelete} from "react-icons/ti";

const ExpenseItem = (props) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span>${props.cost}</span>
				<TiDelete size='1.5em'/>
			</div>
		</li>
    );
}

export default ExpenseItem;