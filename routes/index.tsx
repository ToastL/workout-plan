import { asset, Head } from "$fresh/runtime.ts";
import plan from "../static/etien.json" assert { type: "json" };

export default function Home() {
  const date = new Date()

  const yearsInDays = (date.getFullYear()-2000)*365
  const days = Math.ceil((date - new Date(date.getFullYear(),0,1))/ 86400000)

  const daysSince2000 = yearsInDays+days+3

  const today = plan.days[daysSince2000 % plan.days.length]
  const tomorrow = plan.days[(daysSince2000+1) % plan.days.length]
  const todaysWorkout = (today != "rest") ? plan.workouts[daysSince2000 % plan.days.length] : []

  const currClass = (today == "rest") ? "wrong" : "correct"

  const planning: Array<preact.JSX.Element> = [];

  todaysWorkout.forEach((workout: string) => {
    planning.push(<li>{workout}</li>)
  });

  return (
    <>
      <Head>
        <title>Workout plan</title>
        <link rel="stylesheet" href={asset("styles.css")} />
      </Head>
      <div className={"main " + currClass}>
        <div className="container mainContainer">
          <h1>{today}</h1>
          {todaysWorkout.length != 0 &&
            <ul>{planning}</ul>
          }
        </div>
        <div className="container">
          <h3>Tomorrow: {tomorrow}</h3>
        </div>
      </div>
    </>
  );
}
