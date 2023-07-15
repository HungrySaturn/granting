import React from 'react';
import { Trash } from 'react-bootstrap-icons';
import  { EditButton } from './EditButton';
import { SubjectRemoveButton } from './SubjectRemoveButton'; // import the new component
import  { SubjectDeleteButton } from './SubjectDelete';
import { DeleteButton } from 'components/DeleteButton';



const GrantingSubjectTable = ({ subjects, actions }) => {
    
    const onclick = (subject) => {
        const payload = {subject: subject}
        actions.subjectAsyncRemove(payload)
    }
    return(
    <table style={{border: '1px solid black', width: '100%', textAlign: 'center'}}>
        <thead>
            <tr style={{backgroundColor: '#f0f0f0'}}>
                <th>Subject Name</th>
                <th>Semester Order</th>
                <th>Topic Name</th>
                <th>Credits</th>
                <th>Classification Type</th>
            </tr>
        </thead>
        <tbody>
            {subjects.map((subject, i) => (
                <React.Fragment key={i}>
                    <tr>
                    <td rowSpan={subject.semesters.length} style={{border: '1px solid black'}}>
                    {subject.name}
                    <EditButton subject={subject} actions={actions}/>
                    <SubjectRemoveButton subject={subject} actions={actions}/>
                    <DeleteButton onClick={() => onclick(subject)}><Trash /> SmažPředmět</DeleteButton><br/>
                    <SubjectDeleteButton subject={subject} actions={actions} />
                </td>
                        

                        <td style={{border: '1px solid black'}}>{subject.semesters[0].order}</td>
                        <td style={{border: '1px solid black'}}>{subject.semesters[0].topics.length > 0 ? subject.semesters[0].topics[0].name : 'N/A'}</td>
                        <td style={{border: '1px solid black'}}>{subject.semesters[0].credits}</td>
                        <td style={{border: '1px solid black'}}>{subject.semesters[0].classificationType.name}</td>
                        
                    </tr>
                    {subject.semesters.slice(1).map((semester, j) => (
                        <tr key={j}>
                            <td style={{border: '1px solid black'}}>{semester.order}</td>
                            <td style={{border: '1px solid black'}}>{semester.topics.length > 0 ? semester.topics[0].name : 'N/A'}</td>
                            <td style={{border: '1px solid black'}}>{semester.credits}</td>
                            <td style={{border: '1px solid black'}}>{semester.classificationType.name}</td>
                        </tr>
                    ))}
                </React.Fragment>
            ))}
        </tbody>
    </table>
)};



export default GrantingSubjectTable;
