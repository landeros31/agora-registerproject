import React, { useEffect } from 'react'
import *as controllerProject from '../controllerProject';



export const GetProject = () => {

    const listProject = async () => {
        try {
          const res = await controllerProject.listProjects();
          const data = await res.json();
       // setProjects(data.projects);
          console.log(data)
        } catch (error) {
          console.log(error);
        }
        
      };
      useEffect(() => {
        listProject();
      }, []);



    return (
        <div>
            <h1>Vista de Proyectos</h1> 
            <hr/>

        </div>
    )
}
