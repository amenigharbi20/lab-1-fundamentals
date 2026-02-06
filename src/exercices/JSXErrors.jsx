function BadComponent1() {
 return (
    <div>
       <h1>Hello</h1>
 <p>This is broken</p> 
    </div>

 )
}

function BadComponent2() {
 const isTrue = true
 return (
 <div>
 <p>{isTrue ? 'Yes' : 'No'}</p>
 </div>
 )
}

function BadComponent3() {
 return (
 <div className="container">
    <img src="cat.jpg" alt="A cat" />
 <p>A paragraph</p>
 </div>
 )
}