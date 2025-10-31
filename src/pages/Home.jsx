import Section from '../components/Section'
import TeamCard from '../components/TeamCard'
import '../styles/home.css'


export default function Home(){
const teams = [
{ name:'Atlanta Falcons', league:'NFL', image:'/images/falcons.jpg', blurb:'Rise Up! Explore the Birds of Prey page for roster notes, history, and more.' },
{ name:'Atlanta Braves', league:'MLB', image:'/images/braves.jpg', blurb:'Chop On. See season storylines and franchise milestones on Powerhouses.' },
{ name:'Atlanta Hawks', league:'NBA', image:'/images/hawks.jpg', blurb:'True to Atlanta. Dive into the Hawks’ biggest moments and era highlights.' },
{ name:'Atlanta United', league:'MLS', image:'/images/atlutd.jpg', blurb:'Five Stripes. Relive the cup run and the culture around the club.' }
]


return (
<div className="stack-lg">
<Section kicker="Hub" title="Meet the Teams">
<div className="grid grid-4">
{teams.map((t)=> (
<TeamCard key={t.name} {...t} />
))}
</div>
</Section>


<Section title="Recent Updates">
<div className="updates">
<article className="update">News item #1 (placeholder)</article>
<article className="update">News item #2 (placeholder)</article>
<article className="update">News item #3 (placeholder)</article>
</div>
</Section>
</div>
)
}