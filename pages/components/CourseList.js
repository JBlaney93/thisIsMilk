import React, { useEffect } from 'react';
import styles from '@/styles/Home.module.css'

export default function CourseList({ courses }) {

    // console.log('props', courses)

    // const showIncomplete = () => {
    //     // let incompleteActivities = [];
    //     for (let i = 0; i < courses.modules.length; i++) {
    //         const module = courses.modules[i]
    //         let incompleteActivities = [];
    //             for (let j = 0; j < module.activities.length; j++) {
    //                 const activity = module.activities[j];
    //                 if (!activity.completed) {
    //                     incompleteActivities.push(activity)
    //                 }
    //             }
    //     }
    //     return(<div>{incompleteActivities}</div>)
    // }


    const [showAllIncomplete, setShowAllIncomplete] = React.useState(false);

    const showAllIncompleteModules = () => {
        // setShowAllIncomplete(true)
    }
    

    return (
        <div className={styles.pagewrapper}>
        <h1>Course Information</h1>
        <h2>{courses.name} ({courses.id})</h2>

        <div className={styles.description}>
        <article>{courses.description}</article>
            <ul>
                <h3>Learning Objectives</h3>
                {courses.learningObjectives?.map((learningObjective, index) => (
                <li key={index}>
                    {learningObjective}
                </li>
                ))}
            </ul>
        </div>


        <ul>
            <h3>Modules</h3>
            <button onClick={showAllIncompleteModules}>Show All Incomplete Modules</button>

            {courses.modules?.sort((a,b) => a.order - b.order).map((module, index) => (
            
            <li key={index} className={styles.modulesList}>
                {module.activities.length > 0 && (
                    <div>
                    <h4 className={styles.moduleName}>Module {module.order} - {module.name} </h4>
                   
                        <h4 className={styles.activityListTitle}>Activity List:</h4>
                        {module.activities?.sort((a,b) => a.order - b.order).map((activity, index) => (
                            <li key={index} className={styles.activityList}>
                                <li>{activity.order}: {activity.name} </li>
                                <li>Activity Type: {activity.type}</li>
                                {activity.datetime && (
                                    <li>{new Date(activity.datetime).toString()} </li>
                                )}
                                <li>{activity.completed ? 
                                    (<p className={styles.complete}>COMPLETE</p>) 
                                    : 
                                    (<p className={styles.incomplete}>INCOMPLETE</p>)}</li>
                            </li>
                        ))}
                    </div>
                )}
            </li>
            ))}

            {/* {courses.modules?.sort((a,b) => a.order - b.order).map((module, index) => (
            
            <li key={index} className={styles.modulesList}>
                {module.activities.length > 0 && (
                    <div>
                    <p>module name: {module.name} module order: {module.order}</p>
                   
                        <h4>activity list for this module</h4>
                        {module.activities
                        ?.filter(activity => !activity.completed)
                        .sort((a,b) => a.order - b.order)
                        .map((activity, index) => (
                            <li key={index} className={styles.activityList}>
                                <li>name: {activity.name} (order:{activity.order})</li>
                                <li>type: {activity.type}</li>
                                <li>{activity.completed ? 
                                    (<p className={styles.complete}>COMPLETE</p>) 
                                    : 
                                    (<p className={styles.incomplete}>INCOMPLETE</p>)}</li>
                                {activity.datetime && (
                                    <li>date: {new Date(activity.datetime).toString()} </li>
                                )}
                            </li>
                        ))}
                    </div>
                )}
            </li>
            ))} */}

        </ul> 


        </div>
    )
}