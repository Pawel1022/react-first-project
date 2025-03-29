import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const skills = [
	{
		id: 1,
		skill: 'HTML + CSS',
		emoji: '💪',
		bgColor: 'lime',
	},
	{
		id: 2,
		skill: 'SASS',
		emoji: '💪',
		bgColor: 'purple',
	},
	{
		id: 3,
		skill: 'JavaScript',
		emoji: '💪',
		bgColor: 'red',
	},
	{
		id: 4,
		skill: 'GIT & Github',
		emoji: '😊',
		bgColor: 'yellow',
	},
	{
		id: 5,
		skill: 'WEB DESIGN',
		emoji: '😊',
		bgColor: 'lightseagreen',
	},
	{
		id: 6,
		skill: 'React',
		emoji: '📘',
		bgColor: 'deeppink',
	},
]

function App() {
	return (
		<figure className='card'>
			<Avatar path='logo512.png' title='React LOGO' />
			<Overview />
		</figure>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

function Avatar(props) {
	return <img alt={props.title} src={props.path} className='avatar'></img>
}

function Overview() {
	return (
		<div className='data'>
			<h1>Paweł Woźniak</h1>
			<p>
				I am a novice programmer and computer science student who is actively developing my skills in creating websites
				and web applications. I am currently learning front-end technologies, including React.js, and building my
				portfolio of projects.
			</p>
			<SkillList />
		</div>
	)
}

function SkillList() {
	return (
		<ul className='skill-list'>
			{skills.map(data => (
				<Skill skillObj={data} key={data.id} />
			))}
		</ul>
	)
}

function Skill(props) {
	const data = props.skillObj
	const dataStyle = { backgroundColor: data.bgColor }
	return (
		<li className='skill' style={dataStyle}>
			{data.skill} {data.emoji}
		</li>
	)
}
