        // const heading=document.createElement("h1");
        // heading.innerHTML="Hello World from Java Script!";
        // const root=document.getElementById("root");
        // root.appendChild(heading);
        


//          <div class="parent">
//     <div class="child">
//         <h1>I am a tag</h1>
{/* <h1>I am a tag</h1> */}
//     </div>
{/* <div class="child"> */}
//         <h1>I am a tag</h1>
{/* <h1>I am a tag</h1> */}
//     </div>
// </div> 
        const answer=React.createElement("div",{id:"parent"},

        React.createElement("div",{id:"child"}, [
        React.createElement("h1",{},"I am a Tag"),
        React.createElement("h2",{},"I am a Tag")
         ]),
         React.createElement("div",{id:"child"}, [
        React.createElement("h1",{},"I am a Tag"),
        React.createElement("h2",{},"I am a Tag")        
        ])
         )



        const heading=React.createElement("h1",{id:"heading", xyz:"abc"},"Hello World From React World!!")
        const root= ReactDOM.createRoot(document.getElementById("root"));
        root.render(answer);
        console.log(parent)