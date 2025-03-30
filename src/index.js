import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

const personalData = {
	fullname: 'Paweł Woźniak',
	biography: `I am a novice programmer and computer science student who is actively developing my skills in creating websites
				and web applications. I am currently learning front-end technologies, including React.js, and building my
				portfolio of projects.`,
	skills: [
		{
			id: 1,
			skill: 'HTML + CSS',
			level: 'advanced',
			cssStyles: {
				backgroundColor: '#00FF00',
			},
		},
		{
			id: 2,
			skill: 'SASS',
			level: 'advanced',
			cssStyles: {
				backgroundColor: '#800080',
			},
		},
		{
			id: 3,
			skill: 'JavaScript',
			level: 'intermediate',
			cssStyles: {
				backgroundColor: '#FF0000',
			},
		},
		{
			id: 4,
			skill: 'GIT & Github',
			level: 'advanced',
			cssStyles: {
				backgroundColor: '#FFFF00',
			},
		},
		{
			id: 5,
			skill: 'WEB DESIGN',
			level: 'advanced',
			cssStyles: {
				backgroundColor: '#20B2AA',
			},
		},
		{
			id: 6,
			skill: 'React',
			level: 'begginer',
			cssStyles: {
				backgroundColor: '#FF1493',
			},
		},
	],
}
function App() {
	return (
		<div className='container'>
			<figure className='card'>
				<Avatar path={'/logo512.png'} altText={'React LOGO'} />
				<Overview data={personalData} />
			</figure>
		</div>
	)
}

function Avatar({ path, altText }) {
	return <img className='avatar' src={path} alt={altText}></img>
}

function Overview({ data }) {
	return (
		<div className='data'>
			<h1>{data.fullname}</h1>
			<p>{data.biography}</p>
			<SkillList skills={data.skills} />
		</div>
	)
}

function SkillList({ skills }) {
	return (
		<ul className='skill-list'>
			{skills.map(skill => (
				<Skill data={skill} key={skill.id} />
			))}
		</ul>
	)
}

function Skill({ data }) {
	return (
		<li className='skill' style={data.cssStyles}>
			{data.skill} {data.level === 'advanced' && '💪'} {data.level === 'intermediate' && '😊'}
			{data.level === 'begginer' && '👶'}
		</li>
	)
}
