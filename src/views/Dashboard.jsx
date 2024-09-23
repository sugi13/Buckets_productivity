
export default function Dashboard() {

  let LocalData = JSON.parse(localStorage.getItem('DoerName'));

  return (
    <div>
      <p>{LocalData} You're Logged In!</p>
    </div>
  )
}

