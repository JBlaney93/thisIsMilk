import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function CourseList({ courses }) {
  const [showAllIncomplete, setShowAllIncomplete] = React.useState(false);

  const modules = showAllIncomplete
    ? courses.modules.map((module) => {
        const incompleteActivities = module.activities.filter(
          (activity) => !activity.completed
        );
        return {
          ...module,
          activities: incompleteActivities,
        };
      })
    : courses.modules;

  const showAllIncompleteModules = () => {
    let incompleteModules = courses.modules.map((module) => {
      const incompleteActivities = module.activities.filter(
        (activity) => !activity.completed
      );
      return {
        ...module,
        activities: incompleteActivities,
      };
    });
  };

  return (
    <div className={styles.pagewrapper}>
      <h1>Course Information</h1>
      <h2>
        {courses.name} ({courses.id})
      </h2>

      <div className={styles.description}>
        <article>{courses.description}</article>
        <ul>
          <h3>Learning Objectives</h3>
          {courses.learningObjectives?.map((learningObjective, index) => (
            <li key={index}>{learningObjective}</li>
          ))}
        </ul>
      </div>

      <ul>
        <div className={styles.modulesHeader}>
          <h2>Modules</h2>
          <button
            onClick={() => setShowAllIncomplete(!showAllIncomplete)}
            className={styles.modulesButton}
          >
            SHOW INCOMPLETE MODULES
          </button>
        </div>

        {modules
          ?.sort((a, b) => a.order - b.order)
          .map((module, index) => (
            <>
              {module.activities.length > 0 && (
                <li key={index} className={styles.modulesList}>
                  <div>
                    <h4 className={styles.moduleName}>
                      Module {module.order} - {module.name}{" "}
                    </h4>

                    <h4 className={styles.activityListTitle}>Activity List:</h4>
                    {module.activities
                      ?.sort((a, b) => a.order - b.order)
                      .map((activity, index) => (
                        <li key={index} className={styles.activityList}>
                          <li>
                            {activity.order}: {activity.name}{" "}
                          </li>
                          <li>Activity Type: {activity.type}</li>
                          {activity.datetime && (
                            <li>{new Date(activity.datetime).toString()} </li>
                          )}
                          <li>
                            {activity.completed ? (
                              <p className={styles.complete}>COMPLETE</p>
                            ) : (
                              <p className={styles.incomplete}>INCOMPLETE</p>
                            )}
                          </li>
                        </li>
                      ))}
                  </div>
                </li>
              )}
            </>
          ))}
      </ul>
    </div>
  );
}
