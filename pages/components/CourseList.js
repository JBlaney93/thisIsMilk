import React, { useEffect } from 'react';

export default function CourseList({ courses }) {

    console.log('props', courses)

    return (
        <>
        <h1>Course list</h1>
        <h2>Title: {courses.name}</h2>
        <h3>Number: {courses.id}</h3>
        <p>Description: {courses.description}</p>

        <ul>
            <h4>Learning Objectives</h4>
            {courses.learningObjectives.map((learningObjective, index) => (
            <li key={index}>
                {learningObjective}
            </li>
            ))}
        </ul>


        <ul>
            <h4>Modules</h4>
            {courses.modules.map((module, index) => (
            <li key={index}>
                <p>module name: {module.name} module order: {module.order}</p>
                <p>
                    {module.activities.map((activity, index) => (
                        <p key={index}>
                            <p>name: {activity.name} (order:{activity.order})</p>
                            <p>order: {activity.order}</p>
                            <p>type: {activity.type}</p>
                            <p>completed? {activity.completed}</p>
                            <p>datetime: {activity.datetime}</p>
                        </p>
                    ))}
                </p>
            </li>
            ))}
        </ul> 


        </>
    )
}