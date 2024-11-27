import React from 'react';
import leaderboard from '../../data/leaderboard.json';
import { Link } from 'react-router-dom';
export default function Leaderboard_Details() {
    return (
        <p className="text-content">
              - The <span style={{color: '#0ea7ff'}}><b>% Resolved</b></span> metric refers to the percentage of Agent Company Tasks
              (<b>Total of {leaderboard.number_of_tasks}</b>)
              that were <i>resolved</i> by the model.
              <br />
              - <span style={{color: '#0ea7ff'}}><b>✅ Checked</b></span> indicates that we, the Agent Company team, received access to the system and
              were able to reproduce the patch generations.
              <br />
              - <span style={{color: '#0ea7ff'}}><b>🤠 Open</b></span> refers to submissions that have open-source code. This does <i>not</i>
              necessarily mean the underlying model is open-source.
              <br />
              - The leaderboard is updated once a week on <b>Monday</b>.
              <br />
              - If you would like to submit your model to the leaderboard, please check the <Link to="/submit">submission</Link> page.
        </p>
    );
}