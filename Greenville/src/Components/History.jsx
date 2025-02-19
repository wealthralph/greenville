export default function History(address,time,completed){
  if (completed) {
    return  <li>{address} ✅</li>;
  } <li>{address}  </li>

    return(
        <>
       <ul className="space-y-3">
            {history.map((item, index) => (
              <li key={index} className="p-3 border rounded-lg shadow">
                <p className="font-semibold">Address: {address}</p>
                <p>Time: {time}</p>
                <p>Tokens Earned: {item.tokens}</p>
              </li>
            ))}
          </ul>
        </>
    )
}