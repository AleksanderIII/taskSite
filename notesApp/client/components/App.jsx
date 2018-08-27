import React from 'react';
import  NoteEditor  from './NotesEditor.jsx';
import NotesGrid from './NotesGrid.jsx';
import Footer from './Footer.jsx';

class App extends React.Component{

    render(){
        return (
            <div className = "AppContainer">
              <NoteEditor /> 
              <NotesGrid />
              <Footer /> 
            </div>
        )
    }
}

export default App