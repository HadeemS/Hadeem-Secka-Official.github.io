import TeamCard from "../components/TeamCard";

const bios = [
  { name: "Hadeem", league: "Founder", image: "/images/hadeem.jpg", blurb: "USC • CIS major • Sports fan" },
  { name: "Teammate A", league: "Contributor", image: "/images/teammateA.jpg", blurb: "Bio text..." }
];

export default function About(){
  return (
    <div className="stack-lg">
      {/* ...your mission section... */}
      <section className="section">
        <h2 className="h2">Meet the Team</h2>
        <div className="grid grid-4">
          {bios.map(b => <TeamCard key={b.name} {...b} ctaText="Profile" />)}
        </div>
      </section>
    </div>
  );
}
