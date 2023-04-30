import React, { useEffect } from 'react';
import styles from '@/styles/Home.module.css'

export default function CourseList({ courses }) {

    // console.log('props', courses)

    return (
        <>
        <h1>Course list</h1>
        <h2>Title: {courses.name}</h2>
        <h3>Number: {courses.id}</h3>
        <p>Description: {courses.description}</p>

        <ul>
            <h4>Learning Objectives</h4>
            {courses.learningObjectives?.map((learningObjective, index) => (
            <li key={index}>
                {learningObjective}
            </li>
            ))}
        </ul>


        <ul>
            <h4>Modules</h4>
            {courses.modules?.sort((a,b) => a.order - b.order).map((module, index) => (
            
            

            <li key={index} className={styles.modulesList}>
                {module.activities.length > 0 && (
                    <div>
                    <p>module name: {module.name} module order: {module.order}</p>
                   

                        <h4>activity list for this module</h4>
                        {module.activities?.sort((a,b) => a.order - b.order).map((activity, index) => (
                            <li key={index} className={styles.activityList}>
                                <li>name: {activity.name} (order:{activity.order})</li>
                                {/* <li>order: {activity.order}</li> */}
                                <li>type: {activity.type}</li>
                                <li>{activity.completed ? (<p>complete</p>) : (<p>not complete</p>)}</li>
                                {activity.datetime && (
                                    <li>date: {new Date(activity.datetime).toString()} </li>
                                )}
                            </li>
                        ))}
                    </div>
                    )}
            </li>
            ))}
        </ul> 


        </>
    )
}