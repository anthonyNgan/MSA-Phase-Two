import React from 'react';
import Model from 'react-body-highlighter';
import "../../App.css";

const Healing = () => {

    const data = [
        {
          name: "Bench Press",
          muscles: ["chest", "triceps", "front-deltoids"]
        },
        { name: "Tricep Pushdown", muscles: ["triceps"] }
      ];
    
      const handleClick = (exercise: any) => {
        const {
          muscle,
          stats: { exercises, frequency }
        } = exercise;
        alert(
          `You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(
            exercises
          )}`
        );
      };
    
      return (
        <div className="Healing">
          <Model data={data} onClick={handleClick} />
          <Model
            type="posterior"
            data={data}
            highlightedColors={["#e65a5a", "#db2f2f"]}
            onClick={handleClick}
          />
        </div>
      );
}

export default Healing;