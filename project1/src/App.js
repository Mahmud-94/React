
import Header, {msg} from './Header.js';
 import {data} from './News.js';

 import mylist from './List.js';

function App() {
  return (
    <div>

     <Header/>
     {msg}
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
     </p>
     <h3>{data.title}</h3>
     <p>{data.details}</p>

     <h3>All List</h3>
     <ul><ol>
 {mylist.map(function (item) {
 return (
 <li>

  {item.title}<br></br> {item.url}<br></br>{item.author}<br></br>{item.num_comments}<br></br>{item.points}<br></br>{item.objectID}

  </li>
);
 })}
 </ol>
 </ul>

     <footer>This is footer</footer>
     
    </div>

    
  );
}

export default App;
