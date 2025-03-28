import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Card />
	</React.StrictMode>
)

function Card() {
	return (
		<figure className='card'>
			<Avatar path='logo512.png' alt='React Logo' />
			<CardBody />
		</figure>
	)
}

function Avatar(props) {
	console.log(props)
	return <img src={props.path} alt={props.alt} className='avatar'></img>
}

function CardBody() {
	return (
		<div className='data'>
			<Fullname name='Paweł Woźniak' />
			<Biography />
			<Skills />
		</div>
	)
}

function Fullname(props) {
	return <h1>{props.name}</h1>
}

function Biography() {
	return (
		<p>
			I am a novice programmer and computer science student who is actively developing my skills in creating websites
			and web applications. I am currently learning front-end technologies, including React.js, and building my
			portfolio of projects.
		</p>
	)
}

function Skills() {
	return (
		<ul className='skill-list'>
			<Skill skill='HTML + CSS' emoji='💪' bgColor='lime' />
			<Skill skill='SASS' emoji='💪' bgColor='purple' />
			<Skill skill='JavaScript' emoji='💪' bgColor='red' />
			<Skill skill='GIT & Github' emoji='😊' bgColor='yellow' />
			<Skill skill='WEB DESIGN' emoji='😊' bgColor='lightseagreen' />
			<Skill skill='React' emoji='📘' bgColor='deeppink' />
		</ul>
	)
}

function Skill(props) {
	const color = {
		backgroundColor: props.bgColor,
	}
	return (
		<li style={color} className='skill'>
			{props.skill} {props.emoji}
		</li>
	)
}
