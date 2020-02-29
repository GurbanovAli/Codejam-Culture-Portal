import React, {Component, useState } from 'react'


import Layout from '../components/layout';

import './Worklog.css'


const Toggle = () => {
   const worklogData = [{
      task: '18.02.20',
      name: 'Dmitry Legankov',
      functionality: 'Create maket in figma and trello',
      time: '2h'
   }, {
      task: '18.02.20',
      name: 'Nikolay Shebeko',
      functionality: 'Create maket in figma',
      time: '3h'
   }, {
      task: '18.02.20',
      name: 'Maksim Kryshneu',
      functionality: 'Create maket in figma',
      time: '2h'
   }, {
      task: '18.02.20',
      name: 'Nikolay Shebeko',
      functionality: 'Design UI',
      time: '',
   }, {
      task: '19.02.20',
      name: 'Maksim Kryshneu',
      functionality: `Author's page contains timeline`,
      time: '2h',
   }, {
      task: '19.02.20',
      name: 'Maksim Kryshneu',
      functionality: `Author's page contains video overlay`,
      time: '1h',
   }, {
      value: '20 .02.20',
      name: 'Vladimir Zhdanov',
      functionality: 'page with a list of authors',
      time: '5h',
   }, {
      task: '21.02.20',
      name: 'Ali Gurbanov',
      functionality: `Author's page contains photo gallery`,
      time: '2h',
   }, {
      task: '21.02.20',
      name: 'Maksim Kryshneu',
      functionality: `Author's page contains map`,
      time: '2h',
   }, {
      task: '21.02.20',
      name: 'Dmitry Legankov',
      functionality: 'Data file',
      time: '6h',
   }, {
      task: '22.02.20',
      name: 'Vladimir Zhdanov',
      functionality: 'Data file',
      time: '3h',
   }, {
      task: '22.02.20',
      name: 'Maksim Kryshneu',
      functionality: 'Data file',
      time: '2h',
   }, {
      task: '22.02.20',
      name: 'Ali Gurbanov',
      functionality: 'Developer page',
      time: '3h',
   }, {
      task: '22.02.20',
      name: 'Ali Gurbanov',
      functionality: 'Project is made using gatsbyjs',
      time: '1h'
   }, {
      task: '22.02.20',
      name: 'Vladimir Zhdanov',
      functionality: 'Project is made using gatsbyjs',
      time: '1h'
   }, {
      task: '27.02.20',
      name: 'Vladimir Zhdanov',
      functionality: 'Connecting Languages',
      time: '3h'
   }, {
      task: '27.02.20',
      name: 'Maksim Kryshneu',
      functionality: 'styles in all page and Styleguide page',
      time: '4h'
   }, {
      task: '27.02.20',
      name: 'Ali Gurbanov',
      functionality: 'Worklog page',
      time: '2h'
   }, {
      task: '',
      name: '',
      functionality: '',
      time: ''
   }, {
      task: '',
      name: '',
      functionality: '',
      time: ''
   }];
  const [isToggledOn, setToggle] = useState(false)
  return (
     <>
     <div className='toggle'>
    <button className="worklogButton" onClick={() => setToggle(!isToggledOn)}>
     {isToggledOn ? 'ON' : 'OFF'}</button>
     {isToggledOn &&  <table className='table' responsive>
               <tr>
                <th>Task</th>
                <th>Name</th>
                <th>Functionality</th>
                <th>Time</th>
                </tr>
                {worklogData.map((newWorklog)=>(
                  <tr>
                  <td>{newWorklog.task}</td>
                  <td>{newWorklog.name}</td>
                  <td>{newWorklog.functionality}</td>
                  <td>{newWorklog.time}</td>
                  </tr>
                ))}
            </table>}
            </div>
            </>
)}


const ToggleTwo = () => {
  const [isToggledOn, setToggle] = useState(false)
     const taskInfoData = [{
          value: `10   Main page + page with a list of authors + author's page (only pages with content without widgets)`
       }, {
          value: '10    Page with team members + page with worklog'
       }, {
          value: '10    Page with list of authors contains search widget'
       }, {
          value: '20    Portal has two languages'
       }, {
          value: '20    Portal has page with styleguide'
       }, {
          value: '10    Mobile version is okey'
       }, {
          value: '10    Ipad/tablet version is okey'
       }, {
          value: `10   Author's page contains timeline`
       }, {
          value: `10   Author's page contains video overlay`
       }, {
          value: `20   Author's page contains photo gallery`
       }, {
          value: `10   Author's page contains map (geowidget)`
       }, {
          value: 'from 0 to 20 Design (typography, icons, colors, links + buttons + input are styled)'
       }, {
          value: '20    Material-ui / bootstrap is used'
       }, {
          value: '10    Portal has third language'
       }, {
          value: '10    Confidence of the project presentation'
       }, {
          value: '10    Project is made using gatsbyjs'
       }, {
          value: '10    Contentful / netlify cms is used for content management'
       }, {
          value: '20    Animations / special effects like paralax'
       }, {
          value: 'up to 20 Outstanding design'
       }, {
          value: '20    Storybook/styleguidist/other react styleguide tool usage for the page with styles'
       }]

       return (

          <div className='toggle'>
         <button className="worklogButton" onClick={() => setToggle(!isToggledOn)}>
          {isToggledOn ? 'ON' : 'OFF'}</button>
          {isToggledOn &&  <table className='table' responsive>
          <tr>
            <th>Is maked</th>
            <th>Task name</th>
          </tr>
          {taskInfoData.map((newInfo)=>(
              <tr>
              <td><input type='checkbox' checked/></td>
              <td>{newInfo.value}</td>
              </tr>
          ))}
       </table>}
    </div>
    );
}

function ToggleThree() {
  const [isToggledOn, setToggle] = useState(false)
   return (
      <div className='toggle'>
     <button className="worklogButton" onClick={() => setToggle(!isToggledOn)}>
      {isToggledOn ? 'ON' : 'OFF'}</button>
      {isToggledOn && <table className='table' responsive>
          <tr>
            <th> </th>
          </tr>
          <tr>
            <td>Using Gatsby</td>
          </tr>
          <tr>
            <td>Coordination</td>
          </tr>
          <tr>
            <td>Working with git repositories with team</td>
          </tr>
         </table>}
    </div>
    );
}

function Worklog() {
      return(
         <Layout>
            <Toggle />
            <ToggleTwo />
            <ToggleThree />
         </Layout>
      )
}

export default Worklog
