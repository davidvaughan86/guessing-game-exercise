import React from 'react'


export default function PickANum({onChange}){
    
        console.log(event.target.value);

    return(
        <h1> pick a number between 1 and 10
            <div>
                <form>
                    <input type = 'radio' 
                    name='qnum'
                    id='qnum' 
                    value="1"
                    onChange={(e) => onChange(e.target.value)}
                    /> 
                    1
                    <input type = 'radio' 
                    name='qnum'
                    id='qnum' 
                    value="2"
                    onChange={(e) => this.choice(e)}
                    /> 
                    2
                    <input type = 'radio' 
                    name='qnum' 
                    id='qnum' 
                    value="3"
                    onChange={(e) => this.choice(e)}
                    /> 
                    3
                    <input type = 'radio' 
                    name='qnum' 
                    id='qnum' 
                    value="4"
                    onChange={(e) => this.choice(e)}
                    /> 
                    4
                    <input type = 'radio' 
                    name='qnum' 
                    id='qnum' 
                    value="5"
                    onChange={(e) => this.choice(e)}
                    /> 
                    5
                    <input type = 'radio' 
                    name='qnum' 
                    id='qnum' 
                    value="6"
                    onChange={(e) => this.choice(e)}
                    /> 
                    6
                    <input type = 'radio' 
                    name='qnum' 
                    id='qnum' 
                    value="7"
                    onChange={(e) => this.choice(e)}
                    /> 
                    7
                    <input type = 'radio' 
                    name='qnum' 
                    id='qnum' 
                    value="8"
                    onChange={(e) => this.choice(e)}
                    /> 
                    8
                    <input type = 'radio' 
                    name='qnum' 
                    id='qnum' 
                    value="9"
                    onChange={(e) => this.choice(e)}
                    /> 
                    9
                    <input type = 'radio' 
                    name='qnum' 
                    id='qnum' 
                    value="10"
                    onChange={(e) => this.choice(e)}
                    /> 
                    10
                </form>
                
            
            </div>
            
            
        </h1>
    
    )   

}

// function displayNums() {
        
        

//         return(
//             <div>
//                 <input type = 'radio' 
//                 name='qnum' 
//                 value="1"
//                 /> 
//                 1
                
//             </div>
//         )
    
//     }
//     displayNums();