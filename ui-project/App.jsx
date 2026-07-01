import { useState } from 'react';
import Box1 from './box1/box1';
import Button from './button/button';
import './slides/slides'
import Slides from './slides/slides';
import Title from './title/title';


function App (){
   return(
        <>
        <div className='upper-box'>
            <Button />
            <Title />
            </div>
    <div className='parent'>
         <div className='inner-box1'>
            <Box1 />
        </div>
        <div className='box2 snap-x snap-mandatory gap-6'>

        
        <Slides number={1} img="https://images.unsplash.com/photo-1777706889317-e66ae3578464?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" par="lorem8" btn="satisfied"/>
        <Slides number={2} img="https://images.unsplash.com/photo-1778949367469-d7cf14cbdf24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"  par="lorem8"  btn="underserved" />
        <Slides number={3} img="https://plus.unsplash.com/premium_photo-1781606557933-798c376d7994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfH xlbnwwfHx8fHw%3D"  par="lorem8" btn="satisfies" />
        <Slides number={4} img="https://images.unsplash.com/photo-1780132109828-895599ef6565?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfH xlbnwwfHx8fHw%3D"  par="lorem8" btn="satisfies" />
        <Slides number={5} img="https://images.unsplash.com/photo-1780396508935-94e234affc92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfH xlbnwwfHx8fHw%3D"  par="lorem8" btn="satisfies" />
        <Slides number={6} img="https://plus.unsplash.com/premium_photo-1781645282317-138adcff829b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfH xlbnwwfHx8fHw%3D"  par="lorem8" btn="satisfies" />
        <Slides number={7} img="https://images.unsplash.com/photo-1647085790439-067ae21d717a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfH xlbnwwfHx8fHw%3D"  par="lorem8" btn="satisfies" />
        <Slides number={8} img="https://images.unsplash.com/photo-1781004599772-6c48db93ca27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHRvd0paRnNrcEdnfH xlbnwwfHx8fHw%3D"  par="lorem8" btn="satisfies" />
        <Slides number={9} img="https://images.unsplash.com/photo-1780764895105-ea3037466236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fHRvd0paRnNrcEdnfH xlbnwwfHx8fHw%3D"  par="lorem8" btn="satisfies" />
     </div>
    </div>
    </>
    )
}

export default App;