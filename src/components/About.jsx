import React from 'react';

function About() {
    return (
        <div className="content-wrapper">
          <div className="content-box">
            <h2 className="text-title">About</h2>
            <img src="teaser.png" style={{width: '80%', margin: 'auto', display: 'block'}}/>
            <p className="text-content">
              Agent company is a dataset that tests an agents ability to complete daily tasks. The dataset collects 2,294 Issue-Pull Request
              pairs from 12 popular Python repositories. Evaluation is performed by unit test verification using post-PR behavior as the reference solution.
              Read more about SWE-bench in our <a href="https://arxiv.org/abs/2310.06770" target="_blank">paper</a>!
            </p>
            <h3 className="text-title" style={{marginBottom: '0.5em'}}>Citation</h3>
            <pre id="citation"><code>{`@inproceedings{
                jimenez2024swebench,
                title={{SWE}-bench: Can Language Models Resolve Real-world Github Issues?},
                author={Carlos E Jimenez and John Yang and Alexander Wettig and Shunyu Yao and Kexin Pei and Ofir Press and Karthik R Narasimhan},
                booktitle={The Twelfth International Conference on Learning Representations},
                year={2024},
                url={https://openreview.net/forum?id=VTF8yNQM66}
            }`}</code></pre>
            <p className="text-content" style={{marginBottom: '0'}}>
              <b>Disclaimer:</b> TheAgentCompany benchmark is for research purposes only. Models
              trained and evaluated on TheAgentCompany can produce unexpected results.
              We are not responsible for any damages caused by the use of
              TheAgentCompany, including but not limited to, any loss of profit, data,
              or use of data.
            </p>
            {/* <p style={{lineHeight: '1.6667em'}}>
              <b>Usage:</b> If you would like to use this website template for your
              own leaderboard, please send Carlos & John an email requesting permission.
              If granted, please make sure to acknowledge the TheAgentCompany team and link to
              this leaderboard on the home page of the website.
            </p> */}
          </div>
        </div>
    );
}

export default About;