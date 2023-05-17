import {useState} from 'react';
import '../components/style.css'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

//Rendering lists
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
]



function MyButton() {

  const [ count, setCount ] = useState(0);

  function increment() {
    // alert('You clicked me!'); //Responding to events
    setCount(count+1);
  }

  function decrement(){
    setCount(count-1);
  }
  return (
    <div><button className = "button" onClick={increment}>
      Increment </button>
      <button className = "button" >
       {count}</button>
      
       <button className='button' onClick={decrement}> Decrease </button>
       
       </div>
    

     
  );
}


export default function First(){

  const listItems = products.map (products =>
    <li key={products.id}
    style={{color: products.isFruit ? 'magenta' : 'darkgreen'}}>
      {products.title}
    </li>
    );

  return(
    <div>
      <h1> Hi!</h1>
      <MyButton />
      <h1>{user.name}</h1>
      <img className="avatar"
      src={user.imageUrl}
      alt={'Photo of'+user.name}
      style = {{
        width: user.imageSize,
        height: user.imageSize
      }}
      />
      
      <ul>{listItems}</ul>

     
      
    </div>
  )
};
