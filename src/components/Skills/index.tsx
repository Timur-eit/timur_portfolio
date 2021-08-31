import './style.scss';
import React, { Fragment } from 'react';

interface ISkillsProps {
    skillsList: string[];
}

function Skills(props: ISkillsProps) {
    const { skillsList } = props;

    return (
        <div className="skills">
            <h2>My hard skills</h2>
            <div className="skills__window">
                <div className="window__header">
                    <div className="window_control-panel">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="window__content">
                    <pre>
                        <code>
                            <span>&lt;ul&gt;</span>
                            <br />
                            {skillsList.map((item) => {
                                return (
                                    <Fragment key={item}>
                                        &nbsp;&nbsp;<span>&lt;li&gt;</span>
                                        {item}
                                        <span>&lt;/li&gt;</span>
                                        <br />
                                    </Fragment>
                                );
                            })}
                            <span>&lt;/ul&gt;</span>
                            <br />
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}

export default Skills;
