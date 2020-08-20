import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
<Link to={`/${props.href}`}>{props.text}</Link>
